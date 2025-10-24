import TextHoverEffectDemo from "@/components/text-hover-effect-demo";
import { FlipWordsDemo } from "@/components/flip-text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <TextHoverEffectDemo />
      <FlipWordsDemo />
    </main>
  );
}