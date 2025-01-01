import Image from "next/image";

const links: { name: string; url: string; download?: boolean }[] = [
  {
    name: "GitHub",
    url: "https://github.com/olifog",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fogelin/",
  },
  {
    name: "Email",
    url: "mailto:oliverfogelin@gmail.com",
  },
  {
    name: "CV",
    url: "/CV.pdf",
  },
];

export const MainBio = () => {
  return (
    <div className="w-full max-w-2xl flex items-center gap-4 px-2">
      <div className="flex flex-col flex-1">
        <h1 className="text-3xl font-bold text-center my-2">Oliver Fogelin</h1>
        <div className="flex flex-col items-center justify-center sm:hidden mb-2">
          <div className="flex items-center justify-center w-48 h-56">
            <Image
              src="/images/me.jpg"
              alt="Oliver Fogelin"
              width={256}
              height={256}
              className="rounded-xl"
            />
          </div>
        </div>
        <p>
          I like making things and finishing things (in order of importance)
        </p>
        <div className="flex">
          {links.map((link, index) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="text-orange-700 hover:text-orange-900"
            >
              {link.name}{" "}
              {index < links.length - 1 && (
                <span className="text-gray-500 ml-0.5 mr-1">/</span>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="items-center justify-center w-48 h-56 hidden sm:flex">
        <Image
          src="/images/me.jpg"
          alt="Oliver Fogelin"
          width={256}
          height={256}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};
