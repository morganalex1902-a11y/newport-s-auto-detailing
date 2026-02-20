import { Phone, Facebook } from "lucide-react";

const TopBar = () => {
  return (
    <div className="glass border-b border-white/10 py-2 px-4 md:px-8 lg:px-16 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="tel:9187591541"
          className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
        >
          <Phone className="w-3.5 h-3.5 text-primary" />
          <span className="font-display tracking-wide">918-759-1541</span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61579214596659"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
          aria-label="Newport's Auto Detailing on Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
