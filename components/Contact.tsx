import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[hsl(40,15%,94%)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[hsl(150,30%,15%)] mb-4">Get In Touch</h2>
          <p className="text-[hsl(150,10%,45%)]">Ready to move? Contact us today for a free consultation and quote.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Phone, title: "Call Us", content: <a href="tel:0414866630" className="text-[hsl(152,45%,28%)] hover:underline font-medium">0414 866 630</a> },
            { icon: Mail, title: "Email Us", content: <a href="mailto:info@virktree.com.au" className="text-[hsl(152,45%,28%)] hover:underline font-medium text-sm">info@virktree.com.au</a> },
            { icon: MapPin, title: "Service Area", content: <span className="text-[hsl(150,10%,45%)] text-sm">Sydney & Surrounding Areas</span> },
            { icon: Clock, title: "Hours", content: <span className="text-[hsl(150,10%,45%)] text-sm">7 Days a Week<br />6am – 8pm</span> },
          ].map(({ icon: Icon, title, content }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-card text-center border border-[hsl(150,15%,88%)]">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[hsl(152,35%,92%)] flex items-center justify-center">
                <Icon className="w-7 h-7 text-[hsl(152,45%,28%)]" />
              </div>
              <h3 className="font-semibold text-[hsl(150,30%,15%)] mb-2">{title}</h3>
              {content}
            </div>
          ))}
        </div>

        {/* Quote form CTA */}
        <div className="max-w-2xl mx-auto mt-12 bg-gradient-hero rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-display font-bold mb-3">Ready for a Free Quote?</h3>
          <p className="text-white/80 mb-6">Use our cubic metre calculator below or call us directly — we'll give you an honest price with no surprises.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0414866630" className="bg-white text-[hsl(152,45%,28%)] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Call Now
            </a>
            <a href="/#calculator" className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
              Use Calculator
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
