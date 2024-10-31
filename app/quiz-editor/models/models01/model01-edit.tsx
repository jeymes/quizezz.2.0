import React from 'react';
import { TextField, Button } from '@mui/material';

const Modelo01Edit = () => {
    const [image, setImage] = React.useState(null);


    return (
        <div>
            <TextField
                type="file"
                inputProps={{ accept: 'image/*' }}
                variant="outlined"
                fullWidth
            />
            {image && (
                <img src={image} alt="Preview" style={{ width: '50%', borderRadius: '8px', marginTop: '10px' }} />
            )}
            <Button variant="contained"
            >
                Subir Imagem
            </Button>
        </div>
    );
};

export default Modelo01Edit;
