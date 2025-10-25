"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { SKILLS } from "@/lib/constants";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiLayout,
  FiZap,
} from "react-icons/fi";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
  SiWordpress
} from "react-icons/si";
import LogoLoop from "./LogoLoop";

export function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Configuration des logos des technologies
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiWordpress />, title: "WordPress", href: "https://wordpress.org" },
  ];

  const skillCategories = [
    {
      title: t.skills.frontend,
      skills: SKILLS.frontend,
      icon: FiCode,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t.skills.backend,
      skills: SKILLS.backend,
      icon: FiServer,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: t.skills.database,
      skills: SKILLS.database,
      icon: FiDatabase,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: t.skills.tools,
      skills: SKILLS.tools,
      icon: FiTool,
      color: "from-orange-500 to-red-500",
    },
    {
      title: t.skills.design,
      skills: [...SKILLS.design, ...SKILLS.cms],
      icon: FiLayout,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: t.skills.automation,
      skills: SKILLS.automation,
      icon: FiZap,
      color: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <section
      id="skills"
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
          <h2 className="section-title">{t.skills.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="card card-hover relative overflow-hidden group"
              >
                {/* Animated Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center relative`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                    {/* Pulse effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-lg bg-gradient-to-br ${category.color}`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: categoryIndex * 0.2,
                      }}
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.3,
                        delay:
                          categoryIndex * 0.1 +
                          skillIndex * 0.05,
                      }}
                      className="skill-tag"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg">
            <span className="gradient-text font-semibold">
              20+ technologies
            </span>{" "}
            maîtrisées pour créer des solutions web complètes
          </p>
        </motion.div>

        {/* Technology Logos Loop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-lg bg-light-card dark:bg-dark-card p-8 border border-light-border dark:border-dark-border">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="var(--light-card, #ffffff)"
              ariaLabel="Technologies et outils utilisés"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

