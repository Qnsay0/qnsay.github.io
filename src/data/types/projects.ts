export interface ProjectProps {
  index: string;
  title: string;
  description: string;
  projects: ProjectItem[];
}

export type ProjectItem = {
  index: string;
  href: string;
  title: string;
  description: string;
  technologies: Tech[];
};

type Tech = {
  name: string;
};
