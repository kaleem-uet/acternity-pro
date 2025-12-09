import { cn } from "@/lib/utils";

export default function Subheading({
  className,
  children,
  as: Tag = "p",
}: {
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "text-base md:text-lg font-inter dark:text-neutral-6 00 text-neutral-400 max-w-xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}