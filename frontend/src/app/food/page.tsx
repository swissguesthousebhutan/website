import HoursCard from "./components/hours-card";
import ReservationCard from "./components/reservation-card";
import SpecialtiesSection from "./components/specialties-section";

export default function FoodPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 space-y-8">
      <SpecialtiesSection />

      <ReservationCard />
      <HoursCard />
    </section>
  );
}
