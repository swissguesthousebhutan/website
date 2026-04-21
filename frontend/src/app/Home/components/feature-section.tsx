import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export type FeatureImage = {
  src: string;
  alt: string;
};

type Props = {
  title: string;
  description: string;
  images: FeatureImage[]; // up to 4 images used when text spans 2 columns (5 tiles total)
  reverse?: boolean;
  id?: string; // anchor id for in-page links
  icon?: LucideIcon; // optional icon to show above the title
};

export default function FeatureSection({
  title,
  description,
  images,
  reverse = false,
  id,
  icon,
}: Props) {
  // Prepare tiles for a 3-column grid where the text spans 2 columns on the first row
  // We render 1 text tile + up to 4 image tiles = 5 tiles total
  const imgs = images.slice(0, 4);
  const tiles: Array<{ type: "text" } | { type: "image"; img: FeatureImage }> =
    [];
  let used = 0;
  if (reverse && imgs[0]) {
    // When reversed, put one image first so text spans columns 2-3
    tiles.push({ type: "image", img: imgs[0] });
    used = 1;
  }
  // Text tile next (it will span 2 columns)
  tiles.push({ type: "text" });
  // Remaining images
  for (let i = used; i < imgs.length; i++) {
    tiles.push({ type: "image", img: imgs[i] });
  }
  // Safety: cap to 5 tiles
  const finalTiles = tiles.slice(0, 5);
  const topPair = finalTiles.slice(0, 2);
  const restTiles = finalTiles.slice(2);
  const restImageTiles = restTiles.filter(
    (t): t is { type: "image"; img: FeatureImage } => t.type === "image"
  );
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-7xl px-4 md:px-6 scroll-mt-24"
    >
      <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
        <div className="mx-auto w-full max-w-6xl">
          {/* Top row: stack on mobile; at md use 3 cols (text spans 2, image spans 1) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-y-4 gap-x-0">
            {topPair.map((tile, idx) => {
              if (tile.type === "text") {
                return (
                  <div
                    key={`top-text-${idx}`}
                    className={`${
                      reverse ? "order-1 md:order-0" : ""
                    } md:col-span-2 px-1.5 md:px-2`}
                  >
                    <div className="md:aspect-8/3 rounded-lg border-2 border-primary bg-white shadow-sm md:hover:shadow-md transition-shadow flex items-center justify-center text-center px-4 py-5">
                      <div className="max-w-sm">
                        {icon ? (
                          // Show provided Lucide icon above the title
                          <span className="inline-flex items-center justify-center mx-auto mb-2 h-9 w-9 md:h-10 md:w-10 rounded-full bg-primary/10">
                            {(() => {
                              const Icon = icon;
                              return (
                                <Icon
                                  className="h-5 w-5 md:h-6 md:w-6 text-primary"
                                  aria-hidden
                                />
                              );
                            })()}
                          </span>
                        ) : null}
                        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-primary">
                          {title}
                        </h3>
                        <p className="mt-2 text-foreground/80 text-sm md:text-base leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
              // image tile in top row
              return (
                <div
                  key={`top-img-${idx}`}
                  className={`${
                    reverse ? "order-2 md:order-0" : ""
                  } px-1.5 md:px-2`}
                >
                  <div className="group relative aspect-4/3 rounded-lg overflow-hidden border border-border bg-white shadow-sm md:hover:shadow-md transition-shadow">
                    <Image
                      src={tile.img.src}
                      alt={tile.img.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      priority={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Remaining tiles: two cols on mobile, three on md+ */}
          {restImageTiles.length > 0 && (
            <div className="mt-3 md:mt-4 grid grid-cols-2 md:grid-cols-3 gap-y-3 md:gap-y-4 gap-x-0">
              {restImageTiles.map((tile, idx) => (
                <div
                  key={`rest-${idx}`}
                  className={`px-1.5 md:px-2 ${
                    restImageTiles.length % 2 === 1 &&
                    idx === restImageTiles.length - 1
                      ? "col-span-2 justify-self-center w-full max-w-[180px] md:col-span-1 md:max-w-none"
                      : ""
                  }`}
                >
                  <div className="group relative aspect-4/3 rounded-lg overflow-hidden border border-border bg-white shadow-sm md:hover:shadow-md transition-shadow">
                    <Image
                      src={tile.img.src}
                      alt={tile.img.alt}
                      fill
                      sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 20vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      priority={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
