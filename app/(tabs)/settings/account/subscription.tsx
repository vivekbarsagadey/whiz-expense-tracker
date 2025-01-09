import { View, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { Ionicons } from '@expo/vector-icons';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0/month',
    features: [
      'Basic expense tracking',
      'Limited reports',
      'Single device sync',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$4.99/month',
    features: [
      'Advanced expense tracking',
      'Unlimited reports',
      'Multi-device sync',
      'Priority support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$9.99/month',
    features: [
      'Everything in Premium',
      'Custom categories',
      'Data export',
      'Team sharing',
      'API access',
    ],
  },
];

export default function SubscriptionScreen() {
  const { subscription, updateSubscription } = useSettingsStore();

  const handleUpgrade = async (planId: string) => {
    // Implement subscription upgrade logic
    await updateSubscription({ plan: planId as any });
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.plansContainer}>
        {plans.map((plan) => (
          <ThemedView key={plan.id} style={styles.planCard}>
            <View style={styles.planHeader}>
              <ThemedText type="subtitle">{plan.name}</ThemedText>
              <ThemedText type="title">{plan.price}</ThemedText>
            </View>
            
            <View style={styles.featuresList}>
              {plan.features.map((feature, index) => (
                <View key={index} style={styles.featureRow}>
                  <Ionicons name="checkmark-circle" size={20} color="#34C759" />
                  <ThemedText style={styles.featureText}>{feature}</ThemedText>
                </View>
              ))}
            </View>

            <ThemedButton
              title={subscription.plan === plan.id ? 'Current Plan' : 'Upgrade'}
              variant={subscription.plan === plan.id ? 'secondary' : 'primary'}
              disabled={subscription.plan === plan.id}
              onPress={() => handleUpgrade(plan.id)}
            />
          </ThemedView>
        ))}
      </View>

      {subscription.status === 'active' && (
        <ThemedText type="default" style={styles.note}>
          Your {subscription.plan} plan is active until{' '}
          {subscription.expiryDate?.toLocaleDateString()}
        </ThemedText>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  plansContainer: {
    gap: 16,
  },
  planCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    gap: 16,
  },
  planHeader: {
    alignItems: 'center',
    gap: 8,
  },
  featuresList: {
    gap: 12,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureText: {
    flex: 1,
  },
  note: {
    marginTop: 16,
    textAlign: 'center',
    color: '#666666',
  },
}); 