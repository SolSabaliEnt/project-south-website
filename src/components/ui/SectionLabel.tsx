type SectionLabelProps = {
  children: React.ReactNode;
  light?: boolean;
};

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <div className={light ? "section-label section-label-light" : "section-label"}>
      {children}
    </div>
  );
}
