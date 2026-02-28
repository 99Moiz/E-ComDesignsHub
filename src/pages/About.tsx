import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  { icon: <Lightbulb size={22} />, title: "Innovation", description: "Pushing boundaries with creative solutions and emerging technologies." },
  { icon: <Users size={22} />, title: "Collaboration", description: "Working closely with clients as true partners in every project." },
  { icon: <Award size={22} />, title: "Excellence", description: "Delivering premium quality in every pixel and line of code." },
  { icon: <Heart size={22} />, title: "Passion", description: "Driven by genuine love for craft and meaningful digital work." },
];

const timeline = [
  { year: "2018", title: "Founded", description: "Started with a vision to create exceptional digital experiences." },
  { year: "2019", title: "First Major Client", description: "Delivered a breakthrough project that set our standard for quality." },
  { year: "2021", title: "Team Expansion", description: "Grew to 20+ talented professionals across design and engineering." },
  { year: "2023", title: "Global Reach", description: "Expanded services to clients across 15+ countries worldwide." },
  { year: "2025", title: "Industry Recognition", description: "Awarded for excellence in digital innovation and design." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-3 mb-6">
              We're a Team of <span className="text-gradient">Digital Craftsmen</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              E-ComDesignHub is a premium digital agency dedicated to transforming brands through innovative web solutions, compelling design, and data-driven strategies. Artistry and strategy in every design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding border-y border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <Target size={24} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with premium digital solutions that drive meaningful growth, foster engagement, and create lasting impressions in the digital landscape.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <Eye size={24} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted digital agency globally, known for setting new standards of excellence in design, technology, and client partnership.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
                What <span className="text-gradient">Drives Us</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <ScrollReveal key={val.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                    {val.icon}
                  </div>
                  <h4 className="font-heading font-semibold mb-2">{val.title}</h4>
                  <p className="text-sm text-muted-foreground">{val.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding border-t border-border">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
                Growing <span className="text-gradient">Together</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                <div className={`relative pl-12 md:pl-0 pb-12 last:pb-0 ${i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"}`}>
                  <div className="absolute left-2.5 md:left-1/2 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background md:-translate-x-1.5" />
                  <div className="p-5 rounded-xl bg-card border border-border">
                    <span className="text-primary font-heading font-bold text-sm">{item.year}</span>
                    <h4 className="font-heading font-semibold mt-1 mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
