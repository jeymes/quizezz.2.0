import { Card, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modelo01Preview from '../models/models01/model01-preview';
import Modelo02Preview from '../models/models02/model02-preview';
import Modelo03Preview from '../models/models03/model03-preview';
import Modelo04Preview from '../models/models04/model04-preview';
import { ControlPointDuplicate } from '@mui/icons-material';

type ModelPreviewProps = {
    modelsPerQuestion: Array<{ model: string; isFullWidth: boolean }>,
}

const ModelPreview = ({ modelsPerQuestion }: ModelPreviewProps) => {

    const renderModelPreview = (model: any) => {
        switch (model.model) {
            case 'model01':
                return <Modelo01Preview imageUrl='teste' />;
            case 'model02':
                return <Modelo02Preview />;
            case 'model03':
                return <Modelo03Preview />;
            case 'model04':
                return <Modelo04Preview />;
            default:
                return null; // Retorna null se o modelo não corresponder a nenhum caso
        }
    };

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
                {modelsPerQuestion.map((model, index) => (
                    <div
                        key={`${model.model}-${index}`} // A chave deve ser única
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
                        {renderModelPreview(model)}
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
                                // onClick={() => handleModelClick(index, modalNodeId)}
                                sx={{ minWidth: 0, padding: 1, color: 'gray' }}
                            >
                                <EditIcon fontSize='small' />
                            </Button>
                            <Button
                                // onClick={() => handleDuplicateModel(index, modalNodeId)}
                                sx={{ minWidth: 0, padding: 1, color: '#1976d2' }}
                            >
                                <ControlPointDuplicate fontSize='small' />
                            </Button>
                            <Button
                                // onClick={() => handleDeleteModel(index, modalNodeId)}
                                sx={{ minWidth: 0, padding: 1, color: 'red' }}
                            >
                                <DeleteIcon fontSize='small' />
                            </Button>
                        </Box>
                    </div>
                ))}
            </Box>
        </Card>
    );
};

export default ModelPreview;
