"use client";

import { useEffect, useState } from 'react'
import CardTotal from './card/card-total';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { DataTable } from '@/components/data-table/data-table';
import { transactionColumns } from './transactions/columns';
import { Transaction } from '@/types/transaction';
import { CardInfo } from './card/types';
import { initializeTransactions } from '@/actions/fetch-transaction';

interface DashboardProps {
  transactions: Transaction[];
  cardInfo: CardInfo[];
}

const Dashboard = ({
  transactions,
  cardInfo
}: DashboardProps) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const loadTransactions = async () => {
      transactions = initializeTransactions();

      const existingTransactions = localStorage.getItem('transactions');

      if (!existingTransactions) {
        localStorage.setItem('transactions', JSON.stringify(transactions));
        console.log('Initial transactions loaded.');
        setShow(true);

        // gambiarra, to com preguiça
        window.location.reload();
      } else {
        console.log('Transactions already exist in localStorage.');
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
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>

        <CardContent>
          <DataTable columns={transactionColumns} data={transactions} />
        </CardContent>
      </Card>
    </main>
  )
}

export default Dashboard;
