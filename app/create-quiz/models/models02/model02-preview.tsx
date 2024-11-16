import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

type Modelo02PreviewProps = {
    selected: any;
    currentPage: any;
    totalPages: any;
    backgroundColor: any
};

const Modelo02Preview = ({ totalPages = 1, currentPage = 1, selected, backgroundColor }: Modelo02PreviewProps) => {
    // Limita displayPage ao total de páginas
    const displayPage = Math.min(currentPage + 1, totalPages);
    const progress = (displayPage / totalPages) * 100;

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Mostrar o texto de contagem de página apenas se selected for true */}
            {selected && (
                <Typography variant="body2" color="black" sx={{ marginBlock: 1 }}>
                    {displayPage} / {totalPages}
                </Typography>
            )}

            <Box sx={{ width: '100%', height: 8, borderRadius: 5, overflow: 'hidden', }}>
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{ height: '100%', backgroundColor: '#e0e0e0', '& .MuiLinearProgress-bar': { backgroundColor: backgroundColor } }}
                />
            </Box>
        </Box>
    );
};

export default Modelo02Preview;
