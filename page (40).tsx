import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Phone, Calculator, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Removalists Hills District — VirkTree",
  description: "Professional removalist services across Hills District. VirkTree covers Castle Hill, Kellyville, Rouse Hill, Baulkham Hills, Bella Vista, Norwest, Cherrybrook. Fully insured, from $120/hr. Call 0414 866 630.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[hsl(40,20%,98%)]">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-[hsl(152,45%,28%)] hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(152,35%,92%)] text-[hsl(152,45%,20%)] text-sm mb-4">
              <MapPin className="w-3 h-3" /> Hills District
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-[hsl(150,30%,15%)] mb-4">
              Removalists Hills District
            </h1>
            <p className="text-lg text-[hsl(150,10%,45%)] leading-relaxed">
              The Hills District is one of Sydney's fastest-growing areas. VirkTree regularly services Castle Hill, Kellyville, Rouse Hill, Baulkham Hills and Norwest — we know every street and estate.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[hsl(150,15%,88%)] shadow-card mb-8">
            <h2 className="text-xl font-display font-bold text-[hsl(150,30%,15%)] mb-4">Suburbs We Service in Hills District</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              <li><a href="/removalists-castle-hill" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Castle Hill Removalists →</a></li>
              <li><a href="/removalists-kellyville" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Kellyville Removalists →</a></li>
              <li><a href="/removalists-rouse-hill" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Rouse Hill Removalists →</a></li>
              <li><a href="/removalists-baulkham-hills" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Baulkham Hills Removalists →</a></li>
              <li><a href="/removalists-bella-vista" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Bella Vista Removalists →</a></li>
              <li><a href="/removalists-norwest" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Norwest Removalists →</a></li>
              <li><a href="/removalists-cherrybrook" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Cherrybrook Removalists →</a></li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[hsl(150,15%,88%)] shadow-card mb-8">
            <h2 className="text-xl font-display font-bold text-[hsl(150,30%,15%)] mb-4">Why Choose VirkTree in Hills District?</h2>
            <ul className="space-y-3 text-[hsl(150,10%,45%)]">
              <li className="flex items-start gap-2"><span className="text-[hsl(152,45%,28%)] mt-1">✓</span><span><strong className="text-[hsl(150,30%,15%)]">Local expertise</strong> — we know the streets, parking restrictions, and building access across Hills District</span></li>
              <li className="flex items-start gap-2"><span className="text-[hsl(152,45%,28%)] mt-1">✓</span><span><strong className="text-[hsl(150,30%,15%)]">Transparent pricing</strong> — $120/hr (up to 20m³) or $130/hr (above 20m³). No hidden charges.</span></li>
              <li className="flex items-start gap-2"><span className="text-[hsl(152,45%,28%)] mt-1">✓</span><span><strong className="text-[hsl(150,30%,15%)]">Fully insured</strong> — public liability and goods in transit coverage on every move</span></li>
              <li className="flex items-start gap-2"><span className="text-[hsl(152,45%,28%)] mt-1">✓</span><span><strong className="text-[hsl(150,30%,15%)]">7 days a week</strong> — available 6am to 8pm including weekends</span></li>
            </ul>
          </div>

          <div className="bg-gradient-hero rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-display font-bold mb-3">Ready to Move in Hills District?</h2>
            <p className="text-white/80 mb-6">Get a free quote — call us or use our cubic metre calculator for an instant estimate.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0414866630" className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(152,45%,28%)] px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                <Phone className="w-5 h-5" /> Call 0414 866 630
              </a>
              <Link href="/#calculator" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                <Calculator className="w-5 h-5" /> Calculate Your Move
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
