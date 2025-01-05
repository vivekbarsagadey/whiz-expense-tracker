// TransactionComponent.tsx

import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

import type { Transaction } from '@/types/transaction';
import { TransactionType } from '@/types/transactionType';

interface TransactionComponentProps {
  transaction: Transaction;
}

export function TransactionComponent({ transaction }: TransactionComponentProps) {
  // Determine current theme (light or dark)
  const colorScheme = useColorScheme() || 'light';
  const themeColors = Colors[colorScheme];

  // Decide color for the transaction amount
  let amountColor = themeColors.text; // fallback
  if (transaction.type === TransactionType.INCOME) {
    amountColor = themeColors.income;
  } else if (transaction.type === TransactionType.EXPENSE) {
    amountColor = themeColors.expense;
  }

  // Format amount display
  // For EXPENSE, show a minus sign:
  // Example: -50 or -$50
  const sign = transaction.type === TransactionType.EXPENSE ? '-' : '';
  const amountText = `${sign}${transaction.currency ?? ''}${transaction.amount}`;

  return (
    <ThemedView
      style={[
        styles.container,
        // Use theme for border color
        { borderBottomColor: themeColors.border },
      ]}
    >
      {/* Left column: Type and Category */}
      <ThemedView style={styles.leftColumn}>
        <ThemedText style={[styles.typeText, { color: themeColors.text }]}>
          {transaction.type}
        </ThemedText>
        <ThemedText style={[styles.categoryText, { color: themeColors.icon }]}>
          {transaction.category}
        </ThemedText>
      </ThemedView>

      {/* Middle column: Description or Date */}
      <ThemedView style={styles.middleColumn}>
        {transaction.description ? (
          <ThemedText style={[styles.description, { color: themeColors.text }]}>
            {transaction.description}
          </ThemedText>
        ) : (
          <ThemedText style={[styles.dateText, { color: themeColors.icon }]}>
            {transaction.date.toDateString()}
          </ThemedText>
        )}
      </ThemedView>

      {/* Right column: Amount */}
      <ThemedView style={styles.rightColumn}>
        <ThemedText style={[styles.amountText, { color: amountColor }]}>
          {amountText}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',

    // hairline border, color from themeColors.border
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  leftColumn: {
    flex: 0.5,
    marginRight: 8,
  },
  middleColumn: {
    flex: 1,
    marginRight: 8,
  },
  rightColumn: {
    alignItems: 'flex-end',
  },
  typeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  categoryText: {
    fontSize: 12,
  },
  description: {
    fontSize: 14,
  },
  dateText: {
    fontSize: 14,
  },
  amountText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
