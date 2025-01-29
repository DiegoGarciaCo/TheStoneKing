import DashboardCard from "@/components/DashboardCard";
import DashboardChart from "@/components/DashboardChart";
import DashboardTable from "@/components/DashboardTable";
import { Skeleton } from "@/components/ui/skeleton";
import { getDashboardData } from "@/lib/data";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "The Stone King | Dashboard",
  description: "Admin Dashboard",
};

export default async function Dashboard() {
  unstable_noStore();
  const data = await getDashboardData();

  return (
    <section className="container grid grid-cols-2 md:grid-cols-12 md:grid-rows-12 gap-4 py-5 md:max-h-screen">
      <div className="md:col-span-3 md:row-span-3 border-2 border-slate-200 rounded-xl p-5">
        <Suspense fallback={<div>Loading...</div>}>
          <DashboardCard
            title="Contacts This Month"
            data={data.contactsThisMonth}
            percentage={
              isNaN((data.contactsLastMonth / data.contactsThisMonth) * 100)
                ? 0
                : (data.contactsLastMonth / data.contactsThisMonth) * 100
            }
          />
        </Suspense>
      </div>
      <div className="md:col-span-3 md:row-span-3 border-2 border-slate-200 rounded-xl p-5">
        <Suspense
          fallback={
            <div>
              <Skeleton className="h-6 w-24" />
            </div>
          }
        >
          <DashboardCard
            title="Contacts Last Month"
            data={data.contactsLastMonth}
            percentage={
              isNaN((data.contactsTwoMonthsAgo / data.contactsLastMonth) * 100)
                ? 0
                : (data.contactsTwoMonthsAgo / data.contactsLastMonth) * 100
            }
          />
        </Suspense>
      </div>
      <div className="md:col-span-3 md:row-span-3 border-2 border-slate-200 rounded-xl p-5">
        <Suspense fallback={<div>Loading...</div>}>
          <DashboardCard
            title="Subcriptions This Month"
            data={data.subscriptionsThisMonth}
            percentage={
              isNaN(
                (data.subscriptionsLastMonth / data.subscriptionsThisMonth) *
                  100
              )
                ? 0
                : (data.subscriptionsLastMonth / data.subscriptionsThisMonth) *
                  100
            }
          />
        </Suspense>
      </div>
      <div className="md:col-span-3 md:row-span-3 border-2 border-slate-200 rounded-xl p-5">
        <Suspense fallback={<div>Loading...</div>}>
          <DashboardCard
            title="Subcriptions Last Month"
            data={data.subscriptionsLastMonth}
            percentage={
              isNaN(
                (data.subscriptionsTwoMonthsAgo / data.subscriptionsLastMonth) *
                  100
              )
                ? 0
                : (data.subscriptionsTwoMonthsAgo /
                    data.subscriptionsLastMonth) *
                  100
            }
          />
        </Suspense>
      </div>
      <div className="md:col-span-7 md:row-span-9 col-span-2 border-2 border-slate-200 rounded-xl">
        <Suspense fallback={<div>Loading...</div>}>
          <DashboardChart />
        </Suspense>
      </div>
      <div className="md:col-span-5 md:row-span-9 col-span-2 border-2 border-slate-200 rounded-xl">
        <Suspense fallback={<div>Loading...</div>}>
          <DashboardTable />
        </Suspense>
      </div>
    </section>
  );
}
