"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { PERSONAL_INFO } from "@/lib/constants";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";

export function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Envoi via Formspree
      const response = await fetch("https://formspree.io/f/xpzqkqkq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nouveau message de ${formData.name} - Portfolio Jordan BELL`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset status après 5 secondes
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        // Reset status après 3 secondes
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setStatus("error");
      // Reset status après 3 secondes
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-light-card dark:bg-dark-card"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">
                {t.contact.or}
              </h3>

              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="card flex items-center gap-4 hover:border-accent-primary dark:hover:border-accent-primary transition-all"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                      Email
                    </p>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 hover:border-accent-primary dark:hover:border-accent-primary transition-all"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0">
                    <FiGithub className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                      GitHub
                    </p>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      @jordannbell
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 hover:border-accent-primary dark:hover:border-accent-primary transition-all"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                    <FiLinkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                      LinkedIn
                    </p>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      Jordan Bell
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  className="card flex items-center gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                      Location
                    </p>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              className="relative h-40 rounded-lg overflow-hidden"
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
                  "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-4xl font-bold gradient-text">
                  Let&apos;s Work Together
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="card space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-2"
                >
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border focus:border-accent-primary dark:focus:border-accent-primary focus:outline-none transition-colors"
                  placeholder="Votre nom"
                  autoComplete="name"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-2"
                >
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border focus:border-accent-primary dark:focus:border-accent-primary focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                  autoComplete="email"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-2"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border focus:border-accent-primary dark:focus:border-accent-primary focus:outline-none transition-colors resize-none"
                  placeholder="Votre message..."
                  suppressHydrationWarning
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
              >
                {status === "sending" ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    {t.contact.sending}
                  </>
                ) : status === "success" ? (
                  <>{t.contact.success}</>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    {t.contact.send}
                  </>
                )}
              </motion.button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  {t.contact.error}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

