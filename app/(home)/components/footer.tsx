import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SitemarkIcon from '../../components/sitemarkIcon';
import { Instagram, WhatsApp } from '@mui/icons-material';

function Copyright() {
    return (
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            {'Copyright © '}
            <Link color="text.secondary" href="/">
                Quizezz
            </Link>
            &nbsp;
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                        <SitemarkIcon />
                        <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
                            Crie Funis de Conversão com Quizzes
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Interativos e Aumente Suas Vendas
                        </Typography>
                        {/* <InputLabel htmlFor="email-newsletter">Email</InputLabel>
                        <Stack direction="row" spacing={1} useFlexGap>
                            <TextField
                                id="email-newsletter"
                                hiddenLabel
                                size="small"
                                variant="outlined"
                                fullWidth
                                aria-label="Enter your email address"
                                placeholder="Your email address"
                                slotProps={{
                                    htmlInput: {
                                        autoComplete: 'off',
                                        'aria-label': 'Enter your email address',
                                    },
                                }}
                                sx={{ width: '250px' }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                sx={{ flexShrink: 0 }}
                            >
                                Subscribe
                            </Button>
                        </Stack> */}
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                        Produtos
                    </Typography>
                    <Link
                        sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => {
                            document.getElementById('logoCollection')?.scrollIntoView({ behavior: 'smooth' });
                        }} color="text.secondary" variant="body2">
                        Plataformas
                    </Link>
                    <Link
                        sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => {
                            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                        }} color="text.secondary" variant="body2" href="#">
                        Como funciona?
                    </Link>
                    <Link
                        sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => {
                            document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' });
                        }} color="text.secondary" variant="body2" href="#">
                        Benefícios
                    </Link>
                    <Link
                        sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => {
                            document.getElementById('verticalLinearStepper')?.scrollIntoView({ behavior: 'smooth' });
                        }} color="text.secondary" variant="body2" href="#">
                        Para quem é?
                    </Link>
                    <Link
                        sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => {
                            document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                        }} color="text.secondary" variant="body2" href="#">
                        Depoimentos
                    </Link>
                    <Link
                        sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => {
                            document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                        }} color="text.secondary" variant="body2" href="#">
                        Planos
                    </Link>
                    <Link
                        sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => {
                            document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                        }} color="text.secondary" variant="body2" href="#">
                        FAQ
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                        Empresas
                    </Typography>
                    <Link sx={{ '&:hover': { color: 'primary.main' } }} color="text.secondary" variant="body2" href="https://buildingapps.com.br/">
                        Apps Building
                    </Link>
                    <Link sx={{ '&:hover': { color: 'primary.main' } }} color="text.secondary" variant="body2" href="https://abgymtips.com.br/">
                        Gym Tips
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                        Jurídico
                    </Typography>
                    <Link
                        color="text.secondary"
                        variant="body2"
                        href="/service-terms"
                        sx={{ '&:hover': { color: 'primary.main' } }}
                    >
                        Termos
                    </Link>

                    <Link color="text.secondary" variant="body2" href="/privacy-policy" sx={{ '&:hover': { color: 'primary.main' } }}>
                        Privacidade
                    </Link>
                    <Link color="text.secondary" variant="body2" sx={{ '&:hover': { color: 'primary.main' } }} href="https://api.whatsapp.com/send?phone=558695765920&text=Ol%C3%A1!%20tenho%20interesse%20e%20queria%20mais%20informa%C3%A7%C3%B5es,%20por%20favor.">
                        Contato
                    </Link>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>
                    <Link sx={{ '&:hover': { color: 'primary.main' } }} color="text.secondary" variant="body2" href="/privacy-policy">
                        Privacidade
                    </Link>
                    <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
                        &nbsp;•&nbsp;
                    </Typography>
                    <Link sx={{ '&:hover': { color: 'primary.main' } }} color="text.secondary" variant="body2" href="/service-terms">
                        Termos
                    </Link>
                    <Copyright />
                </div>
                <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{ justifyContent: 'left', color: 'text.secondary' }}
                >
                    <IconButton
                        color="inherit"
                        size="small"
                        href="https://www.instagram.com/quizezz.web/"
                        aria-label="Instagram"
                        sx={{ alignSelf: 'center' }}
                    >
                        <Instagram />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        size="small"
                        href="https://www.linkedin.com/in/jemersonsousa/"
                        aria-label="X"
                        sx={{ alignSelf: 'center' }}
                    >
                        <WhatsApp />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        size="small"
                        href="https://www.linkedin.com/in/jemersonsousa/"
                        aria-label="LinkedIn"
                        sx={{ alignSelf: 'center' }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}