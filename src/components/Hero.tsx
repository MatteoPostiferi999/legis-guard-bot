import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoBlack from "@/assets/logo-black.svg";

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 text-center flex flex-col items-center justify-center min-h-screen">
        {/* Hero Headline - Large & Bold - First */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-normal mb-6 md:mb-8 text-foreground tracking-tight leading-[1.05] max-w-6xl"
        >
          The AI Agent That Makes
          <br />
          <span className="text-primary font-medium">Compliance Effortless</span>
        </motion.h1>

        {/* Logo - Centered Below Title */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-6 md:mb-8"
        >
          <motion.img
            src={logoBlack}
            alt="Legis Logo"
            className="h-12 sm:h-16 md:h-20 lg:h-24 mx-auto"
          />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto font-light"
        >
          Legis is an autonomous AI agent that automates compliance for Italian SMEs.
          No more manual work, no more costly consultants, no more stress.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
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
