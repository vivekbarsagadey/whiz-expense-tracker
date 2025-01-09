import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      // Implement your login logic here
      // For demo purposes, we'll just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const user = { id: '1', email };
      await AsyncStorage.setItem('user', JSON.stringify(user));
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: 'Login failed', isLoading: false });
    }
  },

  register: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      // Implement your registration logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      const user = { id: '1', email };
      await AsyncStorage.setItem('user', JSON.stringify(user));
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: 'Registration failed', isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      await AsyncStorage.removeItem('user');
      set({ user: null, isLoading: false });
    } catch (error) {
      set({ error: 'Logout failed', isLoading: false });
    }
  },

  resetPassword: async (email: string) => {
    set({ isLoading: true, error: null });
    try {
      // Implement your password reset logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({ isLoading: false });
    } catch (error) {
      set({ error: 'Password reset failed', isLoading: false });
    }
  },
})); 