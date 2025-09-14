// app/(site)/layout.tsx
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}