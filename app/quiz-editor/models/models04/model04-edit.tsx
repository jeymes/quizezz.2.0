import React from 'react';
import { TextField, Button } from '@mui/material';

const Modelo04Edit = () => {
    const [image, setImage] = React.useState(null);

    return (
        <div>
            <TextField
                type="file"
                variant="outlined"
                fullWidth
            />
            {image && (
                <img src={image} alt="Preview" style={{ width: '50%', borderRadius: '8px', marginTop: '10px' }} />
            )}
            <Button variant="contained"
                style={{ marginTop: '10px' }}
            >
                Subir Imagem
            </Button>
        </div>
    );
};

export default Modelo04Edit;
