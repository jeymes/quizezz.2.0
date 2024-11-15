import React from 'react';
import { TextField, Box, Typography, Stack, styled, Switch } from '@mui/material';
import { Controller } from 'react-hook-form';
import Header from '../../components/header';
import { Commit } from '@mui/icons-material';
import { TwitterPicker } from 'react-color';

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

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: '#1890ff',
                    ...theme.applyStyles('dark', {
                        backgroundColor: '#177ddc',
                    }),
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
            ...theme.applyStyles('dark', {
                backgroundColor: 'rgba(255,255,255,.35)',
            }),
        },
    }));

    return (
        <>
            <Header title="Progress" icon={Commit} onClose={onClose} />
            <Box display="flex" flexDirection="column" gap={2} padding={2}>

                {/* Campo para totalPages */}
                <Controller
                    name={`pages.${activePageIndex}.models.${index}.options.totalPages`}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Total de Páginas"
                            type="number"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                inputProps: { min: 0 },
                            }}
                        />
                    )}
                />

                {/* Controle de Switch para `selected` */}
                <Typography variant="body2" sx={{ mt: 2 }}>Paginação</Typography>
                <Controller
                    name={`pages.${activePageIndex}.models.${index}.options.selected`}
                    control={control}
                    render={({ field }) => (
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography>Off</Typography>
                            <AntSwitch
                                checked={field.value || false}
                                onChange={(event) => field.onChange(event.target.checked)}
                                inputProps={{ 'aria-label': 'switch selecionado' }}
                            />
                            <Typography>On</Typography>
                        </Stack>
                    )}
                />
                {/* Seletor de Cor para o Texto */}
                <Box>
                    <Controller
                        name={`pages.${activePageIndex}.models.${index}.options.backgroundColor`}
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

export default Modelo02Edit;
