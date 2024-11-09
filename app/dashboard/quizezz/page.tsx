"use client";

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Typography, Box, Grid, Button, Card, CardContent, CardActions, IconButton } from '@mui/material';
import { useQuizStore } from '../../zustand/StoreQuiz/store';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BarChartIcon from '@mui/icons-material/BarChart';
import QuizIcon from '@mui/icons-material/Quiz';
import { EnergySavingsLeaf, PlayCircle } from '@mui/icons-material';

const Quizezz = () => {
    const { quizData } = useQuizStore();
    const router = useRouter();

    console.log("quizData", quizData)

    const handlePlayClick = (quizLink: string) => {
        router.push(quizLink);  // Navigates to the quiz link
    };

    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                    Meus Quizzes
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    sx={{ textTransform: 'none' }}
                    onClick={() => router.push('/create-quiz')}
                >
                    Criar Quiz
                </Button>
            </Box>

            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Card sx={{ width: 300, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h6" component="div">
                            {quizData.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton color="primary" onClick={() => handlePlayClick(quizData.quizLink)}>
                            <PlayCircle />
                        </IconButton>
                        <IconButton color="primary" onClick={() => console.log('Editar quiz')}>
                            <EditIcon />
                        </IconButton>
                        <IconButton color="secondary" onClick={() => console.log('Deletar quiz')}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton color="default" onClick={() => console.log('Ver relatório do quiz')}>
                            <BarChartIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </Box>
    );
};

export default Quizezz;


// "use client";

// import * as React from 'react';
// import { useRouter } from 'next/navigation';
// import { Typography, Box, Grid, Button, Card, CardContent, CardActions, IconButton } from '@mui/material';
// import { useQuizStore } from '../../zustand/StoreQuiz/store';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import QuizIcon from '@mui/icons-material/Quiz';

// const Quizezz = () => {
//     const { quizData } = useQuizStore();
//     const router = useRouter();

//     console.log("quizData", quizData);

//     return (
//         <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//                 <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
//                     Meus Quizzes
//                 </Typography>
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     startIcon={<AddIcon />}
//                     sx={{ textTransform: 'none' }}
//                     onClick={() => router.push('/create-quiz')}
//                 >
//                     Criar Quiz
//                 </Button>
//             </Box>

//             <Grid container spacing={3}>
//                 {quizData?.edges && quizData.edges.length > 0 ? (
//                     quizData.edges.map((quiz, index) => (
//                         <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                             <Card sx={{ width: 300, height: '100%', display: 'flex', flexDirection: 'column' }}>
//                                 <CardContent sx={{ flexGrow: 1 }}>
//                                     <Typography gutterBottom variant="h6" component="div">
//                                         {quiz.title}
//                                     </Typography>
//                                 </CardContent>
//                                 <CardActions>
//                                     <IconButton color="primary" onClick={() => console.log('Editar quiz')}>
//                                         <EditIcon />
//                                     </IconButton>
//                                     <IconButton color="secondary" onClick={() => console.log('Deletar quiz')}>
//                                         <DeleteIcon />
//                                     </IconButton>
//                                     <IconButton color="default" onClick={() => console.log('Ver relatório do quiz')}>
//                                         <BarChartIcon />
//                                     </IconButton>
//                                 </CardActions>
//                             </Card>
//                         </Grid>
//                     ))
//                 ) : (
//                     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', width: '100%' }}>
//                         <QuizIcon sx={{ fontSize: 40, mr: 1, color: 'text.secondary' }} />
//                         <Typography variant="body1" color="text.secondary">
//                             Nenhum quiz encontrado.
//                         </Typography>
//                     </Box>
//                 )}
//             </Grid>
//         </Box>
//     );
// };

// export default Quizezz;
