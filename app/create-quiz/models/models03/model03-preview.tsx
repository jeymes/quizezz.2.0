import React from 'react';
import { Box, Typography } from '@mui/material';

type Modelo03PreviewProps = {
    option?: string;
};

const Modelo03Preview: React.FC<Modelo03PreviewProps> = ({ option }) => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '0 20px',
            }}
        >
            <Typography variant="h6" component="div" color="black">
                {!option ? 'Tìtulo' : option}
            </Typography>
        </Box>
    );
};

export default Modelo03Preview;
