import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { AddAPhoto, AddCircle, ImageAspectRatio } from '@mui/icons-material';

interface Modelo04PreviewProps {
    imageUrl: any;
    option: any;
}

const Modelo04Preview: React.FC<Modelo04PreviewProps> = ({ imageUrl, option }) => {
    return (
        <Card sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 1,
                    ":hover": {
                        backgroundColor: '#0059B3'
                    }
                }}
            >
                {imageUrl ? (
                    <img
                        src={`${imageUrl instanceof File ? URL.createObjectURL(imageUrl) : imageUrl}`}
                        alt="Modelo"
                        style={{
                            width: '100%',
                            borderRadius: '8px',
                            maxHeight: '400px',
                            objectFit: 'cover',
                            transition: '0.3s ease',
                        }}
                    />
                ) : (
                    <CardContent > {/* Cor de fundo para o texto */}
                        <AddCircle />
                    </CardContent>
                )}
            </Box>
            <CardContent sx={{ backgroundColor: '#0059B3', padding: 2 }}>
                <Typography variant="body2" align="center" color="text.primary">
                    {option}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Modelo04Preview;
