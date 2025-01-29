import ClientNav from "@/components/ClientNav";
import Footer from "@/components/Footer";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ClientNav />
      {children}
      <Footer />
    </div>
  );
}
