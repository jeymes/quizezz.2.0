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
import { Image, AddPhotoAlternate } from '@mui/icons-material';
import Header from '../../components/header';

type Modelo04EditProps = {
    control: any;
    index: number;
    activePageIndex: number;
    onClose: () => void;
};

const Modelo04Edit: React.FC<Modelo04EditProps> = ({
    control,
    index,
    activePageIndex,
    onClose,
}) => {
    return (
        <>
            {/* Cabeçalho */}
            <Header title="Image" icon={Image} onClose={onClose} />

            <Box display="flex" flexDirection="column" gap={2} padding={2}>
                {/* Card para Imagem */}
                <Card
                    variant="outlined"
                    sx={{
                        width: '100%',
                        border: '2px dashed gray',
                        borderRadius: 2,
                        padding: 2,
                    }}
                >
                    <CardContent>
                        <Controller
                            name={`pages.${activePageIndex}.models.${index}.options.image`}
                            control={control}
                            render={({ field }) => (
                                <>
                                    {field.value ? (
                                        <Avatar
                                            src={`${field.value.type ? URL.createObjectURL(field.value) : field.value}`}
                                            alt="Preview"
                                            sx={{ width: 100, height: 100, margin: '10px auto' }}
                                        />
                                    ) : (
                                        <IconButton
                                            component="label"
                                            sx={{
                                                display: 'block',
                                                backgroundColor: 'transparent',
                                                borderRadius: 0,
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                                    borderRadius: 0,
                                                },
                                            }}
                                        >
                                            <input
                                                type="file"
                                                accept="image/*"
                                                hidden
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        field.onChange(file);
                                                    }
                                                }}
                                            />
                                            <AddPhotoAlternate fontSize="large" />
                                        </IconButton>
                                    )}
                                </>
                            )}
                        />
                    </CardContent>
                </Card>

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

export default Modelo04Edit;
