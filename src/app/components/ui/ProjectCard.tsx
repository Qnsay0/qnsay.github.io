interface ProjectCardProps {
  href: string;
  title: string;
  technologies: string[];
  index: number;
}

export default function ProjectCard(props: ProjectCardProps) {
  const formattedIndex = (props.index + 1).toString().padStart(2, "0");

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full ml-auto flex flex-col sm:flex-row cursor-pointer py-2 justify-start sm:justify-between gap-2  border-b border-b-neutral-400/50 hover:text-neutral-700 items-start sm:items-center  "
    >
      <div className="flex flex-row gap-5 sm:gap-10 items-center">
        <span className="md:text-3xl text-xl">&#8598;</span>
        <span className="text-xl font-medium">{formattedIndex}</span>
        <h1 className="uppercase tracking-wider font-semibold text-2xl">
          {props.title}
        </h1>
      </div>
      <div className="flex flex-row flex-wrap items-center text-sm gap-3 text-center">
        {props.technologies?.map((tech, idx) => (
          <span key={idx} className="px-3 py-0.5 bg-neutral-700/10 rounded-lg">
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
