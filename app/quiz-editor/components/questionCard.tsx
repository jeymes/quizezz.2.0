import { Card, CardContent, Typography, Button } from '@mui/material';

const QuestionCard = ({ data }: any) => {
    const { question, options } = data;

    return (
        <Card
            style={{
                width: '250px',
                margin: '10px',
                cursor: 'pointer',
                border: '1px solid #ccc',
                borderRadius: '8px',
                pointerEvents: 'auto', // Certifique-se de que os eventos de ponteiro estão habilitados
            }}
        >
            <CardContent>
                <Typography variant="h6" component="div">
                    {question}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Opções:
                </Typography>
                {options.map((option: any, index: any) => (
                    <Typography key={index} variant="body2">
                        - {option}
                    </Typography>
                ))}
                <Button variant="outlined" style={{ marginTop: '10px' }}>
                    Editar
                </Button>
            </CardContent>
        </Card>
    );
};

export default QuestionCard;
