"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS } from "@/lib/constants";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";
import StarBorder from "./StarBorder";

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
                    <div className="relative h-64 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 group">
                      {/* Project Initial - Always Visible */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <motion.div
                          className="relative"
                          initial={{ scale: 1, opacity: 1 }}
                          whileHover={{ scale: 1.2, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <motion.span
                            className="text-8xl font-bold gradient-text relative z-10"
                            animate={{
                              textShadow: [
                                "0 0 20px rgba(59, 130, 246, 0.3)",
                                "0 0 30px rgba(139, 92, 246, 0.4)",
                                "0 0 20px rgba(59, 130, 246, 0.3)",
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            {project.title[0]}
                          </motion.span>
                          {/* Glow Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Background Pattern - Always Visible */}
                      <div className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                        <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
                        <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl" />
                      </div>

                      {/* Project Image - Only on Hover */}
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-20">
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
                        className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-2xl rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0.7, 0.4],
                          rotate: [0, 90, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 blur-2xl rounded-full"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 0.6, 0.3],
                          rotate: [0, -90, 0],
                        }}
                        transition={{
                          duration: 5,
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
                        <StarBorder
                          as="div"
                          color="#3b82f6"
                          speed="4s"
                          thickness={1}
                          className="flex-1"
                        >
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-accent-primary hover:bg-accent-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-center text-sm flex items-center justify-center gap-2 border-none"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <FiExternalLink className="inline w-4 h-4 mr-2" />
                            {t.projects.viewProject}
                          </motion.a>
                        </StarBorder>
                        <StarBorder
                          as="div"
                          color="#8b5cf6"
                          speed="5s"
                          thickness={1}
                          className="flex-1"
                        >
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 text-center text-sm flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <FiGithub className="inline w-4 h-4 mr-2" />
                            {t.projects.viewCode}
                          </motion.a>
                        </StarBorder>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <StarBorder
              as="div"
              color="#06b6d4"
              speed="3s"
              thickness={1}
            >
              <motion.button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full bg-light-surface dark:bg-dark-surface border-none flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous project"
              >
                <FiChevronLeft className="w-6 h-6" />
              </motion.button>
            </StarBorder>

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

            <StarBorder
              as="div"
              color="#06b6d4"
              speed="3s"
              thickness={1}
            >
              <motion.button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full bg-light-surface dark:bg-dark-surface border-none flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next project"
              >
                <FiChevronRight className="w-6 h-6" />
              </motion.button>
            </StarBorder>
          </div>
        </div>
      </div>
    </section>
  );
}

