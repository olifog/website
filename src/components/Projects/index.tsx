import { ProjectCard } from "./ProjectCard";
import { Project, projects } from "./projects";
import { SortDropdown } from "./SortDropdown";

export const sortMethods = ["newest", "oldest", "coolest"] as const;
export type SortMethod = typeof sortMethods[number];
const sortMethodFunctions: Record<SortMethod, (a: Project, b: Project) => number> = {
  "newest": (a, b) => b.date.getTime() - a.date.getTime(),
  "oldest": (a, b) => a.date.getTime() - b.date.getTime(),
  "coolest": (a, b) => b.coolness - a.coolness,
}
export const defaultSortMethod: SortMethod = "coolest";

export const Projects = ({ sort }: { sort: SortMethod }) => {
  const sortedProjects = projects.sort(sortMethodFunctions[sort]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-5xl px-4 rounded-lg">
      <h2 className="text-xl font-bold">Accumulated stuff</h2>
      <div className="flex items-center gap-2">
        <p>Sort by:</p>
        <SortDropdown />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};

