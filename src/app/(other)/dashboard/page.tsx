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

const DashboardPage = () => {
  const transactions = fetchRecentTransactions();
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

      <Dashboard cardInfo={cardInfo} transactions={transactions} />
    </ContentLayout>
  );
}

export default DashboardPage;
