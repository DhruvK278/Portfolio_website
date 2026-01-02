import TextHoverEffectDemo from "@/components/text-hover-effect-demo";
import { FlipWordsDemo } from "@/components/flip-text";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";

export default function Home() {
  return (
    <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-transparent">
      <section className="flex h-screen w-full snap-start flex-col items-center justify-center">
        <TextHoverEffectDemo />
        <FlipWordsDemo />
      </section>

      <section id="about" className="min-h-screen w-full snap-start bg-transparent">
        <About />
      </section>

      <section id="projects" className="h-screen w-full snap-start">
        <Projects />
      </section>
    </main>
  );
}