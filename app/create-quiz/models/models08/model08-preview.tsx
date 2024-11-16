import React from 'react';
import { Button } from '@mui/material';

interface Modelo08PreviewProps {
    option: any;
    backgroundColor: any;
    color: any;
    onClick: any;
}

const Modelo08Preview: React.FC<Modelo08PreviewProps> = ({ option, backgroundColor, color, onClick }) => {
    return (
        <Button
            sx={{ backgroundColor: backgroundColor, color: color }}
            fullWidth
            variant="contained"
            onClick={onClick}
        >
            {option}
        </Button>
    );
};

export default Modelo08Preview;
