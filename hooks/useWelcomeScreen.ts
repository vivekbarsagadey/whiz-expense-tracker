import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HAS_SEEN_WELCOME_KEY = 'hasSeenWelcome';

export function useWelcomeScreen() {
    const [hasSeenWelcome, setHasSeenWelcome] = useState(false);
    
    // for setting true this will external call 
    const setHasSeenWelcomeTrue = async () => {
        await AsyncStorage.setItem(HAS_SEEN_WELCOME_KEY, 'true');
        setHasSeenWelcome(true);
    }

  useEffect(() => {
    const checkWelcomeScreen = async () => {
      try {
        const hasSeen = await AsyncStorage.getItem(HAS_SEEN_WELCOME_KEY);
        setHasSeenWelcome(hasSeen === 'true');
      } catch (error) {
        console.error('Error checking welcome screen:', error);
      }
    };

    checkWelcomeScreen();
  }, []);

  return { hasSeenWelcome, setHasSeenWelcomeTrue };
}
