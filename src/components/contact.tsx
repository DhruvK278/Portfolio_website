"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconMail, IconPhone } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Footer } from "./footer";

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");

        if (!formRef.current) return;

        // Use environment variables for EmailJS
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS keys are missing.");
            setStatus("error");
            setLoading(false);
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, formRef.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    setStatus("success");
                    setLoading(false);
                    formRef.current?.reset();
                    setTimeout(() => setStatus("idle"), 5000);
                },
                (error) => {
                    console.error("FAILED...", error.text);
                    setStatus("error");
                    setLoading(false);
                }
            );
    };


    return (
        <div className="flex h-full min-h-screen w-full flex-col items-center justify-between bg-transparent pt-20">
            <div className="flex flex-grow flex-col items-center justify-center px-4 md:px-10 w-full">
                <div className="grid w-full max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
                    {/* Left Side: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center gap-6"
                    >
                        <div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-neutral-100 to-neutral-600 bg-clip-text text-transparent md:text-6xl">
                                Let's Connect
                            </h2>
                            <p className="mt-4 text-base text-neutral-300 md:text-lg">
                                I am available to connect for new opportunities or just a friendly chat.
                                Feel free to reach out!
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700">
                                    <IconMail className="h-5 w-5 text-neutral-300" />
                                </div>
                                <span className="text-neutral-300">dhruv.kumar2782@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700">
                                    <IconPhone className="h-5 w-5 text-neutral-300" />
                                </div>
                                <span className="text-neutral-300">+91 9205014317</span>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            {/* Social Placeholders - Replace URLs with actual links or reuse existing social component if preferred */}
                            <a href="#" className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700 transition-colors border border-neutral-700">
                                <IconBrandLinkedin className="h-6 w-6 text-white" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700 transition-colors border border-neutral-700">
                                <IconBrandGithub className="h-6 w-6 text-white" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700 transition-colors border border-neutral-700">
                                <IconBrandX className="h-6 w-6 text-white" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 backdrop-blur-md"
                    >
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-neutral-500/10 via-transparent to-neutral-900/10 opacity-50" />

                        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="user_name" className="text-sm font-medium text-neutral-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    required
                                    placeholder="John Doe"
                                    className="rounded-lg border border-neutral-700 bg-neutral-800/50 px-4 py-3 text-neutral-200 placeholder-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="user_email" className="text-sm font-medium text-neutral-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    required
                                    placeholder="john@example.com"
                                    className="rounded-lg border border-neutral-700 bg-neutral-800/50 px-4 py-3 text-neutral-200 placeholder-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-neutral-300">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={4}
                                    placeholder="Your message here..."
                                    className="resize-none rounded-lg border border-neutral-700 bg-neutral-800/50 px-4 py-3 text-neutral-200 placeholder-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={cn(
                                    "group relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-600 px-4 py-3 font-medium text-black transition-all hover:from-neutral-100 hover:to-neutral-500 disabled:cursor-not-allowed disabled:opacity-70",
                                    loading && "cursor-wait"
                                )}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {loading ? "Sending..." : "Send Message"}
                                </span>
                                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform group-hover:translate-x-0" />
                            </button>

                            {status === "success" && (
                                <p className="text-center text-sm text-green-400">
                                    Message sent successfully!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-center text-sm text-red-400">
                                    Failed to send message. Please try again or check the console.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
