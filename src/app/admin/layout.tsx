import { Metadata } from "next";
import AdminNav from "./AdminNav";

export const metadata: Metadata = {
  title: "The Stone King | Admin",
  description: "Admin Dashboard",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}
