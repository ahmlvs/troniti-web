import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// /learn — a library of evergreen explainers (not a blog: "updated", no cadence).
// One markdown file in src/content/learn/ = one article at /learn/<file-name>/.
const learn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/learn" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { learn };
