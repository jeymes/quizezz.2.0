import React, { useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { useAuthStore } from '../zustand/StoreAuth/store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useQuizStore } from '../zustand/StoreQuiz/store';
import { useQuizResponseStore } from '../zustand/StoreQuizResponse/store';
import { useNotification } from '../components/notificationProvider';
import { User } from '../@types/types';
import { setCookie } from 'nookies';

export function useAuthController() {
    const router = useRouter();
    const { setUserInfo, clearUserInfo, userInfo } = useAuthStore();
    const { setQuizData } = useQuizStore();
    const { setQuizDataResponse } = useQuizResponseStore();
    const { showNotification } = useNotification();
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [open, setOpen] = React.useState(false);
    const [loadingSignIn, setLoadingSignIn] = useState<boolean>(false);
    const [loadingResetPassword, setLoadingResetPassword] = useState<boolean>(false);
    // console.log(userInfo)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleCheckout() {
        window.open("https://pay.hotmart.com/V95399372J", "_blank");
    };

    const formDataToObject = (formData: FormData) => {
        const data: { [key: string]: string } = {};
        formData.forEach((value, key) => {
            data[key] = value.toString(); // Converte o valor para string
        });
        return data;
    };

    // Função para login com email e senha
    const signInWithEmail = async (data: User) => {
        setLoadingSignIn(true); // Iniciar carregamento para login

        try {
            // Fazer login usando o Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;

            // Obter token do usuário logado
            const token = await user.getIdToken();

            // Armazenar o token no cookie
            setCookie(null, 'session-token', token, {
                maxAge: 30 * 24 * 60 * 60, // 30 dias
                path: '/', // O cookie estará acessível em todo o domínio
            });

            // Buscar dados adicionais na coleção 'users' com base no uid do usuário
            const userDocRef = doc(db, 'users', user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();

                // Atualizar a loja Zustand com as informações do usuário
                setUserInfo({
                    uid: userData.id,
                    name: userData.name,
                    email: userData.email,
                    token: token, // Adicionando o token aqui
                });

                showNotification('Login bem-sucedido!', "success");
                router.push('/dashboard');
            } else {
                throw new Error('Usuário não encontrado no Firestore.');
            }

            return userCredential;
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            showNotification(getErrorMessage(error), 'error'); // Exibir mensagem de erro
        } finally {
            setLoadingSignIn(false); // Finalizar carregamento para login
        }
    };


    // Função para logout
    const signOutUser = async () => {
        try {
            await signOut(auth); // Desloga do Firebase
            clearUserInfo(); // Limpa as informações do usuário no Zustand
            setQuizData(null);
            setQuizDataResponse(null);

            // Limpa o cookie do token
            setCookie(null, 'session-token', '', {
                maxAge: -1, // Define o cookie para expirar imediatamente
                path: '/', // O cookie deve ser removido do domínio
            });

            router.push('/signin'); // Redireciona para a página de login
            showNotification('Logout realizado com sucesso!', 'success');
        } catch (error) {
            console.error('Erro ao deslogar:', error);
            showNotification('Erro ao deslogar. Tente novamente mais tarde.', 'error');
        }
    };

    const resetPassword = async (data: { email: string }) => {
        setLoadingResetPassword(true);
        try {
            if (!data.email) {
                return showNotification("Email é obrigatório.", 'error');
            }
            await sendPasswordResetEmail(auth, data.email);
            showNotification('Email de redefinição de senha enviado com sucesso!', 'success');
        } catch (error: any) {
            console.error("Erro ao enviar email de redefinição de senha:", error);
            showNotification(getErrorMessage(error), 'error');
        } finally {
            setLoadingResetPassword(false);
        }
    };

    // Função para obter uma mensagem de erro amigável
    const getErrorMessage = (error: any): string => {
        switch (error.code) {
            case 'auth/invalid-email':
                return 'O email fornecido é inválido.';
            case 'auth/user-not-found':
                return 'Nenhum usuário encontrado com esse email.';
            case 'auth/wrong-password':
                return 'Senha incorreta.';
            case 'auth/email-already-in-use':
                return 'O email já está em uso.';
            case 'auth/weak-password':
                return 'A senha deve ter pelo menos 6 caracteres.';
            case 'auth/operation-not-allowed':
                return 'Operação não permitida. Verifique as configurações do Firebase.';
            case 'auth/user-disabled':
                return 'Esta conta foi desativada. Entre em contato com o suporte.';
            case 'auth/too-many-requests':
                return 'Muitas tentativas de login. Tente novamente mais tarde.';
            case 'auth/account-exists-with-different-credential':
                return 'Já existe uma conta associada com esse email. Tente usar uma forma diferente de login.';
            case 'auth/invalid-credential':
                return 'Credenciais fornecidas são inválidas.';
            case 'auth/network-request-failed':
                return 'Falha na solicitação de rede. Verifique sua conexão com a internet e tente novamente.';
            default:
                return 'Ocorreu um erro inesperado. Tente novamente mais tarde.';
        }
    };

    const validateInputs = () => {
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Insira um endereço de e-mail válido.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 8) {
            setPasswordError(true);
            setPasswordErrorMessage('A senha deve ter pelo menos 8 caracteres.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    // Exemplo de validação em tempo real
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!value || !/\S+@\S+\.\S+/.test(value)) {
            setEmailError(true);
            setEmailErrorMessage('Insira um endereço de e-mail válido.');
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        // Verifica a validação antes de prosseguir
        if (!validateInputs()) return;

        const formData = new FormData(event.currentTarget);
        const data = formDataToObject(formData); // Converte FormData em objeto

        // Verifica se a ação é para login ou redefinição de senha
        if (data.password) {
            await signInWithEmail(data as User); // Passa o objeto com email e senha
        } else {
            await resetPassword({ email: data.email }); // Passa o objeto com email
        }
    };

    return {
        signInWithEmail,
        handleEmailChange,
        signOutUser,
        resetPassword,
        handleSubmit,
        handleClickOpen,
        handleClose,
        handleCheckout,
        open,
        loadingResetPassword,
        loadingSignIn,
        emailError,
        emailErrorMessage,
        passwordError,
        passwordErrorMessage,
        validateInputs
    };
}
