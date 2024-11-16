import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

import Background from '../../../assets/img/Banner/Img-Landing-Page.png';
import BackgroundMobile from '../../../assets/img/Banner/Img-Landing-Page-Mobile.png';

const StyledBox = styled('div')(({ theme }) => ({
    alignSelf: 'center',
    width: '100%',
    marginTop: theme.spacing(8),
    borderRadius: (theme.cssVariables || theme).shape.borderRadius,
    outline: '6px solid',
    outlineColor: 'hsla(220, 25%, 80%, 0.2)',
    border: '1px solid',
    borderColor: (theme.cssVariables || theme).palette.grey[200],
    boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
    backgroundImage: `url(${Background.src})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}));

export default function Hero() {

    function handleCheckout() {
        window.open("https://quizezz.web.app/quiz/PzKgMEoiV7NFMwYv2GqJCVT5GI12/LWxFAAtCFGipostvBpBJ", "_blank");
    };

    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                backgroundRepeat: 'no-repeat',

                backgroundImage:
                    'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
                ...theme.applyStyles('dark', {
                    backgroundImage:
                        'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
                }),
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack
                    spacing={2}
                    useFlexGap
                    sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'column' },
                            alignItems: 'center',
                            textAlign: 'center',
                            fontSize: { xs: 25, sm: 55 },
                        }}
                    >
                        Crie Funis de Conversão com Quizzes Interativos e
                        <Typography
                            component="span"
                            variant="h1"
                            sx={(theme) => ({
                                fontSize: 'inherit',
                                color: 'primary.main',
                                ...theme.applyStyles('dark', {
                                    color: 'primary.light',
                                }),
                            })}
                        >
                            Aumente Suas Vendas
                        </Typography>
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: 'text.secondary',
                            width: { sm: '100%', md: '80%' },
                        }}
                    >
                        Combine a gamificação dos quizzes com a personalização dos funis de vendas para capturar leads qualificados e aumentar seu faturamento. Crie interações engajantes que conduzem seu público até a conversão.
                    </Typography>
                    {/* <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={1}
                        useFlexGap
                        sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
                    >
                        <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
                            Email
                        </InputLabel>
                        <TextField
                            id="email-hero"
                            hiddenLabel
                            size="small"
                            variant="outlined"
                            aria-label="Enter your email address"
                            placeholder="Your email address"
                            fullWidth
                            slotProps={{
                                htmlInput: {
                                    autoComplete: 'off',
                                    'aria-label': 'Enter your email address',
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            sx={{ minWidth: 'fit-content' }}
                        >
                            Start now
                        </Button>
                    </Stack>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ textAlign: 'center' }}
                    >
                        By clicking &quot;Start now&quot; you agree to our&nbsp;
                        <Link href="#" color="primary">
                            Terms & Conditions
                        </Link>
                        .
                    </Typography> */}
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{
                            width: { xs: '100%', sm: '50%' },
                            height: 50,
                            fontWeight: 700,
                            fontSize: 17,
                        }}
                        onClick={handleCheckout}
                    >
                        Acessar Demo
                    </Button>
                </Stack>
                <StyledBox
                    sx={{
                        height: { xs: 220, sm: 500 },
                    }}
                    id="image" />
            </Container>
        </Box >
    );
}