import { View, StyleSheet } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';
import { FormTextInput } from '@/components/form/FormTextInput';
import { useAuthStore } from '@/stores/authStore';
import { ForgotPasswordFormData, forgotPasswordSchema } from '@/types/auth';

export default function ForgotPasswordScreen() {
  const { resetPassword, isLoading, error } = useAuthStore();
  const formMethods = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    await resetPassword(data.email);
    if (!error) {
      // Show success message and navigate back to login
      router.replace('/(auth)/login');
    }
  };

  return (
    <FormProvider {...formMethods}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Reset Password</ThemedText>
        
        <ThemedText type="default" style={styles.description}>
          Enter your email address and we'll send you instructions to reset your password.
        </ThemedText>

        <View style={styles.form}>
          <FormTextInput
            name="email"
            label="Email"
            placeholder="Enter your email"
            keyboardType="email-address"
            containerStyle={styles.inputGroup}
          />

          {error && (
            <ThemedText type="defaultSemiBold" style={styles.error}>{error}</ThemedText>
          )}

          <ThemedButton
            title="Send Reset Link"
            onPress={formMethods.handleSubmit(onSubmit)}
            disabled={isLoading}
            variant="primary"
          />

          <View style={styles.links}>
            <Link href="/(auth)/login" asChild>
              <ThemedText type="link">Back to Sign In</ThemedText>
            </Link>
          </View>
        </View>
      </ThemedView>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginTop: 48,
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  form: {
    gap: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  error: {
    color: '#FF3B30',
    textAlign: 'center',
  },
  links: {
    alignItems: 'center',
    marginTop: 16,
  },
}); 