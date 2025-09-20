import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: ["projects/*/overview.md"],
    base: "./src",
  }),
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    url: z.string().url().optional(),
    coolness: z.number().optional(),
    date: z.date().optional(),
    tags: z
      .union([
        z.string().transform((s) =>
          s
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        ),
        z.array(z.string()),
      ])
      .default([]),
  }),
});

const projectPages = defineCollection({
  loader: glob({
    pattern: ["projects/*/page.md"],
    base: "./src",
  }),
  schema: z.object({}).passthrough().optional(),
});

export const collections = {
  projects,
  projectPages,
};


