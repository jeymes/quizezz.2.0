import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import hotmart from '../../../assets/img/Plataformas/hotmart.png';
import braip from '../../../assets/img/Plataformas/braip.png';
import eduzz from '../../../assets/img/Plataformas/eduzz.png';
import kirvano from '../../../assets/img/Plataformas/kirvano.png';
import kiwify from '../../../assets/img/Plataformas/kiwify.png';
import monetizze from '../../../assets/img/Plataformas/monetizze.png';
import perfectpay from '../../../assets/img/Plataformas/perfectpay.png';
import ticto from '../../../assets/img/Plataformas/ticto.png';

const whiteLogos = [
    hotmart,
    braip,
    eduzz,
    kirvano,
    kiwify,
    monetizze,
    perfectpay,
    ticto
];

const logoStyle = {
    width: '100px',
    // height: '80px',
    margin: '0 15px',
};

export default function LogoCollection() {
    const theme = useTheme();

    return (
        <Box id="logoCollection" sx={{ py: 4 }}>
            <Typography
                component="p"
                variant="subtitle2"
                align="center"
                sx={{ color: 'text.secondary' }}
            >
                Venda com as melhores empresas
            </Typography>
            <Grid container sx={{ justifyContent: 'center', mt: 0.5 }}>
                {whiteLogos.map((logo, index) => (
                    <Grid item key={index}>
                        <img
                            src={logo.src}
                            alt={`logos${index + 1}`}
                            style={logoStyle}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}