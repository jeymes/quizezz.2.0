import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Modelo02Edit = () => {

    return (
        <div>
            <TextField
                label="Total de Páginas"
                type="number"
                value={50}
                style={{ marginBottom: '10px' }}
            />
            <Button variant="contained">
                Atualizar Progresso
            </Button>
        </div>
    );
};

export default Modelo02Edit;
