import { View, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Switch } from 'react-native';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { Ionicons } from '@expo/vector-icons';

const permissions = [
  {
    id: 'camera',
    title: 'Camera',
    description: 'Access to take photos for receipts',
    icon: 'camera-outline',
  },
  {
    id: 'location',
    title: 'Location',
    description: 'Tag expenses with location data',
    icon: 'location-outline',
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Receive important updates and reminders',
    icon: 'notifications-outline',
  },
  {
    id: 'contacts',
    title: 'Contacts',
    description: 'Share expenses with contacts',
    icon: 'people-outline',
  },
];

export default function PermissionsScreen() {
  const { privacy, updatePrivacy } = useSettingsStore();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.section}>
        {permissions.map((permission) => (
          <View key={permission.id} style={styles.permissionRow}>
            <View style={styles.permissionInfo}>
              <Ionicons name={permission.icon as any} size={24} color="#007AFF" />
              <View style={styles.permissionText}>
                <ThemedText type="defaultSemiBold">{permission.title}</ThemedText>
                <ThemedText type="default" style={styles.description}>
                  {permission.description}
                </ThemedText>
              </View>
            </View>
            <Switch
              value={privacy[permission.id as keyof typeof privacy] || false}
              onValueChange={(value) => 
                updatePrivacy({ [permission.id]: value })
              }
            />
          </View>
        ))}
      </View>
      
      <ThemedText type="default" style={styles.note}>
        You can modify these permissions at any time in your device settings.
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
  permissionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
  },
  permissionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 16,
  },
  permissionText: {
    marginLeft: 12,
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: '#666666',
  },
  note: {
    marginTop: 16,
    textAlign: 'center',
    color: '#666666',
  },
}); 