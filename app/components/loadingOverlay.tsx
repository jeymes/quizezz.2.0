import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const LoadingOverlay: React.FC<{ loading: any }> = ({ loading }) => {
    if (!loading) return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'Background',
                zIndex: 1000,
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default LoadingOverlay;
