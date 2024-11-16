"use client";

import { useState } from 'react';
import { Paper, Box } from '@mui/material';
import { useQuizStore } from '@/app/zustand/StoreQuiz/store';
import Modelo01Preview from '@/app/create-quiz/models/models01/model01-preview';
import Modelo02Preview from '@/app/create-quiz/models/models02/model02-preview';
import Modelo03Preview from '@/app/create-quiz/models/models03/model03-preview';
import Modelo04Preview from '@/app/create-quiz/models/models04/model04-preview';
import { useForm, SubmitHandler } from 'react-hook-form';
import Modelo05Preview from '@/app/create-quiz/models/models05/model05-preview';
import Modelo06Preview from '@/app/create-quiz/models/models06/model06-preview';
import Modelo07Preview from '@/app/create-quiz/models/models07/model07-preview';
import Modelo08Preview from '@/app/create-quiz/models/models08/model08-preview';
import Modelo09Preview from '@/app/create-quiz/models/models09/model09-preview';
import LoadingOverlay from '@/app/components/loadingOverlay';
import NotFound from '@/app/components/404';

// Tipos de dados para o quiz (ajuste conforme sua estrutura real)
interface QuizModel {
    model: string;
    options: {
        option: string;
        image: string;
    };
    isFullWidth: boolean;
}

interface QuizPageData {
    models: QuizModel[];
}

interface QuizData {
    pages: QuizPageData[];
    edges: {
        source: string;
        target: string;
    }[];
}

interface Responses {
    question: string;
    selectedOption: string;
    model: string;
}

const QuizPage = () => {
    const { quizData } = useQuizStore();
    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

    const { setValue, handleSubmit, watch } = useForm<{
        responses: Responses[];
    }>({
        defaultValues: {
            responses: []  // Mantém as respostas de cada página
        }
    });

    if (!quizData) return <LoadingOverlay loading={!quizData} />;

    const currentPage = quizData.pages[currentPageIndex];

    // Função para verificar se o modelo "model03" está presente na página
    const getQuestionFromModel03 = () => {
        const model03 = currentPage.models.find(model => model.model === 'model03');
        if (model03) {
            return model03.options.option;
        }
        return '';
    };

    const handleNext = (selectedOption: string, model: string) => {

        let question = getQuestionFromModel03();

        if (!question) {
            question = "";
        }

        setValue(`responses.${currentPageIndex}`, {
            question,
            selectedOption,
            model
        });

        // Chama a submissão de dados de forma assíncrona, se necessário
        handleSubmit(onSubmit)(); // Garante que a resposta é salva antes de avançar


        const nextEdge = quizData.edges.find(edge => edge.source === String(currentPageIndex + 1));

        if (nextEdge) {
            const nextPageIndex = parseInt(nextEdge.target, 10) - 1;
            if (nextPageIndex >= 0 && nextPageIndex < quizData.pages.length) {
                setCurrentPageIndex(nextPageIndex);
                // Incrementa o progresso corretamente
                setCurrentProgress(prevProgress => prevProgress + 1);
            } else {
                console.log('Fim do quiz!');
            }
        }
    };

    const onSubmit: SubmitHandler<{ responses: Responses[] }> = (data) => {
        console.log("Respostas atualizadas:", data.responses);
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
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    bgcolor: 'transparent'

                }}
            >

                <Box
                    sx={{
                        width: { sm: '30%', xs: '100%' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        flexDirection: 'row'
                    }}
                >
                    {currentPage.models.map((model: any, index: any) => (
                        <Box
                            key={index}
                            sx={{
                                width: model.isFullWidth ? '100%' : 'calc(23%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 1,
                                cursor: 'pointer'
                            }}
                            onClick={() => handleNext(model.options.option, model.model)}
                        >
                            {model.model === 'model01' && (
                                <Modelo01Preview
                                    imageUrl={model.options.image}
                                    justifyContent={model.options.justifyContent}
                                    width={model.options.width}
                                />
                            )}

                            {model.model === 'model02' && (
                                <Modelo02Preview
                                    backgroundColor={model.options.backgroundColor}
                                    totalPages={quizData?.pages.length}
                                    currentPage={currentPageIndex}
                                    selected={model.options.selected}
                                />
                            )}

                            {model.model === 'model03' && (
                                <Modelo03Preview
                                    color={model.options.color}
                                    option={model.options.option}
                                />
                            )}

                            {model.model === 'model04' && (
                                <Modelo04Preview
                                    backgroundColor={model.options.backgroundColor}
                                    color={model.options.color}
                                    imageUrl={model.options.image}
                                    option={model.options.option ? model.options.option : `Opção-${index}`}
                                />
                            )}

                            {model.model === 'model05' && (
                                <Modelo05Preview
                                    backgroundColor={model.options.backgroundColor}
                                    color={model.options.color}
                                    option={model.options.option ? model.options.option : `Opção-${index}`}
                                />
                            )}

                            {model.model === 'model06' && <Modelo06Preview
                                color={model.options.color}
                                option={model.options.option}
                            />}

                            {model.model === 'model07' && <Modelo07Preview
                                color={model.options.color}
                                option={model.options.option}
                                description={model.options.description}
                                backgroundColor={model.options.backgroundColor}
                            />}

                            {model.model === 'model08' && (
                                <Modelo08Preview
                                    onClick={() => {
                                        if (model.options.link) {
                                            // Se o link existir, abre no navegador
                                            window.open(model.options.link, '_blank');
                                        } else {
                                            // Caso contrário, chama a função handleNext
                                            // handleNext(model.options.option, model.model);
                                        }
                                    }}
                                    backgroundColor={model.options.backgroundColor}
                                    color={model.options.color}
                                    option={model.options.option ? model.options.option : `Opção-${index}`}
                                />
                            )}

                            {model.model === 'model09' && <Modelo09Preview
                                width={model.options.width}
                                color={model.options.color}
                                imageUrl={model.options.image}
                            />}
                        </Box>
                    ))}
                </Box>

            </Paper>
        </Box>
    );
};

export default QuizPage;
