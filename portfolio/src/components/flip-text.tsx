import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
 
export function FlipWordsDemo() {
  const words = ["AI/ML", "WebDev", "Cloud"]
  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-500">
        Experienced in
        <FlipWords words={words} /> <br />
        A fresher with a passion for turning ideas <br>
        </br>into intelligent applications
      </div>
    </div>
  );
}