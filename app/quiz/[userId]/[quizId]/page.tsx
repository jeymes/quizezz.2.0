'use client'

import { useParams } from 'next/navigation'; // Importar useParams do next/navigation

const QuizPage = () => {
    const params = useParams(); // Obter os parâmetros da URL

    const { userId, quizId } = params; // Extrair os parâmetros

    console.log('userId:', userId);
    console.log('quizId:', quizId);

    return (
        <div>
            <h1>Quiz do Usuário: {userId}</h1>
            <p>Quiz ID: {quizId}</p>
        </div>
    );
};

export default QuizPage;

