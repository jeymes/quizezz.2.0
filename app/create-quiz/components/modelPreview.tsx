import { Card, Box, Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modelo01Preview from '../models/models01/model01-preview';
import Modelo02Preview from '../models/models02/model02-preview';
import Modelo03Preview from '../models/models03/model03-preview';
import Modelo04Preview from '../models/models04/model04-preview';
import { ControlPointDuplicate } from '@mui/icons-material';
import { QuizData } from '@/@types/types';

type ModelPreviewProps = {
    watchedData?: QuizData; // Mantém o tipo QuizData
    activePageIndex?: number; // Mantém o índice da página ativa
    handleModelSelection?: any;
    duplicateModel?: any;
    deleteModel?: any;
};

const ModelPreview = ({ watchedData, activePageIndex, handleModelSelection, deleteModel, duplicateModel }: ModelPreviewProps) => {
    // Certifique-se de que `activePageIndex` não seja undefined e que estamos acessando a página correta
    const dataArray = watchedData?.pages?.[activePageIndex ?? 0]?.models || [];

    // Logs para verificação
    console.log('watchedData:', watchedData);
    // console.log('activePageIndex:', activePageIndex);
    // console.log('dataArray:', dataArray);

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: 360,
                border: 8,
                borderRadius: 2,
                borderColor: 'gray',
                boxShadow: 'none'
            }}
        >
            <Box
                sx={{
                    padding: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    width: '100%',
                    gap: 1,
                }}
            >
                {dataArray.length > 0 ? (
                    dataArray.map((model, index) => (
                        <div
                            key={`${model.model}-${index}`}
                            style={{
                                borderRadius: 8,
                                marginBottom: '10px',
                                position: 'relative',
                                padding: 5,
                                width: model.isFullWidth ? '100%' : 'calc(50% - 10px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'darkgray',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseEnter={(e: any) => {
                                e.currentTarget.querySelector('.icon-buttons').style.display = 'flex';
                                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                            }}
                            onMouseLeave={(e: any) => {
                                e.currentTarget.querySelector('.icon-buttons').style.display = 'none';
                                e.currentTarget.style.backgroundColor = 'darkgray';
                            }}
                        >

                            {model.model === 'model01' &&
                                <Modelo01Preview
                                    imageUrl={model.options.image}
                                    justifyContent={model.options.justifyContent}
                                    width={model.options.width}
                                />
                            }

                            {model.model === 'model02' && <Modelo02Preview
                                totalPages={watchedData?.pages.length}
                                currentPage={activePageIndex}
                                selected={model.options.selected}
                            />}

                            {model.model === 'model03' && <Modelo03Preview
                                color={model.options.color}
                                option={model.options.option}
                            />}

                            {model.model === 'model04' && <Modelo04Preview
                                backgroundColor={model.options.backgroundColor}
                                color={model.options.color}
                                imageUrl={model.options.image}
                                option={model.options.option ? model.options.option : `Opção-${index}`}
                            />}

                            <Box
                                className="icon-buttons"
                                sx={{
                                    display: 'none',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    flexDirection: 'row',
                                    gap: 1,
                                    borderRadius: 2,
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    boxShadow: 2,
                                }}
                            >
                                <Button
                                    onClick={() => handleModelSelection(model.model, index)}
                                    sx={{ minWidth: 0, padding: 1, color: 'gray' }}
                                >
                                    <EditIcon fontSize='small' />
                                </Button>
                                <Button onClick={() => duplicateModel(index)} sx={{ minWidth: 0, padding: 1, color: '#1976d2' }}>
                                    <ControlPointDuplicate fontSize='small' />
                                </Button>
                                <Button onClick={() => deleteModel(index)} sx={{ minWidth: 0, padding: 1, color: 'red' }}>
                                    <DeleteIcon fontSize='small' />
                                </Button>
                            </Box>
                        </div>
                    ))
                ) : (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            padding: 2,
                            textAlign: 'center',
                            backgroundColor: 'darkgray',
                            borderRadius: 2,
                        }}
                    >
                        <Typography variant="body1">Escolha um dos modelos</Typography>
                    </Box>
                )}
            </Box>
        </Card>
    );
};

export default ModelPreview;
