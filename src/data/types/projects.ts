export interface ProjectProps {
  index: string;
  title: string;
  description: string;
  projects: ProjectItem[];
}

export type ProjectItem = {
  href: string;
  image: string;
  title: string;
  description: string;
  technologies: string[];
};
