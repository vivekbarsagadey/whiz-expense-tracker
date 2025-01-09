import { View, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { Ionicons } from '@expo/vector-icons';
import { LinkedAccount } from '@/types/settings';

const socialAccounts = [
  { provider: 'google', icon: 'logo-google', label: 'Google' },
  { provider: 'apple', icon: 'logo-apple', label: 'Apple' },
  { provider: 'facebook', icon: 'logo-facebook', label: 'Facebook' },
] as const;

export default function LinkedAccountsScreen() {
  const { linkedAccounts, linkAccount, unlinkAccount } = useSettingsStore();

  const handleToggleAccount = async (provider: LinkedAccount['provider']) => {
    const existingAccount = linkedAccounts.find(acc => acc.provider === provider);
    
    if (existingAccount) {
      await unlinkAccount(existingAccount.id);
    } else {
      // Simulate linking a new account
      await linkAccount({
        id: `${provider}-${Date.now()}`,
        provider,
        email: `user@${provider}.com`,
        connected: true,
      });
    }
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.section}>
        {socialAccounts.map(({ provider, icon, label }) => {
          const isLinked = linkedAccounts.some(acc => acc.provider === provider);
          
          return (
            <ThemedView key={provider} style={styles.accountRow}>
              <View style={styles.accountInfo}>
                <Ionicons name={icon} size={24} color="#007AFF" />
                <ThemedText style={styles.accountLabel}>{label}</ThemedText>
              </View>
              <ThemedButton
                title={isLinked ? 'Unlink' : 'Link'}
                variant={isLinked ? 'secondary' : 'primary'}
                onPress={() => handleToggleAccount(provider)}
              />
            </ThemedView>
          );
        })}
      </View>
      
      <ThemedText type="default" style={styles.note}>
        Link your accounts to enable seamless sign-in and sync your data across services.
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
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  accountLabel: {
    fontSize: 16,
  },
  note: {
    marginTop: 16,
    textAlign: 'center',
    color: '#666666',
  },
}); 