import GlassCard from "@/components/GlassCard";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import wheelDetail from "@/assets/wheel-detail.jpg";
import lincolnExterior from "@/assets/lincoln-exterior.jpg";

const steps = [
  { step: "01", title: "Wash & Decontaminate", desc: "Safe hand wash, iron remover, and clay bar to remove all bonded contamination." },
  { step: "02", title: "Paint Inspection", desc: "We inspect the paint under controlled lighting to assess swirl depth and defect severity." },
  { step: "03", title: "Machine Polish", desc: "Multi-stage machine polishing to remove swirls, scratches, and oxidation." },
  { step: "04", title: "Final Inspection", desc: "Each panel is checked under high-intensity lighting before completion." },
];

const PaintCorrection = () => {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="red-divider mx-auto mb-4" />
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">Paint Correction</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional machine polishing to restore your paint to its deepest gloss.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <GlassCard className="overflow-hidden" variant="medium">
              <img src={wheelDetail} alt="Paint correction detail work" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="font-display font-bold text-xl text-foreground mb-3">What is Paint Correction?</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Paint correction is the process of removing surface defects from your vehicle's clear coat — 
                  swirl marks, light scratches, water spots, and oxidation — through machine polishing.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The result is a dramatically improved, deep gloss finish that looks like new. It's also 
                  the recommended preparation step before a ceramic coating application.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="overflow-hidden">
              <img src={lincolnExterior} alt="After paint correction result" className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground mb-2">Ideal For</h3>
                <ul className="space-y-1.5">
                  {["Vehicles with visible swirls from improper washing", "Cars preparing for ceramic coating", "Pre-sale vehicle preparation", "Show or collector cars"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </div>

          <div className="space-y-5">
            <GlassCard className="p-6" variant="medium">
              <h2 className="font-display font-bold text-xl text-foreground mb-5">Our Process</h2>
              <div className="space-y-5">
                {steps.map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl glass-red flex items-center justify-center text-primary font-display font-bold text-sm shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-foreground mb-1">{s.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6" variant="red">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Ready to Restore Your Paint?</h3>
              <p className="text-sm text-muted-foreground mb-4">Call us or book online to schedule your paint correction.</p>
              <div className="flex gap-3">
                <Link to="/contact" className="flex-1 text-center py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:bg-primary-bright transition-colors inline-flex items-center justify-center gap-2">
                  Book Now <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9187591541" className="flex-1 text-center py-3 rounded-xl glass border border-white/20 text-foreground font-semibold text-sm hover:bg-white/10 transition-colors">
                  918-759-1541
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaintCorrection;
