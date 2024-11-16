import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { QuizData } from '../../../@types/types';

interface QuizState {
    quizFlowData: QuizData[] | null; // Dados do quiz (array de quizzes)
    setQuizFlowData: (data: QuizData[] | null) => void; // Função para atualizar os dados do quiz
}

// Use o middleware `persist` para persistir o estado no `localStorage`
export const useStoreCardFlowQuiz = create<QuizState>()(
    persist(
        (set) => ({
            quizFlowData: [],
            setQuizFlowData: (data) => set({ quizFlowData: data }), // Atualizando para array de quizzes
        }),
        {
            name: 'card-flow-quiz', // Nome da chave no localStorage
            storage: createJSONStorage(() => localStorage), // Uso correto do localStorage
        }
    )
);
