import Image from "next/image";

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
};

export default function FeatureSection({
  title,
  description,
  images,
  reverse = false,
  id,
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
          {/* Top row: align with 3-column grid (text spans 2 cols, image spans 1 col) */}
          <div className="grid grid-cols-3 gap-y-3 md:gap-y-4 gap-x-0">
            {topPair.map((tile, idx) => {
              if (tile.type === "text") {
                return (
                  <div
                    key={`top-text-${idx}`}
                    className="col-span-2 px-1.5 md:px-2"
                  >
                    <div className="aspect-8/3 rounded-lg border-2 border-primary flex items-center justify-center text-center p-3">
                      <div className="max-w-sm">
                        <h3 className="text-base md:text-lg font-semibold tracking-tight text-primary">
                          {title}
                        </h3>
                        <p className="mt-1 text-foreground/80 text-sm leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
              // image tile in top row
              return (
                <div key={`top-img-${idx}`} className="px-1.5 md:px-2">
                  <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-border">
                    <Image
                      src={tile.img.src}
                      alt={tile.img.alt}
                      fill
                      sizes="(max-width: 640px) 33vw, (max-width: 1200px) 33vw, 480px"
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Remaining tiles: three equal columns */}
          {restImageTiles.length > 0 && (
            <div className="mt-3 md:mt-4 grid grid-cols-3 gap-y-3 md:gap-y-4 gap-x-0">
              {restImageTiles.map((tile, idx) => (
                <div key={`rest-${idx}`} className="px-1.5 md:px-2">
                  <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-border">
                    <Image
                      src={tile.img.src}
                      alt={tile.img.alt}
                      fill
                      sizes="(max-width: 640px) 33vw, (max-width: 1200px) 33vw, 480px"
                      className="object-cover"
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
