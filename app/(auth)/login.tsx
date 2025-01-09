import { View, StyleSheet } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';
import { FormTextInput } from '@/components/form/FormTextInput';
import { useAuthStore } from '@/stores/authStore';
import { LoginFormData, loginSchema } from '@/types/auth';

export default function LoginScreen() {
  const { login, isLoading, error } = useAuthStore();
  const formMethods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    await login(data.email, data.password);
    if (!error) {
      router.replace('/(tabs)');
    }
  };

  return (
    <FormProvider {...formMethods}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Welcome Back</ThemedText>
        
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
            placeholder="Enter your password"
            secureTextEntry
            containerStyle={styles.inputGroup}
          />

          {error && (
            <ThemedText type="defaultSemiBold" style={styles.error}>{error}</ThemedText>
          )}

          <ThemedButton
            title="Sign In"
            onPress={formMethods.handleSubmit(onSubmit)}
            disabled={isLoading}
            variant="primary"
          />

          <View style={styles.links}>
            <Link href="/(auth)/forgot-password" asChild>
              <ThemedText type="link">Forgot Password?</ThemedText>
            </Link>
            
            <Link href="/(auth)/register" asChild>
              <ThemedText type="link">Create Account</ThemedText>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
}); 