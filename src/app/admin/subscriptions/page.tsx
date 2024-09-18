// import { auth } from "@/auth";
import SubscriptionsTable from "@/components/SubscriptionsTable";
// import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Newsletters() {
  //   const session = await auth();
  //   if (!session) {
  //     return redirect("/api/auth/signin?callbackUrl=/admin/newsletters");
  //   }
  return (
    <section className="min-h-screen p-5">
      <h1 className="text-2xl text-center font-bold">Subscriptions</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SubscriptionsTable />
      </Suspense>
    </section>
  );
}
