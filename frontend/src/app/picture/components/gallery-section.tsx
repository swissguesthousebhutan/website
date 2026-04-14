import Image from "next/image";

import type { GallerySection as GallerySectionType } from "./gallery-data";

type GallerySectionProps = {
  section: GallerySectionType;
};

export default function GallerySection({ section }: GallerySectionProps) {
  return (
    <section className="rounded-2xl border border-border/60 bg-secondary/25 p-5 shadow-sm md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary">
          {section.title}
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary/80" />
        <p className="mt-3 text-foreground/80 text-sm md:text-base">
          {section.description}
        </p>
      </div>

      <div className="grid grid-cols-2 auto-rows-[150px] gap-3 sm:auto-rows-[170px] md:grid-cols-6 md:auto-rows-[190px]">
        {section.images.map((image, index) => (
          <article
            key={image.src}
            className={`group relative overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm transition-transform duration-300 hover:-translate-y-0.5 ${
              index === 0
                ? "col-span-2 row-span-2 md:col-span-4 md:row-span-2"
                : index % 5 === 0
                  ? "col-span-2 md:col-span-2 md:row-span-2"
                  : "col-span-1 md:col-span-2"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
