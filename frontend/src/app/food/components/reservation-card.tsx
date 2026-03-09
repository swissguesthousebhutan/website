import { Button } from "@/components/ui/button";

export default function ReservationCard() {
  return (
    <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
      <div className="max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
          Make a reservation or ask about the menu
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary/80" />
        <p className="mt-4 text-foreground/80 text-sm md:text-base leading-relaxed">
          To reserve a table or get more information about ingredients, portion
          sizes, and today&apos;s available dishes, call us and we&apos;ll be
          happy to help.
        </p>
        <div className="mt-5">
          <Button asChild>
            <a href="tel:+9753631145">Call +975 3 631 145</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
