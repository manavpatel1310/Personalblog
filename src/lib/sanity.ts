import { createClient, type SanityClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";

export const hasSanityConfig = Boolean(projectId);

export const sanityClient: SanityClient | null = hasSanityConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

const builder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

export function urlFor(source: Parameters<NonNullable<typeof builder>["image"]>[0]) {
  if (!builder) throw new Error("Sanity is not configured — set PUBLIC_SANITY_PROJECT_ID.");
  return builder.image(source);
}
