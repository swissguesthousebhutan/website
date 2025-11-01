import Image from "next/image";

export default function IntroCard() {
  return (
    <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        <div className="max-w-3xl md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            About Swiss Guest House
          </h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-primary/80" />
          <div className="mt-4 space-y-3 text-foreground/80 text-base md:text-lg leading-relaxed">
            <p>
              Nestled in the heart of Bumthang, Swiss Guest House stands among
              Bhutan’s oldest and most cherished lodges. Blending the charm of
              traditional Bhutanese hospitality with a touch of Swiss comfort,
              it has welcomed travelers for generations.
            </p>
            <p>
              Guests can savor authentic home-made Swiss cuisine and local
              delicacies, all served in a serene, garden-view setting. With its
              timeless warmth, fine dining, and peaceful atmosphere, Swiss Guest
              House remains a haven for those seeking rest, flavor, and a sense
              of home in the mountains.
            </p>
          </div>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg md:max-w-sm md:ml-auto">
          <Image
            src="/about/dog.jpg"
            alt="Swiss Guest House — garden view"
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 384px, (min-width: 768px) 33vw, 100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
