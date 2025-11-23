import { motion } from "framer-motion";
import { Search, Database, FileCheck, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "AI Detects Change",
    description: "Legis monitors regulatory sources and identifies relevant changes for your business",
  },
  {
    icon: Database,
    number: "02",
    title: "Analyzes Company Data",
    description: "The AI agent reviews your existing policies, processes, and documentation",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Updates Policies",
    description: "Automatically generates updated policies, registers, and compliance documents",
  },
  {
    icon: Users,
    number: "04",
    title: "Assigns Tasks",
    description: "Distributes responsibilities to the right team members with clear deadlines",
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Tracks & Reports",
    description: "Monitors completion and generates audit-ready compliance reports",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-foreground tracking-tight">
            How Legis Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Five simple steps from regulatory change to full compliance
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start bg-background p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-5xl font-light text-primary/20">{step.number}</span>
                  <h3 className="text-2xl font-light text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
