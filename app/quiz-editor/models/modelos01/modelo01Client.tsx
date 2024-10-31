import React from 'react';
import { TextField, Button } from '@mui/material';

const Modelo01Cliente = ({ onUpload }) => {
    const [image, setImage] = React.useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Para pré-visualização
            onUpload(file); // Envia o arquivo para o pai
        }
    };

    return (
        <div>
            <TextField
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                inputProps={{ accept: 'image/*' }}
                variant="outlined"
                fullWidth
            />
            {image && (
                <img src={image} alt="Preview" style={{ width: '50%', borderRadius: '8px', marginTop: '10px' }} />
            )}
            <Button variant="contained" onClick={() => onUpload(image)} style={{ marginTop: '10px' }}>
                Subir Imagem
            </Button>
        </div>
    );
};

export default Modelo01Cliente;
