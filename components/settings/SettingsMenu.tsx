import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface MenuItem {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  href: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const settingsMenu: MenuSection[] = [
  {
    title: 'Profile',
    items: [
      { title: 'Profile Settings', icon: 'person-outline', href: '/(tabs)/settings/profile' },
    ],
  },
  {
    title: 'General',
    items: [
      { title: 'Notifications', icon: 'notifications-outline', href: '/(tabs)/settings/general/notifications' },
      { title: 'Language', icon: 'language-outline', href: '/(tabs)/settings/general/language' },
      { title: 'Theme', icon: 'color-palette-outline', href: '/(tabs)/settings/general/theme' },
    ],
  },
  {
    title: 'Account',
    items: [
      { title: 'Change Password', icon: 'lock-closed-outline', href: '/(tabs)/settings/account/change-password' },
      { title: 'Linked Accounts', icon: 'link-outline', href: '/(tabs)/settings/account/linked-accounts' },
      { title: 'Subscription', icon: 'card-outline', href: '/(tabs)/settings/account/subscription' },
    ],
  },
  {
    title: 'Privacy',
    items: [
      { title: 'Permissions', icon: 'shield-outline', href: '/(tabs)/settings/privacy/permissions' },
      { title: 'Data Sharing', icon: 'share-outline', href: '/(tabs)/settings/privacy/data-sharing' },
      { title: 'Delete Account', icon: 'trash-outline', href: '/(tabs)/settings/privacy/delete-account' },
    ],
  },
  {
    title: 'Support',
    items: [
      { title: 'FAQs', icon: 'help-circle-outline', href: '/(tabs)/settings/support/faqs' },
      { title: 'Contact Support', icon: 'mail-outline', href: '/(tabs)/settings/support/contact-support' },
      { title: 'Feedback', icon: 'chatbox-outline', href: '/(tabs)/settings/support/feedback' },
    ],
  },
  {
    title: 'About',
    items: [
      { title: 'Terms & Conditions', icon: 'document-text-outline', href: '/(tabs)/settings/about/terms-and-conditions' },
      { title: 'Privacy Policy', icon: 'shield-checkmark-outline', href: '/(tabs)/settings/about/privacy-policy' },
      { title: 'App Version', icon: 'information-circle-outline', href: '/(tabs)/settings/about/app-version' },
    ],
  },
];

export function SettingsMenu() {
  return (
    <View style={styles.container}>
      {settingsMenu.map((section) => (
        <View key={section.title} style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            {section.title}
          </ThemedText>
          {section.items.map((item) => (
            <Link key={item.href} href={item.href} asChild>
              <ThemedView style={styles.menuItem}>
                <Ionicons name={item.icon} size={24} color="#007AFF" />
                <ThemedText style={styles.menuItemText}>{item.title}</ThemedText>
                <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
              </ThemedView>
            </Link>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    marginLeft: 16,
    marginBottom: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C7C7CC',
  },
  menuItemText: {
    flex: 1,
    marginLeft: 16,
  },
}); 