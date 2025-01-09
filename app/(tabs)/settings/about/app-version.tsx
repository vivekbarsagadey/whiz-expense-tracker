import { View, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import Constants from 'expo-constants';

export default function AppVersionScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title" style={styles.appName}>
          WhizExpense
        </ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.version}>
          Version {Constants.expoConfig?.version || '1.0.0'}
        </ThemedText>
        <ThemedText style={styles.buildNumber}>
          Build {Constants.expoConfig?.ios?.buildNumber || '1'}
        </ThemedText>
      </View>

      <View style={styles.footer}>
        <ThemedText style={styles.copyright}>
          © 2024 WhizExpense. All rights reserved.
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    marginBottom: 8,
  },
  version: {
    marginBottom: 4,
  },
  buildNumber: {
    color: '#666666',
  },
  footer: {
    padding: 16,
  },
  copyright: {
    textAlign: 'center',
    color: '#666666',
  },
}); 