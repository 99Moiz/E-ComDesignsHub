import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Instagram, Facebook } from "lucide-react";
import emailjs from "@emailjs/browser";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Owner mail
      await emailjs.send(
        // "service_p2aompf",
        "service_gu6hcdr",
        "template_668fmzq",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "BCE3DhDXp2I-6C0Pe"
      );

      // Client auto reply
      await emailjs.send(
        // "service_p2aompf",
        "service_gu6hcdr",
        "template_2ifb2e8",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
        },
        "BCE3DhDXp2I-6C0Pe"
      );

      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      alert("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-3 mb-6">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind? We'd love to hear about it. Reach out and let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Form */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-5 sm:p-8 rounded-2xl bg-card border border-border">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="mb-4 sm:mb-5">
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" placeholder="Project inquiry" />
                </div>
                <div className="mb-5 sm:mb-6">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-green-sm w-full justify-center sm:w-auto disabled:opacity-50">
                  {isSubmitting
                    ? "Sending..."
                    : submitted
                    ? "Message Sent! ✓"
                    : <><Send size={18} /> Send Message</>
                  }
                </button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="flex flex-col gap-5 sm:gap-6">
                <div className="p-5 sm:p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-heading font-semibold mb-4">Get in Touch</h3>
                  <div className="flex flex-col gap-4">
                    <a href="mailto:ecommercedesignshub@gmail.com" className="flex items-start gap-3 hover:text-primary transition-colors min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground break-all">ecommercedesignshub@gmail.com</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">98 E Branch RD, Allentown, New Jersey 08501, USA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-heading font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href="https://www.instagram.com/ecom_design_hub?igsh=MXI0Y3NwbnM0NzFzbw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="Instagram">
                      <Instagram size={18} />
                    </a>
                    <a href="https://www.facebook.com/share/1DVHQF1u71/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="Facebook">
                      <Facebook size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
