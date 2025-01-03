import { TransactionCategory } from "./tranCategory";
import { TransactionType } from "./transactionType";

/** Core transaction shape */
export interface Transaction {
    /** Unique identifier */
    id: string;
  
    /** Type of the transaction: INCOME, EXPENSE, or TRANSFER */
    type: TransactionType;
  
    /** A broad category for the transaction, e.g. SALARY, RENT */
    category: TransactionCategory;
  
    /** Monetary value of this transaction */
    amount: number;
  
    /** Currency code, e.g. 'USD', 'EUR' (optional) */
    currency?: string;
  
    /** Date the transaction took place */
    date: Date;
  
    /** Optional note or description */
    description?: string;
  
    /** Additional tags if needed, e.g. ["food", "health"] */
    tags?: string[];
  }

  /** Represents a list of transactions, plus optional metadata */
export interface TransactionState {
    transactions: Transaction[];
    lastUpdated?: Date;
}