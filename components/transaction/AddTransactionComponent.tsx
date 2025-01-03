// components/transaction/AddTransactionComponent.tsx
import React, { useState } from "react";
import {
    StyleSheet,
    TextInput
} from "react-native";

// If using a Transaction type from your domain:
import { useTransactionStore } from "@/stores/useTransactionStore";
import { TransactionCategory } from "@/types/tranCategory";
import { TransactionType } from "@/types/transactionType";
import { useRouter } from "expo-router";
import { ThemedButton } from "../ThemedButton";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";


export function AddTransactionComponent() {
    const router = useRouter();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const handleSavePress = () => {
    addTransaction({
      id: `txn-${Date.now()}`,
      date: new Date(),
      type: TransactionType.INCOME,
      category: TransactionCategory.GROCERIES,
      amount: Number(amount),
      currency: "INR",
      description,
      tags: [],
    });
    //onClose();
    setAmount("");
    setDescription("");
    router.push('/(tabs)/(transactions)');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.mainContainer}>
        <ThemedView style={styles.row}>
          <ThemedText type="defaultSemiBold">Amount</ThemedText>
          <TextInput
          style={styles.input}
          value={amount}
          keyboardType="numeric"
          onChangeText={setAmount}
          placeholder="Enter amount"
        />
        </ThemedView>
        <ThemedView style={styles.row}>
          <ThemedText type="defaultSemiBold">Description</ThemedText>
          <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Optional description"
        />
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.footerContainer}>
        <ThemedButton
          variant="primary"
          title="Save Transaction"
          style={styles.button}
          onPress={handleSavePress}
        />
        
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginTop: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  titleContainer: {
    //flexDirection: "row",
    //alignItems: "center",
    //justifyContent: "space-between",
    //paddingHorizontal: 16,
    //paddingVertical: 8,
    //borderBottomWidth: StyleSheet.hairlineWidth,
    //borderBottomColor: "#ccc",
    gap: 8,
  },
  mainContainer: {
    //flex: 1,
  },
  footerContainer: {
    flexDirection: "row",
    //flex: 1,
    justifyContent: "space-between",
    //paddingHorizontal: 16,
    //paddingVertical: 8,
    //gap: 8,
    width: "100%",
  },
  button: {},

  title: {
    fontSize: 18,
    fontWeight: "600",
    width: "100%",
    textAlign: "center",
    margin: 16,
  },
  label: {
    marginTop: 8,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});
