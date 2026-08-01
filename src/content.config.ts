import { defineCollection } from "astro:content";
import { z } from "astro/zod";
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
    // Optional terminal vignette rendered above the article — the skimmer's
    // 3-second version of the piece. tone colors the right column:
    // ok = live green, bad = negative red, accent = brand orange.
    figure: z
      .object({
        title: z.string(),
        lines: z.array(
          z.object({
            l: z.string(),
            r: z.string().optional(),
            tone: z.enum(["ok", "bad", "accent"]).optional(),
          }),
        ),
      })
      .optional(),
  }),
});

export const collections = { learn };
