import { Card, CardContent, Typography, Button, LinearProgress, Box } from '@mui/material';
import { Handle, Position } from 'reactflow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

interface NodeProps {
    data: any;
    onClick?: () => void;
    id: any;
}

const PagesCard = ({ data, onClick, id }: NodeProps) => {
    const { question, options } = data;
    const [isHovered, setIsHovered] = useState(false);

    return (
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
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        boxShadow: 2,
                    }}
                >
                    <Button
                        onClick={() => data.openModal(id)}
                        sx={{ padding: 1, color: 'gray', width: '100%', }}
                    >
                        <EditIcon fontSize='small' />
                    </Button>

                    <Button
                        onClick={() => data.deletePage(id)}
                        sx={{ padding: 1, color: 'red', width: '100%', }}>
                        <DeleteIcon fontSize='small' />
                    </Button>
                </Box>
            )}

            <Card
                onClick={onClick}
                style={{
                    width: '300px',
                    margin: '10px',
                    cursor: 'pointer',
                    border: '1px solid #d0d7de',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    pointerEvents: 'auto',
                }}
            >
                <Handle style={{ backgroundColor: '#027AF2', width: 10, height: 10 }} type="target" position={Position.Left} id={id} />
                <Handle style={{ backgroundColor: '#027AF2', width: 10, height: 10 }} type="source" position={Position.Right} id={id} />

                <div
                    style={{
                        backgroundColor: '#027AF2',
                        color: '#fff',
                        padding: '10px',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h6">QuizApp</Typography>
                </div>

                <LinearProgress variant="determinate" value={50} style={{ height: '5px' }} />

                <CardContent style={{ flexGrow: 1, padding: '16px' }}>
                    <Typography variant="h6" component="div" style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                        {question}
                    </Typography>

                    <div style={{ marginBottom: '20px', position: 'relative' }}>
                        {options.map((option: any, index: any) => (
                            <div key={index} style={{ position: 'relative', marginBottom: '8px' }}>
                                <Button
                                    variant="outlined"
                                    style={{
                                        width: '100%',
                                        textAlign: 'left',
                                        paddingLeft: '12px',
                                        position: 'relative',
                                    }}
                                >
                                    {option.label}
                                </Button>
                            </div>
                        ))}
                    </div>


                    <Button variant="contained" color="primary" fullWidth>
                        Continuar
                    </Button>
                </CardContent>

            </Card>

        </Box>
    );
};

export default PagesCard;