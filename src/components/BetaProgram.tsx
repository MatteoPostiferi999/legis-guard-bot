import { motion } from "framer-motion";
import { Star, Gift, Zap, Crown } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "3–6 Months Free",
    description: "Full platform access at no cost during beta period",
  },
  {
    icon: Zap,
    title: "Priority Features",
    description: "Direct influence on product roadmap and development",
  },
  {
    icon: Crown,
    title: "Lifetime Discount",
    description: "Special pricing reserved exclusively for early testers",
  },
  {
    icon: Star,
    title: "Exclusive Access",
    description: "Be among the first to experience autonomous compliance",
  },
];

export const BetaProgram = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-light">Limited Beta Program</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-foreground tracking-tight">
            Join the Beta Program
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            We're looking for forward-thinking Italian SMEs to help shape the future of compliance automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-3xl shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-light mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground font-light text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
