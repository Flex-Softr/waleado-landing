import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3.5",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag
        className={cn(
          "font-extrabold leading-[1.12] text-foreground",
          Tag === "h1" ? "text-4xl sm:text-5xl lg:text-[3.25rem]" : "text-3xl sm:text-[2.6rem]"
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
