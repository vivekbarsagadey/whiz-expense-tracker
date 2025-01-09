import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HAS_SEEN_WELCOME_KEY = 'hasSeenWelcome';

interface WelcomeStore {
  hasSeenWelcome: boolean;
  setHasSeenWelcome: () => Promise<void>;
  checkWelcomeStatus: () => Promise<void>;
}

export const useWelcomeStore = create<WelcomeStore>((set) => ({
  hasSeenWelcome: false,
  setHasSeenWelcome: async () => {
    await AsyncStorage.setItem(HAS_SEEN_WELCOME_KEY, 'true');
    set({ hasSeenWelcome: true });
  },
  checkWelcomeStatus: async () => {
    try {
      const hasSeen = await AsyncStorage.getItem(HAS_SEEN_WELCOME_KEY);
      set({ hasSeenWelcome: hasSeen === 'true' });
    } catch (error) {
      console.error('Error checking welcome screen:', error);
    }
  },
})); 