import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "@/assets/logo.png";

interface PageLoaderProps {
  onComplete?: () => void;
}

const PageLoader = ({ onComplete }: PageLoaderProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    // Fade in overlay
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      // Logo circle scale in
      .fromTo(
        circleRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      )
      // Logo fade in
      .fromTo(logoRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.3 }, "-=0.2")
      // Shimmer sweep
      .fromTo(
        shimmerRef.current,
        { x: "-100%", opacity: 0.6 },
        { x: "200%", opacity: 0.6, duration: 0.8, ease: "power2.inOut" },
        "-=0.1"
      )
      // Hold
      .to({}, { duration: 0.4 })
      // Exit
      .to(overlayRef.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "hsl(0, 50%, 8%)" }}
    >
      <div
        ref={circleRef}
        className="relative w-28 h-28 rounded-full glass-red flex items-center justify-center overflow-hidden"
        style={{ boxShadow: "0 0 60px rgba(200,30,30,0.3), 0 0 120px rgba(200,30,30,0.1)" }}
      >
        <div
          ref={shimmerRef}
          className="absolute inset-0 w-1/3"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            transform: "skewX(-15deg)",
          }}
        />
        <img ref={logoRef} src={logo} alt="Newport's Auto Detailing" className="w-20 h-20 object-cover rounded-full" />
      </div>
    </div>
  );
};

export default PageLoader;
