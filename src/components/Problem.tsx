import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Euro } from "lucide-react";

const problems = [
  {
    icon: Euro,
    title: "€420+ Billion",
    description: "Annual European compliance spending burden across 26.1 million companies",
  },
  {
    icon: AlertTriangle,
    title: "65% Unprepared",
    description: "For NIS2, AI Act, CSRD (2024-2026). New regulations pile on faster than teams can implement",
  },
  {
    icon: TrendingUp,
    title: "€1.2 Billion",
    description: "GDPR fines in 2024 alone",
  },
];

export const Problem = () => {
  return (
    <section className="py-32 px-6 bg-surface-subtle">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-foreground tracking-tight">
            Europe's Regulatory Crisis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Compliance is not just a burden—it's an existential threat to small and medium enterprises
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-light mb-3 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground font-light">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-2xl text-foreground font-light italic max-w-2xl mx-auto">
            One oversight. One fine. Company destroyed.
            <br />
            <span className="text-muted-foreground">This is real.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
