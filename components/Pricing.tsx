import { Check, Truck } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(152,35%,92%)] text-[hsl(152,45%,20%)] mb-4">
            <Truck className="w-4 h-4" />
            <span className="text-sm font-medium">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[hsl(150,30%,15%)] mb-4">Transparent Hourly Rates</h2>
          <p className="text-[hsl(150,10%,45%)]">No hidden fees. Our pricing is based on the volume of your move, making it fair and predictable.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard */}
          <div className="bg-white rounded-2xl p-8 shadow-card border border-[hsl(150,15%,88%)] text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[hsl(152,35%,92%)] flex items-center justify-center">
              <Truck className="w-8 h-8 text-[hsl(152,45%,28%)]" />
            </div>
            <h3 className="text-2xl font-display font-bold text-[hsl(150,30%,15%)] mb-1">Standard Move</h3>
            <p className="text-sm text-[hsl(150,10%,45%)] mb-6">Up to 20 cubic metres</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-[hsl(152,45%,28%)]">$120</span>
              <span className="text-[hsl(150,10%,45%)]">/hour</span>
            </div>
            <p className="text-sm text-[hsl(150,10%,45%)] mb-6">Ideal for apartments, studios, and small homes</p>
            <ul className="space-y-3 text-left mb-8">
              {["Up to 4.5 tonne truck", "Professional moving team", "Furniture blankets included", "Public liability insurance"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[hsl(35,90%,55%)] flex-shrink-0" />
                  <span className="text-sm text-[hsl(150,10%,45%)]">{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/#calculator" className="block w-full py-3 rounded-lg border-2 border-[hsl(152,45%,28%)] text-[hsl(152,45%,28%)] font-semibold hover:bg-[hsl(152,35%,92%)] transition-colors">
              Get a Quote
            </Link>
          </div>

          {/* Large */}
          <div className="bg-white rounded-2xl p-8 shadow-elevated border-2 border-[hsl(152,45%,28%)] text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[hsl(35,90%,55%)] text-white text-sm font-semibold px-4 py-1 rounded-full">Most Popular</div>
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-hero flex items-center justify-center">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-[hsl(150,30%,15%)] mb-1">Large Move</h3>
            <p className="text-sm text-[hsl(150,10%,45%)] mb-6">Above 20 cubic metres</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-[hsl(152,45%,28%)]">$130</span>
              <span className="text-[hsl(150,10%,45%)]">/hour</span>
            </div>
            <p className="text-sm text-[hsl(150,10%,45%)] mb-6">Perfect for large homes and office relocations</p>
            <ul className="space-y-3 text-left mb-8">
              {["Larger truck capacity", "Extended moving team", "Furniture blankets included", "Public liability insurance", "Priority scheduling"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[hsl(35,90%,55%)] flex-shrink-0" />
                  <span className="text-sm text-[hsl(150,10%,45%)]">{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/#calculator" className="block w-full py-3 rounded-lg bg-[hsl(152,45%,28%)] text-white font-semibold hover:bg-[hsl(152,45%,22%)] transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-[hsl(150,10%,45%)] mt-8">
          * Minimum 2-hour booking. Additional fees may apply for stairs, long carries, or special items.
        </p>
      </div>
    </section>
  );
}
