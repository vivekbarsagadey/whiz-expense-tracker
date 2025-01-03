import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import type { Transaction } from '@/types/transaction';

interface TransactionComponentProps {
  transaction: Transaction;
}

export function TransactionComponent({ transaction }: TransactionComponentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{transaction.type}</Text>
      <Text style={styles.amount}>
        {transaction.amount} {transaction.currency ?? ''}
      </Text>
      {transaction.description && (
        <Text style={styles.description}>{transaction.description}</Text>
      )}
      <Text style={styles.date}>{transaction.date.toDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  type: {
    fontWeight: '600',
  },
  amount: {
    fontSize: 16,
    marginTop: 2,
  },
  description: {
    color: '#666',
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
});
