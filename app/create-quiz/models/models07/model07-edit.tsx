import React from 'react';
import {
    TextField,
    Box,
    Avatar,
    IconButton,
    Card,
    CardContent,
    Typography,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { TwitterPicker } from 'react-color';
import { Crop169, Crop32 } from '@mui/icons-material';
import Header from '../../components/header';

type Modelo07EditProps = {
    control: any;
    index: number;
    activePageIndex: number;
    onClose: () => void;
};

const Modelo07Edit: React.FC<Modelo07EditProps> = ({
    control,
    index,
    activePageIndex,
    onClose,
}) => {
    return (
        <>
            {/* Cabeçalho */}
            <Header title="Cartão GG" icon={Crop32} onClose={onClose} />

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
                {/* Input para Tamanho da Imagem */}
                <Controller
                    name={`pages.${activePageIndex}.models.${index}.options.description`}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Descrição"
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

export default Modelo07Edit;