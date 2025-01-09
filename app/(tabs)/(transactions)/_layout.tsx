import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
        <Stack>
          {/* Define navigation screens */}
          <Stack.Screen 
            name="index" 
            options={{ 
              title: 'Transactions', 
              headerStyle: { backgroundColor: '#A1CEDC' }, 
              headerTintColor: '#fff' 
            }} 
          />
          <Stack.Screen 
            name="add-transaction" 
            options={{ 
              title: 'Add Transaction', 
              headerStyle: { backgroundColor: '#1D3D47' }, 
              headerTintColor: '#fff' 
            }} 
          />
        </Stack>
  );
}
