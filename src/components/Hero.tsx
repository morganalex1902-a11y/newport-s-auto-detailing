import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { Phone, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-mustang.jpg";

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium auto detailing - Red Mustang"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(30,5,5,0.75) 50%, rgba(0,0,0,0.85) 100%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 glass-red px-4 py-2 rounded-full mb-6 opacity-0">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-red" />
          <span className="text-xs font-display font-semibold tracking-widest uppercase text-primary">
            Okmulgee, Oklahoma
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="opacity-0 font-display font-black text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight tracking-tight mb-6"
        >
          Premium Auto{" "}
          <span className="text-gradient-red">Detailing</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl font-light">in Okmulgee, Oklahoma</span>
        </h1>

        {/* Sub */}
        <p
          ref={subRef}
          className="opacity-0 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Interior. Exterior. Paint Correction.{" "}
          <span className="text-primary font-semibold">The BEST Ceramic Coatings.</span>
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold tracking-wide text-sm uppercase hover:bg-primary-bright transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transform"
          >
            Book Appointment
          </Link>
          <a
            href="tel:9187591541"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass border border-white/20 text-foreground font-display font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            Call 918-759-1541
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-foreground/30">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
