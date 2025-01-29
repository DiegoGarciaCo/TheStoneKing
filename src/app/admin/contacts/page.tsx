import ContactsTable from "@/components/ContactsTable";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { unstable_noStore } from "next/cache";

export default async function Contacts() {
  unstable_noStore();
  return (
    <section className="p-5">
      <h1 className="text-2xl font-bold text-center">Contacts</h1>
      <div>
        <Suspense fallback={<Skeleton />}>
          <ContactsTable />
        </Suspense>
      </div>
    </section>
  );
}
