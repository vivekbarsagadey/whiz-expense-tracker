import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import HomeView from '@/components/HomeView';
import { HeaderContainer } from '@/components/transaction/HeaderContainer';
import { ActionButtons } from '@/components/transaction/ActionButtons';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <HomeView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerContainer={<HeaderContainer />}
      actionButtons={<ActionButtons />}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">This is Home Page</ThemedText>
      </ThemedView>
    </HomeView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  floatingButton: {
    position: "sticky",
    // Place the button a bit above the bottom of the screen (or the tab bar).
    bottom: 70,
    alignSelf: "center", // center horizontally
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    // Example shadow/elevation
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 6,
  },
  plusText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
});
