import React from "react";
import {
  StyleSheet,
  TouchableOpacity
} from "react-native";
import * as z from 'zod';

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "../ThemedText";


export function HeaderContainer() {
  
 
  
  return (
    <ThemedView style={styles.headerContainer}>
        <ThemedText style={styles.title}>Main - SGD</ThemedText>
        <ThemedText style={styles.balance}>S$0</ThemedText>
        <TouchableOpacity
         style={styles.accountsButton}>
          <ThemedText style={styles.accountsText}>Accounts</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#6c63ff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 10,
  },
  balance: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
  },
  accountsButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff30",
    borderRadius: 20,
  },
  accountsText: {
    color: "#ffffff",
    fontSize: 14,
  },
  actionsContainer: {
    marginTop: -30,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  actionsList: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonIcon: {
    fontSize: 24,
    color: "#6c63ff",
  },
  buttonText: {
    marginTop: 5,
    fontSize: 12,
    color: "#6c63ff",
  },
  transactionSection: {
    alignItems: "center",
    marginTop: 50,
  },
  transactionText: {
    fontSize: 14,
    color: "#b0b0b0",
  },
});
