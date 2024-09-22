import { paymentMethodsDetails } from "@/types/transaction";
import { User } from "@/types/user";
import { ArrowDown, ArrowRight, TrendingDown, TrendingUp } from "lucide-react";

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

export const users: User[] = [
  {
    id: 1,
    name: "Administrator",
    username: "admin",
    email: "admin@admin.com",
    password: "admin",
  },
  {
    id: 2,
    name: "Mateus Pfeffer",
    username: "mpfeffer",
    email: "mpfeffer@minha.fag.edu.br",
    password: "mateus123"
  },
  {
    id: 3,
    name: "Jeferson Eduardo Guido",
    username: "jefersong",
    email: "jefersonguido@fag.edu.br",
    password: "jeferson123"
  }
]
