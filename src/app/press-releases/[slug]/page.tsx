import { FoundationPlaceholder } from "@/components/ui/FoundationPlaceholder";
import { pressReleases } from "@/data/press-releases";

export const dynamicParams = false;

export function generateStaticParams() {
  return pressReleases
    .filter((release) => release.sourceType === "page")
    .map((release) => {
      const slug = new URL(release.href).pathname.replace(/^\/+|\/+$/g, "").split("/").at(-1);
      return slug ? { slug } : null;
    })
    .filter((item): item is { slug: string } => Boolean(item));
}

type PressReleasePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PressReleasePage({ params }: PressReleasePageProps) {
  const { slug } = await params;
  const release = pressReleases.find((item) => {
    if (item.sourceType !== "page") return false;
    const itemSlug = new URL(item.href).pathname.replace(/^\/+|\/+$/g, "").split("/").at(-1);
    return itemSlug === slug;
  });

  return (
    <FoundationPlaceholder
      label="Press Release"
      title={release?.title || slug.replaceAll("-", " ")}
      note="This release remains part of Project South’s public record. Visit the Press Releases archive to open the original publication."
    />
  );
}
