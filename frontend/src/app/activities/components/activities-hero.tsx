export default function ActivitiesHero() {
  return (
    <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
          Activities
        </h1>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary/80" />
        <p className="mt-4 text-foreground/80 text-base md:text-lg leading-relaxed">
          Explore the valley through cultural visits, forest trails, and warm
          evenings at <span className="notranslate">Swiss Guest House</span>.
        </p>
      </div>
    </div>
  );
}
