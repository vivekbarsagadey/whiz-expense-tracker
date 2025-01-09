import { Stack } from 'expo-router';

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
