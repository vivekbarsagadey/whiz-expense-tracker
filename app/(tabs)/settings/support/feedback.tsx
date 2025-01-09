import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';
import { FormProvider, useForm } from 'react-hook-form';
import { FormTextInput } from '@/components/form/FormTextInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Ionicons } from '@expo/vector-icons';

const feedbackSchema = z.object({
  rating: z.number().min(1).max(5),
  feedback: z.string().min(10, 'Feedback must be at least 10 characters'),
});

type FeedbackForm = z.infer<typeof feedbackSchema>;

export default function FeedbackScreen() {
  const formMethods = useForm<FeedbackForm>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      rating: 0,
    },
  });

  const rating = formMethods.watch('rating');

  const onSubmit = async (data: FeedbackForm) => {
    // Implement feedback submission
    console.log('Feedback:', data);
  };

  return (
    <ScrollView>
      <FormProvider {...formMethods}>
        <ThemedView style={styles.container}>
          <View style={styles.header}>
            <ThemedText type="subtitle">Rate Your Experience</ThemedText>
            <ThemedText style={styles.description}>
              Your feedback helps us improve our app.
            </ThemedText>
          </View>

          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Ionicons
                key={star}
                name={star <= rating ? 'star' : 'star-outline'}
                size={32}
                color="#FFB800"
                onPress={() => formMethods.setValue('rating', star)}
              />
            ))}
          </View>

          <View style={styles.form}>
            <FormTextInput
              name="feedback"
              label="Your Feedback"
              placeholder="Tell us what you think about the app"
              multiline
              numberOfLines={6}
              containerStyle={styles.input}
            />
            <ThemedButton
              title="Submit Feedback"
              onPress={formMethods.handleSubmit(onSubmit)}
              variant="primary"
            />
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
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  form: {
    gap: 16,
  },
  input: {
    marginBottom: 16,
  },
}); 