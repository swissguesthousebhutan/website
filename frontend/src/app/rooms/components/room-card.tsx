import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type Feature = { icon: LucideIcon; label: string };

type Props = {
  title: string;
  description: string;
  image: string;
  features?: Feature[];
  ctaHref?: string; // booking link (tel: or page)
  ctaLabel?: string;
};

export default function RoomCard({
  title,
  description,
  image,
  features = [],
  ctaHref = "/Booking",
  ctaLabel = "Book now",
}: Props) {
  return (
    <article className="rounded-lg border-2 border-primary bg-white shadow-sm overflow-hidden">
      <div className="relative aspect-3/2">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-primary">
          {title}
        </h3>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary/80" />
        <p className="mt-3 text-sm md:text-base text-foreground/80 leading-relaxed">
          {description}
        </p>
        {features.length > 0 && (
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-foreground/80">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <li key={i} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" aria-hidden />
                  <span>{f.label}</span>
                </li>
              );
            })}
          </ul>
        )}
        <div className="mt-5 flex items-center gap-3">
          <Button asChild>
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/picture">View gallery</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
