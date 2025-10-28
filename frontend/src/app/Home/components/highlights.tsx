import { Bed, UtensilsCrossed, MapPin } from "lucide-react";
import { FeatureCard } from "@/app/Home/components/feature-card";

export default function Highlights() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-6">
      <div className="grid gap-6 md:grid-cols-3">
        <FeatureCard
          icon={<Bed className="h-5 w-5" />}
          title="Comfortable rooms"
          text="Clean, cozy rooms with warm wood interiors and serene garden views."
          href="#rooms"
        />
        <FeatureCard
          icon={<UtensilsCrossed className="h-5 w-5" />}
          title="Homemade meals"
          text="Enjoy local Bhutanese dishes prepared with care from fresh ingredients."
          href="#meals"
        />
        <FeatureCard
          icon={<MapPin className="h-5 w-5" />}
          title="Great location"
          text="Located in Bumthang—perfect for exploring monasteries, valleys, and trails."
          href="#location"
        />
      </div>
    </section>
  );
}
