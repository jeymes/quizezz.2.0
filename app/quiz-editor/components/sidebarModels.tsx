import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { Commit, PhotoLibrary } from '@mui/icons-material';

interface SidebarProps {
    onModelSelect: (modelo: string, isFullWidth: boolean) => void;
}

export default function SidebarModels({ onModelSelect }: SidebarProps) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Card
                onClick={() => onModelSelect('model01', true)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 2,
                    gap: 1,
                    cursor: 'pointer',
                    boxShadow: 'none',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 3,
                    },
                }}
            >
                <PhotoLibrary sx={{ fontSize: 25, }} />
                <Typography variant="body1">Header</Typography>
            </Card>

            <Card
                onClick={() => onModelSelect('model02', true)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 2,
                    gap: 1,
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: 'none',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 3,
                    },
                }}
            >
                <Commit sx={{ fontSize: 25, }} />
                <Typography variant="body1">Progress</Typography>
            </Card>
        </Box>
    );
}
