import { FaArrowRight } from "react-icons/fa";
import { ProjectItem } from "@/src/data/types/projects";
import { Badge } from "@/components/ui/badge";
export default function ProjectCard({
  index,
  href,
  title,
  description,
  technologies,
}: ProjectItem) {
  return (
    <div className="group w-full max-w-7xl border-t border-b border-black/20 p-5 transition duration-200 hover:-translate-y-0.5 hover:bg-black/5">
      <div className="flex w-full flex-row items-center space-x-12">
        <h1 className="text-5xl font-bold text-muted-foreground/40">{index}</h1>
        <div className="min-w-0 flex-1 transition duration-200 group-hover:-translate-y-0.5">
          <h1 className="flex flex-row items-center gap-2 text-3xl font-bold uppercase">
            {title}
            <span>
              <FaArrowRight className="text-lg group-hover:translate-x-0.5" />
            </span>
          </h1>
          <div className="w-full space-y-4">
            <p className="max-w-3xl">{description}</p>
            <div className="flex w-full flex-row flex-wrap items-center gap-x-2 text-xs tracking-wider text-muted-foreground">
              <div className="flex flex-row gap-x-2">
                {technologies?.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <Badge variant="secondary" className="ml-auto bg-green-600/60">
                In proggress
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
