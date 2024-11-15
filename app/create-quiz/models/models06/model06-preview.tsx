import React from 'react';
import { Typography, Box } from '@mui/material';

interface Modelo06PreviewProps {
    option: any;
    color: any;
}

const Modelo06Preview: React.FC<Modelo06PreviewProps> = ({ option, color }) => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '0 20px',
            }}
        >
            <Typography variant="caption" component="div" color={color}>
                {!option ? 'Descrição' : option}
            </Typography>
        </Box>
    );
};

export default Modelo06Preview;
