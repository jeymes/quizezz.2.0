import React from 'react';
import { TextField, Box, Avatar, IconButton, Card, CardContent, Typography, Select, MenuItem, FormControl, InputLabel, AppBar, Toolbar } from '@mui/material';
import { Controller } from 'react-hook-form';
import { Close, AddPhotoAlternate, PhotoLibrary } from '@mui/icons-material';

type Modelo01EditProps = {
    control: any; // Controle do formulário vindo do useForm
    index: number; // Índice da pergunta
    optionIndex: number; // Índice da opção atual
    title: string; // Título do cabeçalho
    onClose: () => void; // Função para fechar
};

const Modelo01Edit: React.FC<Modelo01EditProps> = ({ control, index, optionIndex, title, onClose }) => {
    return (
        <>
            {/* Cabeçalho */}
            < AppBar position="static" >

                <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ gap: 5, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <PhotoLibrary />
                        <Typography variant="body2">{title}</Typography>
                    </div>
                    <IconButton edge="end" color="inherit" onClick={onClose}>
                        <Close />
                    </IconButton>
                </Toolbar>
            </ AppBar>
            <Box display="flex" flexDirection="column" gap={2} padding={2} >


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
                                        <IconButton
                                            component="label"
                                            sx={{
                                                display: 'block',
                                                backgroundColor: 'transparent',
                                                borderRadius: 0,
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                                    borderRadius: 0
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
                            <Select
                                {...field}
                                displayEmpty
                                renderValue={(value) => value ? value : 'Selecione a posição'}
                                // Para garantir que o espaço para o rótulo não seja exibido
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
