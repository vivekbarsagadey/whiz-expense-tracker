import { useEffect } from 'react';
import { useRouter, useSegments } from 'expo-router';
import { useAuthStore } from '@/stores/authStore';
import { useWelcomeStore } from '@/stores/useWelcomeStore';

export function useAuthNavigation() {
  const segments = useSegments();
  const router = useRouter();
  const { user, initializeAuth } = useAuthStore();
  const { hasSeenWelcome, checkWelcomeStatus } = useWelcomeStore();

  // Initialize auth on mount
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  // Handle navigation based on auth state and welcome screen status
  useEffect(() => {
    const isWelcomeScreen = segments[0] === '(welcome)';
    const isAuthScreen = segments[0] === '(auth)';
    
    if (!hasSeenWelcome) {
      if (!isWelcomeScreen) {
        router.replace('/(welcome)/screen1');
      }
      return;
    }

    if (user) {
      if (segments[0] !== '(tabs)') {
        console.log('Redirecting authenticated user to tabs...');
        router.replace('/(tabs)/(home)');
      }
    } else {
      if (!isAuthScreen) {
        console.log('Redirecting unauthenticated user to auth...');
        router.replace('/(auth)/login');
      }
    }
  }, [hasSeenWelcome, user, router, segments]);

  return {
    user,
    hasSeenWelcome,
    checkWelcomeStatus,
  };
} 