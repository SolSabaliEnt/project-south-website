type EditorialHeadlineProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
  className?: string;
};

export function EditorialHeadline({
  children,
  as: Tag = "h2",
  light = false,
  className = "",
}: EditorialHeadlineProps) {
  return (
    <Tag
      className={`editorial-headline${light ? " editorial-headline-light" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Tag>
  );
}
