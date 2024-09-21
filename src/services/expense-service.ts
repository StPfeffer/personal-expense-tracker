"use client";

import { transactions } from "@/db/dummy/data";
import { isExpense } from "@/lib/utils";
import { Expense, Transaction } from "@/types/transaction";

// should fetch from an external API in the future
export class ExpenseService {

  findById(id: number): Expense | null {
    const expense = this.list().filter(e => e.id === id).at(0);
    return expense === undefined ? null : expense;
  }

  list(): Expense[] {
    return JSON.parse(localStorage.getItem("expenses") || "[]");
  }

  initialize(): Expense[] {
    const expenses: Expense[] = transactions.filter(isExpense);
    return expenses;
  }

}

