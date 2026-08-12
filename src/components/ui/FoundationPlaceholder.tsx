import { EditorialHeadline } from "@/components/ui/EditorialHeadline";
import { SectionLabel } from "@/components/ui/SectionLabel";

type FoundationPlaceholderProps = {
  label: string;
  title: string;
  note?: string;
};

export function FoundationPlaceholder({
  label,
  title,
  note = "More information about this work will be available here soon.",
}: FoundationPlaceholderProps) {
  return (
    <section className="foundation-page">
      <div className="foundation-page-inner">
        <SectionLabel>{label}</SectionLabel>
        <EditorialHeadline as="h1">{title}</EditorialHeadline>
        <p>{note}</p>
      </div>
    </section>
  );
}
