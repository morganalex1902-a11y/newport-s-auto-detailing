import GlassCard from "@/components/GlassCard";

const sections = [
  {
    title: "Information We Collect",
    content:
      "When you use our website or contact us for services, we may collect personal information such as your name, phone number, email address, and vehicle information. This information is used solely to provide our detailing services and communicate with you about your appointments.",
  },
  {
    title: "Booking & Service Data",
    content:
      "Information submitted through our contact form is used to schedule and manage your service appointment. We retain this information for business record-keeping purposes and to provide follow-up service recommendations.",
  },
  {
    title: "Cookies",
    content:
      "Our website uses cookies to enhance your browsing experience. These are small files stored in your browser that help us understand how visitors interact with our site. You can disable cookies in your browser settings, though some features may not function optimally as a result.",
  },
  {
    title: "Third-Party Integrations",
    content:
      "We may use third-party services such as Google Maps for location display. These services have their own privacy policies, and we encourage you to review them. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Protection",
    content:
      "We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no internet transmission is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Your Rights",
    content:
      "You may request access to, correction of, or deletion of your personal information at any time by contacting us at 918-759-1541. We will respond to your request within a reasonable timeframe.",
  },
  {
    title: "Contact",
    content:
      "If you have questions about this Privacy Policy, please contact Newport's Auto Detailing at 909 S Wood Drive, Okmulgee, OK 74447, or call 918-759-1541.",
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="red-divider mx-auto mb-4" />
            <h1 className="font-display font-black text-4xl text-foreground mb-3">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm">
              Last updated: February 2026 — Newport's Auto Detailing, Okmulgee, OK
            </p>
          </div>

          <GlassCard className="p-8 md:p-10 space-y-8" variant="medium">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Newport's Auto Detailing ("we", "our", "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you 
              visit our website or use our services.
            </p>

            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
