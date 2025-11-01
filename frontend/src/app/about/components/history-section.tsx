import Image from "next/image";

export default function HistorySection() {
  return (
    <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
      <div className="max-w-5xl">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
          Our History
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary/80" />

        <div className="mt-4 space-y-4 text-foreground/80 leading-relaxed">
          <div className="md:grid md:grid-cols-3 md:gap-6 md:items-start">
            <p className="md:col-span-2">
              The Swiss Guest House Bhutan stands as one of the oldest and most
              enduring classic Bhutanese lodges in Bumthang. Blending
              traditional Bhutanese charm with Swiss warmth, it offers fine
              dining featuring home-made Swiss cuisine in a refreshing, tranquil
              setting. For decades, it has carried forward its long-honored
              traditions of hospitality, offering peace and comfort to all who
              visit.
            </p>
            <div className="mt-3 md:mt-0 relative aspect-4/3 w-full overflow-hidden rounded-lg md:max-w-sm md:ml-auto">
              <Image
                src="/about/history.jpg"
                alt="Historic sketch of Swiss Guest House at Karsumphe"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 384px, (min-width: 768px) 33vw, 100vw"
                quality={95}
              />
            </div>
          </div>

          {/* Single-column flow (no two-column layout) */}
          <div className="mt-4 space-y-4">
            <p>
              Located in Karsumphe, a historic site once home to Karsumphe
              Angye—the elder sister of Bhutan’s first King—the guest house
              began as a small traditional farmhouse. In the 1970s, the house
              served as the headquarters for the Dairy and Forestry Project,
              where Swiss professionals working on the initiative often
              gathered. Over time, the name “Karsumphe Guesthouse” naturally
              evolved into the now-beloved Swiss Guest House.
            </p>

            <p>
              In its early years, “guest house” was a modest term—there were
              only a few travelers to eastern Bhutan who stopped by for rest, a
              warm meal, and a much-needed shower after long, dusty journeys on
              the old, unpaved road. Listening to stories from those days, one
              can almost hear the nostalgic tune of the “Old House of Rocky
              Tocky.”
            </p>

            <p>
              With the gradual rise of tourism, a new guest house was built, and
              parts of the old farmhouse were lovingly reused in the
              construction. Some of those original walls still stand today on
              the terrace, preserving the spirit of the past. The new main
              building houses the restaurant and kitchen on the ground floor,
              while two additional wings were later added towards the old apple
              orchard—the last one completed in autumn 2009.
            </p>

            <p>
              True to its Swiss roots, the guest house is run by a cheese maker
              trained in Switzerland, and naturally features specialties such as
              Fondue, Raclette, Bratwurst, Rösti, and Züri Gschnätzlets,
              alongside authentic Bhutanese cuisine. Whether you crave a taste
              of home or a local delicacy, the Swiss Guest House offers a
              comforting experience that feels both familiar and timeless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
