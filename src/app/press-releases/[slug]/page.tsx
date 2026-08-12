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

  return (
    <FoundationPlaceholder
      label="Press Release"
      title={slug.replaceAll("-", " ")}
      note="Individual press releases will be rendered here from structured content once the archive migration begins."
    />
  );
}
