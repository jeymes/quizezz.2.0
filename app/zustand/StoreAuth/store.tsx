import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '../../@types/types';

interface LoginState {
    userInfo: User | null;
    setUserInfo: (userInfo: User | null) => void;
}

// Use o middleware `persist` para persistir o estado no `localStorage`
export const useAuthStore = create<LoginState>()(
    persist(
        (set) => ({
            userInfo: null,
            setUserInfo: (userInfo) => set({ userInfo }),
        }),
        {
            name: 'login-storage', // Nome da chave no localStorage
            storage: createJSONStorage(() => localStorage), // Uso correto do localStorage
        }
    )
);
