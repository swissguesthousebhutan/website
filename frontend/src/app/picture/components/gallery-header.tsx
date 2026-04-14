type GalleryHeaderProps = {
  title: string;
  subtitle: string;
};

export default function GalleryHeader({ title, subtitle }: GalleryHeaderProps) {
  return (
    <div className="rounded-2xl border border-border/60 bg-linear-to-br from-secondary/45 via-secondary/30 to-background p-6 shadow-sm md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
        {title}
      </h1>
      <div className="mt-2 h-1 w-16 rounded-full bg-primary/80" />
      <p className="mt-4 text-sm text-foreground/75 md:text-base">{subtitle}</p>
    </div>
  );
}
