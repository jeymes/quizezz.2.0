import { Forward, Tour } from '@mui/icons-material';
import { Card, CardContent, Typography } from '@mui/material';
import { Handle, Position } from 'reactflow';

const StartCard = () => {
    return (
        <Card
            style={{
                width: '250px',
                margin: '10px',
                padding: '10px',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid #d0d7de',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                gap: 10
            }}
        >
            <Handle
                style={{ backgroundColor: '#027AF2', width: 10, height: 10 }}
                type="source"
                position={Position.Right}
            />
            <Tour fontSize='large' />
            <Typography variant="h6" component="div">
                Inicio
            </Typography>
        </Card>
    );
};

export default StartCard;
