import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Palette, Search, Megaphone, Code, Zap, CheckCircle, Star, Users, Briefcase, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import StatItem from "@/components/StatItem";
import heroBanner from "@/assets/hero-banner.jpg";

const services = [
  { icon: <Globe size={24} />, title: "Web Development", description: "Custom websites and web applications built with cutting-edge technologies for optimal performance." },
  { icon: <Palette size={24} />, title: "UI/UX Design", description: "User-centered designs that blend aesthetics with functionality for memorable digital experiences." },
  { icon: <Search size={24} />, title: "SEO Optimization", description: "Data-driven strategies to boost your online visibility and drive organic traffic to your site." },
  { icon: <Megaphone size={24} />, title: "Digital Marketing", description: "Comprehensive campaigns that amplify your brand and connect you with your target audience." },
  { icon: <Code size={24} />, title: "Custom Solutions", description: "Tailored digital products engineered to solve your unique business challenges and goals." },
  { icon: <Zap size={24} />, title: "Performance Optimization", description: "Speed up your digital presence with expert optimization for faster load times and better UX." },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We dive deep into your business goals, audience, and market to craft a tailored strategy." },
  { step: "02", title: "Design", description: "Our designers create stunning mockups and prototypes that bring your vision to life." },
  { step: "03", title: "Develop", description: "We build your project using modern tech stacks ensuring performance and scalability." },
  { step: "04", title: "Deliver & Support", description: "We launch your project and provide ongoing support to ensure continued success." },
];

const testimonials = [
  { name: "Sarah M.", role: "E-commerce Owner", quote: "E-ComDesignHub transformed our online store completely. Sales increased by 150% within the first quarter!", rating: 5 },
  { name: "James K.", role: "Startup Founder", quote: "Professional, creative, and incredibly responsive. They delivered beyond our expectations on every milestone.", rating: 5 },
  { name: "Priya D.", role: "Marketing Director", quote: "Their SEO and digital marketing strategies gave us the competitive edge we needed. Highly recommended!", rating: 5 },
];

const whyChooseUs = [
  "Dedicated project manager for every client",
  "100% custom designs — no templates",
  "SEO-optimized from day one",
  "Fast turnaround without compromising quality",
  "Transparent pricing with no hidden fees",
  "Post-launch support & maintenance",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      {/* <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
        <img src={heroBanner} alt="E-ComDesignHub Banner" className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
                <Zap size={14} /> Artistry & Strategy in Every Design
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
            >
              We Build
              <br />
              <span className="text-gradient">Digital Experiences</span>
              <br />
              That Matter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              Transform your business with premium web solutions, stunning designs, and strategies that deliver measurable results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-green"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section> */}
<section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[95vh] flex items-center overflow-hidden">
  
  <ParticleBackground />

  {/* Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background z-0" />

  {/* Responsive Banner Image */}
  <img
    src={heroBanner}
    alt="E-ComDesignHub Banner"
    className="
      absolute inset-0 
      w-full h-full 
      object-contain md:object-cover 
      object-center 
      opacity-20 
      pointer-events-none
      z-0
    "
  />

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl">
      
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
          <Zap size={14} /> Artistry & Strategy in Every Design
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
      >
        We Build
        <br />
        <span className="text-gradient">Digital Experiences</span>
        <br />
        That Matter
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
      >
        Transform your business with premium web solutions, stunning designs, and strategies that deliver measurable results.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-wrap gap-4"
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-green"
        >
          Start a Project <ArrowRight size={18} />
        </Link>

        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
        >
          View Our Work
        </Link>
      </motion.div>

    </div>
  </div>
</section>

      {/* Stats */}
      <section className="section-padding border-y border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                Services That <span className="text-gradient">Drive Growth</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                End-to-end digital solutions crafted to elevate your brand and accelerate your business.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding border-y border-border">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                Our <span className="text-gradient">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                A proven workflow that turns your ideas into high-performing digital products.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
                >
                  <span className="text-5xl font-heading font-black text-primary/10 group-hover:text-primary/20 transition-colors absolute top-4 right-5">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Briefcase size={20} />
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Us</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6">
                  Why Clients <span className="text-gradient">Choose Us</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We don't just build websites — we build growth engines. Here's what sets us apart from the rest.
                </p>
                <div className="grid gap-4">
                  {whyChooseUs.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-primary shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <Users size={28} className="text-primary mx-auto mb-3" />
                  <p className="text-2xl font-heading font-bold">50+</p>
                  <p className="text-sm text-muted-foreground">Global Clients</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <Briefcase size={28} className="text-primary mx-auto mb-3" />
                  <p className="text-2xl font-heading font-bold">200+</p>
                  <p className="text-sm text-muted-foreground">Projects Done</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <Star size={28} className="text-primary mx-auto mb-3" />
                  <p className="text-2xl font-heading font-bold">5.0</p>
                  <p className="text-sm text-muted-foreground">Avg. Rating</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <MessageSquare size={28} className="text-primary mx-auto mb-3" />
                  <p className="text-2xl font-heading font-bold">24/7</p>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding border-y border-border">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                What Our <span className="text-gradient">Clients Say</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Real feedback from real clients who've experienced the difference.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-heading font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 bg-gradient-to-br from-primary/10 via-card to-card border border-border">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Ready to Transform Your <span className="text-gradient">Digital Presence?</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Let's discuss how we can help you achieve your goals with a tailored digital strategy.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-green"
                >
                  Let's Talk <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
