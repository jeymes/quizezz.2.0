import React from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import Header from '../../components/header';
import { TwitterPicker } from 'react-color'; // Importa o seletor de cores
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
    onClose,
}) => {
    return (
        <>
            <Header title="Titulo" icon={TextFields} onClose={onClose} />

            <Box display="flex" flexDirection="column" gap={2} padding={2}>
                {/* Campo de texto */}
                <Controller
                    name={`pages.${activePageIndex}.models.${index}.options.option`}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Título"
                            type="text"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                {/* Seletor de cor controlado pelo Controller */}
                <Box >
                    <Controller
                        name={`pages.${activePageIndex}.models.${index}.options.color`}
                        control={control}
                        render={({ field }) => (
                            <>
                                <Typography paddingBottom={2} variant="body2" component="div">
                                    Cor do Texto
                                </Typography>
                                <TwitterPicker
                                    color={field.value || '#ffffff'}
                                    onChange={(color) => field.onChange(color.hex)}
                                />
                            </>
                        )}
                    />
                </Box>
            </Box>
        </>
    );
};

export default Modelo03Edit;
