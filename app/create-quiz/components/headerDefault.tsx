import { AppBar, Toolbar, IconButton, Box, Button, TextField, InputAdornment } from '@mui/material';
import { AppRegistration, Cloud, PlayArrow } from '@mui/icons-material';
import ArrowLeftIcon from '@mui/icons-material/ArrowBack'; // Importando corretamente o ícone de volta
import React from 'react';
import { Controller } from 'react-hook-form';

interface HeaderProps {
    control: any;
    onClose: () => void;
    onPreview: () => void;
}

export default function HeaderDefault({ control, onClose, onPreview }: HeaderProps) {
    return (
        <AppBar position="static">
            <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                {/* Botão de Voltar e Campo de Entrada */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton edge="start" color="inherit" onClick={onClose}>
                        <ArrowLeftIcon sx={{ fontSize: '30px' }} />
                    </IconButton>

                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant="outlined"
                                placeholder="Título do Quiz"
                                size="small"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AppRegistration />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                </Box>

                {/* Botões de Ação à Direita */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button
                        color="inherit"
                        variant="outlined"
                        startIcon={<PlayArrow />}
                        onClick={onPreview}
                    >
                        Visualizar
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        startIcon={<Cloud />}
                        type='submit'
                    >
                        Publicar
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
