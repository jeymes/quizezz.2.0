import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import gifApresentacion from '../../../assets/img/ImgApp/gifApresentacion.gif';
import { Container } from '@mui/material';

const steps = [
    {
        label: 'Para quem quer melhorar a satisfação do cliente',
        description: 'Ideal para empresas e profissionais que buscam entender melhor seus clientes e aprimorar a experiência oferecida.',
    },
    {
        label: 'Para quem quer conhecer melhor seu público',
        description: 'Perfeito para quem deseja obter informações valiosas sobre o comportamento e preferências de clientes ou seguidores.',
    },
    {
        label: 'Para quem faz pesquisas e precisa de dados',
        description: 'Essencial para empresas, profissionais e pesquisadores que precisam coletar insights por meio de questionários e pesquisas de mercado.',
    },
    {
        label: 'Para quem quer entreter e vender ao mesmo tempo',
        description: 'Ótimo para engajar seu público com quizzes interativos, oferecendo entretenimento e, ao mesmo tempo, promovendo produtos ou serviços.',
    }
];


export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Container
            id='verticalLinearStepper'
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Box sx={{ width: { sm: '100%', md: '90%' } }}>
                <Typography
                    component="h2"
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontSize: { xs: 25, sm: 30 },
                        fontWeight: 700,
                    }}
                >
                    Para quem é o Quizezz?
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: { xs: 2, sm: 4 },
                        fontWeight: 500,
                        fontSize: 17,
                    }}
                >
                    O Quizezz é ideal para uma ampla variedade de pessoas e empresas que precisam criar questionários ou realizar pesquisas.
                </Typography>
            </Box>
            <Box
                sx={{ flexDirection: { sm: 'row', xs: 'column' }, display: 'flex' }}
            >
                <Box
                    sx={{
                        pt: { xs: 4, sm: 4 },
                        borderRadius: 8,
                        width: { xs: '100%', sm: '50%' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={gifApresentacion.src}
                        style={{ width: '100%', height: 'auto', marginBottom: 20 }}
                    />
                </Box>

                <Box sx={{ maxWidth: '100%' }}>

                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel

                                    optional={
                                        index === steps.length - 1 ? (
                                            <Typography variant="caption">Última etapa</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Voltar
                                        </Button>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>Todas as etapas concluídas</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reiniciar
                            </Button>
                        </Paper>
                    )}
                </Box>
            </Box>
        </Container>
    );
}
