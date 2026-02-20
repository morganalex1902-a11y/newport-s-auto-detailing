import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { Phone, MapPin, Send, CheckCircle } from "lucide-react";

const services = [
  "Exterior Detailing",
  "Interior Detailing",
  "Paint Correction",
  "Ceramic Coating",
  "Paint Correction + Ceramic Coating",
  "Full Detail Package",
  "Other",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="red-divider mx-auto mb-4" />
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">Book Your Detail</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to get your vehicle detailed? Fill out the form below or give us a call.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            <GlassCard className="p-6" variant="medium">
              <Phone className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Call Us</h3>
              <a href="tel:9187591541" className="text-primary font-semibold hover:text-primary-bright transition-colors">
                918-759-1541
              </a>
              <p className="text-xs text-muted-foreground mt-1">Mon–Sat, 8am–6pm</p>
            </GlassCard>

            <GlassCard className="p-6" variant="medium">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Visit Our Shop</h3>
              <p className="text-sm text-muted-foreground">
                909 S Wood Drive<br />Okmulgee, OK 74447
              </p>
            </GlassCard>

            {/* Map embed */}
            <GlassCard className="overflow-hidden" variant="medium">
              <iframe
                title="Newport's Auto Detailing Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.0!2d-95.9697!3d35.6225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM3JzIxLjAiTiA5NcKwNTgnMTAuOSJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-2xl"
              />
              <div className="p-3">
                <p className="text-xs text-muted-foreground text-center">909 S Wood Drive, Okmulgee, OK</p>
              </div>
            </GlassCard>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <GlassCard className="p-10 text-center h-full flex flex-col items-center justify-center" variant="medium">
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
                <h2 className="font-display font-black text-2xl text-foreground mb-2">Request Received!</h2>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Thank you! We'll be in touch shortly to confirm your appointment. You can also call us directly at{" "}
                  <a href="tel:9187591541" className="text-primary">918-759-1541</a>.
                </p>
              </GlassCard>
            ) : (
              <GlassCard className="p-8" variant="medium">
                <h2 className="font-display font-bold text-xl text-foreground mb-6">Request Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground/70 mb-1.5 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground/70 mb-1.5 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(918) 555-0000"
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 mb-1.5 uppercase tracking-wide">
                      Vehicle (Year, Make, Model) *
                    </label>
                    <input
                      type="text"
                      name="vehicle"
                      required
                      value={form.vehicle}
                      onChange={handleChange}
                      placeholder="2021 Ford F-150"
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 mb-1.5 uppercase tracking-wide">
                      Service Requested *
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors bg-card"
                    >
                      <option value="" className="bg-card text-foreground">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-card text-foreground">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 mb-1.5 uppercase tracking-wide">
                      Message / Notes
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your vehicle or any specific concerns..."
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors bg-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-wider hover:bg-primary-bright transition-colors duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 transform"
                  >
                    <Send className="w-4 h-4" />
                    Request Appointment
                  </button>
                </form>
              </GlassCard>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
