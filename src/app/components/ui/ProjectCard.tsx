import { FaArrowRight } from "react-icons/fa";
import { ProjectItem, Tech } from "@/src/data/types/projects";

const technologies: Tech = [{ name: "GSAP" }];

export default function ProjectCard({
  index,
  href,
  title,
  description,
  technologies,
}: ProjectItem) {
  return (
    <div className="group max-w-7xl w-full p-5 border-t border-b border-black/20 flex  justify-between duration-200 transition hover:bg-black/5 hover:-translate-y-0.5">
      <div className="flex flex-row space-x-12 justify-center items-center">
        <h1 className="text-muted-foreground/40 text-5xl font-bold">{index}</h1>
        <div className="duration-200 transition  group-hover:-translate-y-0.5">
          <h1 className="font-bold text-3xl uppercase flex flex-row items-center gap-2 ">
            {title}
            <span>
              <FaArrowRight className="text-lg group-hover:translate-x-0.5" />
            </span>
          </h1>
          <div className="space-y-4">
            <p className="max-w-3xl">
              {description}
              {/* Forum studenckie, pomagajaca studentą sprawdzić/wystawić opinię na
              temat wykładowców Politechniki Wrocławskiej oraz innych tematów
              związanych z uczelnią{" "} */}
            </p>
            <div className="space-x-1 tracking-wider text-xs flex flex-row h-full items-end text-muted-foreground w-full thext-right">
              {technologies?.map((tech) => (
                <span key={tech.name}>{tech.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
