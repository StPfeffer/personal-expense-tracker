"use client";

import { IncomeService } from "@/services/income-service";
import { Income } from "@/types/transaction";

const incomeService = new IncomeService();

export function fetchRecentIncomes(): Income[] {
  try {
    const incomes = incomeService.list();

    return (incomes as Income[])
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  } catch (error) {
    console.error(error);

    return [];
  }
}

export function fetchIncomes(): Income[] {
  try {
    const incomes = incomeService.list();

    return incomes as [];
  } catch (error) {
    console.error(error);

    return [];
  }
}

export function initializeIncomes() {
  return incomeService.initialize();
}

export function fetchIncome(id: string): Income | null {
  try {
    const income = incomeService.findById(Number.parseInt(id));

    return income;
  } catch (error) {
    console.error(error);

    return null;
  }
};
