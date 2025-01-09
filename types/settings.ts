export interface Profile {
  displayName: string;
  email: string;
  avatar?: string;
  phoneNumber?: string;
}

export interface NotificationSettings {
  pushEnabled: boolean;
  emailEnabled: boolean;
  marketingEnabled: boolean;
}

export interface ThemeSettings {
  mode: 'light' | 'dark' | 'system';
  primaryColor: string;
}

export interface LanguageSettings {
  currentLanguage: string;
  availableLanguages: string[];
}

export interface PrivacySettings {
  dataSharing: boolean;
  analyticsEnabled: boolean;
  personalization: boolean;
}

export interface LinkedAccount {
  id: string;
  provider: 'google' | 'apple' | 'facebook';
  email: string;
  connected: boolean;
}

export interface Subscription {
  plan: 'free' | 'premium' | 'pro';
  status: 'active' | 'inactive' | 'cancelled';
  expiryDate?: Date;
} 