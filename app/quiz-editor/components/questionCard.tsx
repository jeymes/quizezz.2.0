import { Card, CardContent, Typography, Button, LinearProgress } from '@mui/material';
import { Handle, Position } from 'reactflow';

interface NodeProps {
    data: any; // Substitua 'any' pelo tipo adequado
    onClick?: () => void; // Adicione esta linha
    id: any;
}

const QuestionCard = ({ data, onClick, id }: NodeProps) => {
    const { question, options } = data;

    return (
        <Card
            onClick={onClick} // Adicione esta linha
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
    );
};

export default QuestionCard;
