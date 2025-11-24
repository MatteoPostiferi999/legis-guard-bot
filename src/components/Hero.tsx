import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, CheckCircle2, Loader2 } from "lucide-react";
import realLogo from "@/assets/realLogo.svg";

// Helper per codificare i dati per Netlify
const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const Hero = () => {
  // Stati per gestire il form
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({ email: "", message: "" });

  // Gestione invio form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "beta-access", ...formData }),
    })
      .then(() => setFormState("success"))
      .catch((error) => {
        alert("Errore nell'invio. Riprova.");
        setFormState("idle");
      });
  };

  // Gestione input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ background: 'var(--gradient-hero-accent)' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 text-center flex flex-col items-center justify-center min-h-screen">
        
        {/* 1. TITOLO */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-normal mb-8 md:mb-10 text-foreground tracking-tight leading-[1.05] max-w-6xl"
        >
          The AI Agent That Makes
          <br />
          <span className="text-primary font-medium">Compliance Effortless</span>
        </motion.h1>

        {/* 2. LOGO */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-6 md:mb-8 flex justify-center"
        >
          <motion.img
            src={realLogo}
            alt="Legis Logo"
            // Le dimensioni che hai scelto tu
            className="h-6 sm:h-12 md:h-16 lg:h-24 w-auto brightness-0"
          />
        </motion.div>

        {/* 3. SOTTOTITOLO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto font-light"
        >
          Legis is an autonomous AI agent that automates compliance for Italian SMEs.
          No more manual work, no more costly consultants, no more stress.
        </motion.p>

        {/* 4. CTA INTERATTIVA (Form + Button) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center gap-4 w-full max-w-md mx-auto"
        >
          {!isFormOpen ? (
            // STATO 1: SOLO IL BOTTONE
            <Button
              size="lg"
              onClick={() => setIsFormOpen(true)}
              className="text-lg px-10 h-14 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Request Beta Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          ) : (
            // STATO 2: IL FORM APERTO
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full bg-white/80 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl text-left relative"
            >
              {/* Pulsante Chiudi */}
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {formState === "success" ? (
                // Messaggio di Successo
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">You're on the list!</h3>
                  <p className="text-muted-foreground">
                    Thanks for your interest. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                // Il Form vero e proprio
                <form
                  name="beta-access"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 mt-2"
                >
                  <input type="hidden" name="form-name" value="beta-access" />
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium ml-1 text-foreground">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white/50 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium ml-1 text-foreground">Message (Optional)</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us about your needs..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white/50 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full h-12 rounded-xl text-lg mt-2 shadow-md"
                  >
                    {formState === "loading" ? (
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    ) : "Join Waitlist"}
                  </Button>
                </form>
              )}
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
};