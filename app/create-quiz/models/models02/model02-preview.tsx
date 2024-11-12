import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

type Modelo02PreviewProps = {
    selected: any;
    currentPage: any;
    totalPages: any;
};

const Modelo02Preview = ({ totalPages = 1, currentPage = 1, selected }: Modelo02PreviewProps) => {
    const progress = (currentPage / totalPages) * 100;

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                height: 60,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 20px',
            }}
        >
            {/* Mostrar o texto de contagem de página apenas se selected for true */}
            {selected && (
                <Typography variant="body2" color="black" sx={{ marginBlock: 1 }}>
                    {currentPage} / {totalPages}
                </Typography>
            )}

            <Box sx={{ width: '100%', height: 8, borderRadius: 5, overflow: 'hidden', marginBottom: 1 }}>
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{ height: '100%', backgroundColor: '#e0e0e0', '& .MuiLinearProgress-bar': { backgroundColor: '#3b82f6' } }}
                />
            </Box>
        </Box>
    );
};

export default Modelo02Preview;
