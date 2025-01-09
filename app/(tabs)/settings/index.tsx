import { ScrollView, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { SettingsMenu } from '@/components/settings/SettingsMenu';

export default function SettingsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <SettingsMenu />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 