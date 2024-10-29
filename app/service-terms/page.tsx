import { Box, Container, Typography, Link, CssBaseline } from '@mui/material';
import Sitemark from '../components/sitemarkIcon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ServiceTerms() {
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

            <Box sx={{ marginTop: 4 }}>
                <Link href="/" sx={{ textDecoration: 'none', mb: 2, display: 'inline-flex', alignItems: 'center', color: 'primary.main' }}>
                    <ArrowBackIcon sx={{ marginRight: 1 }} />
                    Voltar
                </Link>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Termos de Serviço
                </Typography>

                {/* Estilizando o texto com cores diferentes */}
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Ao acessar o site quizezz, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 'medium', color: 'primary.main', mb: 1 }}>
                    1. Uso de Licença
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site quizezz, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                    <br /><br />
                    modificar ou copiar os materiais;
                    <br /><br />
                    usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);
                    <br /><br />
                    tentar descompilar ou fazer engenharia reversa de qualquer software contido no site quizezz;
                    <br /><br />
                    remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou
                    <br /><br />
                    transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
                    <br /><br />
                    Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por quizezz a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 'medium', color: 'primary.main', mb: 1 }}>
                    2. Isenção de responsabilidade
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Os materiais no site da quizezz são fornecidos 'como estão'. quizezz não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                    <br /><br />
                    Além disso, o quizezz não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 'medium', color: 'primary.main', mb: 1 }}>
                    3. Limitações
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Em nenhum caso o quizezz ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em quizezz, mesmo que quizezz ou um representante autorizado da quizezz tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                    <br /><br />
                    Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 'medium', color: 'primary.main', mb: 1 }}>
                    4. Precisão dos materiais
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Os materiais exibidos no site da quizezz podem incluir erros técnicos, tipográficos ou fotográficos. quizezz não garante que qualquer material em seu site seja preciso, completo ou atual. quizezz pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, quizezz não se compromete a atualizar os materiais.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 'medium', color: 'primary.main', mb: 1 }}>
                    5. Links
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    O quizezz não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosse por quizezz do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 'medium', color: 'primary.main', mb: 1 }}>
                    6. Modificações
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    O quizezz pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 'medium', color: 'primary.main', mb: 1 }}>
                    7. Lei aplicável
                </Typography>
                <Typography variant="body1">
                    Estes termos e condições são regidos e interpretados de acordo com as leis do quizezz e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                </Typography>
            </Box>
        </Container>
    );
}
