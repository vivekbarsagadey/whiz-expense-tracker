import { View, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { FormTextInput } from '@/components/form/FormTextInput';
import { ThemedButton } from '@/components/ThemedButton';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ChangePasswordForm = z.infer<typeof changePasswordSchema>;

export default function ChangePasswordScreen() {
  const formMethods = useForm<ChangePasswordForm>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data: ChangePasswordForm) => {
    // Implement password change logic
    console.log('Change password:', data);
  };

  return (
    <FormProvider {...formMethods}>
      <ThemedView style={styles.container}>
        <View style={styles.form}>
          <FormTextInput
            name="currentPassword"
            label="Current Password"
            secureTextEntry
            containerStyle={styles.input}
          />
          <FormTextInput
            name="newPassword"
            label="New Password"
            secureTextEntry
            containerStyle={styles.input}
          />
          <FormTextInput
            name="confirmPassword"
            label="Confirm New Password"
            secureTextEntry
            containerStyle={styles.input}
          />
          <ThemedButton
            title="Change Password"
            onPress={formMethods.handleSubmit(onSubmit)}
            variant="primary"
          />
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
  form: {
    gap: 16,
  },
  input: {
    marginBottom: 16,
  },
}); 