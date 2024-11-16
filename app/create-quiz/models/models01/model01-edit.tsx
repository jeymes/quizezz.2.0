import React from 'react';
import {
    TextField,
    Box,
    Avatar,
    IconButton,
    Card,
    CardContent,
    Select,
    MenuItem,
    FormControl,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { AddPhotoAlternate, DragHandle } from '@mui/icons-material';
import Header from '../../components/header';

type Modelo01EditProps = {
    control: any;
    index: number;
    activePageIndex: number;
    onClose: () => void;
};

const Modelo01Edit: React.FC<Modelo01EditProps> = ({
    control,
    index,
    activePageIndex,
    onClose,
}) => {
    return (
        <>
            {/* Cabeçalho */}
            <Header title="Cabeçalho" icon={DragHandle} onClose={onClose} />

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
                                        <Avatar
                                            src={`${field.value.type ? URL.createObjectURL(field.value) : field.value}`}
                                            alt="Preview"
                                            sx={{ width: 100, height: 100, margin: '10px auto', borderRadius: 0, }}
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

                {/* Select para Posição da Logo */}
                <Controller
                    name={`pages.${activePageIndex}.models.${index}.options.justifyContent`} // Caminho atualizado para posição
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth variant="outlined" margin="normal">
                            <Select
                                {...field}
                                displayEmpty
                                renderValue={(value) =>
                                    value ? value : 'Selecione a posição'
                                }
                                inputProps={{
                                    'aria-label': 'Posição da Logo',
                                }}
                            >
                                <MenuItem value="left">Esquerda</MenuItem>
                                <MenuItem value="center">Centro</MenuItem>
                                <MenuItem value="right">Direita</MenuItem>
                            </Select>
                        </FormControl>
                    )}
                />
            </Box>
        </>
    );
};

export default Modelo01Edit;
