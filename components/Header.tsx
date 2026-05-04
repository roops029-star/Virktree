"use client";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[hsl(150,15%,88%)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/virktree-logo.png" alt="VirkTree Removalists Logo" width={56} height={56} className="h-12 md:h-14 w-auto" />
            <div>
              <span className="text-lg md:text-xl font-display font-bold text-[hsl(150,30%,15%)]">VirkTree</span>
              <p className="text-xs text-[hsl(150,10%,45%)] -mt-1">Removalist</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Services", href: "/#services" },
              { label: "Pricing", href: "/#pricing" },
              { label: "Calculator", href: "/#calculator" },
              { label: "Contact", href: "/#contact" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="text-[hsl(150,10%,45%)] hover:text-[hsl(150,30%,15%)] transition-colors font-medium">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0414866630" className="flex items-center gap-2 text-[hsl(152,45%,28%)] font-semibold">
              <Phone className="w-4 h-4" />
              <span>0414 866 630</span>
            </a>
            <Link href="/#calculator" className="bg-[hsl(152,45%,28%)] text-white px-4 py-2 rounded-lg font-medium hover:bg-[hsl(152,45%,22%)] transition-colors">
              Get Free Quote
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[hsl(150,15%,88%)]">
            <nav className="flex flex-col gap-4">
              {[
                { label: "Services", href: "/#services" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Calculator", href: "/#calculator" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-[hsl(150,10%,45%)] hover:text-[hsl(150,30%,15%)] transition-colors font-medium">
                  {item.label}
                </Link>
              ))}
              <a href="tel:0414866630" className="flex items-center gap-2 text-[hsl(152,45%,28%)] font-semibold">
                <Phone className="w-4 h-4" /><span>0414 866 630</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
