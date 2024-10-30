import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAuthController } from '../lib/useAuthController';
import { FormControl, FormLabel, TextField } from '@mui/material';

interface ForgotPasswordProps {
    open: boolean;
    handleClose: () => void;
}

export default function ForgotPassword({ open, handleClose }: ForgotPasswordProps) {
    const {
        emailErrorMessage,
        emailError,
        loadingResetPassword,
        resetPassword,
    } = useAuthController();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email'); // Obtém o email do formulário

        // Verifica se o email é válido antes de chamar resetPassword
        if (email) {
            await resetPassword({ email: email.toString() }); // Passa o email como string
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit, // Usa o manipulador de envio
                sx: { backgroundImage: 'none' },
            }}
        >
            <DialogTitle>Redefinir senha</DialogTitle>
            <DialogContent
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
            >
                <DialogContentText>
                    Insira o endereço de e-mail da sua conta e enviaremos um link para
                    redefinir sua senha.
                </DialogContentText>
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <TextField
                        error={emailError}
                        helperText={emailErrorMessage}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="exemplos@gmail.com"
                        autoComplete="email"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={emailError ? 'error' : 'primary'}
                        sx={{ ariaLabel: 'email' }}
                    />
                </FormControl>
            </DialogContent>
            <DialogActions sx={{ pb: 3, px: 3 }}>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button variant="contained" type="submit" disabled={loadingResetPassword}>
                    {loadingResetPassword ? 'Enviando...' : 'Continuar'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
