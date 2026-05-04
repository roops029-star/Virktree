import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[hsl(40,20%,98%)]">
      <Header />
      <main className="pt-40 pb-20 text-center">
        <h1 className="text-6xl font-display font-bold text-[hsl(152,45%,28%)] mb-4">404</h1>
        <p className="text-xl text-[hsl(150,10%,45%)] mb-8">Page not found.</p>
        <Link href="/" className="bg-[hsl(152,45%,28%)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[hsl(152,45%,22%)] transition-colors">
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
