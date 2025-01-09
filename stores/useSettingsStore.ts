import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  Profile, 
  NotificationSettings, 
  ThemeSettings, 
  LanguageSettings,
  PrivacySettings,
  LinkedAccount,
  Subscription 
} from '@/types/settings';

interface SettingsState {
  profile: Profile;
  notifications: NotificationSettings;
  theme: ThemeSettings;
  language: LanguageSettings;
  privacy: PrivacySettings;
  linkedAccounts: LinkedAccount[];
  subscription: Subscription;
  isLoading: boolean;
  error: string | null;

  updateProfile: (profile: Partial<Profile>) => Promise<void>;
  updateNotifications: (settings: Partial<NotificationSettings>) => Promise<void>;
  updateTheme: (settings: Partial<ThemeSettings>) => Promise<void>;
  updateLanguage: (settings: Partial<LanguageSettings>) => Promise<void>;
  updatePrivacy: (settings: Partial<PrivacySettings>) => Promise<void>;
  linkAccount: (account: LinkedAccount) => Promise<void>;
  unlinkAccount: (accountId: string) => Promise<void>;
  updateSubscription: (subscription: Partial<Subscription>) => Promise<void>;
}

const defaultSettings = {
  profile: {
    displayName: '',
    email: '',
  },
  notifications: {
    pushEnabled: true,
    emailEnabled: true,
    marketingEnabled: false,
  },
  theme: {
    mode: 'system' as const,
    primaryColor: '#007AFF',
  },
  language: {
    currentLanguage: 'en',
    availableLanguages: ['en', 'es', 'fr'],
  },
  privacy: {
    dataSharing: false,
    analyticsEnabled: true,
    personalization: true,
  },
  linkedAccounts: [],
  subscription: {
    plan: 'free' as const,
    status: 'active' as const,
  },
};

export const useSettingsStore = create<SettingsState>((set, get) => ({
  ...defaultSettings,
  isLoading: false,
  error: null,

  updateProfile: async (profile) => {
    set({ isLoading: true, error: null });
    try {
      const updatedProfile = { ...get().profile, ...profile };
      await AsyncStorage.setItem('profile', JSON.stringify(updatedProfile));
      set({ profile: updatedProfile, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to update profile', isLoading: false });
    }
  },

  updateNotifications: async (settings) => {
    set({ isLoading: true, error: null });
    try {
      const updatedSettings = { ...get().notifications, ...settings };
      await AsyncStorage.setItem('notifications', JSON.stringify(updatedSettings));
      set({ notifications: updatedSettings, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to update notifications', isLoading: false });
    }
  },

  updateTheme: async (settings) => {
    set({ isLoading: true, error: null });
    try {
      const updatedSettings = { ...get().theme, ...settings };
      await AsyncStorage.setItem('theme', JSON.stringify(updatedSettings));
      set({ theme: updatedSettings, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to update theme', isLoading: false });
    }
  },

  updateLanguage: async (settings) => {
    set({ isLoading: true, error: null });
    try {
      const updatedSettings = { ...get().language, ...settings };
      await AsyncStorage.setItem('language', JSON.stringify(updatedSettings));
      set({ language: updatedSettings, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to update language', isLoading: false });
    }
  },

  updatePrivacy: async (settings) => {
    set({ isLoading: true, error: null });
    try {
      const updatedSettings = { ...get().privacy, ...settings };
      await AsyncStorage.setItem('privacy', JSON.stringify(updatedSettings));
      set({ privacy: updatedSettings, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to update privacy settings', isLoading: false });
    }
  },

  linkAccount: async (account) => {
    set({ isLoading: true, error: null });
    try {
      const accounts = [...get().linkedAccounts, account];
      await AsyncStorage.setItem('linkedAccounts', JSON.stringify(accounts));
      set({ linkedAccounts: accounts, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to link account', isLoading: false });
    }
  },

  unlinkAccount: async (accountId) => {
    set({ isLoading: true, error: null });
    try {
      const accounts = get().linkedAccounts.filter(a => a.id !== accountId);
      await AsyncStorage.setItem('linkedAccounts', JSON.stringify(accounts));
      set({ linkedAccounts: accounts, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to unlink account', isLoading: false });
    }
  },

  updateSubscription: async (subscription) => {
    set({ isLoading: true, error: null });
    try {
      const updatedSubscription = { ...get().subscription, ...subscription };
      await AsyncStorage.setItem('subscription', JSON.stringify(updatedSubscription));
      set({ subscription: updatedSubscription, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to update subscription', isLoading: false });
    }
  },
})); 