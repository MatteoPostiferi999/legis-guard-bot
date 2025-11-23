import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { BetaProgram } from "@/components/BetaProgram";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <BetaProgram />
      <FinalCTA />
    </main>
  );
};

export default Index;
