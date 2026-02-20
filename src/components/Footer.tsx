import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Newport's Auto Detailing" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-display font-bold text-foreground tracking-wide">Newport's</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">Auto Detailing</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium auto detailing in a controlled shop environment. Quality results every time.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61579214596659"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Facebook className="w-4 h-4" />
              <span className="text-sm">Follow Us</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { label: "Paint Correction", path: "/services/paint-correction" },
                { label: "Ceramic Coatings", path: "/services/ceramic-coating" },
                { label: "Interior Detailing", path: "/services/interior-detailing" },
                { label: "All Services", path: "/services" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:9187591541" className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150">
                  <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>918-759-1541</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>909 S Wood Drive<br />Okmulgee, OK 74447</span>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-muted-foreground font-semibold mb-1">Service Areas</p>
              <p className="text-xs text-muted-foreground">Okmulgee · Tulsa · Muskogee · Henryetta · Okemah</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} Newport's Auto Detailing. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
