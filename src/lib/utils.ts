import { Expense, Income, Transaction } from "@/types/transaction";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(str: string) {
  return str != null ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

export function getRandomArbitrary(
  min: number = 1000000,
  max: number = 99999999999999999
) {
  return Math.random() * (max - min) + min;
}

export function isExpense(transaction: Transaction): transaction is Expense {
  return (transaction as Expense).category === "expense";
}

export function isIncome(transaction: Transaction): transaction is Income {
  return (transaction as Income).category === "income";
}