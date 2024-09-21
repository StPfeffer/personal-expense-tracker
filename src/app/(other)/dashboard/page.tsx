"use client";

import { ContentLayout } from "@/components/admin-panel/layout/content-layout";
import { calculateCardInfo } from "@/components/admin-panel/dashboard/card/helper";
import { CardInfo } from "@/components/admin-panel/dashboard/card/types";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Dashboard from "@/components/admin-panel/dashboard/dashboard";
import { fetchRecentTransactions, fetchTransactions } from "@/actions/fetch-transaction";
import { fetchRecentIncomes } from "@/actions/fetch-incomes";
import { fetchRecentExpenses } from "@/actions/fetch-expenses";

const DashboardPage = () => {
  const transactions = fetchRecentTransactions();
  const incomes = fetchRecentIncomes();
  const expenses = fetchRecentExpenses();
  const cardInfo: CardInfo[] = calculateCardInfo(fetchTransactions());

  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Dashboard
        cardInfo={cardInfo}
        transactions={transactions}
        incomes={incomes}
        expenses={expenses}
      />
    </ContentLayout>
  );
}

export default DashboardPage;
