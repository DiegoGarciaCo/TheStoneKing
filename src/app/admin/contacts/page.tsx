// import { auth } from "@/auth";
import ContactsTable from "@/components/ContactsTable";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Contacts() {
  //   const session = await auth();
  //   if (!session) {
  //     return redirect("/api/auth/signin?callbackUrl=/admin/contacts");
  //   }
  return (
    <section className="p-5">
      <h1 className="text-2xl font-bold text-center">Contacts</h1>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ContactsTable />
        </Suspense>
      </div>
    </section>
  );
}
