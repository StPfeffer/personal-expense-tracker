"use client";

import { TransactionService } from "@/services/transaction-service";
import { Transaction } from "@/types/transaction";

const transactionService = new TransactionService();

export function fetchRecentTransactions(): Transaction[] {
  try {
    const transactions = transactionService.list();

    return (transactions as Transaction[])
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  } catch (error) {
    console.info(error);

    return [];
  }
}

export function fetchTransactions() {
  try {
    const transactions = transactionService.list();

    return transactions as [];
  } catch (error) {
    console.info(error);

    return [];
  }
}

export function initializeTransactions() {
  return transactionService.initialize();
}

export function fetchTransaction(id: string): Transaction | null {
  try {
    const transaction = transactionService.findById(Number.parseInt(id));

    return transaction;
  } catch (error: any) {
    return null;
  }
};
