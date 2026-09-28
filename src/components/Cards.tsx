import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  className?: string;
  children: ReactNode;
}

// The white, thick-bordered, rounded box used all over the design.
export default function Card({ title, className = "", children }: CardProps) {
  return (
    <section
      className={`rounded-2xl border-2 border-black bg-white p-6 shadow-md ${className}`}
    >
      {title && <h2 className="mb-4 text-lg font-extrabold uppercase">{title}</h2>}
      {children}
    </section>
  );
}
