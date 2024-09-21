"use client";

import { transactions } from "@/db/dummy/data";
import { isIncome } from "@/lib/utils";
import { Income } from "@/types/transaction";

// should fetch from an external API in the future
export class IncomeService {

  findById(id: number): Income | null {
    const income = this.list().filter(transaction => transaction.id === id).at(0);
    return income === undefined ? null : income;
  }

  list(): Income[] {
    return JSON.parse(localStorage.getItem("incomes") || "[]");
  }

  initialize(): Income[] {
    const incomes: Income[] = transactions.filter(isIncome);
    return incomes;
  }

}
