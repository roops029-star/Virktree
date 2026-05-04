import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/assets/virktree-logo.png" alt="VirkTree Logo" width={56} height={56} className="h-14 w-auto brightness-0 invert" />
              <div>
                <h3 className="text-lg font-display font-bold">VirkTree</h3>
                <p className="text-xs text-white/70">Removalist</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">Professional removalist services with transparent pricing. Trusted by thousands of happy customers across Sydney.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                { label: "House Removalists", href: "/house-removalists" },
                { label: "Local Moving", href: "/local-moving" },
                { label: "Interstate Removalists", href: "/interstate-removalists" },
                { label: "Packing & Unpacking", href: "/packing-and-unpacking" },
                { label: "Office Relocation", href: "/office-relocation" },
              ].map((s) => (
                <li key={s.href}><Link href={s.href} className="hover:text-white transition-colors">{s.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                { label: "Removalists Blacktown", href: "/removalists-blacktown" },
                { label: "Removalists Parramatta", href: "/removalists-parramatta" },
                { label: "Removalists Penrith", href: "/removalists-penrith" },
                { label: "Removalists Castle Hill", href: "/removalists-castle-hill" },
                { label: "Removalists Rouse Hill", href: "/removalists-rouse-hill" },
              ].map((s) => (
                <li key={s.href}><Link href={s.href} className="hover:text-white transition-colors">{s.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">VirkTree Pty Ltd</h4>
            <p className="text-sm text-white/80 mb-2">Fully Licensed & Insured<br />Australian Owned & Operated<br />7 Days a Week · 6am–8pm</p>
            <p className="text-sm text-white/80">
              <strong>Phone:</strong> <a href="tel:0414866630" className="hover:underline">0414 866 630</a><br />
              <strong>Email:</strong> <a href="mailto:info@virktree.com.au" className="hover:underline">info@virktree.com.au</a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} VirkTree Pty Ltd. All rights reserved. | Sydney, NSW, Australia</p>
        </div>
      </div>
    </footer>
  );
}
