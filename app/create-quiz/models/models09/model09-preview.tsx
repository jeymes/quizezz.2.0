import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

interface Modelo09PreviewProps {
    imageUrl: any;
    color: any;
    width: any;
}

const Modelo09Preview: React.FC<Modelo09PreviewProps> = ({ imageUrl, width = '100%' }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 1,
                bgcolor: 'transparent'
            }}
        >
            {imageUrl ? (
                <img
                    src={`${imageUrl instanceof File ? URL.createObjectURL(imageUrl) : imageUrl}`}
                    alt="Modelo"
                    style={{
                        width: width,
                        objectFit: 'cover',
                        transition: '0.3s ease',
                        borderRadius: 5
                    }}
                />
            ) : (
                <CardContent > {/* Cor de fundo para o texto */}
                    <AddCircle />
                </CardContent>
            )}
        </Box>
    );
};

export default Modelo09Preview;
