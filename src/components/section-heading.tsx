import React from "react";

interface Props {
  id: string;
  children: React.ReactNode;
}

/**
 * Section heading that links to itself, so each section has a shareable
 * anchor (e.g. /#projects). A "#" hint appears on hover and is hidden in print.
 */
export function SectionHeading({ id, children }: Props) {
  return (
    <h2 id={id} className="group scroll-mt-16 text-xl font-bold">
      <a href={`#${id}`} className="inline-flex items-center gap-x-1.5">
        <span className="group-hover:underline">{children}</span>
        <span
          aria-hidden="true"
          className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 print:hidden"
        >
          #
        </span>
      </a>
    </h2>
  );
}
