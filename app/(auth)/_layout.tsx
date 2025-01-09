import { useEffect } from 'react';
import { Stack, router, useSegments } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthStore } from '@/stores/authStore';

export default function AuthLayout() {
    const segments = useSegments();

  useEffect(() => {
    if (segments[1] === undefined) {
      router.replace('/(auth)/login');
    }
  }, [segments, router]);
  

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="forgot-password" />
    </Stack>
  );
} 