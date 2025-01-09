import { ScrollView, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function TermsAndConditionsScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle" style={styles.section}>
          1. Acceptance of Terms
        </ThemedText>
        <ThemedText style={styles.content}>
          By accessing and using WhizExpense, you agree to be bound by these Terms and Conditions.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.section}>
          2. Use of Service
        </ThemedText>
        <ThemedText style={styles.content}>
          WhizExpense provides expense tracking and management services. You agree to use these services only for lawful purposes.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.section}>
          3. Privacy
        </ThemedText>
        <ThemedText style={styles.content}>
          Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your data.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.section}>
          4. User Accounts
        </ThemedText>
        <ThemedText style={styles.content}>
          You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
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