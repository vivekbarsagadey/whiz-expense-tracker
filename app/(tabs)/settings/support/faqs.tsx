import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I add a new transaction?',
    answer: 'To add a new transaction, tap the "+" button on the home screen and fill in the transaction details.',
  },
  {
    question: 'Can I export my transaction history?',
    answer: 'Yes, you can export your transaction history in the Settings > Account > Data Export section.',
  },
  {
    question: 'How do I change my currency?',
    answer: 'Go to Settings > General > Currency to change your preferred currency.',
  },
  {
    question: 'Is my data backed up?',
    answer: "Yes, your data is automatically backed up to the cloud when you're connected to the internet.",
  },
];

export default function FAQsScreen() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        {faqs.map((faq, index) => (
          <ThemedView 
            key={index} 
            style={styles.faqItem}
            onTouchEnd={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <View style={styles.questionRow}>
              <ThemedText type="defaultSemiBold" style={styles.question}>
                {faq.question}
              </ThemedText>
              <Ionicons 
                name={expandedIndex === index ? 'chevron-up' : 'chevron-down'} 
                size={20} 
                color="#666666" 
              />
            </View>
            {expandedIndex === index && (
              <ThemedText style={styles.answer}>
                {faq.answer}
              </ThemedText>
            )}
          </ThemedView>
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  faqItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    flex: 1,
    marginRight: 8,
  },
  answer: {
    marginTop: 8,
    color: '#666666',
  },
}); 