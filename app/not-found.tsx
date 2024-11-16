'use client' // necessário para usar no lado do cliente

import Lottie from 'lottie-react-web';
import error from '../assets/lottie/404.json';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
    return (
        <Box
            width='100%'
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            paddingTop={10}
        >
            <Lottie
                options={{
                    animationData: error,
                    loop: true,
                    autoplay: true,
                }}
                style={{ width: '100%', maxWidth: '400px' }}
            />
            <Typography variant="h6">
                Página não encontrada
            </Typography>
            <Typography variant="body1" py={1} px={1}>
                A página que você está tentando acessar não existe ou foi movida.
            </Typography>
            <Link href="/" passHref>
                <Button variant="outlined" color="inherit">
                    Voltar para a página inicial
                </Button>
            </Link>
        </Box>
    );
}
