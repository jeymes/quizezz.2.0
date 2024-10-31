import { Card, CardContent, Typography } from '@mui/material';
import { Handle, Position } from 'reactflow';

const StartCard = () => {
    return (
        <Card
            style={{
                width: '250px',
                margin: '10px',
                padding: '10px',
                backgroundColor: '#FFD700',
                borderRadius: '8px',
                textAlign: 'center',
            }}
        >
            <Handle type="source" position={Position.Right} /> {/* Ponto de conexão à direita */}
            <CardContent>
                <Typography variant="h6" component="div">
                    Ponto de Partida
                </Typography>
            </CardContent>
        </Card>
    );
};

export default StartCard;
