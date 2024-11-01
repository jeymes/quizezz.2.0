import React from 'react';
import { TextField, Box, Avatar, IconButton, Card, CardContent, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import { PlusOne } from '@mui/icons-material';

type Modelo01EditProps = {
    control: any; // Controle do formulário vindo do useForm
    index: number; // Índice da pergunta
    optionIndex: number; // Índice da opção atual
};

const Modelo01Edit: React.FC<Modelo01EditProps> = ({ control, index, optionIndex }) => {
    return (
        <Box display="flex" alignItems="center" flexDirection="column" gap={2}>
            {/* Card pontilhado para upload da imagem */}
            <Card
                variant="outlined"
                sx={{
                    width: '100%',
                    border: '2px dashed gray',
                    borderRadius: 2,
                }}
            >
                <CardContent>
                    <Controller
                        name={`questions.${index}.options.${optionIndex}.image`} // Nome do campo no formulário
                        control={control}
                        render={({ field }) => (
                            <>
                                {field.value ? (
                                    <Avatar
                                        src={typeof field.value === 'string' ? field.value : URL.createObjectURL(field.value)}
                                        alt="Preview"
                                        sx={{ width: 100, height: 100, margin: '10px auto' }}
                                    />
                                ) : (
                                    <IconButton component="label" sx={{ display: 'block', margin: '20px auto' }}>
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
                                        <PlusOne fontSize="medium" />
                                    </IconButton>
                                )}
                            </>
                        )}
                    />
                </CardContent>
            </Card>

            {/* Input para tamanho da logo */}
            <Controller
                name={`questions.${index}.options.${optionIndex}.size`} // Nome do campo no formulário
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Tamanho da Logo (px)"
                        variant="outlined"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            {/* Select para posição da logo */}
            <Controller
                name={`questions.${index}.options.${optionIndex}.position`} // Nome do campo no formulário
                control={control}
                render={({ field }) => (
                    <FormControl fullWidth variant="outlined" margin="normal">
                        <InputLabel id={`position-label-${index}-${optionIndex}`}>Posição da Logo</InputLabel>
                        <Select
                            {...field}
                            labelId={`position-label-${index}-${optionIndex}`}
                            label="Posição da Logo"
                            displayEmpty
                            renderValue={(value) => value ? value : 'Selecione a posição'}
                        >
                            <MenuItem value="left">Esquerda</MenuItem>
                            <MenuItem value="center">Centro</MenuItem>
                            <MenuItem value="right">Direita</MenuItem>
                        </Select>
                    </FormControl>
                )}
            />
        </Box>
    );
};

export default Modelo01Edit;
