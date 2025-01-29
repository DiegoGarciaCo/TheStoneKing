import ClientNav from "@/components/ClientNav";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  keywords: [
    "Kitchen remodeling chicago",
    "Bathroom remodeling chicago",
    "basement finishing chicago",
    "Kitchen remodeling schaumburg",
    "Bathroom remodeling schaumburg",
    "basement finishing schaumburg",
    "Home renovation",
    "Home remodeling",
    "Experienced kitchen & bath contractors",
    "Top rated kitchen remodelers near Schaumburg, IL",
  ],
  title: "The Stone King | Kitchen and Bath Remodeling",
  description:
    "The Stone King offers expert kitchen and bathroom remodeling services across the Chicagoland area. Based in Elgin, IL, we provide custom designs, high-quality installations, and complete renovations to transform your space.",
  openGraph: {
    title: "The Stone King | Kitchen and Bath Remodeling",
    description:
      "The Stone King offers expert kitchen and bathroom remodeling services across the Chicagoland area. Based in Elgin, IL, we provide custom designs, high-quality installations, and complete renovations to transform your space.",
    type: "website",
    locale: "en_us",
    url: "https://thestonekingllc.com/",
    siteName: "The Stone King",
  },
};

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
