import { paymentMethodsDetails, Transaction } from "@/types/transaction";
import { ArrowDown, ArrowRight, TrendingDown, TrendingUp } from "lucide-react";

export const transactions: Transaction[] = [
  {
    id: 1,
    description: "Grocery shopping",
    amount: 50.25,
    date: "2024-09-20",
    type: "debit",
    category: "expense",
    paymentMethod: "debit_card",
    notes: "Bought fruits and vegetables",
    createdAt: "2024-09-20T10:00:00Z",
    updatedAt: "2024-09-20T10:00:00Z",
    transactionId: "239875839642385345"
  },
  {
    id: 2,
    description: "Salary",
    amount: 1500,
    date: "2024-09-15",
    type: "credit",
    category: "income",
    paymentMethod: "bank_transfer",
    notes: "Monthly salary",
    createdAt: "2024-09-15T08:00:00Z",
    updatedAt: "2024-09-15T08:00:00Z",
    transactionId: "23490862938045"
  },
  {
    id: 3,
    description: "Freelance work",
    amount: 300,
    date: "2024-09-10",
    type: "credit",
    category: "income",
    paymentMethod: "paypal",
    notes: "Web development project",
    createdAt: "2024-09-10T09:00:00Z",
    updatedAt: "2024-09-10T09:00:00Z",
    transactionId: "203974893469823"
  },
  {
    id: 4,
    description: "Rent payment",
    amount: 800,
    date: "2024-09-05",
    type: "debit",
    category: "expense",
    paymentMethod: "bank_transfer",
    createdAt: "2024-09-05T07:30:00Z",
    updatedAt: "2024-09-05T07:30:00Z",
    transactionId: "2198476348957234"
  },
  {
    id: 5,
    description: "Utilities bill",
    amount: 120,
    date: "2024-08-28",
    type: "debit",
    category: "expense",
    paymentMethod: "credit_card",
    notes: "Electricity and water",
    createdAt: "2024-08-28T12:00:00Z",
    updatedAt: "2024-08-28T12:00:00Z",
    transactionId: "12987468950923498"
  },
  {
    id: 6,
    description: "Online course",
    amount: 200,
    date: "2024-08-25",
    type: "debit",
    category: "expense",
    paymentMethod: "paypal",
    notes: "Udemy course",
    createdAt: "2024-08-25T14:00:00Z",
    updatedAt: "2024-08-25T14:00:00Z",
    transactionId: "1296775893643"
  },
  {
    id: 7,
    description: "Part-time job",
    amount: 500,
    date: "2024-08-20",
    type: "credit",
    category: "income",
    paymentMethod: "bank_transfer",
    notes: "Freelance coding",
    createdAt: "2024-08-20T11:00:00Z",
    updatedAt: "2024-08-20T11:00:00Z",
    transactionId: "129874658708"
  },
  {
    id: 8,
    description: "Dividend income",
    amount: 150,
    date: "2024-08-15",
    type: "credit",
    category: "income",
    paymentMethod: "bank_transfer",
    notes: "Stock dividends",
    createdAt: "2024-08-15T09:00:00Z",
    updatedAt: "2024-08-15T09:00:00Z",
    transactionId: "1240987456789"
  },
  {
    id: 9,
    description: "Gym membership",
    amount: 45,
    date: "2024-08-10",
    type: "debit",
    category: "expense",
    paymentMethod: "credit_card",
    createdAt: "2024-08-10T08:00:00Z",
    updatedAt: "2024-08-10T08:00:00Z",
    transactionId: "124978346907"
  },
  {
    id: 10,
    description: "Car maintenance",
    amount: 300,
    date: "2024-08-05",
    type: "debit",
    category: "expense",
    paymentMethod: "cash",
    notes: "Oil change and tire rotation",
    createdAt: "2024-08-05T10:00:00Z",
    updatedAt: "2024-08-05T10:00:00Z",
    transactionId: "179845723787"
  },
  {
    id: 11,
    description: "Side project income",
    amount: 400,
    date: "2024-07-30",
    type: "credit",
    category: "income",
    paymentMethod: "paypal",
    notes: "Sold a digital product",
    createdAt: "2024-07-30T12:00:00Z",
    updatedAt: "2024-07-30T12:00:00Z",
    transactionId: "1298745987623073458"
  },
  {
    id: 12,
    description: "Stock purchase",
    amount: 250,
    date: "2024-07-25",
    type: "debit",
    category: "expense",
    paymentMethod: "bank_transfer",
    notes: "Bought tech stocks",
    createdAt: "2024-07-25T13:00:00Z",
    updatedAt: "2024-07-25T13:00:00Z",
    transactionId: "2464893569234768967"
  }
];

export const categories = [
  {
    value: "expense",
    label: "Expense",
    icon: TrendingDown,
  },
  {
    value: "income",
    label: "Income",
    icon: TrendingUp,
  }
];

export const types = [
  {
    value: "debit",
    label: "Debit",
    icon: ArrowDown,
  },
  {
    value: "credit",
    label: "Credit",
    icon: ArrowRight,
  }
];

export const paymentMethods = transformPaymentMethods();

function transformPaymentMethods() {
  return Object.entries(paymentMethodsDetails).map(([key, details]) => ({
    value: key,
    label: details.label,
    icon: details.icon
  }));
}