import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { QuizData } from '../../@types/types';

interface QuizState {
    quizDataResponse: QuizData[] | null; // Dados do quiz (array de quizzes)
    setQuizDataResponse: (data: QuizData[] | null) => void; // Função para atualizar os dados do quiz
    loadingResponse: boolean; // Estado de carregamento
    setLoadingResponse: (loading: boolean) => void; // Função para atualizar o estado de carregamento
}

// Use o middleware `persist` para persistir o estado no `localStorage`
export const useQuizResponseStore = create<QuizState>()(
    persist(
        (set) => ({
            quizDataResponse: null,
            setQuizDataResponse: (data) => set({ quizDataResponse: data }), // Atualizando para array de quizzes
            loadingResponse: false,
            setLoadingResponse: (loadingResponse) => set({ loadingResponse }),
        }),
        {
            name: 'quiz-response-storage', // Nome da chave no localStorage
            storage: createJSONStorage(() => localStorage), // Uso correto do localStorage

        }
    )
);
