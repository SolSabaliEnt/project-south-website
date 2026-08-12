import { FoundationPlaceholder } from "@/components/ui/FoundationPlaceholder";

export const dynamicParams = false;

export function generateStaticParams() {
  return [];
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
