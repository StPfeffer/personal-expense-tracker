"use client";

import { ExpenseService } from "@/services/expense-service";
import { Expense } from "@/types/transaction";

const expenseService = new ExpenseService();

export function fetchRecentExpenses(): Expense[] {
  try {
    const expenses = expenseService.list();

    return (expenses as Expense[])
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  } catch (error) {
    console.info(error);

    return [];
  }
}

export function fetchExpenses() {
  try {
    const expenses = expenseService.list();
    return expenses as [];
  } catch (error) {
    console.info(error);

    return [];
  }
}

export function initializeExpenses() {
  return expenseService.initialize();
}

export function fetchExpense(id: string): Expense | null {
  try {
    const expense = expenseService.findById(Number.parseInt(id));

    return expense;
  } catch (error: any) {
    return null;
  }
};
