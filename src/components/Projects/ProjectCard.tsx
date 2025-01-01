import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "./projects";
import { TypePill } from "./TypePill";
import { FaGithub as GithubIcon } from "react-icons/fa";

export const ProjectCard = ({
  name,
  image,
  href,
  date,
  children,
  github,
  type,
}: {
  name: string;
  image: string;
  href: string;
  date: Date;
  children: React.ReactNode;
  type: ProjectType;
  github?: string;
}) => {
  return (
    <div className="relative flex items-center gap-2 rounded-lg bg-slate-100 hover:bg-slate-50 shadow-sm">
      <Link target="_blank" rel="noopener noreferrer" href={href}>
        <div className="h-32 overflow-hidden flex items-center">
          <Image src={image} alt={name} width={128} height={128} />
        </div>
      </Link>
      <div className="flex flex-col h-full w-full px-2">
        <div className="flex justify-between items-center w-full">
          <Link target="_blank" rel="noopener noreferrer" href={href} className="text-md font-bold">
            {name}
          </Link>
          <p className="text-sm text-slate-600">{date.toLocaleDateString()}</p>
        </div>
        {children}
      </div>
      <div className="absolute bottom-0.5 right-0.5 flex items-center gap-2">
        {github && (
          <Link target="_blank" rel="noopener noreferrer" href={github} className="text-black hover:text-slate-600">
            <GithubIcon size={22} />
          </Link>
        )}
        <TypePill type={type} />
      </div>
    </div>
  );
};
