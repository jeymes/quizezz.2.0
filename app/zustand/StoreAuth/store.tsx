import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '../../../@types/types';

interface LoginState {
    userInfo: User | null;
    setUserInfo: (userInfo: User | null) => void;
    clearUserInfo: () => void; // Método para limpar as informações do usuário
}

// Use o middleware `persist` para persistir o estado no `localStorage`
export const useAuthStore = create<LoginState>()(
    persist(
        (set) => ({
            userInfo: null,
            setUserInfo: (userInfo: User) => {
                // Salvar data de expiração (7 dias a partir de agora)
                const expirationDate = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 dias em milissegundos
                localStorage.setItem('login-expiration', expirationDate.toString()); // Armazenar data de expiração
                set({ userInfo }); // Usar a função set para atualizar o estado
            },
            clearUserInfo: () => {
                set({ userInfo: null }); // Limpar userInfo
                localStorage.removeItem('login-expiration'); // Limpar data de expiração
            },
        }),
        {
            name: 'login-storage', // Nome da chave no localStorage
            storage: createJSONStorage(() => localStorage), // Uso correto do localStorage
            onRehydrateStorage: (state: any) => {
                const expirationDate = localStorage.getItem('login-expiration');
                if (expirationDate && Date.now() > Number(expirationDate)) {
                    // Limpar o armazenamento se a data de expiração tiver passado
                    state.set({ userInfo: null }); // Limpar userInfo
                    localStorage.removeItem('login-expiration'); // Limpar a data de expiração
                }
            },
        }
    )
);
