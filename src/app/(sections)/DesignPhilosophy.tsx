"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { philosophyTextAnimation } from "@/src/lib/animations";

interface ProjectProps {
  quote: string;
  author: string;
}

export default function DesignPhilosophy(props: ProjectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    philosophyTextAnimation(textRef, containerRef);
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-black px-6 md:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <h1
          ref={textRef}
          className="text-white uppercase font-bold text-4xl md:text-6xl leading-[1.05] tracking-tighter"
        >
          "{props.quote}"
        </h1>

        <p className="mt-8 md:mt-12 text-zinc-500 uppercase font-medium text-3xl  tracking-widest">
          ~ {props.author}
        </p>
      </div>
    </section>
  );
}
