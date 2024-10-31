import React from 'react';
import { TextField, Button } from '@mui/material';

const Modelo03Edit = () => {

    return (
        <div>
            <TextField
                label="Total"
                type="text"
                style={{ marginBottom: '10px' }}
            />
            <Button variant="contained">
                Salvar
            </Button>
        </div>
    );
};

export default Modelo03Edit;
