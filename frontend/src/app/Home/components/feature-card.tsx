import * as React from "react";
import Link from "next/link";

export function FeatureCard({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  return (
    <Link
      href={href ?? "#"}
      className="block rounded-lg border border-border bg-secondary/40 p-5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-colors"
    >
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </Link>
  );
}
