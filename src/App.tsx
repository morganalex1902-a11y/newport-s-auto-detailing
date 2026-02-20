import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import PaintCorrection from "./pages/services/PaintCorrection";
import CeramicCoating from "./pages/services/CeramicCoating";
import InteriorDetailing from "./pages/services/InteriorDetailing";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <div className="fixed top-0 left-0 right-0 z-50">
      <TopBar />
      <Navbar />
    </div>
    <div className="flex-1">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/paint-correction" element={<PaintCorrection />} />
        <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
        <Route path="/services/interior-detailing" element={<InteriorDetailing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
    <CookieConsent />
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {loading && <PageLoader onComplete={() => setLoading(false)} />}
        <div style={{ visibility: loading ? "hidden" : "visible" }}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
