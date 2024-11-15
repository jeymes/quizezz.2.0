import React from 'react';
import {
    TextField,
    Box,
    Typography,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { TwitterPicker } from 'react-color';
import { Crop32 } from '@mui/icons-material';
import Header from '../../components/header';

type Modelo08EditProps = {
    control: any;
    index: number;
    activePageIndex: number;
    onClose: () => void;
};

const Modelo08Edit: React.FC<Modelo08EditProps> = ({
    control,
    index,
    activePageIndex,
    onClose,
}) => {
    return (
        <>
            {/* Cabeçalho */}
            <Header title="Cartão" icon={Crop32} onClose={onClose} />

            <Box display="flex" flexDirection="column" gap={2} padding={2}>

                {/* Input para Tamanho da Imagem */}

                <Controller
                    name={`pages.${activePageIndex}.models.${index}.options.option`}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Texto"
                            variant="outlined"
                            type="text"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name={`pages.${activePageIndex}.models.${index}.options.link`}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Link"
                            variant="outlined"
                            type="text"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                {/* Seletor de Cor para o Background */}

                <Box>
                    <Controller
                        name={`pages.${activePageIndex}.models.${index}.options.backgroundColor`}
                        control={control}
                        render={({ field }) => (
                            <>
                                <Typography paddingBottom={2} variant="body2" component="div">
                                    Cor de Fundo
                                </Typography>
                                <TwitterPicker
                                    color={field.value || '#ffffff'}
                                    onChange={(color) => field.onChange(color.hex)}
                                />
                            </>
                        )}
                    />
                </Box>

                {/* Seletor de Cor para o Texto */}

                <Box>
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

export default Modelo08Edit;
