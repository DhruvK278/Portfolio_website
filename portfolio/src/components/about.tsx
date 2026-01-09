"use client";

import React from "react";
import { motion } from "motion/react";
import {
    IconBrandGithub,
    IconBrandLeetcode,
    IconBrandLinkedin,
    IconBrandX,
    IconFileText,
} from "@tabler/icons-react";

const techStack = {
    "Languages & Databases": ["Python", "Java", "MySQL", "C++", "C"],
    Frameworks: ["TensorFlow", "NumPy", "OpenCV", "NextJs", "ReactJs"],
    "Other Tools": ["AWS", "Linux", "Git", "Unity", "GitHub", "Docker"],
};

const experiences = [
    {
        company: "Global Infoventures",
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

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/dhruvk27",
        icon: IconBrandLinkedin,
    },
    {
        label: "GitHub",
        href: "https://github.com/DhruvK278",
        icon: IconBrandGithub,
    },
    {
        label: "X",
        href: "https://x.com/DhruvK278",
        icon: IconBrandX,
    },
    {
        label: "LeetCode",
        href: "https://leetcode.com/dhruvk27",
        icon: IconBrandLeetcode,
    },
    {
        label: "Resume",
        href: "https://drive.google.com/file/d/172K5MBVk_6WEVo3MW4kaNkQMElXyaNem/view?usp=sharing",
        icon: IconFileText,
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

            <div className="grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Profile Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="col-span-1 flex flex-col items-center gap-8"
                >
                    <div className="relative h-96 w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm transition-colors hover:bg-white/10 lg:h-[600px]">
                        <img
                            src="/assets/me.png"
                            alt="Profile"
                            className="h-full w-full rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
                        />
                    </div>

                    {/* Social Links */}
                    <div className="flex w-full max-w-sm flex-wrap justify-center gap-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                            >
                                <link.icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-neutral-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                                    {link.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Content Section */}
                <div className="col-span-1 space-y-8 lg:col-span-2">
                    {/* Tech Stack Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-neutral-200">
                            Tech Stack
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {Object.entries(techStack).map(([category, items], index) => (
                                <div
                                    key={category}
                                    className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
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
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-neutral-200">
                            Experience
                        </h3>
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
                                >
                                    <div className="mb-4 border-b border-white/10 pb-4">
                                        <h4 className="text-lg font-bold text-white">
                                            {exp.company}
                                        </h4>
                                        <div className="flex flex-wrap justify-between gap-2 text-sm text-neutral-400">
                                            <span className="font-medium text-emerald-400">
                                                {exp.role}
                                            </span>
                                            <span>{exp.period}</span>
                                        </div>
                                        <p className="mt-1 text-xs text-neutral-500">
                                            {exp.location}
                                        </p>
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
        </div>
    );
}