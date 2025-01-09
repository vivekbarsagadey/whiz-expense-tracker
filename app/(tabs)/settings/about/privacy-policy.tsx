import { ScrollView, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle" style={styles.section}>
          Data Collection
        </ThemedText>
        <ThemedText style={styles.content}>
          We collect information that you provide directly to us, including your account information and transaction data.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.section}>
          Use of Information
        </ThemedText>
        <ThemedText style={styles.content}>
          We use the collected information to provide, maintain, and improve our services, and to protect the security of your account.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.section}>
          Data Sharing
        </ThemedText>
        <ThemedText style={styles.content}>
          We do not sell your personal information. We may share your information only in limited circumstances, such as with your consent or for legal purposes.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.section}>
          Security
        </ThemedText>
        <ThemedText style={styles.content}>
          We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
        </ThemedText>

        <ThemedText type="defaultSemiBold" style={styles.lastUpdated}>
          Last updated: March 1, 2024
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginTop: 24,
    marginBottom: 8,
  },
  content: {
    color: '#666666',
    lineHeight: 24,
  },
  lastUpdated: {
    marginTop: 32,
    textAlign: 'center',
    color: '#666666',
  },
}); 