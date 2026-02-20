import GlassCard from "@/components/GlassCard";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import interiorSeat from "@/assets/interior-seat.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import interiorConsole from "@/assets/interior-console.jpg";

const services = [
  { title: "Steam Cleaning", desc: "High-temperature steam sanitizes and deep-cleans surfaces without harsh chemicals." },
  { title: "Shampoo Extraction", desc: "Professional hot water extraction removes deep stains from carpets and fabric seats." },
  { title: "Odor Removal", desc: "Ozone treatment and enzyme cleaners eliminate odors at the source." },
  { title: "Leather Care", desc: "Professional conditioning protects and restores leather surfaces." },
  { title: "Dashboard & Trim", desc: "All plastic and vinyl surfaces cleaned, protected, and UV-treated." },
  { title: "Door Panels & Vents", desc: "Detailed cleaning of door panels, air vents, and all interior components." },
];

const InteriorDetailing = () => {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="red-divider mx-auto mb-4" />
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">Interior Detailing</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete interior restoration — from deep steam cleaning to odor elimination.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Photo gallery */}
          <div className="grid grid-cols-3 gap-3 rounded-2xl overflow-hidden">
            <img src={interiorSeat} alt="Interior seat cleaning" className="w-full h-48 object-cover rounded-2xl" />
            <img src={interiorDetail} alt="Interior detail work" className="w-full h-48 object-cover rounded-2xl" />
            <img src={interiorConsole} alt="Interior console detail" className="w-full h-48 object-cover rounded-2xl" />
          </div>

          {/* Services grid */}
          <div>
            <h2 className="font-display font-bold text-2xl text-foreground mb-6 text-center">What's Included</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <GlassCard key={s.title} className="p-5">
                  <CheckCircle className="w-5 h-5 text-primary mb-2" />
                  <h3 className="font-display font-semibold text-sm text-foreground mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Note */}
          <GlassCard className="p-6" variant="medium">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Shop-based advantage:</span> Our interior 
              detailing is performed in a climate-controlled shop environment, allowing us to properly dry 
              and inspect every surface before returning your vehicle.
            </p>
          </GlassCard>

          {/* CTA */}
          <GlassCard className="p-8 text-center" variant="red">
            <h3 className="font-display font-bold text-2xl text-foreground mb-2">Book Your Interior Detail</h3>
            <p className="text-muted-foreground text-sm mb-6">Give your interior the deep clean it deserves.</p>
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

export default InteriorDetailing;
