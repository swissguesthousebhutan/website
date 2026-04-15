import { CalendarCheck } from "lucide-react";

export default function BookingHero() {
  return (
    <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
      <div className="max-w-3xl flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
            <CalendarCheck className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Book Your Stay
            </h1>
            <div className="mt-1 h-1 w-16 rounded-full bg-primary/80" />
          </div>
        </div>
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
          Reserve your stay at Swiss Guest House by calling us directly or
          reaching out on our social pages. Send us your travel dates and group
          size, and we&apos;ll confirm availability as soon as possible.
        </p>
      </div>
    </div>
  );
}
