import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";

import { useColorScheme } from '@/hooks/useColorScheme';
import { useAuthStore } from '@/stores/authStore';
import { useWelcomeScreen } from '@/hooks/useWelcomeScreen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const segments = useSegments();
  const router = useRouter();
  const { user, initializeAuth } = useAuthStore();
  const { hasSeenWelcome } = useWelcomeScreen();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    // Initialize authentication on app load
    initializeAuth();
  }, [initializeAuth]);

useEffect(() => {
  const isWelcomeScreen = segments[0] === '(welcome)';
  const isAuthScreen = segments[0] === '(auth)';

  console.log('Segments:', segments);
  console.log('Has Seen Welcome:', hasSeenWelcome);
  console.log("isWelcomeScreen", isWelcomeScreen);
  console.log("isAuthScreen", isAuthScreen);
  console.log('User:', user);

  if (!hasSeenWelcome) {
    if (!isWelcomeScreen) {
      console.log('Redirecting to welcome screen...');
      router.replace('/(welcome)/screen1');
    }
    // Redirect to welcome screen if not seen
    /* if (!isWelcomeScreen || !isOnScreen1) {
      console.log('Redirecting to welcome screen...');
      router.replace('/(welcome)/screen1');
    } */
    return; // Exit further logic since welcome screen logic is handled
  }

  if (user) {
    // Redirect authenticated users to home
    if (segments[0] !== '(tabs)') {
      console.log('Redirecting authenticated user to tabs...');
      router.replace('/(tabs)/(home)');
    }
  } else {
    // Redirect unauthenticated users to auth
    if (!isAuthScreen) {
      console.log('Redirecting unauthenticated user to auth...');
      router.replace('/(auth)/login'); // Change to your default auth page
    }
  }
}, [hasSeenWelcome, user, router, segments]);



  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(welcome)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
