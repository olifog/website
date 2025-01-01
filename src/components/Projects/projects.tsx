export enum ProjectType {
  Game = "game",
  Writing = "writing",
  Writeup = "writeup",
  Webapp = "webapp",
  Software = "software",
}

export type Project = {
  name: string;
  image: string;
  href: string;
  date: Date;
  type: ProjectType;
  github?: string;
  coolness: number;
  children: React.ReactNode;
};

export const projects: Project[] = [
  {
    name: "End of the Universe",
    image: "/images/project/eotu/TitanIcon.svg",
    href: "https://eotu.olifog.com",
    date: new Date(2024, 6, 7),
    type: ProjectType.Game,
    coolness: 80,
    github: "https://github.com/olifog/eotu",
    children: (
      <p className="text-sm">
        A sci-fi idle game set at the end of the universe, where your only
        interface is an LLM.
      </p>
    ),
  },
  {
    name: "Tripos Pro",
    image: "/images/project/tripospro/cambridge.svg",
    href: "https://www.tripos.pro",
    date: new Date(2024, 10, 11),
    type: ProjectType.Webapp,
    coolness: 90,
    github: "https://github.com/olifog/tripospro",
    children: <p className="text-sm">An over-engineered study tool for Cambridge students.</p>,
  },
  {
    name: "Style.tf",
    image: "/images/project/styletf/styletf.png",
    href: "https://style.tf",
    github: "https://github.com/olifog/styletf",
    date: new Date(2022, 3, 7),
    type: ProjectType.Webapp,
    coolness: 72,
    children: (
      <p className="text-sm">
        A webapp that tracks hundreds of thousands of TF2 players and visualizes
        the current weapon meta.
      </p>
    ),
  },
  {
    name: "BPhO Papers",
    image: "/images/project/bphopapers/bphopapers.jpg",
    href: "https://papers.bpho.org.uk/",
    date: new Date(2023, 8, 20),
    type: ProjectType.Webapp,
    coolness: 85,
    children: <p className="text-sm">A commissioned webapp for the British Physics Olympiad, allowing students to build custom papers from past questions.</p>,
  },
  {
    name: "Discord MiniGolf",
    image: "/images/project/discordminigolf/minigolf.png",
    href: "https://github.com/olifog/MiniGolf",
    github: "https://github.com/olifog/MiniGolf",
    date: new Date(2019, 5, 28),
    type: ProjectType.Game,
    coolness: 69,
    children: <p className="text-sm">A Discord bot that lets you play mini-golf with your friends!</p>,
  },
  {
    name: "Wandzooka",
    image: "/images/project/wandzooka/skull.gif",
    href: "https://olifog.itch.io/wandzooka",
    date: new Date(2024, 1, 12),
    type: ProjectType.Game,
    coolness: 70,
    children: <p className="text-sm">A retro FPS made for Cambridge Game Jam 2024. WANDZOOKA!!!!</p>,
  },
  {
    name: "Advent of CUCaTS",
    image: "/images/project/aocucats/aoc.jpg",
    href: "https://aoc.cucats.org/",
    date: new Date(2024, 11, 1),
    type: ProjectType.Webapp,
    coolness: 80,
    children: <p className="text-sm">Advent of Code, but for Cambridge students (we dropped a dynamic programming problem day 3)</p>,
  },
  {
    name: "Discover Littleton",
    image: "/images/project/discoverlittleton/discoverlittleton.png",
    href: "https://discoverlittleton.com",
    date: new Date(2022, 7, 5),
    type: ProjectType.Webapp,
    coolness: 40,
    children: <p className="text-sm">A commissioned website for the town of Littleton, New Hampshire.</p>,
  },
  {
    name: "Habits App",
    image: "/images/project/habits/habits.jpg",
    href: "https://habits.olifog.com",
    github: "https://github.com/olifog/habits",
    date: new Date(2022, 1, 14),
    type: ProjectType.Webapp,
    coolness: 30,
    children: <p className="text-sm">A lightweight habit tracker. Web dev rite of passage.</p>,
  },
  {
    name: "Pathia",
    image: "/images/project/pathia/pathia.png",
    href: "https://pathia.app",
    date: new Date(2024, 10, 14),
    type: ProjectType.Webapp,
    coolness: 65,
    children: <p className="text-sm">A set of AI learning tools for students with ASD, founded on research in Gestalt Language Processing.</p>,
  },
  {
    name: "Clickup Mini",
    image: "/images/project/clickup/clickup.png",
    href: "https://clickup.olifog.com/",
    date: new Date(2024, 7, 1),
    type: ProjectType.Webapp,
    github: "https://github.com/olifog/clickup",
    coolness: 20,
    children: <p className="text-sm">A mini Clickup client that allows you to create/update tasks and their lengths from your phone.</p>,
  },
  {
    name: "Start Hack 24 Chatbot",
    image: "/images/project/starthack/starthack.png",
    href: "https://github.com/olifog/starthack24",
    github: "https://github.com/olifog/starthack24",
    date: new Date(2024, 2, 22),
    type: ProjectType.Software,
    coolness: 35,
    children: <p className="text-sm">A phone chatbot with RAG access to an entire county&apos;s knowledge-base. Made for Start Hack 2024 in St Gallen, Switzerland.</p>,
  },
];
