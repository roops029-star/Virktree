import Link from "next/link";
import { Home, MapPin, ArrowRight, Package, Building2, Truck } from "lucide-react";

const services = [
  { icon: Home, title: "House Removalists", desc: "Full residential moving service — from studio apartments to large family homes. We handle furniture, appliances, and fragile items with care.", href: "/house-removalists" },
  { icon: MapPin, title: "Local Moving", desc: "Efficient local moves across Sydney. Our team knows every suburb and the fastest routes to get you settled quickly.", href: "/local-moving" },
  { icon: Truck, title: "Interstate Removalists", desc: "Moving interstate? We service Melbourne, Brisbane, Adelaide, and Canberra with secure, direct transport.", href: "/interstate-removalists" },
  { icon: Package, title: "Packing & Unpacking", desc: "Professional packing with quality materials. We wrap, box, and label everything — or just unpack and set up at the other end.", href: "/packing-and-unpacking" },
  { icon: Building2, title: "Office Relocation", desc: "Minimal downtime office moves. We plan around your schedule so your business stays running throughout the transition.", href: "/office-relocation" },
  { icon: MapPin, title: "Furniture Removals", desc: "Single item or full household? We move furniture carefully with blankets, straps, and the right equipment.", href: "/#calculator" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[hsl(40,20%,98%)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(152,35%,92%)] text-[hsl(152,45%,20%)] mb-4">
            <Truck className="w-4 h-4" />
            <span className="text-sm font-medium">What We Do</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[hsl(150,30%,15%)] mb-4">Removalist Services in Sydney</h2>
          <p className="text-[hsl(150,10%,45%)]">From local moves to interstate relocations — VirkTree handles it all with professionalism and transparent pricing.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map(({ icon: Icon, title, desc, href }) => (
            <Link key={title} href={href} className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all border border-[hsl(150,15%,88%)] hover:border-[hsl(152,45%,28%)]">
              <div className="w-12 h-12 rounded-xl bg-[hsl(152,35%,92%)] flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[hsl(152,45%,28%)]" />
              </div>
              <h3 className="text-lg font-display font-bold text-[hsl(150,30%,15%)] mb-2">{title}</h3>
              <p className="text-sm text-[hsl(150,10%,45%)] mb-4">{desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(152,45%,28%)] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
