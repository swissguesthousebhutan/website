import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 space-y-8">
      <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Booking
          </h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-primary/80" />
          <p className="mt-4 text-foreground/80 text-base md:text-lg leading-relaxed">
            We’re happy to help you reserve a room at Swiss Guest House. Call us
            directly or drop by—we’ll confirm availability and find the best
            option for your stay.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="tel:+97517164119">Call to book</a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/rooms">View rooms</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
