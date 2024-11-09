import React from 'react';
import { TextField, Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import Header from '../../components/header';
import { Commit } from '@mui/icons-material';

type Modelo02EditProps = {
    control: any;
    index: number;
    activePageIndex: number;
    onClose: () => void;
};

const Modelo02Edit: React.FC<Modelo02EditProps> = ({
    control,
    index,
    activePageIndex,
    onClose,
}) => {
    return (
        <>
            <Header title="Progress" icon={Commit} onClose={onClose} />
            <Box display="flex" flexDirection="column" gap={2} padding={2}>

                <Controller
                    name={`pages.${activePageIndex}.models.${index}.options.totalPages`} // Nome do campo
                    control={control} // Controle do react-hook-form
                    render={({ field }) => (
                        <TextField
                            {...field} // Espalhar as propriedades do campo
                            label="Total de Páginas"
                            type="number"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                inputProps: { min: 0 }, // Permitir apenas números positivos
                            }}
                        />
                    )}
                />

            </Box>
        </>

    );
};

export default Modelo02Edit;
