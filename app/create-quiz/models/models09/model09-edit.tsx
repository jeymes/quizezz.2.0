import React from 'react';
import {
    TextField,
    Box,
    Avatar,
    IconButton,
    Card,
    CardContent,
    Typography,
    Autocomplete,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { TwitterPicker } from 'react-color';
import { Image, AddPhotoAlternate, Panorama } from '@mui/icons-material';
import Header from '../../components/header';

type Modelo09EditProps = {
    control: any;
    index: number;
    activePageIndex: number;
    onClose: () => void;
};

const options = ['100%', '50%', '25%',]; // Lista de sugestões

const Modelo09Edit: React.FC<Modelo09EditProps> = ({
    control,
    index,
    activePageIndex,
    onClose,
}) => {
    return (
        <>
            {/* Cabeçalho */}
            <Header title="Banner" icon={Panorama} onClose={onClose} />

            <Box display="flex" flexDirection="column" gap={2} padding={2}>
                {/* Card para Imagem */}
                <Card
                    variant="outlined"
                    sx={{
                        width: '100%',
                        border: '2px dashed gray',
                    }}
                >
                    <CardContent>
                        <Controller
                            name={`pages.${activePageIndex}.models.${index}.options.image`}
                            control={control}
                            render={({ field }) => (
                                <>
                                    {field.value ? (
                                        <img
                                            src={`${field.value.type ? URL.createObjectURL(field.value) : field.value}`}
                                            alt="Preview"
                                            style={{ width: '100%', margin: '10px auto' }}
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

                {/* Autocomplete */}
                <Box>
                    <Controller
                        name={`pages.${activePageIndex}.models.${index}.options.width`}
                        control={control}
                        render={({ field }) => (
                            <Autocomplete
                                sx={{ paddingTop: 2 }}
                                options={options}
                                renderInput={(params) => (
                                    <TextField {...params} label="Tamanho" variant="outlined" />
                                )}
                                value={field.value || '100%'}
                                onChange={(_, value) => field.onChange(value)}
                            />
                        )}
                    />
                </Box>
            </Box>
        </>
    );
};

export default Modelo09Edit;
