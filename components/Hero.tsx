import Link from "next/link";
import { ArrowDown, Star, Shield, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/hero-moving.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(152,45%,28%)]/95 via-[hsl(152,45%,28%)]/80 to-[hsl(152,45%,28%)]/60" />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Star className="w-4 h-4 text-[hsl(35,90%,55%)]" fill="currentColor" />
            <span className="text-sm text-white font-medium">Trusted by 1,000+ happy customers across Sydney</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            Professional House
            <span className="block text-[hsl(35,90%,55%)]">Removalists & Moving Services</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8">
            Sydney's trusted removalist team for local and interstate moves. Packing, loading, and transport — calculate your move volume instantly and get a transparent quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/#calculator" className="inline-flex items-center justify-center gap-2 bg-[hsl(35,90%,55%)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[hsl(25,85%,50%)] transition-colors">
              Calculate Your Move <ArrowDown className="w-5 h-5" />
            </Link>
            <a href="tel:0414866630" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors">
              Call 0414 866 630
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Fully Insured", sub: "Complete protection" },
              { icon: Clock, title: "On-Time", sub: "Punctual every time" },
              { icon: Star, title: "5-Star Rated", sub: "Google & Facebook" },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[hsl(35,90%,55%)]" />
                </div>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-sm text-white/70">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
}
