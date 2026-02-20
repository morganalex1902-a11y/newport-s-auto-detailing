import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Marcus T.",
    vehicle: "2019 Ford Mustang GT",
    service: "Paint Correction + Ceramic Coating",
    review: "Newport's completely transformed my Mustang. The paint looks better than when I bought it new. The ceramic coating is incredible — water just beads right off.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    vehicle: "2022 Lincoln Navigator",
    service: "Full Interior Detail",
    review: "I had my Navigator detailed before a road trip. The interior was immaculate — they got stains out I thought were permanent. Absolutely worth every penny.",
    rating: 5,
  },
  {
    name: "Derek W.",
    vehicle: "2020 Chevy Silverado",
    service: "Exterior Detail",
    review: "Best detailing shop in the area, hands down. Professional setup, great results. My truck looked showroom-fresh.",
    rating: 5,
  },
  {
    name: "Jennifer M.",
    vehicle: "2018 BMW 5 Series",
    service: "Paint Correction",
    review: "I was skeptical at first, but the before and after difference was unreal. All the swirl marks are gone and the paint has serious depth to it now.",
    rating: 5,
  },
  {
    name: "Tony R.",
    vehicle: "2021 RAM 1500",
    service: "Ceramic Coating",
    review: "Had a ceramic coating done on my new truck. The team explained everything clearly and the results speak for themselves. Highly recommend.",
    rating: 5,
  },
  {
    name: "Amanda L.",
    vehicle: "2017 Toyota Camry",
    service: "Full Detail",
    review: "Quick, professional, and thorough. My car smells brand new inside and looks amazing outside. Newport's is now my go-to shop.",
    rating: 5,
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="red-divider mx-auto mb-4" />
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">Customer Reviews</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't take our word for it — here's what our customers say about Newport's Auto Detailing.
          </p>
        </div>

        <div ref={containerRef} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="glass-red rounded-2xl px-8 py-6 inline-block">
            <p className="font-display font-bold text-xl text-foreground mb-1">Ready to Experience It Yourself?</p>
            <p className="text-muted-foreground text-sm mb-4">Book your detail today.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:bg-primary-bright transition-colors"
            >
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
