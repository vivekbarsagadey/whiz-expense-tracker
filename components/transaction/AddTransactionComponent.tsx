import React from "react";
import {
  StyleSheet
} from "react-native";
import * as z from 'zod';

import { ThemedButton } from "@/components/ThemedButton";
import { ThemedView } from "@/components/ThemedView";
import { useTransactionStore } from "@/stores/useTransactionStore";
import { TransactionCategory } from "@/types/tranCategory";
import { TransactionType } from "@/types/transactionType";
import { useRouter } from "expo-router";

import { FormTextInput } from "@/components/form/FormTextInput";
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from "react-hook-form";

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
    const numericAmount = parseFloat(data.amount);
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

    formMethods.reset();
    router.back();
  };

  
  return (
    <FormProvider {...formMethods}>
      <ThemedView style={styles.container}>
      <FormTextInput
        name="amount"
        label="Amount"
        placeholder="Enter amount"
        containerStyle={styles.inputGroup}
        {...{ keyboardType: 'numeric' }}
      />

      <FormTextInput
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
