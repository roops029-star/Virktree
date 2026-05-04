import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Phone, Calculator, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Removalists Western Sydney — VirkTree",
  description: "Professional removalist services across Western Sydney. VirkTree covers Blacktown, Parramatta, Seven Hills, Auburn, Granville, Merrylands, Lidcombe, Rooty Hill, Mount Druitt. Fully insured, from $120/hr. Call 0414 866 630.",
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
              <MapPin className="w-3 h-3" /> Western Sydney
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-[hsl(150,30%,15%)] mb-4">
              Removalists Western Sydney
            </h1>
            <p className="text-lg text-[hsl(150,10%,45%)] leading-relaxed">
              Western Sydney is VirkTree's home territory. We move families and businesses across Blacktown, Parramatta, Seven Hills, Merrylands, Auburn and all surrounding suburbs every day.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[hsl(150,15%,88%)] shadow-card mb-8">
            <h2 className="text-xl font-display font-bold text-[hsl(150,30%,15%)] mb-4">Suburbs We Service in Western Sydney</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              <li><a href="/removalists-blacktown" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Blacktown Removalists →</a></li>
              <li><a href="/removalists-parramatta" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Parramatta Removalists →</a></li>
              <li><a href="/removalists-seven-hills" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Seven Hills Removalists →</a></li>
              <li><a href="/removalists-merrylands" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Merrylands Removalists →</a></li>
              <li><a href="/removalists-granville" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Granville Removalists →</a></li>
              <li><a href="/removalists-auburn" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Auburn Removalists →</a></li>
              <li><a href="/removalists-lidcombe" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Lidcombe Removalists →</a></li>
              <li><a href="/removalists-rooty-hill" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Rooty Hill Removalists →</a></li>
              <li><a href="/removalists-mount-druitt" className="text-[hsl(152,45%,28%)] hover:underline font-medium">Mount Druitt Removalists →</a></li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[hsl(150,15%,88%)] shadow-card mb-8">
            <h2 className="text-xl font-display font-bold text-[hsl(150,30%,15%)] mb-4">Why Choose VirkTree in Western Sydney?</h2>
            <ul className="space-y-3 text-[hsl(150,10%,45%)]">
              <li className="flex items-start gap-2"><span className="text-[hsl(152,45%,28%)] mt-1">✓</span><span><strong className="text-[hsl(150,30%,15%)]">Local expertise</strong> — we know the streets, parking restrictions, and building access across Western Sydney</span></li>
              <li className="flex items-start gap-2"><span className="text-[hsl(152,45%,28%)] mt-1">✓</span><span><strong className="text-[hsl(150,30%,15%)]">Transparent pricing</strong> — $120/hr (up to 20m³) or $130/hr (above 20m³). No hidden charges.</span></li>
              <li className="flex items-start gap-2"><span className="text-[hsl(152,45%,28%)] mt-1">✓</span><span><strong className="text-[hsl(150,30%,15%)]">Fully insured</strong> — public liability and goods in transit coverage on every move</span></li>
              <li className="flex items-start gap-2"><span className="text-[hsl(152,45%,28%)] mt-1">✓</span><span><strong className="text-[hsl(150,30%,15%)]">7 days a week</strong> — available 6am to 8pm including weekends</span></li>
            </ul>
          </div>

          <div className="bg-gradient-hero rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-display font-bold mb-3">Ready to Move in Western Sydney?</h2>
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
