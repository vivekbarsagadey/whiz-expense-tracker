import { useEffect } from 'react';
import { useWelcomeStore } from '@/stores/useWelcomeStore';

export function useWelcomeScreen() {
  const { setHasSeenWelcome, checkWelcomeStatus } = useWelcomeStore();

  useEffect(() => {
    checkWelcomeStatus();
  }, []);

  return { setHasSeenWelcomeTrue: setHasSeenWelcome };
}
