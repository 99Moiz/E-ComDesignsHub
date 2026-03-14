import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const API_BASE = "https://ecomdesignshub.runasp.net";

const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-48 md:h-56 overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-muted" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [projRes, catRes] = await Promise.all([
          fetch(`${API_BASE}/api/ProjectApi/get`),
          fetch(`${API_BASE}/api/ProjectApi/GetCategory`)
        ]);

        if (!projRes.ok || !catRes.ok) {
          throw new Error("API request failed");
        }

        const projData = await projRes.json();
        const catData = await catRes.json();

        if (!isMounted) return;

        setProjects(projData);
        setCategories(["All", ...catData.map(c => c.name)]);
      } catch (err) {
        console.error("Portfolio API Error:", err);
        if (isMounted) setError("Failed to load projects.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter(p => p.categoryName === active);
  }, [projects, active]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Portfolio
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-3 mb-6">
              Our <span className="text-gradient">Best Work</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A curated collection of projects that showcase our expertise.
            </p>
          </motion.div>

          {/* Filters */}
          {!loading && !error && (
            <ScrollReveal>
              <div className="flex flex-wrap gap-2 mb-12">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      active === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-surface-hover"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Loading */}
          {loading && (
            <div className="text-center py-20">
              <img
                src="/images/logo.jpeg"
                alt="Loading"
                className="mx-auto w-20 animate-pulse"
              />
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-20 text-red-500">
              {error}
            </div>
          )}

          {/* Projects */}
          {!loading && !error && (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <ImageWithSkeleton
                        src={`${API_BASE}${project.imgUrl}`}
                        alt={project.title}
                      />

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-primary font-medium">
                            {project.categoryName}
                          </span>

                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink
                              size={14}
                              className="text-muted-foreground group-hover:text-primary transition-colors"
                            />
                          </a>
                        </div>

                        <h3 className="font-heading font-semibold text-lg mb-2">
                          {project.title}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;