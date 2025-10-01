"use client";

import { motion } from "framer-motion";
import { FiDownload, FiMapPin } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import { PERSONAL_INFO } from "@/lib/constants";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.about.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-3xl"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Profile Image Placeholder */}
              <div className="absolute inset-4 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-3xl flex items-center justify-center text-white text-8xl font-bold shadow-light-lg dark:shadow-dark-lg">
                {PERSONAL_INFO.name.split(" ").map((n) => n[0]).join("")}
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent-primary/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-secondary/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              {t.about.description}
            </p>

            {/* Location */}
            <div className="flex items-center gap-3 text-light-text-secondary dark:text-dark-text-secondary">
              <FiMapPin className="w-5 h-5 text-accent-primary" />
              <span>{t.about.location}</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <motion.div
                className="card text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  20+
                </div>
                <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Technologies
                </div>
              </motion.div>
              <motion.div
                className="card text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Projets
                </div>
              </motion.div>
              <motion.div
                className="card text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">∞</div>
                <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Passion
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="/cv-jordan-bell.pdf"
              download
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="w-5 h-5" />
              {t.about.downloadCV}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

