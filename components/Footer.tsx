"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import { PERSONAL_INFO } from "@/lib/constants";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: PERSONAL_INFO.github, label: "GitHub" },
    { icon: FiLinkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
    { icon: FiMail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
  ];

  return (
    <footer className="bg-[#F5F5F7] dark:bg-[#0A1628] border-t border-gray-200/80 dark:border-gray-800/80 transition-colors duration-300">
      <div className="container-custom">
        {/* Bandeau supérieur : 3 colonnes */}
        <div className="flex flex-col gap-10 py-10 md:py-12 md:flex-row md:items-center md:justify-between md:gap-8">
          {/* Gauche — nom + titre */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-1">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {PERSONAL_INFO.title}
            </p>
          </motion.div>

          {/* Centre — réseaux */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 flex items-center justify-center shadow-sm hover:border-purple-500/50 dark:hover:border-purple-400/50 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Droite — copyright */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              © {currentYear} {PERSONAL_INFO.name}. {t.footer.rights}
            </p>
          </motion.div>
        </div>

        {/* Séparateur violet */}
        <div
          className="h-px w-full bg-purple-500 dark:bg-purple-400/80"
          aria-hidden
        />

        {/* Nom en grand — Rubik Maze (Google Fonts) */}
        <div className="py-10 md:py-14 lg:py-16 overflow-hidden">
          <p
            className="font-rubik-maze text-center leading-none tracking-tight select-none text-blue-600 dark:text-purple-400"
            style={{
              fontSize: "clamp(2.75rem, 14vw, 9rem)",
            }}
          >
            {PERSONAL_INFO.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
