import GlassCard from "@/components/GlassCard";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";
import lincolnExterior from "@/assets/lincoln-exterior.jpg";

const benefits = [
  { title: "Hydrophobic Protection", desc: "Water beads and rolls off your paint, taking dirt with it." },
  { title: "UV Resistance", desc: "Prevents oxidation and fading from UV exposure." },
  { title: "Chemical Resistance", desc: "Protects against bird droppings, tree sap, and road chemicals." },
  { title: "Enhanced Gloss", desc: "Adds depth and clarity to your paint's appearance." },
  { title: "Easier Maintenance", desc: "Dirt doesn't bond as easily, making washes faster and safer." },
  { title: "Long-Term Value", desc: "Protects your investment and maintains resale value." },
];

const CeramicCoating = () => {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="red-divider mx-auto mb-4" />
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">Ceramic Coatings</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional-grade nano-ceramic protection. The best long-term investment for your vehicle's paint.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Hero image + intro */}
          <GlassCard className="overflow-hidden" variant="medium">
            <div className="grid lg:grid-cols-2">
              <img src={lincolnExterior} alt="Ceramic coated vehicle" className="w-full h-64 lg:h-auto object-cover" />
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center text-primary mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h2 className="font-display font-black text-2xl text-foreground mb-3">What is Ceramic Coating?</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  A ceramic coating is a liquid polymer applied by hand to the exterior of a vehicle. It chemically 
                  bonds with the factory paint, creating a protective layer that cannot be removed by regular washing.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Unlike wax or sealant, ceramic coating lasts years — not months. It provides superior protection 
                  while enhancing the depth and clarity of your paint.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Benefits grid */}
          <div>
            <h2 className="font-display font-bold text-2xl text-foreground mb-6 text-center">Why Ceramic Coating?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((b) => (
                <GlassCard key={b.title} className="p-5">
                  <CheckCircle className="w-5 h-5 text-primary mb-2" />
                  <h3 className="font-display font-semibold text-sm text-foreground mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Note */}
          <GlassCard className="p-6" variant="medium">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Important:</span> For best results, paint correction is recommended before ceramic coating application. 
              Any surface defects will be locked under the coating. Ask us about our paint correction + ceramic coating combo.
            </p>
          </GlassCard>

          {/* CTA */}
          <GlassCard className="p-8 text-center" variant="red">
            <h3 className="font-display font-bold text-2xl text-foreground mb-2">Protect Your Investment</h3>
            <p className="text-muted-foreground text-sm mb-6">Schedule your ceramic coating consultation today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm tracking-wide hover:bg-primary-bright transition-colors inline-flex items-center gap-2 justify-center">
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:9187591541" className="px-8 py-3 rounded-xl glass border border-white/20 text-foreground font-semibold text-sm hover:bg-white/10 transition-colors">
                Call 918-759-1541
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default CeramicCoating;
