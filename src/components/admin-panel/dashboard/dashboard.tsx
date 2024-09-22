"use client";

import { useEffect, useState } from "react"
import CardTotal from "./card/card-total";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TransactionsDataTable } from "@/components/data-table/data-table";
import { transactionColumns } from "./transactions/transactions-columns";
import { Expense, Income, Transaction } from "@/types/transaction";
import { CardInfo } from "./card/types";
import { initializeTransactions } from "@/actions/fetch-transaction";
import { DashboardPieChart } from "./chart/pie-chart";
import { DashboardRadarChart } from "./chart/radar-chart";
import { initializeIncomes } from "@/actions/fetch-incomes";
import { initializeExpenses } from "@/actions/fetch-expenses";
import { useRouter } from "next/navigation";

interface DashboardProps {
  transactions: Transaction[];
  incomes: Income[];
  expenses: Expense[];
  cardInfo: CardInfo[];
}

const Dashboard = ({
  transactions,
  incomes,
  expenses,
  cardInfo
}: DashboardProps) => {
  const [show, setShow] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const loadDataToLocalStorage = (key: string, data: Transaction[]) => {
      const existingData = localStorage.getItem(key);

      if (!existingData) {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
      }

      return false;
    };

    const loadTransactions = async () => {
      transactions = initializeTransactions();
      incomes = initializeIncomes();
      expenses = initializeExpenses();

      const newTransactionsLoaded = loadDataToLocalStorage(
        "transactions",
        transactions
      );
      const newIncomesLoaded = loadDataToLocalStorage(
        "incomes",
        incomes
      );
      const newExpensesLoaded = loadDataToLocalStorage(
        "expenses",
        expenses
      );

      if (newTransactionsLoaded || newIncomesLoaded || newExpensesLoaded) {
        setShow(true);
        router.replace("/dashboard");
      }
    };

    loadTransactions();
  }, []);

  if (show) {
    return null;
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {cardInfo.map((info, index) => (
          <CardTotal
            key={index}
            label={info.label}
            value={info.value}
            textColor={info.textColor}
            description={info.description}
          />
        ))}
      </div>

      <Card
        className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
      >
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              A detailed overview of your most recent financial activities.
            </CardDescription>
          </div>

          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="/transactions">
              <span className="hidden md:block">
                View All
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>

        <CardContent>
          <TransactionsDataTable columns={transactionColumns} data={transactions} />
        </CardContent>
      </Card>

      <Card
        className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
      >
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Overview</CardTitle>
          </div>

        </CardHeader>
        <CardContent>
          <div className="grid lg:flex md:grid-cols-2 w-full lg:justify-between gap-8">
            <DashboardPieChart />
            <DashboardRadarChart />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default Dashboard;
