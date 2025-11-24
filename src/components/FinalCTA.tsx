import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, CheckCircle2, Loader2 } from "lucide-react";

// Helper per codificare i dati per Netlify (Lo stesso della Hero)
const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const FinalCTA = () => {
  // --- STATI (Copiati dalla Hero) ---
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({ email: "", message: "" });

  // --- HANDLERS ---
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
        alert("Error sending message. Please try again.");
        setFormState("idle");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-foreground tracking-tight">
            Ready to make compliance
            <br />
            <span className="text-primary">effortless?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Join the beta program and transform how your company handles regulatory compliance
          </p>

          {/* --- INIZIO LOGICA DEL BOTTONE/FORM --- */}
          <div className="w-full max-w-md mx-auto">
            {!isFormOpen ? (
              // 1. IL BOTTONE (Trigger)
              <Button
                size="lg"
                onClick={() => setIsFormOpen(true)}
                className="text-lg px-12 h-16 rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Request Beta Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            ) : (
              // 2. IL FORM (Modal Inline)
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full bg-white/80 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl text-left relative mx-auto"
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
                      <label htmlFor="email-cta" className="text-sm font-medium ml-1 text-foreground">Email Address</label>
                      <input
                        id="email-cta" // ID diverso per accessibilità
                        type="email"
                        name="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        // Validazione in Inglese
                        onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter a valid email address.')}
                        onInput={(e) => e.currentTarget.setCustomValidity('')}
                        className="w-full border border-gray-200 bg-white/50 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message-cta" className="text-sm font-medium ml-1 text-foreground">Message (Optional)</label>
                      <textarea
                        id="message-cta"
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
          </div>
          {/* --- FINE LOGICA BOTTONE/FORM --- */}

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