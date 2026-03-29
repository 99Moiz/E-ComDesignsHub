import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, Users, Send, X } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import JobApplication from "@/components/JobApplication";

interface Job {
  jobId: number;
  title: string;
  description: string;
  location: string;
  jobType: string;
  experienceRequired: number;
  postedDate: string;
  dueDate: string;
  isActive: boolean;
}

const Careers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedJobDetails, setSelectedJobDetails] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('https://ecomdesignshub.runasp.net/api/jobs');
      if (!response.ok) throw new Error('Failed to fetch jobs');
      const data = await response.json();
      setJobs(data.filter((job: Job) => job.isActive));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load jobs');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center bg-background">
          <motion.img
            src="/images/logo.jpeg"
            alt="e-comdesignshub"
            className="h-24 w-24 rounded-2xl object-cover shadow-lg animate-pulse"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.p
            className="mt-4 font-heading font-bold text-lg text-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Loading Jobs...
          </motion.p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Error Loading Jobs</h2>
            <p className="text-muted-foreground">{error}</p>
            <button
              onClick={fetchJobs}
              className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="container mx-auto section-padding">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto"
              >
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                  Join Our <span className="text-primary">Team</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Be part of a creative team that's shaping the future of digital design and development.
                  We're always looking for talented individuals who share our passion for innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>Growing Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} />
                    <span>Exciting Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>Flexible Hours</span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-16">
          <div className="container mx-auto section-padding">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Open Positions
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our current job openings and find the perfect role to advance your career with us.
                </p>
              </motion.div>
            </ScrollReveal>

            {jobs.length === 0 ? (
              <ScrollReveal>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center py-16"
                >
                  <Briefcase size={64} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">No Open Positions</h3>
                  <p className="text-muted-foreground">
                    We're not currently hiring, but check back soon for new opportunities!
                  </p>
                </motion.div>
              </ScrollReveal>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job, index) => (
                  <ScrollReveal key={job.jobId}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase size={14} />
                              <span>{job.jobType}</span>
                            </div>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          Active
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {job.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>Experience: {job.experienceRequired}+ years</span>
                        <span>Posted: {formatDate(job.postedDate)}</span>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                        >
                          Apply Now
                        </button>
                        <button 
                          onClick={() => setSelectedJobDetails(job)}
                          className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm"
                        >
                          Learn More
                        </button>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Application Modal */}
        {selectedJob && (
          <JobApplication
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        )}

        {/* Job Details Modal */}
        {selectedJobDetails && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedJobDetails(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-card border border-border rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-heading font-bold text-foreground">
                        {selectedJobDetails.title}
                      </h2>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{selectedJobDetails.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          <span>{selectedJobDetails.jobType}</span>
                        </div>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          Active
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedJobDetails(null)}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Job Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedJobDetails.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Requirements</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{selectedJobDetails.experienceRequired}+ years of experience</span>
                        </li>
                        {/* <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>Strong problem-solving skills</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>Excellent communication skills</span>
                        </li> */}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Job Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Location:</span>
                          <span className="text-foreground">{selectedJobDetails.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Job Type:</span>
                          <span className="text-foreground">{selectedJobDetails.jobType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Posted:</span>
                          <span className="text-foreground">{formatDate(selectedJobDetails.postedDate)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Deadline:</span>
                          <span className="text-foreground">{formatDate(selectedJobDetails.dueDate)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setSelectedJobDetails(null);
                          setSelectedJob(selectedJobDetails);
                        }}
                        className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                      >
                        Apply for this Position
                      </button>
                      <button
                        onClick={() => setSelectedJobDetails(null)}
                        className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </Layout>
  );
};

export default Careers;