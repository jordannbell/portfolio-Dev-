"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS } from "@/lib/constants";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";

export function Projects() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.projects.title}</h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] min-w-0"
                >
                  <div className="card card-hover h-full group">
                    {/* Project Image */}
                    <div className="relative h-64 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
                      {/* Placeholder with Project Initial */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl font-bold gradient-text">
                          {project.title[0]}
                        </span>
                      </div>

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-all"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="View project"
                        >
                          <FiExternalLink className="w-5 h-5 text-white" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-all"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="View code"
                        >
                          <FiGithub className="w-5 h-5 text-white" />
                        </motion.a>
                      </div>

                      {/* Animated Corner Accent */}
                      <motion.div
                        className="absolute top-0 right-0 w-20 h-20 bg-accent-primary/30 blur-2xl"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
                        {project.title}
                      </h3>
                      <p className="text-light-text-secondary dark:text-dark-text-secondary">
                        {language === "fr"
                          ? project.description
                          : project.descriptionEn}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-light-text-primary dark:text-dark-text-primary">
                          {t.projects.technologies}:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-accent-primary/10 text-accent-primary rounded-full border border-accent-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 pt-4">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 btn-primary text-center text-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FiExternalLink className="inline w-4 h-4 mr-2" />
                          {t.projects.viewProject}
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 btn-outline text-center text-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FiGithub className="inline w-4 h-4 mr-2" />
                          {t.projects.viewCode}
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center hover:border-accent-primary dark:hover:border-accent-primary transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous project"
            >
              <FiChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {PROJECTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-accent-primary w-8"
                      : "bg-light-border dark:bg-dark-border"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center hover:border-accent-primary dark:hover:border-accent-primary transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next project"
            >
              <FiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

