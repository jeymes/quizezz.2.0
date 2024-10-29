import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/system';

import Foto1 from '../../../assets/img/Testimonials/1.png';
import Foto2 from '../../../assets/img/Testimonials/2.png';
import Foto3 from '../../../assets/img/Testimonials/3.png';

const userTestimonials = [
    {
        avatar: <Avatar alt="Lucas S." src={Foto1.src} />,
        name: 'Lucas S.',
        occupation: 'Gerente de Marketing',
        testimonial:
            "Os quizzes personalizados transformaram completamente a maneira como nos conectamos com nosso público. A interface intuitiva facilitou o processo, e agora conseguimos criar quizzes envolventes em minutos.",
    },
    {
        avatar: <Avatar alt="Ana P." src={Foto2.src} />,
        name: 'Ana P.',
        occupation: 'Coordenador de Comunicação',
        testimonial:
            "Criar quizzes nunca foi tão rápido e fácil! Com a plataforma, não precisamos de conhecimento técnico para desenvolver quizzes interativos que realmente atraem nossos clientes.",
    },
    {
        avatar: <Avatar alt="Pedro M." src={Foto3.src} />,
        name: 'Pedro M.',
        occupation: 'Diretora de Estratégia Digital',
        testimonial:
            'Os relatórios detalhados em tempo real nos oferecem insights valiosos sobre o comportamento do público. Agora podemos ajustar nossas campanhas com base em dados concretos, o que aumentou nossos resultados significativamente.',
    },

];

const whiteLogos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
];

const darkLogos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
];

const logoStyle = {
    width: '64px',
    opacity: 0.3,
};

export default function Testimonials() {
    const theme = useTheme();
    const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

    return (
        <Container
            id="testimonials"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Box
                sx={{
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                <Typography
                    component="h2"
                    variant="h4"
                    gutterBottom
                    sx={{ color: 'text.primary' }}
                >
                    O que Nossos Clientes Dizem
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Pessoas que Já Transformaram Seus Funis com Nossos Quizzes Interativos
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {userTestimonials.map((testimonial, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
                        <Card
                            variant="outlined"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                flexGrow: 1,
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    sx={{ color: 'text.secondary' }}
                                >
                                    {testimonial.testimonial}
                                </Typography>
                            </CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <CardHeader
                                    avatar={testimonial.avatar}
                                    title={testimonial.name}
                                    subheader={testimonial.occupation}
                                />
                                <img
                                    src={logos[index]}
                                    alt={`Logo ${index + 1}`}
                                    style={logoStyle}
                                />
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}