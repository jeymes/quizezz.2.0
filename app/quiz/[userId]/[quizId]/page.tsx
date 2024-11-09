"use client";

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Button, Typography, Container, Paper, Box } from '@mui/material';
import { useQuizStore } from '@/app/zustand/StoreQuiz/store';
import Modelo01Preview from '@/app/create-quiz/models/models01/model01-preview';
import Modelo02Preview from '@/app/create-quiz/models/models02/model02-preview';
import Modelo03Preview from '@/app/create-quiz/models/models03/model03-preview';
import Modelo04Preview from '@/app/create-quiz/models/models04/model04-preview';

const QuizPage = () => {
    const params = useParams();
    const { quizData } = useQuizStore();
    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0); // Página inicial do quiz
    const [answer, setAnswer] = useState<string>(''); // Resposta selecionada

    console.log("quizData", quizData);

    if (!quizData) return <div>Carregando...</div>;

    const currentPage = quizData.pages[currentPageIndex];

    const handleNext = () => {
        if (quizData && currentPage) {
            // Encontra a próxima página com base no `source` e `target` de `edges`
            const nextEdge = quizData.edges.find(edge => edge.source === String(currentPageIndex + 1));
            if (nextEdge) {
                const nextPageIndex = parseInt(nextEdge.target, 10) - 1; // Converte target para índice da página
                setCurrentPageIndex(nextPageIndex);
                setAnswer(''); // Resetar a resposta ao mudar de página
            }
        }
    };

    const handleAnswerChange = (selectedAnswer: string) => {
        setAnswer(selectedAnswer);
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
                <Typography variant="h4" gutterBottom>{quizData.title}</Typography>
                <Typography variant="body1" paragraph>Pagina{currentPageIndex + 1}</Typography>

                <Typography variant="body1" paragraph>{currentPage.question}</Typography>

                {/* Exibir opções dinamicamente, assumindo que elas estão em currentPage.models */}
                <Box>
                    {currentPage.models.map((model, index) => (
                        <>
                            {model.model === 'model01' && <Modelo01Preview
                                imageUrl={model.options.image}
                            />}

                            {model.model === 'model02' && <Modelo02Preview
                                totalPages={quizData?.pages.length}
                                currentPage={currentPageIndex}
                            />}

                            {model.model === 'model03' && <Modelo03Preview
                                option={model.options.option}
                            />}

                            {model.model === 'model04' && <Modelo04Preview
                                imageUrl={model.options.image}
                                option={model.options.option ? model.options.option : `Opção-${index}`}
                            />}
                        </>
                    ))}
                </Box>

                <Typography variant="body2" color="textSecondary" gutterBottom>{currentPage.footer}</Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" color="textSecondary">{currentPage.progress}</Typography>
                    <Button variant="contained" onClick={handleNext} color="primary">Próxima</Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default QuizPage;
