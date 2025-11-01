import Image from "next/image";

export default function StorySection() {
  return (
    <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
            Our Story
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary/80" />
          <p className="mt-4 text-foreground/80 leading-relaxed">
            For generations, Swiss Guest House has been a place of rest and
            connection — welcoming travelers, trekkers, and families to unwind
            in the heart of Bumthang. What began as a humble, family-run lodge
            has grown with care and consistency, rooted in community, good food,
            and genuine Bhutanese–Swiss hospitality.
          </p>
          <p className="mt-3 text-foreground/80 leading-relaxed">
            Whether you’re here to explore sacred monasteries, wander through
            pine forests, or simply slow down and breathe in the mountain air,
            our team is here to make your stay warm, easy, and memorable.
          </p>
        </div>
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg md:max-w-sm md:ml-auto">
          <Image
            src="/about/story.jpg"
            alt="Swiss Guest House interiors"
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
