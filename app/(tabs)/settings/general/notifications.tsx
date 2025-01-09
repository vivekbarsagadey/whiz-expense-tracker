import { View, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Switch } from 'react-native';
import { useSettingsStore } from '@/stores/useSettingsStore';

export default function NotificationsScreen() {
  const { notifications, updateNotifications } = useSettingsStore();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.row}>
          <ThemedText>Push Notifications</ThemedText>
          <Switch
            value={notifications.pushEnabled}
            onValueChange={(value) => updateNotifications({ pushEnabled: value })}
          />
        </View>
        <View style={styles.row}>
          <ThemedText>Email Notifications</ThemedText>
          <Switch
            value={notifications.emailEnabled}
            onValueChange={(value) => updateNotifications({ emailEnabled: value })}
          />
        </View>
        <View style={styles.row}>
          <ThemedText>Marketing Communications</ThemedText>
          <Switch
            value={notifications.marketingEnabled}
            onValueChange={(value) => updateNotifications({ marketingEnabled: value })}
          />
        </View>
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
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
  },
}); 