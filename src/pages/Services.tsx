import { motion } from "framer-motion";
import { Globe, Palette, Search, Megaphone, Code, Zap, Shield, BarChart3, Film } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: <Globe size={28} />, title: "Web Development", description: "Custom-built responsive websites and web applications using modern frameworks. From corporate sites to complex platforms, we deliver scalable, performant solutions.", features: ["React & Next.js", "Custom CMS", "E-Commerce", "Progressive Web Apps"] },
  { icon: <Palette size={28} />, title: "UI/UX Design", description: "Human-centered design that balances beauty with usability. We craft intuitive interfaces that delight users and drive conversions.", features: ["User Research", "Wireframing", "Prototyping", "Design Systems"] },
  { icon: <Palette size={28} />, title: "Graphic Design", description: "Creative visual solutions that strengthen brand identity and communication. From logos to full-scale marketing materials, we craft designs that are strategic, consistent, and visually impactful.", features: ["Logo Design", "Brand Identity", "Banners & Social Media Creatives", "Print & Marketing Materials"] },
  { icon: <Film size={28} />, title: "2D & 3D Animation", description: "High-quality motion visuals that bring ideas to life. We create engaging 2D and 3D animations for marketing, explainer videos, product showcases, and digital campaigns.", features: ["2D Explainer Videos", "3D Modeling & Rendering", "Product Animation", "Motion Graphics"] },
  { icon: <Search size={28} />, title: "SEO Optimization", description: "Data-driven SEO strategies that improve your search rankings and drive qualified organic traffic to grow your business.", features: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"] },
  { icon: <Megaphone size={28} />, title: "Digital Marketing", description: "Comprehensive digital marketing campaigns across multiple channels to increase brand awareness and generate leads.", features: ["Social Media", "PPC Campaigns", "Email Marketing", "Content Marketing"] },
  { icon: <Code size={28} />, title: "Custom Software", description: "Bespoke software solutions tailored to your unique workflows, integrations, and business requirements.", features: ["API Development", "Automation", "Integrations", "Cloud Solutions"] },
  { icon: <Zap size={28} />, title: "Performance", description: "Optimize your digital assets for speed, reliability, and scalability to deliver the best possible user experience.", features: ["Speed Optimization", "CDN Setup", "Caching", "Monitoring"] },
  { icon: <Shield size={28} />, title: "Cyber Security", description: "Protect your digital assets with robust security measures, audits, and best practices implementation.", features: ["Security Audits", "SSL/TLS", "Penetration Testing", "Compliance"] },
  { icon: <BarChart3 size={28} />, title: "Analytics & Insights", description: "Turn data into actionable insights with comprehensive analytics setup, dashboards, and reporting.", features: ["Google Analytics", "Custom Dashboards", "A/B Testing", "ROI Tracking"] },
];

const Services = () => {
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
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-3 mb-6">
              Solutions That <span className="text-gradient">Deliver Results</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From concept to execution, we provide comprehensive digital services designed to help your business thrive in the modern landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} direction={i % 2 === 0 ? "left" : "right"} delay={(i % 2) * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:glow-green-sm transition-shadow duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
