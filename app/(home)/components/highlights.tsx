import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import InsightsIcon from '@mui/icons-material/Insights';
import RateReviewIcon from '@mui/icons-material/RateReview';
import CelebrationIcon from '@mui/icons-material/Celebration';

const items = [
    {
        icon: <AutoFixHighRoundedIcon />,
        title: "Flexibilidade e Customização",
        description: "Personalize cada aspecto dos quizzes, desde as perguntas até o design. Adapte o conteúdo visual e textual para refletir a identidade da sua marca, criando uma experiência imersiva e alinhada com os objetivos da sua empresa."
    },
    {
        icon: <InsightsIcon />,
        title: "Relatórios Detalhados e Insights",
        description: "Acompanhe o desempenho dos seus quizzes com relatórios detalhados que oferecem insights valiosos sobre o comportamento e as preferências do público. Use esses dados para ajustar suas campanhas e melhorar continuamente os resultados."
    },
    {
        icon: <RateReviewIcon />,
        title: "Feedback Personalizado em Tempo Real",
        description: "Ofereça quizzes ajustados às necessidades específicas do seu público e obtenha feedback instantâneo. Isso permite adaptar suas estratégias em tempo real para maximizar a eficiência das suas ações."
    },
    {
        icon: <CelebrationIcon />,
        title: "Atraia Novos Clientes de Forma Divertida",
        description: "Use quizzes interativos para criar experiências envolventes que atraem novos clientes. Gamifique a interação com seu público, despertando curiosidade e incentivando a participação em massa."
    },
    {
        icon: <QueryStatsRoundedIcon />,
        title: "Aumente o Engajamento nas Redes Sociais",
        description: "Compartilhe quizzes nas suas redes sociais para aumentar a visibilidade e o alcance da sua marca. Quizzes interativos são altamente compartilháveis e geram mais engajamento, ajudando a ampliar sua presença digital."
    },
    {
        icon: <SupportAgentRoundedIcon />,
        title: "Obtenha Informações Valiosas do Seu Público",
        description: "Utilize quizzes para coletar insights detalhados sobre os interesses e preferências dos seus clientes. As respostas fornecem dados cruciais que podem ser usados para melhorar suas estratégias de marketing e produtos."
    }
];

export default function Highlights() {
    return (
        <Box
            id="highlights"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: 'grey.900',
            }}
        >
            <Container
                sx={{
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
                    <Typography component="h2" variant="h4" gutterBottom>
                        Benefícios Principais
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        Você pode criar páginas altamente eficazes e personalizadas para converter visitantes em clientes qualificados.
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Stack
                                direction="column"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    color: 'inherit',
                                    p: 3,
                                    height: '100%',
                                    borderColor: 'hsla(220, 25%, 25%, 0.3)',
                                    backgroundColor: 'grey.800',
                                }}
                            >
                                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                                <div>
                                    <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}