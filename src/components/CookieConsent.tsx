import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("newport-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("newport-cookie-consent", "accepted");
    setVisible(false);
  };

  const dismiss = () => {
    localStorage.setItem("newport-cookie-consent", "dismissed");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] max-w-sm animate-fade-up">
      <div className="glass-medium rounded-2xl border border-white/15 p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-3 mb-3">
          <p className="text-sm font-display font-semibold text-foreground">Cookie Notice</p>
          <button onClick={dismiss} className="text-muted-foreground hover:text-foreground transition-colors duration-150 mt-0.5">
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          We use cookies to enhance your browsing experience and improve our services.{" "}
          <Link to="/privacy-policy" className="text-primary hover:underline">
            Learn more
          </Link>
        </p>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 py-2 px-3 rounded-lg bg-primary text-primary-foreground text-xs font-semibold font-display tracking-wide hover:bg-primary-bright transition-colors duration-200"
          >
            Accept
          </button>
          <button
            onClick={dismiss}
            className="flex-1 py-2 px-3 rounded-lg glass border border-white/10 text-xs text-foreground/70 hover:text-foreground transition-colors duration-200"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
