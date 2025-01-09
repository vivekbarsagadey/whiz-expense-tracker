import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';
import { FormProvider, useForm } from 'react-hook-form';
import { FormTextInput } from '@/components/form/FormTextInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const supportSchema = z.object({
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type SupportForm = z.infer<typeof supportSchema>;

export default function ContactSupportScreen() {
  const formMethods = useForm<SupportForm>({
    resolver: zodResolver(supportSchema),
  });

  const onSubmit = async (data: SupportForm) => {
    // Implement support ticket submission
    console.log('Support ticket:', data);
  };

  return (
    <ScrollView>
      <FormProvider {...formMethods}>
        <ThemedView style={styles.container}>
          <View style={styles.header}>
            <ThemedText type="subtitle">How can we help?</ThemedText>
            <ThemedText style={styles.description}>
              Our support team typically responds within 24 hours.
            </ThemedText>
          </View>

          <View style={styles.form}>
            <FormTextInput
              name="subject"
              label="Subject"
              placeholder="Brief description of your issue"
              containerStyle={styles.input}
            />
            <FormTextInput
              name="message"
              label="Message"
              placeholder="Describe your issue in detail"
              multiline
              numberOfLines={6}
              containerStyle={styles.input}
            />
            <ThemedButton
              title="Submit"
              onPress={formMethods.handleSubmit(onSubmit)}
              variant="primary"
            />
          </View>

          <View style={styles.alternativeContact}>
            <ThemedText type="defaultSemiBold" style={styles.alternativeTitle}>
              Other ways to reach us
            </ThemedText>
            <ThemedText style={styles.contactInfo}>
              Email: support@whizexpense.com
            </ThemedText>
            <ThemedText style={styles.contactInfo}>
              Phone: +1 (555) 123-4567
            </ThemedText>
          </View>
        </ThemedView>
      </FormProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  description: {
    color: '#666666',
    marginTop: 8,
  },
  form: {
    gap: 16,
  },
  input: {
    marginBottom: 16,
  },
  alternativeContact: {
    marginTop: 32,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  alternativeTitle: {
    marginBottom: 8,
  },
  contactInfo: {
    color: '#666666',
    marginTop: 4,
  },
}); 