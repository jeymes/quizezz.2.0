"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Snackbar, Alert, AlertColor, AlertTitle } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';

type NotificationContextType = {
    showNotification: (message: string, severity: AlertColor) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification deve ser usado dentro de NotificationProvider');
    }
    return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>('info');

    const iconMap = {
        success: <CheckCircleIcon fontSize="inherit" />,
        error: <ErrorIcon fontSize="inherit" />,
        info: <InfoIcon fontSize="inherit" />,
        warning: <WarningIcon fontSize="inherit" />,
    };

    const showNotification = (message: string, severity: AlertColor) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    icon={iconMap[snackbarSeverity]}
                    onClose={() => setSnackbarOpen(false)}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    <AlertTitle>{snackbarSeverity.toUpperCase()}</AlertTitle>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </NotificationContext.Provider>
    );
};
