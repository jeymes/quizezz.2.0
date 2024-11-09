import React from 'react';
import { TextField, Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import Header from '../../components/header';
import { TextFields } from '@mui/icons-material';

type Modelo03EditProps = {
    control: any;
    index: number;
    activePageIndex: number;
    onClose: () => void;
};

const Modelo03Edit: React.FC<Modelo03EditProps> = ({
    control,
    index,
    activePageIndex,
    onClose, }) => {
    return (
        <>
            <Header title="Titulo" icon={TextFields} onClose={onClose} />

            <Box display="flex" flexDirection="column" gap={2} padding={2}>
                <Controller
                    name={`pages.${activePageIndex}.models.${index}.options.option`} // Nome do campo
                    control={control} // Controle do react-hook-form
                    render={({ field }) => (
                        <TextField
                            {...field} // Espalha as propriedades do campo
                            label="Título"
                            type="text"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
            </Box>
        </>
    );
};

export default Modelo03Edit;
