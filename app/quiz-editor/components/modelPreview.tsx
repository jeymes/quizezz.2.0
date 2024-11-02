import { Card, CardContent, Typography, Button, LinearProgress, Box } from '@mui/material';
import { Handle, Position } from 'reactflow';

const modelPreview = () => {

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
                {modelPreview.map((model, index) => {
                    const ModelComponent = model.component;
                    return (
                        <div
                            key={model.model}
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
                            {/* <ModelComponent {...model.props} /> */}
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
                                <Button onClick={() => handleModelClick(index, modalNodeId)} sx={{ minWidth: 0, padding: 1, color: 'gray' }}>
                                    <EditIcon fontSize='small' />
                                </Button>
                                <Button onClick={() => handleDuplicateModel(index, modalNodeId)} sx={{ minWidth: 0, padding: 1, color: '#1976d2' }}>
                                    <DuplicateIcon fontSize='small' />
                                </Button>
                                <Button onClick={() => handleDeleteModel(index, modalNodeId)} sx={{ minWidth: 0, padding: 1, color: 'red' }}>
                                    <DeleteIcon fontSize='small' />
                                </Button>
                            </Box>
                        </div>
                    );
                })}

            </Box>

        </Card>
    );
};

export default modelPreview;
