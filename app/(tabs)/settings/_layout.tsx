import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Settings',
          headerLargeTitle: true,
        }} 
      />
      <Stack.Screen 
        name="profile/index" 
        options={{ title: 'Profile' }} 
      />
      <Stack.Screen 
        name="general/notifications" 
        options={{ title: 'Notifications' }} 
      />
      <Stack.Screen 
        name="general/language" 
        options={{ title: 'Language' }} 
      />
      <Stack.Screen 
        name="general/theme" 
        options={{ title: 'Theme' }} 
      />
      <Stack.Screen 
        name="account/change-password" 
        options={{ title: 'Change Password' }} 
      />
      <Stack.Screen 
        name="account/linked-accounts" 
        options={{ title: 'Linked Accounts' }} 
      />
      <Stack.Screen 
        name="account/subscription" 
        options={{ title: 'Subscription' }} 
      />
      <Stack.Screen 
        name="privacy/permissions" 
        options={{ title: 'Permissions' }} 
      />
      <Stack.Screen 
        name="privacy/data-sharing" 
        options={{ title: 'Data Sharing' }} 
      />
      <Stack.Screen 
        name="privacy/delete-account" 
        options={{ title: 'Delete Account' }} 
      />
      <Stack.Screen 
        name="support/faqs" 
        options={{ title: 'FAQs' }} 
      />
      <Stack.Screen 
        name="support/contact-support" 
        options={{ title: 'Contact Support' }} 
      />
      <Stack.Screen 
        name="support/feedback" 
        options={{ title: 'Feedback' }} 
      />
      <Stack.Screen 
        name="about/terms-and-conditions" 
        options={{ title: 'Terms & Conditions' }} 
      />
      <Stack.Screen 
        name="about/privacy-policy" 
        options={{ title: 'Privacy Policy' }} 
      />
      <Stack.Screen 
        name="about/app-version" 
        options={{ title: 'App Version' }} 
      />
    </Stack>
  );
} 