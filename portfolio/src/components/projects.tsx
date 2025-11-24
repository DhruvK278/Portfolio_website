"use client";

import React from "react";
import { motion } from "motion/react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern shopping experience built with Next.js and Stripe.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Dashboard",
    description: "Real-time analytics dashboard powered by machine learning.",
    tags: ["React", "Python", "TensorFlow"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Social Network",
    description: "Connect with friends and share your moments instantly.",
    tags: ["Vue", "Firebase", "Tailwind"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Finance Tracker",
    description: "Manage your personal finances with intuitive charts.",
    tags: ["Angular", "D3.js", "Node.js"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

export function Projects() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black p-8">
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
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <div
              className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30`}
            />
            
            <h3 className="mb-2 text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mb-4 text-gray-400">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
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