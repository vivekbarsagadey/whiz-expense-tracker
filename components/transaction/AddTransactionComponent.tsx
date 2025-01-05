// components/transaction/AddTransactionComponent.tsx
import React from "react";
import {
  StyleSheet
} from "react-native";
import * as z from 'zod';

// If using a Transaction type from your domain:
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedView } from "@/components/ThemedView";
import { useTransactionStore } from "@/stores/useTransactionStore";
import { TransactionCategory } from "@/types/tranCategory";
import { TransactionType } from "@/types/transactionType";
import { useRouter } from "expo-router";

import { FormInput } from "@/components/form/FormInput";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from "react-hook-form";

const transactionSchema = z.object({
  amount: z
    .string()
    .min(1, 'Amount is required')
    .regex(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number'),
  description: z.string().optional(),
});

type TransactionFormValues = z.infer<typeof transactionSchema>;

export function AddTransactionComponent() {
  
  const router = useRouter();
  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const formMethods = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      amount: '',
      description: '',
    },
  });

  const onSubmit = (data : TransactionFormValues) => {
    // Convert amount from string to number
    const numericAmount = parseFloat(data.amount);

    // Now call Zustand's addTransaction
    addTransaction({
      id: `txn-${Date.now()}`,
      date: new Date(),
      type: TransactionType.INCOME,
      category: TransactionCategory.GROCERIES,
      amount: numericAmount,
      currency: "INR",
      description : data.description || '',
      tags: [],
    });

    // Optionally reset the form
    formMethods.reset();
    //router.push('/(tabs)/(transactions)');
    router.back();
  };

  
  return (
    <FormProvider {...formMethods}>
      <ThemedView style={styles.container}>
      <FormInput
        name="amount"
        label="Amount"
        placeholder="Enter amount"
        containerStyle={styles.inputGroup}
        inputProps={{ keyboardType: 'numeric' }}
      />

      <FormInput
        name="description"
        label="Description"
        placeholder="Optional description"
        containerStyle={styles.inputGroup}
      />

      <ThemedButton title="Save" onPress={formMethods.handleSubmit(onSubmit)} />
    </ThemedView>
    </FormProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
});
