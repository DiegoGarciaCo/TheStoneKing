import SubscriptionsTable from "@/components/SubscriptionsTable";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";

export default async function Newsletters() {
  unstable_noStore();
  return (
    <section className="min-h-screen p-5">
      <h1 className="text-2xl text-center font-bold">Subscriptions</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SubscriptionsTable />
      </Suspense>
    </section>
  );
}
