import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Phone, Calculator as CalcIcon } from "lucide-react";

export default function ServicePageLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[hsl(40,20%,98%)]">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-[hsl(152,45%,28%)] hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <article className="max-w-4xl mx-auto prose prose-lg">
            {children}
          </article>
          <div className="max-w-4xl mx-auto mt-12 p-8 rounded-2xl bg-[hsl(152,35%,92%)] text-center">
            <h2 className="text-2xl font-display font-bold text-[hsl(150,30%,15%)] mb-4">Ready to Get Started?</h2>
            <p className="text-[hsl(150,10%,45%)] mb-6">Use our free volume calculator or call us for a personalised quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#calculator" className="inline-flex items-center justify-center gap-2 bg-[hsl(152,45%,28%)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[hsl(152,45%,22%)] transition-colors">
                <CalcIcon className="w-5 h-5" /> Calculate Your Move
              </Link>
              <a href="tel:0414866630" className="inline-flex items-center justify-center gap-2 border-2 border-[hsl(152,45%,28%)] text-[hsl(152,45%,28%)] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors">
                <Phone className="w-5 h-5" /> Call 0414 866 630
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
