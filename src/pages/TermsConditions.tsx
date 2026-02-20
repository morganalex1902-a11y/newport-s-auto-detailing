import GlassCard from "@/components/GlassCard";

const sections = [
  {
    title: "Service Scope",
    content:
      "Newport's Auto Detailing provides professional auto detailing services including interior detailing, exterior detailing, paint correction, and ceramic coating application. All services are performed at our shop facility located at 909 S Wood Drive, Okmulgee, OK 74447. Service scope and pricing will be confirmed prior to beginning any work.",
  },
  {
    title: "Appointment Policy",
    content:
      "Appointments are recommended and can be made by phone or through our website contact form. We will confirm your appointment and provide an estimated time of completion. Please arrive at your scheduled time. If you need to reschedule, please notify us at least 24 hours in advance.",
  },
  {
    title: "Payment Terms",
    content:
      "Payment is due in full upon completion of services. We accept cash and all major credit/debit cards. For large or multi-day services such as paint correction and ceramic coating, a deposit may be required to secure your appointment. The deposit amount will be communicated at the time of booking.",
  },
  {
    title: "Liability Limitations",
    content:
      "While we take every precaution to protect your vehicle, Newport's Auto Detailing is not liable for pre-existing damage, paint defects, or issues arising from vehicle conditions that were present prior to service. We will inspect and document any pre-existing damage before beginning work. We are not responsible for personal items left in the vehicle.",
  },
  {
    title: "Cancellation Policy",
    content:
      "We understand that plans change. Please provide at least 24 hours notice to cancel or reschedule your appointment. Appointments cancelled with less than 24 hours notice may result in forfeiture of any deposit paid. No-shows without prior notice may result in a cancellation fee.",
  },
  {
    title: "Satisfaction",
    content:
      "Your satisfaction is our priority. If you have concerns about the quality of our work, please notify us within 24 hours of service completion. We will make reasonable efforts to address any legitimate concerns at no additional charge.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms & Conditions are governed by the laws of the State of Oklahoma. Any disputes arising from our services will be resolved in accordance with Oklahoma state law and in the courts of Okmulgee County, Oklahoma.",
  },
];

const TermsConditions = () => {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="red-divider mx-auto mb-4" />
            <h1 className="font-display font-black text-4xl text-foreground mb-3">Terms & Conditions</h1>
            <p className="text-muted-foreground text-sm">
              Last updated: February 2026 — Newport's Auto Detailing, Okmulgee, OK
            </p>
          </div>

          <GlassCard className="p-8 md:p-10 space-y-8" variant="medium">
            <p className="text-sm text-muted-foreground leading-relaxed">
              By using the services of Newport's Auto Detailing, you agree to the following terms and conditions. 
              Please read them carefully. These terms apply to all services provided at our facility.
            </p>

            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}

            <div className="border-t border-white/10 pt-6">
              <p className="text-xs text-muted-foreground">
                For questions regarding these terms, contact Newport's Auto Detailing at 918-759-1541 or 
                909 S Wood Drive, Okmulgee, OK 74447.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;
