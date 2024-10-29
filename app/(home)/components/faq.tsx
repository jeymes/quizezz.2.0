import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const faqData = [
        {
            id: 'panel1',
            question: "Como posso personalizar os quizzes para a minha marca?",
            answer: (
                <>
                    Você pode personalizar cada aspecto dos quizzes, desde as perguntas até o design visual.
                    Isso permite que o conteúdo reflita a identidade da sua marca, criando uma experiência imersiva
                    e alinhada com seus objetivos de marketing.
                </>
            ),
        },
        {
            id: 'panel2',
            question: "Como os relatórios detalhados podem ajudar a melhorar minhas campanhas?",
            answer: (
                <>
                    Os relatórios oferecem insights valiosos sobre o comportamento e preferências do seu público.
                    Com esses dados, você pode ajustar suas campanhas e estratégias de marketing, garantindo melhores
                    resultados com base em informações precisas.
                </>
            ),
        },
        {
            id: 'panel3',
            question: "Como os quizzes podem atrair novos clientes?",
            answer: (
                <>
                    Os quizzes interativos criam experiências divertidas e envolventes que despertam a curiosidade dos
                    usuários. Isso pode atrair novos clientes para sua marca de maneira criativa e incentivar a
                    participação em massa.
                </>
            ),
        },
        {
            id: 'panel4',
            question: "Como os quizzes podem aumentar o engajamento nas redes sociais?",
            answer: (
                <>
                    Compartilhar quizzes nas redes sociais é uma ótima maneira de aumentar a visibilidade da sua marca.
                    Eles são altamente compartilháveis, gerando mais interações e ampliando o alcance de suas publicações.
                </>
            ),
        },
        {
            id: 'panel5',
            question: "Quais dados posso obter dos quizzes para melhorar minhas estratégias?",
            answer: (
                <>
                    Ao coletar respostas dos quizzes, você pode obter informações detalhadas sobre os interesses e
                    preferências do seu público. Esses dados são cruciais para ajustar suas estratégias de marketing
                    e produtos, tornando-as mais eficazes.
                </>
            ),
        },
        {
            id: 'panel6',
            question: "Os quizzes fornecem feedback em tempo real?",
            answer: (
                <>
                    Sim, os quizzes oferecem feedback instantâneo baseado nas respostas dos usuários. Isso permite
                    ajustar suas ações e estratégias em tempo real, otimizando os resultados de suas campanhas.
                </>
            ),
        }
    ];

    return (
        <Container
            id="faq"
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
            <Typography
                component="h2"
                variant="h4"
                sx={{
                    color: 'text.primary',
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                Perguntas Frequentes
            </Typography>
            <Box sx={{ width: '100%' }}>
                {faqData.map((item) => (
                    <Accordion
                        key={item.id}
                        expanded={expanded === item.id}
                        onChange={handleChange(item.id)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${item.id}-content`}
                            id={`${item.id}-header`}
                        >
                            <Typography component="h3" variant="subtitle2">
                                {item.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body2"
                                gutterBottom
                                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                            >
                                {item.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Container>
    );
}
