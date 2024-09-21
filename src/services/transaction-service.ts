"use client";

import { transactions } from "@/db/dummy/data";
import { Transaction } from "@/types/transaction";

// should fetch from an external API in the future
export class TransactionService {

  findById(id: number): Transaction | null {
    const transaction = this.list().filter(transaction => transaction.id === id).at(0);
    return transaction === undefined ? null : transaction;
  }

  list(): Transaction[] {
    return JSON.parse(localStorage.getItem("transactions") || "[]");
  }

  initialize(): Transaction[] {
    return transactions;
  }

}
