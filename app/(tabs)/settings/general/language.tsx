import { View, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { Ionicons } from '@expo/vector-icons';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
];

export default function LanguageScreen() {
  const { language, updateLanguage } = useSettingsStore();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.section}>
        {languages.map((lang) => (
          <ThemedView
            key={lang.code}
            style={[
              styles.option,
              language.currentLanguage === lang.code && styles.selectedOption,
            ]}
            onTouchEnd={() => updateLanguage({ currentLanguage: lang.code })}
          >
            <ThemedText style={styles.optionText}>{lang.label}</ThemedText>
            {language.currentLanguage === lang.code && (
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
  },
}); 