import React from 'react';
import { Box, Avatar } from '@mui/material';

interface Modelo01PreviewProps {
    imageUrl: any;
}

const Modelo01Preview: React.FC<Modelo01PreviewProps> = ({ imageUrl }) => {

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
        >
            <Avatar
                src={`${imageUrl instanceof File ? URL.createObjectURL(imageUrl) : imageUrl}`}
                alt="Modelo"
                sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 1,
                }}
            />
        </Box>
    );
};

export default Modelo01Preview;
