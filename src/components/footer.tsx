"use client";
import React from "react";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className="w-full bg-transparent/50 backdrop-blur-md py-10 text-neutral-400 border-b border-neutral-800">
            <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left Side: Copyright & Heart */}
                <div className="flex flex-col items-center md:items-start text-sm">
                    <p>
                        Made with <span className="text-red-500">❤️</span> by Dhruv
                    </p>
                    <p className="mt-1">
                        &copy; {new Date().getFullYear()} Dhruv Kumar. All rights reserved.
                    </p>
                </div>

                {/* Right Side: Social Links */}
                <div className="flex items-center gap-4">
                    <Link
                        href="https://linkedin.com/in/dhruvk27"
                        target="_blank"
                        className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <IconBrandLinkedin className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://github.com/DhruvK278"
                        target="_blank"
                        className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <IconBrandGithub className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://x.com/DhruvK278"
                        target="_blank"
                        className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors"
                        aria-label="X (Twitter)"
                    >
                        <IconBrandX className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
