import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  href?: string;
  image?: string;
}

const ServiceCard = ({ icon, title, description, features, href, image }: ServiceCardProps) => {
  return (
    <div className="service-card group overflow-hidden">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300 group-hover:scale-105 transform transition-transform"
          />
        </div>
      )}
      <div className="p-6">
        <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center mb-4 text-primary">
          {icon}
        </div>
        <h3 className="font-display font-bold text-lg text-foreground mb-2 tracking-wide">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}
        {href && (
          <Link
            to={href}
            className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:gap-2.5 transition-all duration-200"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
