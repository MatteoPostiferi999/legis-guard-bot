import { motion } from "framer-motion";
import { Workflow, Bell, FileText, Shield, MessageSquare, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "End-to-end compliance automation from detection to implementation",
  },
  {
    icon: Bell,
    title: "Real-time Monitoring",
    description: "Proactive alerts for regulatory changes before they become problems",
  },
  {
    icon: FileText,
    title: "Document Generation",
    description: "AI-powered creation of policies, registers, and compliance documents",
  },
  {
    icon: Shield,
    title: "Audit Automation",
    description: "Continuous evidence collection and audit trail management",
  },
  {
    icon: MessageSquare,
    title: "Regulatory Assistant",
    description: "Conversational AI that answers compliance questions instantly",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Reporting",
    description: "Clear visibility into compliance status and risk exposure",
  },
];

export const Features = () => {
  return (
    <section className="py-32 px-6 bg-surface-subtle">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-foreground tracking-tight">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            A complete compliance platform powered by AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-background p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
