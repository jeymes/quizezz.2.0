import React from 'react';
import {
    TextField,
    Box,
    Typography,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { TwitterPicker } from 'react-color';
import DescriptionIcon from '@mui/icons-material/Description';
import Header from '../../components/header';
import { FormatQuote } from '@mui/icons-material';

type Modelo06EditProps = {
    control: any;
    index: number;
    activePageIndex: number;
    onClose: () => void;
};

const Modelo06Edit: React.FC<Modelo06EditProps> = ({
    control,
    index,
    activePageIndex,
    onClose,
}) => {
    return (
        <>
            {/* Cabeçalho */}
            <Header title="Descrição" icon={FormatQuote} onClose={onClose} />

            <Box display="flex" flexDirection="column" gap={2} padding={2}>

                {/* Input para Descrição (textarea) */}
                <Controller
                    name={`pages.${activePageIndex}.models.${index}.options.option`}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Descrição"
                            variant="outlined"
                            type="text"
                            fullWidth
                            margin="normal"
                            multiline
                            minRows={3}
                            maxRows={6}
                            placeholder="Digite a descrição aqui..."
                        />
                    )}
                />

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
                                    color={field.value || '#000000'}
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

export default Modelo06Edit;
