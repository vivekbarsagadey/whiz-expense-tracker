// stores/useTransactionStore.ts
import { create } from 'zustand';
import { Transaction } from '@/types/transaction'; 

type TransactionStore = {
  transactions: Transaction[];
  addTransaction: (tx: Transaction) => void;
  removeTransaction: (id: string) => void;
};

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],
  
  addTransaction: (tx) => set((state) => ({
    transactions: [...state.transactions, tx],
  })),

  removeTransaction: (id) => set((state) => ({
    transactions: state.transactions.filter((t) => t.id !== id),
  })),
}));
