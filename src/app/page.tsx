import { MainBio } from "@/components/MainBio";
import { defaultSortMethod, Projects, SortMethod, sortMethods } from "@/components/Projects";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  
  const { sort } = await searchParams;

  const sortMethod = sortMethods.includes(sort as SortMethod) ? sort as SortMethod : defaultSortMethod;

  return (
    <div className="flex flex-col gap-4 items-center pb-32">
      <MainBio />
      <Projects sort={sortMethod}/>
    </div>
  );
}
