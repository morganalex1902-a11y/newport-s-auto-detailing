import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/GlassCard";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Phone, ArrowRight } from "lucide-react";
import lincolnExterior from "@/assets/lincoln-exterior.jpg";
import interiorConsole from "@/assets/interior-console.jpg";

gsap.registerPlugin(ScrollTrigger);

const values = [
  "Shop-based service — controlled environment for higher quality results",
  "Professional-grade equipment and premium products",
  "Attention to detail on every vehicle, every time",
  "Serving Okmulgee and surrounding Oklahoma communities",
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="red-divider mx-auto mb-4" />
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">
            About Newport's
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A professional auto detailing shop in Okmulgee, Oklahoma, delivering premium results in a controlled environment.
          </p>
        </div>
      </section>

      {/* Story */}
      <section ref={containerRef} className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
            <div className="about-animate">
              <GlassCard className="p-8 md:p-10" variant="medium">
                <div className="red-divider mb-4" />
                <h2 className="font-display font-black text-2xl md:text-3xl text-foreground mb-4">
                  Professional Detailing Shop
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Newport's Auto Detailing is based in Okmulgee, Oklahoma, and is dedicated to providing 
                  the highest quality auto detailing services available. Unlike mobile detailers who work 
                  outdoors, we operate exclusively out of our professional shop facility.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our shop environment means no wind carrying dust back onto freshly washed paint, 
                  no sun baking chemicals into your clear coat, and no rain interrupting your service. 
                  Every vehicle gets the same controlled, professional experience.
                </p>
                <ul className="space-y-3">
                  {values.map((v) => (
                    <li key={v} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{v}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            <div className="about-animate space-y-5">
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img src={lincolnExterior} alt="Newport's detail work - Lincoln Navigator" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img src={interiorConsole} alt="Interior detailing results" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Visit us */}
          <div className="about-animate">
            <GlassCard className="p-8" variant="red">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Visit Our Shop</h3>
                  <div className="flex items-start gap-2 text-muted-foreground mb-1">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">909 S Wood Drive, Okmulgee, OK 74447</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href="tel:9187591541" className="text-sm hover:text-foreground transition-colors">918-759-1541</a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide hover:bg-primary-bright transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:9187591541"
                    className="px-6 py-3 rounded-xl glass border border-white/20 text-foreground font-display font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors duration-200"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
