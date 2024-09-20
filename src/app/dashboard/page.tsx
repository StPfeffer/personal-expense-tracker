import CardTotal from "@/components/dashboard/card/card-total";
import RecentTransactions from "@/components/dashboard/recent-transactions";

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <CardTotal />
        <CardTotal />
        <CardTotal />
        <CardTotal />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <RecentTransactions />
      </div>
    </main>
  );
}
