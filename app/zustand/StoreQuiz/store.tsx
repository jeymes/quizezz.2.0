import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { QuizData } from '../../../@types/types';

interface QuizState {
    quizData: QuizData[] | null; // Dados do quiz (array de quizzes)
    setQuizData: (data: QuizData[] | null) => void; // Função para atualizar os dados do quiz
    loadingQuiz: boolean; // Estado de carregamento
    setLoadingQuiz: (loading: boolean) => void; // Função para atualizar o estado de carregamento
}

// Use o middleware `persist` para persistir o estado no `localStorage`
export const useQuizStore = create<QuizState>()(
    persist(
        (set) => ({
            quizData: null,
            setQuizData: (data) => set({ quizData: data }), // Atualizando para array de quizzes
            loadingQuiz: false,
            setLoadingQuiz: (loadingQuiz) => set({ loadingQuiz }),
        }),
        {
            name: 'quiz-storage', // Nome da chave no localStorage
            storage: createJSONStorage(() => localStorage), // Uso correto do localStorage

        }
    )
);
