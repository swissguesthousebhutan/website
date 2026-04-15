import BookingHero from "@/app/Booking/components/booking-hero";
import BookingContactOptions from "@/app/Booking/components/booking-contact-options";

export default function BookingPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 space-y-8">
      <BookingHero />
      <BookingContactOptions />
    </section>
  );
}
