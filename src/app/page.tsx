import { EditorialHeadline } from "@/components/ui/EditorialHeadline";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function Home() {
  return (
    <section className="foundation-page">
      <div className="foundation-page-inner">
        <SectionLabel>Project South</SectionLabel>
        <EditorialHeadline as="h1">
          Production foundation is in place.
        </EditorialHeadline>
        <p>
          The shared header, initiatives navigation, mobile menu, footer, design
          tokens, and reusable editorial components are ready. The approved
          homepage design will be translated next without carrying Framer-specific
          code into production.
        </p>
      </div>
    </section>
  );
}
