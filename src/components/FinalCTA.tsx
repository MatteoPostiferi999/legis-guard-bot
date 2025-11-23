import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-foreground tracking-tight">
            Ready to make compliance
            <br />
            <span className="text-primary">effortless?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Join the beta program and transform how your company handles regulatory compliance
          </p>
          <Button
            size="lg"
            className="text-lg px-12 h-16 rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            Request Beta Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-border"
        >
          <p className="text-sm text-muted-foreground font-light">
            © 2025 Legis. Autonomous Compliance for Europe.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
