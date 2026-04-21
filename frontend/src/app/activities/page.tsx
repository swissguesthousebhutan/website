import ActivitiesHero from "@/app/activities/components/activities-hero";
import ActivitiesGrid from "@/app/activities/components/activities-grid";

export default function ActivitiesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 space-y-8">
      <ActivitiesHero />
      <ActivitiesGrid />
    </div>
  );
}
