"use client";
import { useState } from "react";
import { Plus, Minus, Calculator as CalcIcon, Truck } from "lucide-react";

const FURNITURE_ITEMS = [
  { name: "Single Bed", cbm: 1.2 }, { name: "Double/Queen Bed", cbm: 2.0 }, { name: "King Bed", cbm: 2.5 },
  { name: "Wardrobe (small)", cbm: 1.5 }, { name: "Wardrobe (large)", cbm: 2.5 }, { name: "Chest of Drawers", cbm: 0.8 },
  { name: "Dining Table", cbm: 1.2 }, { name: "Dining Chair", cbm: 0.2 }, { name: "Couch (2-seater)", cbm: 1.5 },
  { name: "Couch (3-seater)", cbm: 2.2 }, { name: "Coffee Table", cbm: 0.4 }, { name: "TV Unit", cbm: 0.6 },
  { name: "Bookshelf", cbm: 0.8 }, { name: "Fridge", cbm: 1.0 }, { name: "Washing Machine", cbm: 0.7 },
  { name: "Dryer", cbm: 0.5 }, { name: "Desk", cbm: 0.8 }, { name: "Office Chair", cbm: 0.4 },
  { name: "Box (small)", cbm: 0.06 }, { name: "Box (medium)", cbm: 0.12 }, { name: "Box (large)", cbm: 0.18 },
];

export default function Calculator() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const update = (name: string, delta: number) => {
    setQuantities((prev) => {
      const next = (prev[name] || 0) + delta;
      return { ...prev, [name]: Math.max(0, next) };
    });
  };

  const totalCbm = Object.entries(quantities).reduce((sum, [name, qty]) => {
    const item = FURNITURE_ITEMS.find((i) => i.name === name);
    return sum + (item ? item.cbm * qty : 0);
  }, 0);

  const hourlyRate = totalCbm <= 20 ? 120 : 130;
  const estimatedHours = totalCbm > 0 ? Math.max(2, Math.ceil(totalCbm / 8)) : 0;
  const estimatedCost = estimatedHours * hourlyRate;

  return (
    <section id="calculator" className="py-20 bg-[hsl(40,20%,98%)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(152,35%,92%)] text-[hsl(152,45%,20%)] mb-4">
            <CalcIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Free Tool</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[hsl(150,30%,15%)] mb-4">Cubic Metre Calculator</h2>
          <p className="text-[hsl(150,10%,45%)]">Select your furniture items to estimate your move volume and get an instant price guide.</p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Item selector */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-[hsl(150,15%,88%)] shadow-card overflow-hidden">
            <div className="p-6 border-b border-[hsl(150,15%,88%)]">
              <h3 className="font-display font-bold text-[hsl(150,30%,15%)]">Select Your Items</h3>
            </div>
            <div className="p-6 grid sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto">
              {FURNITURE_ITEMS.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-3 rounded-xl bg-[hsl(40,20%,98%)] border border-[hsl(150,15%,88%)]">
                  <div>
                    <p className="text-sm font-medium text-[hsl(150,30%,15%)]">{item.name}</p>
                    <p className="text-xs text-[hsl(150,10%,45%)]">{item.cbm} m³</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => update(item.name, -1)} className="w-7 h-7 rounded-lg bg-[hsl(152,35%,92%)] text-[hsl(152,45%,28%)] flex items-center justify-center hover:bg-[hsl(152,45%,28%)] hover:text-white transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-sm font-semibold text-[hsl(150,30%,15%)]">{quantities[item.name] || 0}</span>
                    <button onClick={() => update(item.name, 1)} className="w-7 h-7 rounded-lg bg-[hsl(152,35%,92%)] text-[hsl(152,45%,28%)] flex items-center justify-center hover:bg-[hsl(152,45%,28%)] hover:text-white transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-gradient-hero text-white rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Truck className="w-5 h-5" />
                <h3 className="font-display font-bold">Your Estimate</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-white/70 text-sm">Total Volume</p>
                  <p className="text-3xl font-bold">{totalCbm.toFixed(1)} <span className="text-lg font-normal">m³</span></p>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Hourly Rate</p>
                  <p className="text-2xl font-bold">${hourlyRate}<span className="text-base font-normal">/hr</span></p>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-white/70 text-sm">Estimated Cost</p>
                  <p className="text-3xl font-bold">{estimatedHours > 0 ? `$${estimatedCost.toLocaleString()}` : "—"}</p>
                  {estimatedHours > 0 && <p className="text-white/70 text-xs mt-1">~{estimatedHours} hrs · min 2 hr booking</p>}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[hsl(150,15%,88%)] shadow-card">
              <p className="text-sm text-[hsl(150,10%,45%)] mb-4">This is a guide estimate. Call us for a confirmed quote.</p>
              <a href="tel:0414866630" className="block w-full py-3 bg-[hsl(152,45%,28%)] text-white rounded-lg font-semibold text-center hover:bg-[hsl(152,45%,22%)] transition-colors mb-3">
                Call for Exact Quote
              </a>
              <button onClick={() => setQuantities({})} className="block w-full py-3 border border-[hsl(150,15%,88%)] rounded-lg text-sm text-[hsl(150,10%,45%)] hover:bg-[hsl(40,20%,98%)] transition-colors">
                Reset Calculator
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
