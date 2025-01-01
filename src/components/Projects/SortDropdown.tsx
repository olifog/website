"use client";

import { defaultSortMethod, sortMethods } from ".";
import { useRouter } from "next/navigation";

export const SortDropdown = () => {
  const router = useRouter();
  return (
    <select className="border border-gray-300 rounded-md p-1" onChange={(e) => {
      router.push(`/?sort=${e.target.value}`);
    }} defaultValue={defaultSortMethod}>
      {sortMethods.map((method) => (
        <option key={method} value={method}>{method}</option>
      ))}
    </select>
  );
}