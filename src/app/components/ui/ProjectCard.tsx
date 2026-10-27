import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { ProjectItem } from "@/src/data/types/projects";

export default function ProjectCard({
  index,
  href,
  image,
  title,
  description,
  technologies,
}: ProjectItem & { index: string }) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group grid w-full grid-cols-1 items-center gap-6 border-t border-black/10 py-8 transition duration-300 last:border-b hover:bg-black/[0.02] lg:grid-cols-2 lg:gap-12 lg:py-10"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 768px) 36rem, 100vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-4">
        <span className="font-mono text-xs tracking-[0.25em] text-neutral-400">
          {index.padStart(2, "0")}
        </span>
        <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tighter uppercase lg:text-5xl">
          {title}
          <FaArrowRight className="shrink-0 text-base transition duration-300 group-hover:translate-x-1 lg:text-lg" />
        </h2>
        <p className="max-w-xl text-base leading-snug tracking-tight text-neutral-600 lg:text-lg">
          {description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="border border-black/10 px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.16em] text-neutral-500 uppercase"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
