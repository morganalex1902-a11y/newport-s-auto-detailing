import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  vehicle: string;
  service: string;
  review: string;
  rating?: number;
}

const TestimonialCard = ({ name, vehicle, service, review, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="glass-medium rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-foreground/80 leading-relaxed mb-5 italic">"{review}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full glass-red flex items-center justify-center text-primary font-display font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-display font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{vehicle} • {service}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
