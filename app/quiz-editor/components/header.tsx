import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Close } from '@mui/icons-material';
import React from 'react';

interface HeaderProps {
    title: string;
    icon?: React.ElementType; // Tipo para aceitar um componente de ícone do MUI
    onClose: () => void;
}

export default function Header({ title, icon: IconComponent, onClose }: HeaderProps) {
    return (
        <AppBar position="static">
            <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {IconComponent && <IconComponent />}
                    <Typography variant="body2">{title}</Typography>
                </Box>
                <IconButton edge="end" color="inherit" onClick={onClose}>
                    <Close />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
