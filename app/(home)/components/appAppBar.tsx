import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../../shared-theme/colorModeIconDropdown';
import Sitemark from '../../components/sitemarkIcon'
import { useAuthStore } from '@/app/zustand/StoreAuth/store';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.cssVariables || theme).palette.divider,
    backgroundColor: theme.cssVariables
        ? `rgba(${theme.palette} / 0.4)`
        : alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme.cssVariables || theme).shadows[1],
    padding: '8px 12px',
}));

export default function AppAppBar() {
    const [open, setOpen] = React.useState(false);
    const [loadingSignIn, setLoadingSignIn] = React.useState<boolean>(false);
    const { userInfo } = useAuthStore();

    async function handleLogin() {
        setLoadingSignIn(true); // Inicia o estado de carregamento

        try {
            if (userInfo) {
                // Verifica se o usuário está logado e já na página correta
                if (window.location.pathname !== '/dashboard') {
                    // navigate('/dashboard');
                }
            } else {
                // Se não houver informações do usuário, redireciona para login
                if (window.location.pathname !== '/login') {
                    // navigate('/login');
                }
            }
        } catch (error) {
            console.error('Erro ao redirecionar:', error);
        } finally {
            setLoadingSignIn(false); // Finaliza o estado de carregamento
        }
    };

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    function handleCheckout() {
        window.open("https://pay.hotmart.com/V95399372J", "_blank");
    };

    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 'calc(var(--template-frame-height, 0px) + 28px)',
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                        <Sitemark />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={() => {
                                    document.getElementById('logoCollection')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                variant="text" color="info" size="small">
                                Plataformas
                            </Button>
                            <Button
                                onClick={() => {
                                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                variant="text" color="info" size="small">
                                Como funciona?
                            </Button>
                            <Button
                                onClick={() => {
                                    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                                Depoimentos
                            </Button>
                            <Button
                                onClick={() => {
                                    document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                variant="text" color="info" size="small">
                                Benefícios
                            </Button>
                            <Button
                                onClick={() => {
                                    document.getElementById('verticalLinearStepper')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                variant="text" color="info" size="small">
                                Para quem é?
                            </Button>
                            <Button
                                onClick={() => {
                                    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                                Planos
                            </Button>
                            <Button
                                onClick={() => {
                                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                                FAQ
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            onClick={handleLogin}

                            color="primary" variant="text" size="small">
                            Entrar
                        </Button>
                        <Button
                            onClick={handleCheckout}

                            color="primary" variant="contained" size="small">
                            Cadastra-se
                        </Button>
                        <ColorModeIconDropdown />
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        <ColorModeIconDropdown size="medium" />
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: 'var(--template-frame-height, 0px)',
                                },
                            }}
                        >
                            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>

                                <MenuItem>Plataformas</MenuItem>
                                <MenuItem>Como funciona?</MenuItem>
                                <MenuItem>Benefícios</MenuItem>
                                <MenuItem>Para quem é?</MenuItem>
                                <MenuItem>Depoimentos</MenuItem>
                                <MenuItem>Planos</MenuItem>
                                <MenuItem>FAQ</MenuItem>
                                <Divider sx={{ my: 3 }} />
                                <MenuItem>
                                    <Button
                                        onClick={handleCheckout}
                                        color="primary" variant="contained" fullWidth>
                                        Cadastra-se
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button
                                        onClick={handleLogin}
                                        color="primary" variant="outlined" fullWidth>
                                        Entrar
                                    </Button>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}