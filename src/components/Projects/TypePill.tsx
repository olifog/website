import { ProjectType } from "./projects";

const typeToColor = {
  [ProjectType.Webapp]: "bg-blue-800",
  [ProjectType.Game]: "bg-orange-600",
  [ProjectType.Writing]: "bg-purple-600",
  [ProjectType.Writeup]: "bg-yellow-500",
  [ProjectType.Software]: "bg-green-600",
};

const typeToText = {
  [ProjectType.Webapp]: "Webapp",
  [ProjectType.Game]: "Game",
  [ProjectType.Writing]: "Writing",
  [ProjectType.Writeup]: "CTF Writeup",
  [ProjectType.Software]: "Non-Web Software 🤯",
};

export const TypePill = ({ type }: { type: ProjectType }) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-full text-white text-sm px-2 py-0.5 ${typeToColor[type]}`}
    >
      <p>{typeToText[type]}</p>
    </div>
  );
};
