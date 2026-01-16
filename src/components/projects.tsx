"use client";

import React from "react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Drive Guardian",
    description: "Automatic Breaking Assistant built with yolov5 and lane detection",
    tags: ["React", "Yolov5", "python"],
  },
  {
    title: "Arogya - Remote physiotherapy",
    description: "A remote physiotherapy device built via esp32 and imu sensor with integrated AI for everyday progress",
    tags: ["Next.js", "ESP32", "Unity", "Node.js", "LLM"],
  },
  {
    title: "Virtual-Tryon",
    description: "Try clothes virtually using comfyUI diffusion model",
    tags: ["Next.js", "ComfyUI", "AWS"],
  },
  {
    title: "SeekJob-AI",
    description: "An autonomous AI placement agent that discovers and evaluates job opportunities using intelligent reasoning",
    tags: ["n8n", "docker", "Kubernetes"],
  },
];

export function Projects() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-4xl font-bold text-white md:text-6xl"
      >
        My Projects
      </motion.h2>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5"
          >
            <h3 className="mb-2 font-sans text-2xl font-bold text-zinc-100 tracking-tight">
              {project.title}
            </h3>
            <p className="mb-6 font-sans text-zinc-400 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="rounded-full border border-white/5 bg-white/5 px-3 py-1 font-sans text-xs font-medium text-zinc-300 transition-colors group-hover:bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}