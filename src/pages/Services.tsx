import ServiceCard from "@/components/ServiceCard";
import { Sparkles, Car, Shield, Layers } from "lucide-react";
import lincolnExterior from "@/assets/lincoln-exterior.jpg";
import interiorSeat from "@/assets/interior-seat.jpg";
import wheelDetail from "@/assets/wheel-detail.jpg";
import interiorConsole from "@/assets/interior-console.jpg";

const services = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Paint Correction",
    description: "Machine polishing to remove swirls, scratches, and oxidation — restoring gloss and depth to your paint.",
    features: ["Swirl & scratch removal", "Gloss enhancement", "Machine polishing", "Paint preparation"],
    href: "/services/paint-correction",
    image: wheelDetail,
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Ceramic Coatings",
    description: "Professional-grade nano-ceramic protection that bonds to your paint and lasts for years.",
    features: ["Long-term protection", "Hydrophobic surface", "UV resistance", "Enhanced gloss"],
    href: "/services/ceramic-coating",
    image: lincolnExterior,
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Interior Detailing",
    description: "Complete interior restoration using steam, extraction, and premium products.",
    features: ["Steam cleaning", "Shampoo extraction", "Odor removal", "Leather conditioning"],
    href: "/services/interior-detailing",
    image: interiorSeat,
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Exterior Detailing",
    description: "A thorough exterior detail using the safest wash methods and paint protection.",
    features: ["Safe wash method", "Clay bar decontamination", "Wheel & tire detailing", "Paint sealant"],
    image: interiorConsole,
  },
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="red-divider mx-auto mb-4" />
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Every service is performed in our professional shop environment — delivering consistent, premium results.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
