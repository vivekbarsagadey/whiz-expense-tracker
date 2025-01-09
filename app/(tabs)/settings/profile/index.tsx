import { View, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { FormTextInput } from '@/components/form/FormTextInput';
import { ThemedButton } from '@/components/ThemedButton';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { FormProvider, useForm } from 'react-hook-form';
import { Profile } from '@/types/settings';

export default function ProfileScreen() {
  const { profile, updateProfile, isLoading } = useSettingsStore();
  const formMethods = useForm<Profile>({
    defaultValues: profile,
  });

  const onSubmit = async (data: Profile) => {
    await updateProfile(data);
  };

  return (
    <FormProvider {...formMethods}>
      <ThemedView style={styles.container}>
        <View style={styles.form}>
          <FormTextInput
            name="displayName"
            label="Display Name"
            placeholder="Enter your name"
            containerStyle={styles.input}
          />
          <FormTextInput
            name="email"
            label="Email"
            placeholder="Enter your email"
            keyboardType="email-address"
            containerStyle={styles.input}
          />
          <FormTextInput
            name="phoneNumber"
            label="Phone Number"
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            containerStyle={styles.input}
          />
          <ThemedButton
            title="Save Changes"
            onPress={formMethods.handleSubmit(onSubmit)}
            disabled={isLoading}
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