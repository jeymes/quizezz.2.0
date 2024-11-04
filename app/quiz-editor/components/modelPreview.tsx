import { Card, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modelo01Preview from '../models/models01/model01-preview';
import Modelo02Preview from '../models/models02/model02-preview';
import Modelo03Preview from '../models/models03/model03-preview';
import Modelo04Preview from '../models/models04/model04-preview';
import { ControlPointDuplicate } from '@mui/icons-material';
import { QuizData } from '@/app/@types/types';

type ModelPreviewProps = {
    watchedData?: QuizData; // Ajustado para ser do tipo QuizData
}

const ModelPreview = ({ watchedData }: ModelPreviewProps) => {
    console.log('watchedData:', watchedData);

    // Verifique se watchedData e pages são definidos
    const dataArray = watchedData?.pages?.flatMap(page => page.models) || []; // Extraindo modelos dos pages

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
                                width: model.isFullWidth || dataArray.length === 0 ? '100%' : 'calc(50% - 10px)',
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
                            {model.model === 'model01' && <Modelo01Preview imageUrl='teste' />}
                            {model.model === 'model02' && <Modelo02Preview />}
                            {model.model === 'model03' && <Modelo03Preview />}
                            {model.model === 'model04' && <Modelo04Preview />}
                            {model.model !== 'model01'
                                && model.model !== 'model02'
                                && model.model !== 'model03'
                                && model.model !== 'model04'
                                &&
                                <div>
                                    No model selected
                                </div>
                            }
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
                                <Button sx={{ minWidth: 0, padding: 1, color: 'gray' }}>
                                    <EditIcon fontSize='small' />
                                </Button>
                                <Button sx={{ minWidth: 0, padding: 1, color: '#1976d2' }}>
                                    <ControlPointDuplicate fontSize='small' />
                                </Button>
                                <Button sx={{ minWidth: 0, padding: 1, color: 'red' }}>
                                    <DeleteIcon fontSize='small' />
                                </Button>
                            </Box>
                        </div>
                    ))
                ) : null} {/* Remove a mensagem "No models to display" */}
            </Box>
        </Card>
    );
};

export default ModelPreview;
