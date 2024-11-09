import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { Commit, Image, PhotoLibrary, TextFields } from '@mui/icons-material';

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

            <Card
                onClick={() => onModelSelect('model03', true)}
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
                <TextFields sx={{ fontSize: 25, }} />
                <Typography variant="body1">Título</Typography>
            </Card>

            <Card
                onClick={() => onModelSelect('model04', false)}
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
                <Image sx={{ fontSize: 25, }} />
                <Typography variant="body1">Image</Typography>
            </Card>
        </Box>
    );
}
