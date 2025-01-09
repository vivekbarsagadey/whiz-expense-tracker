import { View, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { Ionicons } from '@expo/vector-icons';

export default function ThemeScreen() {
  const { theme, updateTheme } = useSettingsStore();

  const themeOptions = [
    { label: 'Light', value: 'light' as const, icon: 'sunny-outline' },
    { label: 'Dark', value: 'dark' as const, icon: 'moon-outline' },
    { label: 'System', value: 'system' as const, icon: 'settings-outline' },
  ];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.section}>
        {themeOptions.map((option) => (
          <ThemedView
            key={option.value}
            style={[
              styles.option,
              theme.mode === option.value && styles.selectedOption,
            ]}
            onTouchEnd={() => updateTheme({ mode: option.value })}
          >
            <Ionicons name={option.icon as any} size={24} color="#007AFF" />
            <ThemedText style={styles.optionText}>{option.label}</ThemedText>
            {theme.mode === option.value && (
              <Ionicons name="checkmark" size={24} color="#007AFF" />
            )}
          </ThemedView>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
  },
  selectedOption: {
    backgroundColor: '#F8F8F8',
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
  },
}); 