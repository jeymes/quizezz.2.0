import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

interface Modelo05PreviewProps {
    option: any;
    backgroundColor: any;
    color: any;
}

const Modelo05Preview: React.FC<Modelo05PreviewProps> = ({ option, backgroundColor, color }) => {
    return (
        <Card sx={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CardContent sx={{ backgroundColor: backgroundColor ? backgroundColor : '#0059B3' }}>
                <Typography
                    variant="body2"
                    align="center"
                    color={color}
                >
                    {option}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Modelo05Preview;
