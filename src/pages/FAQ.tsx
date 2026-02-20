import FAQAccordion from "@/components/FAQAccordion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How long does detailing take?",
    answer:
      "Timing varies by service. A standard exterior detail typically takes 2–3 hours. A full interior and exterior detail can take 4–6 hours. Paint correction ranges from 4 to 8+ hours depending on the severity of paint defects. Ceramic coating typically requires 1–2 full days to allow proper cure time. We'll give you a time estimate when you book.",
  },
  {
    question: "Do you offer ceramic coating warranties?",
    answer:
      "Yes. We use professional-grade ceramic coatings and provide warranty documentation with every coating application. Warranty duration depends on the specific product and package selected. Contact us for current warranty details.",
  },
  {
    question: "How often should I detail my vehicle?",
    answer:
      "For most drivers, a full exterior detail every 3–6 months and an interior detail every 3–4 months is ideal. Vehicles with ceramic coating require less frequent maintenance details. We can help you determine the best schedule for your vehicle and driving habits.",
  },
  {
    question: "Do I need paint correction before a ceramic coating?",
    answer:
      "We strongly recommend it. Ceramic coatings are semi-permanent — they seal in whatever is underneath. If your paint has swirls, scratches, or oxidation, those defects will be locked under the coating. Paint correction first ensures your coating goes on perfectly clear paint for maximum gloss and results.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "We recommend scheduling an appointment to ensure we have the proper time allocated for your vehicle. However, we do our best to accommodate walk-ins depending on our current schedule. Call us at 918-759-1541 to check availability.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Our shop is located at 909 S Wood Drive in Okmulgee, Oklahoma. We serve Okmulgee and the surrounding areas including Tulsa, Muskogee, Henryetta, and Okemah. All services are performed at our shop facility.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept cash and all major credit/debit cards. Payment is due upon completion of service. For larger jobs like multi-stage paint correction or ceramic coating, we may request a deposit to hold your appointment.",
  },
];

const FAQ = () => {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="red-divider mx-auto mb-4" />
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question? We've got answers. If you don't see yours here, give us a call.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />

          <div className="mt-10 glass-red rounded-2xl p-6 text-center">
            <p className="font-display font-semibold text-foreground mb-2">Still have questions?</p>
            <p className="text-sm text-muted-foreground mb-4">Call us at 918-759-1541 or send us a message.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:bg-primary-bright transition-colors inline-flex items-center gap-2 justify-center"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:9187591541"
                className="px-6 py-3 rounded-xl glass border border-white/20 text-foreground font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                918-759-1541
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
