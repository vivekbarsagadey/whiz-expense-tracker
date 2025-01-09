import { View, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Switch } from 'react-native';
import { useSettingsStore } from '@/stores/useSettingsStore';

const sharingOptions = [
  {
    id: 'dataSharing',
    title: 'Usage Data',
    description: 'Help improve the app by sharing anonymous usage data',
  },
  {
    id: 'analyticsEnabled',
    title: 'Analytics',
    description: 'Allow collection of analytics to improve your experience',
  },
  {
    id: 'personalization',
    title: 'Personalization',
    description: 'Enable personalized recommendations based on your usage',
  },
];

export default function DataSharingScreen() {
  const { privacy, updatePrivacy } = useSettingsStore();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.section}>
        {sharingOptions.map((option) => (
          <View key={option.id} style={styles.optionRow}>
            <View style={styles.optionInfo}>
              <ThemedText type="defaultSemiBold">{option.title}</ThemedText>
              <ThemedText type="default" style={styles.description}>
                {option.description}
              </ThemedText>
            </View>
            <Switch
              value={privacy[option.id as keyof typeof privacy]}
              onValueChange={(value) => 
                updatePrivacy({ [option.id]: value })
              }
            />
          </View>
        ))}
      </View>

      <ThemedText type="default" style={styles.privacyNote}>
        We value your privacy. Your data is always protected and never sold to third parties.
        Learn more in our Privacy Policy.
      </ThemedText>
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
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
  },
  optionInfo: {
    flex: 1,
    marginRight: 16,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  privacyNote: {
    marginTop: 16,
    textAlign: 'center',
    color: '#666666',
  },
}); 