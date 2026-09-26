"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  introductionSpecsAnimation,
  introductionTextAnimation,
} from "@/src/lib/animations";

interface SpecItem {
  label: string;
  value: string;
}

interface IntroductionProps {
  index: string;
  title: string;
  text: string;
  specs: SpecItem[];
}

export default function Introduction({
  index,
  title,
  text,
  specs,
}: IntroductionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    introductionTextAnimation(containerRef, textRef);
    introductionSpecsAnimation(containerRef, specsRef);
  });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-white py-24 text-black md:py-32"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-8 right-0 select-none text-[min(42vw,14rem)] leading-none font-bold tracking-tighter text-black/[0.04]"
      >
        {index}
      </span>

      <div className="relative mx-auto max-w-7xl space-y-10 px-8">
        <div className="flex items-end justify-between gap-6">
          <h1
            ref={titleRef}
            className="text-6xl leading-none font-bold tracking-tighter uppercase md:text-9xl"
          >
            {title}
          </h1>
          <span className="hidden font-mono text-sm tracking-[0.25em] text-neutral-400 uppercase sm:block">
            {index} / 03
          </span>
        </div>

        <div
          ref={specsRef}
          className="grid grid-cols-2 gap-x-6 gap-y-6 border-y border-black/10 py-6 md:grid-cols-4"
        >
          {specs.map((spec) => (
            <div key={spec.label} data-spec className="flex flex-col gap-1.5">
              <span className="text-[0.7rem] tracking-[0.22em] text-neutral-400 uppercase">
                {spec.label}
              </span>
              <span className="text-lg leading-tight font-medium tracking-tight whitespace-nowrap md:text-xl">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        <p
          ref={textRef}
          className="max-w-5xl text-3xl leading-tight font-normal tracking-tighter text-neutral-800 md:text-5xl"
        >
          {text}
        </p>
      </div>
    </section>
  );
}
