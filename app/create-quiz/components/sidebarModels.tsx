import React from 'react';
import { Box, Card, Typography, Divider } from '@mui/material';
import { Commit, Crop169, Crop32, DragHandle, FormatQuote, Image, Panorama, SmartButton, TextFields, TextSnippet } from '@mui/icons-material';

interface SidebarProps {
    onModelSelect: (modelo: string, isFullWidth: boolean) => void;
}

export default function SidebarModels({ onModelSelect }: SidebarProps) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '50%' }}>

            {/* Category: Headers */}
            <Box>
                <Typography variant="caption" gutterBottom>
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
                            width: 100
                        }}
                    >
                        <DragHandle sx={{ fontSize: 25 }} />
                        <Typography variant="caption">Header</Typography>
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
                            width: 100
                        }}
                    >
                        <Commit sx={{ fontSize: 25 }} />
                        <Typography variant="caption">Progress</Typography>
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
                            width: 100
                        }}
                    >
                        <TextFields sx={{ fontSize: 25 }} />
                        <Typography variant="caption">Título</Typography>
                    </Card>
                </Box>
            </Box>

            {/* Category: Elements */}
            <Box>
                <Typography variant="caption" gutterBottom>
                    Elementos
                </Typography>
                <Divider sx={{ mb: 1 }} />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexWrap: 'wrap',
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
                            width: 100
                        }}
                    >
                        <Image sx={{ fontSize: 25 }} />
                        <Typography variant="caption">Image</Typography>
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
                            width: 100

                        }}
                    >
                        <Crop169 sx={{ fontSize: 25 }} />
                        <Typography variant="caption">Cartão PP</Typography>
                    </Card>
                    <Card
                        onClick={() => onModelSelect('model06', true)}
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
                            width: 100

                        }}
                    >
                        <FormatQuote sx={{ fontSize: 25 }} />
                        <Typography variant="caption">Descrição</Typography>
                    </Card>
                    <Card
                        onClick={() => onModelSelect('model07', true)}
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
                            width: 100

                        }}
                    >
                        <Crop32 sx={{ fontSize: 25 }} />
                        <Typography variant="caption">Cartão GG</Typography>
                    </Card>

                    <Card
                        onClick={() => onModelSelect('model08', true)}
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
                            width: 100

                        }}
                    >
                        <SmartButton sx={{ fontSize: 25 }} />
                        <Typography variant="caption">Button</Typography>
                    </Card>
                    <Card
                        onClick={() => onModelSelect('model09', true)}
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
                            width: 100

                        }}
                    >
                        <Panorama sx={{ fontSize: 25 }} />
                        <Typography variant="caption">Banner</Typography>
                    </Card>
                </Box>

            </Box>

        </Box>
    );
}
