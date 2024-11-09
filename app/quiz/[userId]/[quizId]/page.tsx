"use client";

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Button, Typography, Container, Paper, Box, Grid } from '@mui/material';
import { useQuizStore } from '@/app/zustand/StoreQuiz/store';
import Modelo01Preview from '@/app/create-quiz/models/models01/model01-preview';
import Modelo02Preview from '@/app/create-quiz/models/models02/model02-preview';
import Modelo03Preview from '@/app/create-quiz/models/models03/model03-preview';
import Modelo04Preview from '@/app/create-quiz/models/models04/model04-preview';

const QuizPage = () => {
    const params = useParams();
    const { quizData } = useQuizStore();
    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
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
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'whitesmoke'
            }}
        >
            <Paper
                sx={{
                    borderRadius: 2,
                    width: '90%',
                    height: '80vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}

            >
                {/* <Typography variant="h3" gutterBottom align="center">{quizData.title}</Typography> */}
                {/* <Typography variant="h6" paragraph align="center">Página {currentPageIndex + 1} de {quizData.pages.length}</Typography> */}

                {/* <Typography variant="h5" paragraph>{currentPage.question}</Typography> */}

                {/* Exibir opções dinamicamente */}
                <Box
                    sx={{
                        width: '60%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        flexDirection: 'row'
                    }}
                    mb={3}
                >
                    {currentPage.models.map((model, index) => (
                        <Box
                            sx={
                                {
                                    width: model.isFullWidth ? '90%' : 'calc(23%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 1,
                                }
                            }
                        >
                            {model.model === 'model01' && (
                                <Modelo01Preview imageUrl={model.options.image} />
                            )}

                            {model.model === 'model02' && (
                                <Modelo02Preview
                                    totalPages={quizData?.pages.length}
                                    currentPage={currentPageIndex}
                                />
                            )}

                            {model.model === 'model03' && (
                                <Modelo03Preview option={model.options.option} />
                            )}

                            {model.model === 'model04' && (
                                <Modelo04Preview
                                    imageUrl={model.options.image}
                                    option={model.options.option || `Opção-${index}`}
                                />
                            )}
                        </Box>
                    ))}
                </Box>

                <Typography variant="body1" color="textSecondary" align="center">{currentPage.footer}</Typography>

                {/* <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
                    <Typography variant="body2" color="textSecondary">{currentPage.progress}</Typography>
                    <Button variant="contained" onClick={handleNext} color="primary" size="large">
                        Próxima
                    </Button>
                </Box> */}
            </Paper>
        </Box>
    );
};

export default QuizPage;
