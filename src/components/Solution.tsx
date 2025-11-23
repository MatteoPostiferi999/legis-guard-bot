import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Solution = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-light">Introducing Legis</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-foreground tracking-tight">
            An Autonomous AI Agent
            <br />
            That Works For You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Legis continuously monitors regulatory changes, updates your compliance framework,
            generates required documents, and ensures your company stays protected—automatically.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 via-background to-accent/5 p-12 rounded-3xl shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-3xl text-foreground font-light">
                Monitors continuously
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Tracks 50+ European regulations across 27 member states in real-time.
                No manual research required.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl text-foreground font-light">
                Generates documents
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Automatically creates policies, registers, and compliance documentation
                tailored to your business.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl text-foreground font-light">
                Manages tasks
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Assigns responsibilities, tracks completion, and ensures nothing falls
                through the cracks.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl text-foreground font-light">
                Provides audit trails
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Maintains complete evidence of compliance activities for inspections
                and audits.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
