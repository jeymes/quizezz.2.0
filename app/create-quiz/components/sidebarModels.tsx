import React from 'react';
import { Box, Card, Typography, Divider } from '@mui/material';
import { Commit, Crop169, DragHandle, Image, PhotoLibrary, TextFields } from '@mui/icons-material';

interface SidebarProps {
    onModelSelect: (modelo: string, isFullWidth: boolean) => void;
}

export default function SidebarModels({ onModelSelect }: SidebarProps) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '50%' }}>

            {/* Category: Headers */}
            <Box>
                <Typography variant="body2" gutterBottom>
                    Headers
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
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
                            width: 80
                        }}
                    >
                        <DragHandle sx={{ fontSize: 25 }} />
                        <Typography variant="body2">Header</Typography>
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
                            width: 80
                        }}
                    >
                        <Commit sx={{ fontSize: 25 }} />
                        <Typography variant="body2">Progress</Typography>
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
                            width: 80
                        }}
                    >
                        <TextFields sx={{ fontSize: 25 }} />
                        <Typography variant="body2">Título</Typography>
                    </Card>
                </Box>
            </Box>

            {/* Category: Elements */}
            <Box>
                <Typography variant="body2" gutterBottom>
                    Elementos
                </Typography>
                <Divider sx={{ mb: 1 }} />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >



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
                            width: 80
                        }}
                    >
                        <Image sx={{ fontSize: 25 }} />
                        <Typography variant="body2">Image</Typography>
                    </Card>

                    <Card
                        onClick={() => onModelSelect('model05', false)}
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
                            width: 80

                        }}
                    >
                        <Crop169 sx={{ fontSize: 25 }} />
                        <Typography variant="body2">Cartão</Typography>
                    </Card>

                </Box>

            </Box>

        </Box>
    );
}
