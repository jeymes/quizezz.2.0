import { Card, CardContent, Typography, Button, LinearProgress } from '@mui/material';
import { Handle, Position } from 'reactflow';

interface NodeProps {
    data: any; // Substitua 'any' pelo tipo adequado
    onClick: () => void; // Adicione esta linha
}

const QuestionCard = ({ data, onClick }: NodeProps) => {
    const { question, options } = data;

    return (
        <Card
            onClick={onClick} // Adicione esta linha
            style={{
                width: '300px',
                margin: '10px',
                cursor: 'pointer',
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                pointerEvents: 'auto',
            }}
        >
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />

            <div
                style={{
                    backgroundColor: '#3f51b5',
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
                            <Handle
                                type="source"
                                position={Position.Right}
                                id={`option-${index}`}
                                style={{
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    right: '-10px',
                                    backgroundColor: '#3f51b5',
                                }}
                            />
                            <Button
                                variant="outlined"
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    paddingLeft: '12px',
                                    position: 'relative',
                                }}
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </div>

                <Button variant="contained" color="primary" fullWidth>
                    Continuar
                </Button>
            </CardContent>
        </Card>
    );
};

export default QuestionCard;
