import { Box, Container, Typography, Link, CssBaseline } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Sitemark from '../components/sitemarkIcon';

export default function PrivacyPolicy(props: { disableCustomTheme?: boolean }) {
    return (
        <Container
            sx={{
                pt: { xs: 4, sm: 5 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: { xs: 3, sm: 1 },
            }}
        >
            <CssBaseline enableColorScheme />

            <Sitemark />

            <Box sx={{ marginTop: 2 }}>
                <Link href="/" sx={{ textDecoration: 'none', color: 'primary.main', display: 'inline-flex', alignItems: 'center', mb: 2 }}>
                    <ArrowBackIcon sx={{ marginRight: 1 }} />
                    <Typography variant="body1">Voltar</Typography>
                </Link>

                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Política de Privacidade
                </Typography>

                <Typography variant="body1" sx={{ mb: 2 }}>
                    A sua privacidade é importante para nós. É política do quizezz respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site quizezz, e outros sites que possuímos e operamos.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
                    <br /><br />
                    O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
                    <br /><br />
                    Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
                    <br /><br />
                    Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
                    <br /><br />
                    Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'medium', color: 'primary.main', mb: 1 }}>
                    Compromisso do Usuário
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o quizezz oferece no site e com caráter enunciativo, mas não limitativo:
                    <br /><br />
                    A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
                    <br /><br />
                    B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, kiwibet ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                    <br /><br />
                    C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do quizezz, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'medium', color: 'primary.main', mb: 1 }}>
                    Mais informações
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                </Typography>
                <Typography variant="body1">
                    Esta política é efetiva a partir de 27 de Setembro de 2024 22:26
                </Typography>
            </Box>
        </Container>
    );
}