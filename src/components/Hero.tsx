import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aiAgentHero from "@/assets/ai-agent-hero.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <img
            src={aiAgentHero}
            alt="Legis AI Agent"
            className="w-48 h-48 mx-auto mb-8 animate-float"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl mb-6 text-foreground tracking-tight"
        >
          The AI Agent That Makes
          <br />
          <span className="text-primary">Compliance Effortless</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light"
        >
          Legis is an autonomous AI agent that automates compliance for Italian SMEs.
          No more manual work, no more costly consultants, no more stress.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all">
            Request Beta Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-lg px-8 h-14 rounded-full hover:bg-secondary/50"
          >
            Learn more
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
