import { Card, Typography, Button, LinearProgress, Box, Avatar, createTheme, ThemeProvider } from '@mui/material';
import { Handle, Position } from 'reactflow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useStoreCardFlowQuiz } from '@/app/zustand/StoreCardFlowQuiz/store';
import { Crop169, TextFields, Image } from '@mui/icons-material';
import { getDesignTokens } from '@/app/shared-theme/themePrimitives';

interface NodeProps {
    data: any;
    onClick?: () => void;
    id: any;
}

const PagesCard = ({ data, onClick, id }: NodeProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const { quizFlowData } = useStoreCardFlowQuiz();

    const dataArray = quizFlowData && quizFlowData.pages && quizFlowData.pages[id - 1]?.models ? quizFlowData.pages[id - 1].models : [];

    const darkTheme = createTheme(getDesignTokens('dark'));

    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}

                sx={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}
            >
                {isHovered && (
                    <Box
                        sx={{
                            position: 'absolute',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            top: -30,
                            flexDirection: 'row',
                            gap: 1,
                            borderRadius: 1,
                            backgroundColor: 'primary.main',

                        }}
                    >
                        <Button
                            onClick={() => data.openModal(id)}
                            sx={{
                                padding: 1, color: 'white', width: '100%',
                                '&:hover': {
                                    backgroundColor: 'primary.dark', // Muda para uma cor mais escura do tema quando passar o mouse
                                }
                            }}
                        >
                            <EditIcon fontSize="small" />
                        </Button>

                        <Button
                            onClick={() => data.deletePage(id)}
                            sx={{
                                padding: 1, color: 'red', width: '100%',
                                '&:hover': {
                                    backgroundColor: 'primary.dark', // Muda para uma cor mais escura do tema quando passar o mouse
                                }
                            }}
                        >
                            <DeleteIcon fontSize="small" />
                        </Button>
                    </Box>
                )}

                <Card
                    onClick={onClick}
                    sx={{
                        width: '300px',
                        margin: '10px',
                        paddingBlock: dataArray.length > 0 ? 0 : 2,
                        cursor: 'pointer',
                        border: '1px solid #d0d7de',
                        borderRadius: 1,
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        pointerEvents: 'auto',
                    }}
                >
                    <Handle style={{ backgroundColor: '#027AF2', width: 10, height: 10 }} type="target" position={Position.Left} id={id} />
                    <Handle style={{ backgroundColor: '#027AF2', width: 10, height: 10 }} type="source" position={Position.Right} id={id} />

                    {dataArray.length > 0 && <Typography p={1} variant="body1">Página {id} </Typography>}

                    {dataArray.length > 0 ? (
                        dataArray.map((model, index) => (
                            <Box
                                key={`${model.model}-${index}`}
                                sx={{
                                    marginBottom: '10px',
                                    padding: 1,
                                    width: '90%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 1,
                                    backgroundColor: 'Background',
                                }}
                            >
                                {/* Modelo 01 - Header com Imagem no Centro */}

                                {model.model === 'model01' && (
                                    <Box sx={{ textAlign: 'center', padding: 1 }}>
                                        <Avatar
                                            src={`${model.options.image instanceof File ? URL.createObjectURL(model.options.image) : model.options.image}`}
                                            alt="Modelo"
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: 1,
                                            }}
                                        />
                                    </Box>
                                )}

                                {/* Modelo 02 - Progresso Simples */}

                                {model.model === 'model02' && (
                                    <Box sx={{ width: '100%', padding: 1 }}>
                                        {model.options.selected && (
                                            <Typography variant="body2" color="black" sx={{ marginBlock: 1 }}>
                                                {model.options.currentPage} / {model.options.totalPages}
                                            </Typography>
                                        )}
                                        <LinearProgress
                                            variant="determinate"
                                            value={(model.options.currentPage / quizFlowData?.pages?.length) * 100}
                                            sx={{
                                                height: '8px',
                                                borderRadius: '5px',
                                                backgroundColor: '#e0e0e0',
                                                '& .MuiLinearProgress-bar': { backgroundColor: '#3b82f6' },
                                            }}
                                        />
                                    </Box>
                                )}

                                {/* Modelo 03 - Somente Opção */}

                                {model.model === 'model03' && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
                                        <TextFields sx={{ marginRight: 1 }} />
                                        <Typography variant="body1">{model.options.option}</Typography>
                                    </Box>
                                )}

                                {/* Modelo 04 - Somente Opção */}

                                {model.model === 'model04' && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1 }}>
                                        <Image sx={{ marginRight: 1 }} />
                                        <Typography variant="body1">{model.options.option}</Typography>
                                    </Box>
                                )}

                                {/* Modelo 05 - Somente Opção */}

                                {model.model === 'model05' && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1 }}>
                                        <Crop169 sx={{ marginRight: 1 }} />
                                        <Typography variant="body1">{model.options.option}</Typography>
                                    </Box>
                                )}

                            </Box>
                        ))
                    ) : (
                        <Box
                            sx={{
                                width: '90%',
                                padding: 2,
                                textAlign: 'center',
                                backgroundColor: 'Background',
                                borderRadius: 1,
                            }}
                        >
                            <Typography variant="body1">Página {id} </Typography>
                        </Box>
                    )}
                </Card>
            </Box>
        </ThemeProvider>
    );
};

export default PagesCard;
