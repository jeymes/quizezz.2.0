import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const commonDescription = [
    'Funis dinâmicos',
    'Gerenciamento de Relatórios',
    'Suporte com Aulas Online',
    'Componentes interativos',
    'Personalização de componentes',
    'Download de resultados',
    'Não precisa comprar domínio',
    'Pixel e Scripts de trackeamento',
];

const tiers = [
    {
        title: 'Mensal',
        subheader: 'Plano flexível',
        price: '25',
        pricePeriod: 'por mês',
        description: commonDescription,
        buttonText: 'Selecionar',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
    },
    {
        title: 'Trimestral',
        subheader: 'Mais econômico',
        price: '60', // Exemplo: 3 meses com desconto
        pricePeriod: 'a cada 3 meses',
        description: commonDescription,
        buttonText: 'Selecionar',
        buttonVariant: 'contained',
        buttonColor: 'secondary',
    },
    {
        title: 'Anual',
        subheader: 'Melhor valor',
        price: '200', // Exemplo: valor com desconto anual
        pricePeriod: 'por ano',
        description: commonDescription,
        buttonText: 'Selecionar',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
    },
];


export default function Pricing() {
    return (
        <Container
            id="plans"
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
                    Planos
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Crie funis dinâmicos e interativos de alta conversão para elevar as vendas de seus produtos e serviços
                </Typography>
            </Box>
            <Grid
                container
                spacing={3}
                sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
            >
                {tiers.map((tier) => (
                    <Grid
                        size={{ xs: 12, sm: tier.title === 'Enterprise' ? 12 : 6, md: 4 }}
                        key={tier.title}
                    >
                        <Card
                            sx={[
                                {
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 4,
                                },
                                tier.title === 'Professional' &&
                                ((theme) => ({
                                    border: 'none',
                                    background:
                                        'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                                    boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                                    ...theme.applyStyles('dark', {
                                        background:
                                            'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                                        boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                                    }),
                                })),
                            ]}
                        >
                            <CardContent>
                                <Box
                                    sx={[
                                        {
                                            mb: 1,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            gap: 2,
                                        },
                                        tier.title === 'Professional'
                                            ? { color: 'grey.100' }
                                            : { color: '' },
                                    ]}
                                >
                                    <Typography component="h3" variant="h6">
                                        {tier.title}
                                    </Typography>
                                    {tier.title === 'Professional' && (
                                        <Chip icon={<AutoAwesomeIcon />} label={tier.subheader} />
                                    )}
                                </Box>
                                <Box
                                    sx={[
                                        {
                                            display: 'flex',
                                            alignItems: 'baseline',
                                        },
                                        tier.title === 'Professional'
                                            ? { color: 'grey.50' }
                                            : { color: null },
                                    ]}
                                >
                                    <Typography component="h3" variant="h2">
                                        ${tier.price}
                                    </Typography>
                                    <Typography component="h3" variant="h6">
                                        &nbsp; {tier.pricePeriod}

                                    </Typography>
                                </Box>
                                <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
                                {tier.description.map((line) => (
                                    <Box
                                        key={line}
                                        sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}
                                    >
                                        <CheckCircleRoundedIcon
                                            sx={[
                                                {
                                                    width: 20,
                                                },
                                                tier.title === 'Professional'
                                                    ? { color: 'primary.light' }
                                                    : { color: 'primary.main' },
                                            ]}
                                        />
                                        <Typography
                                            variant="subtitle2"
                                            component={'span'}
                                            sx={[
                                                tier.title === 'Professional'
                                                    ? { color: 'grey.50' }
                                                    : { color: null },
                                            ]}
                                        >
                                            {line}
                                        </Typography>
                                    </Box>
                                ))}
                            </CardContent>
                            <CardActions>
                                <Button
                                    fullWidth
                                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                                    color={tier.buttonColor as 'primary' | 'secondary'}
                                >
                                    {tier.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}