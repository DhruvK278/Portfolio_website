"use client";

import React from "react";
import { motion } from "motion/react";

const techStack = {
    "Languages & Databases": ["Python", "Java", "MySQL", "C++", "C"],
    Frameworks: ["TensorFlow", "NumPy", "OpenCV", "NextJs", "ReactJs"],
    "Other Tools": ["AWS", "Linux", "Git", "Unity", "GitHub"],
};

const experiences = [
    {
        company: "Global Infoventures W",
        location: "Noida, India",
        role: "AI Intern",
        period: "June 2, 2025 – August 1, 2025",
        details: [
            {
                label: "Tools",
                value: "Python, NLP, OCR, Data Preprocessing, LLMs",
            },
            {
                label: "Description",
                value:
                    "Worked under the New Age Technologies department on NLP-focused tasks. Developed and optimized OCR pipelines for extracting structured text from scanned documents and PDFs. Performed extensive data preprocessing and cleaning to prepare datasets for Large Language Models (LLMs), improving text quality and downstream model performance",
            },
        ],
    },
    {
        company: "Artificial Intelligence Society Bennett University",
        location: "Greater Noida, India",
        role: "Computer Vision Leader",
        period: "October 2023 – August 2025",
        details: [
            {
                label: "Leadership",
                value: "Mentoring juniors and managing technical events under the AI Society.",
            },
        ],
    },
];

export function About() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center p-8 text-white">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-4xl font-bold md:text-6xl"
            >
                About Me
            </motion.h2>

            <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-2">
                {/* Tech Stack Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-semibold text-neutral-200">Tech Stack</h3>
                    <div className="grid gap-4">
                        {Object.entries(techStack).map(([category, items], index) => (
                            <div
                                key={category}
                                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
                            >
                                <h4 className="mb-3 text-lg font-medium text-blue-400">
                                    {category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full bg-white/10 px-3 py-1 text-sm text-neutral-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-semibold text-neutral-200">Experience</h3>
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
                            >
                                <div className="mb-4 border-b border-white/10 pb-4">
                                    <h4 className="text-lg font-bold text-white">{exp.company}</h4>
                                    <div className="flex flex-wrap justify-between gap-2 text-sm text-neutral-400">
                                        <span className="font-medium text-emerald-400">
                                            {exp.role}
                                        </span>
                                        <span>{exp.period}</span>
                                    </div>
                                    <p className="mt-1 text-xs text-neutral-500">{exp.location}</p>
                                </div>

                                <div className="space-y-3">
                                    {exp.details.map((detail, i) => (
                                        <div key={i}>
                                            <span className="text-sm font-semibold text-neutral-300">
                                                {detail.label}:{" "}
                                            </span>
                                            <span className="text-sm text-neutral-400">
                                                {detail.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
