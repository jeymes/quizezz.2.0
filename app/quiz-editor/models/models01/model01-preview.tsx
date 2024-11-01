import React from 'react';
import { Box, Avatar } from '@mui/material';

interface Modelo01PreviewProps {
    imageUrl: string;
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
                src={imageUrl}
                alt="Modelo"
                sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 1, // Border radius com Material UI
                }}
            />
        </Box>
    );
};

export default Modelo01Preview;
