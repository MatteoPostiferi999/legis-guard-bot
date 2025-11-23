import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aiAgentHero from "@/assets/ai-agent-hero.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'var(--gradient-hero)',
        }}
      >
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'var(--gradient-hero-accent)',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* AI Agent Visual - Floating */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <motion.img
            src={aiAgentHero}
            alt="Legis AI Agent"
            className="w-56 h-56 mx-auto drop-shadow-2xl"
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Hero Headline - Large & Bold */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl lg:text-9xl font-normal mb-8 text-foreground tracking-tight leading-[0.95]"
        >
          The AI Agent That Makes
          <br />
          <span className="text-primary font-medium">Compliance Effortless</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light"
        >
          Legis is an autonomous AI agent that automates compliance for Italian SMEs.
          No more manual work, no more costly consultants, no more stress.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <Button size="lg" className="text-lg px-10 h-14 rounded-full shadow-lg hover:shadow-xl transition-all">
            Request Beta Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
