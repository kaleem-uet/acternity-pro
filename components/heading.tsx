import React from "react";
import { cn } from "@/lib/utils"; // <-- adjust path if needed

export default function Heading({
  className,
  children,
  as: Tag = "h2",
}: {
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "text-2xl md:text-4xl lg:text-6xl tracking-tight font-display font-bold",
        className
      )}
    >
      {children}
    </Tag>
  );
}
