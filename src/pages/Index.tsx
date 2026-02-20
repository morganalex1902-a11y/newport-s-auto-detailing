import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import GlassCard from "@/components/GlassCard";
import { Link } from "react-router-dom";
import { Sparkles, Car, Shield, Layers, ArrowRight, MapPin, Star } from "lucide-react";
import lincolnExterior from "@/assets/lincoln-exterior.jpg";
import interiorSeat from "@/assets/interior-seat.jpg";
import wheelDetail from "@/assets/wheel-detail.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Premium Interior Detailing",
    description: "Deep steam cleaning, shampoo extraction, and complete interior restoration.",
    features: ["Steam cleaning", "Shampoo extraction", "Odor removal"],
    href: "/services/interior-detailing",
    image: interiorSeat,
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Premium Exterior Detailing",
    description: "Safe wash methods, wheel detailing, and protective paint sealant application.",
    features: ["Safe wash method", "Wheel & tire detailing", "Paint sealant"],
    href: "/services",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Paint Correction",
    description: "Professional swirl removal, gloss enhancement, and machine polishing.",
    features: ["Swirl removal", "Gloss enhancement", "Machine polishing"],
    href: "/services/paint-correction",
    image: wheelDetail,
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Ceramic Coatings",
    description: "Long-term paint protection with hydrophobic surface and UV resistance.",
    features: ["Long-term protection", "Hydrophobic surface", "UV resistance"],
    href: "/services/ceramic-coating",
    image: lincolnExterior,
  },
];

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".section-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".section-title", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".service-animate",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 80%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <Hero />

      {/* Services */}
      <section ref={servicesRef} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 section-title">
            <div className="red-divider mx-auto mb-4" />
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-3">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Shop-based detailing in a controlled environment — ensuring consistent, premium results every time.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="service-animate">
                <ServiceCard {...s} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div ref={aboutRef} className="opacity-0">
            <GlassCard className="p-8 md:p-12 lg:p-16" variant="medium">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="red-divider mb-4" />
                  <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                    Why Newport's?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Newport's Auto Detailing is a professional detailing shop located in Okmulgee, Oklahoma.
                    We operate out of a controlled shop environment — meaning every detail job gets the focus
                    and quality it deserves, free from weather and environmental variables.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    From daily drivers to showroom-quality finishes, we bring precision detailing and
                    professional-grade ceramic coatings to every vehicle that comes through our doors.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { icon: <MapPin className="w-4 h-4" />, label: "909 S Wood Drive, Okmulgee" },
                      { icon: <Star className="w-4 h-4" />, label: "5-Star Rated Service" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2 text-sm text-foreground/70">
                        <span className="text-primary">{item.icon}</span>
                        {item.label}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide hover:bg-primary-bright transition-colors duration-200"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={lincolnExterior}
                      alt="Premium detailing result - Lincoln Navigator"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 glass-red rounded-xl px-4 py-3">
                    <p className="font-display font-bold text-xl text-foreground">Shop-Based</p>
                    <p className="text-xs text-muted-foreground">Controlled Environment</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12 text-center overflow-hidden relative"
            style={{ background: "var(--gradient-red)" }}
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)" }} />
            <h2 className="relative font-display font-black text-2xl md:text-3xl text-primary-foreground mb-3">
              Ready to Book Your Detail?
            </h2>
            <p className="relative text-primary-foreground/80 mb-6 text-sm">
              Call us or fill out our contact form — we'll get you scheduled fast.
            </p>
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-xl bg-foreground text-background font-display font-bold text-sm uppercase tracking-wide hover:bg-foreground/90 transition-colors duration-200"
              >
                Book Appointment
              </Link>
              <a
                href="tel:9187591541"
                className="px-8 py-3 rounded-xl border border-primary-foreground/30 text-primary-foreground font-display font-semibold text-sm uppercase tracking-wide hover:bg-primary-foreground/10 transition-colors duration-200"
              >
                918-759-1541
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
