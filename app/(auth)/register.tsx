import { View, StyleSheet } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';
import { FormTextInput } from '@/components/form/FormTextInput';
import { useAuthStore } from '@/stores/authStore';
import { RegisterFormData, registerSchema } from '@/types/auth';

export default function RegisterScreen() {
  const { register, isLoading, error } = useAuthStore();
  const formMethods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    await register(data.email, data.password);
    if (!error) {
      router.replace('/(tabs)');
    }
  };

  return (
    <FormProvider {...formMethods}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Create Account</ThemedText>
        
        <View style={styles.form}>
          <FormTextInput
            name="email"
            label="Email"
            placeholder="Enter your email"
            keyboardType="email-address"
            containerStyle={styles.inputGroup}
          />

          <FormTextInput
            name="password"
            label="Password"
            placeholder="Create a password"
            secureTextEntry
            containerStyle={styles.inputGroup}
          />

          <FormTextInput
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            secureTextEntry
            containerStyle={styles.inputGroup}
          />

          {error && (
            <ThemedText type="defaultSemiBold" style={styles.error}>{error}</ThemedText>
          )}

          <ThemedButton
            title="Create Account"
            onPress={formMethods.handleSubmit(onSubmit)}
            disabled={isLoading}
          />

          <View style={styles.links}>
            <Link href="/(auth)/login" asChild>
              <ThemedText type="link">Already have an account? Sign In</ThemedText>
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
    marginBottom: 32,
    textAlign: 'center',
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