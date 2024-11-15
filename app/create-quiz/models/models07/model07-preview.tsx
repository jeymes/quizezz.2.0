import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

interface Modelo07PreviewProps {
    option: any;
    backgroundColor: any;
    color: any;
    description: any;
}

const Modelo07Preview: React.FC<Modelo07PreviewProps> = ({ option, backgroundColor, color, description }) => {
    return (
        <Card sx={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <CardContent sx={{ backgroundColor: backgroundColor ? backgroundColor : '#0059B3' }}>

                <Typography
                    variant="body2"
                    align="center"
                    color={color}
                >
                    {option}
                </Typography>

                <Typography
                    variant="caption"
                    align="center"
                    color={color}
                >
                    {description}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default Modelo07Preview;
