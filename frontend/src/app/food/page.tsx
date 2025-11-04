import MenuSection from "./components/menu-section";
import HoursCard from "./components/hours-card";
import ReservationCard from "./components/reservation-card";

export default function FoodPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 space-y-8">
      {/* Intro */}
      <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Our Food
          </h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-primary/80" />
          <p className="mt-4 text-foreground/80 text-base md:text-lg leading-relaxed">
            Enjoy homemade Swiss and Bhutanese dishes prepared with local
            ingredients, served in a warm, relaxed setting.
          </p>
        </div>
      </div>

      <MenuSection />
      <HoursCard />
      <ReservationCard />
    </section>
  );
}
