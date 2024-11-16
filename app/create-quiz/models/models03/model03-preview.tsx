import React from 'react';
import { Box, Typography } from '@mui/material';

type Modelo03PreviewProps = {
    option: string;
    color: string;
};

const Modelo03Preview: React.FC<Modelo03PreviewProps> = ({ option, color }) => {
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
            <Typography variant="h6" component="div" color={color}>
                {!option ? 'Tìtulo' : option}
            </Typography>
        </Box>
    );
};

export default Modelo03Preview;
