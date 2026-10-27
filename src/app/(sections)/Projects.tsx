"use client";
import ProjectCard from "@/src/app/components/ui/ProjectCard";
import { useRef } from "react";
import { ProjectProps } from "@/src/data/types/projects";

export default function Projects({
  index,
  title,
  description,
  projects,
}: ProjectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const projectCardRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden bg-white py-24 text-black md:py-32 px-8">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-8 left-0 select-none text-[min(42vw,14rem)] leading-none font-bold tracking-tighter text-black/[0.04]"
      >
        {index}
      </span>

      <div className="relative mx-auto flex max-w-7xl flex-col items-end space-y-10 text-right mb-8">
        <div className="flex w-full items-end justify-between gap-6">
          <span className="hidden font-mono text-sm tracking-[0.25em] text-neutral-400 uppercase sm:block">
            {index} / 03
          </span>
          <h1
            ref={titleRef}
            className="text-6xl leading-none font-bold tracking-tighter ml-auto uppercase md:text-9xl"
          >
            {title}
          </h1>
        </div>
        <p
          ref={textRef}
          className="max-w-5xl text-3xl leading-tight font-normal tracking-tighter text-neutral-800 md:text-5xl"
        >
          {description}
        </p>
      </div>
      <div className="mt-16 ml-auto flex w-full max-w-6xl flex-col">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={String(index + 1)}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
