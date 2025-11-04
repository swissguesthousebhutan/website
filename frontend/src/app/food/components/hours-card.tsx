import { Clock } from "lucide-react";

export default function HoursCard() {
  return (
    <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
        Opening Hours
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-primary/80" />
      <ul className="mt-4 space-y-2 text-foreground/80 text-sm md:text-base">
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" aria-hidden />
          <span>Open daily: 7:00am – 10:00pm</span>
        </li>
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" aria-hidden />
          <span>Lunch: 12:00pm – 2:30pm</span>
        </li>
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" aria-hidden />
          <span>Dinner: 6:00pm – 9:30pm</span>
        </li>
      </ul>
      <p className="mt-3 text-xs text-foreground/60">
        Times may vary slightly by season or events.
      </p>
    </div>
  );
}
