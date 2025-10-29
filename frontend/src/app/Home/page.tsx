import Hero from "@/app/Home/components/hero";
import Welcome from "@/app/Home/components/welcome";
import Highlights from "@/app/Home/components/highlights";
import FeatureSection from "@/app/Home/components/feature-section";
import { Bed, UtensilsCrossed, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Welcome />
      <Highlights />
      <FeatureSection
        id="rooms"
        title="Comfortable Rooms"
        description="Relax in rooms that blend Swiss charm with Bhutanese warmth — featuring wooden interiors, soft linens, and tranquil garden views for a truly restful stay."
        icon={Bed}
        images={[
          { src: "/Hompage.png", alt: "Room photo 1" },
          { src: "/Hompage.png", alt: "Room photo 2" },
          { src: "/Hompage.png", alt: "Room photo 3" },
          { src: "/Hompage.png", alt: "Room photo 4" },
          { src: "/Hompage.png", alt: "Room photo 5" },
        ]}
      />
      <FeatureSection
        id="meals"
        title="Homemade Meals"
        description="Taste the world at our table — from comforting Bhutanese dishes to flavorful Indian curries and classic Swiss recipes, all cooked with love and served fresh from our kitchen."
        icon={UtensilsCrossed}
        images={[
          { src: "/Hompage.png", alt: "Meal photo 1" },
          { src: "/Hompage.png", alt: "Meal photo 2" },
          { src: "/Hompage.png", alt: "Meal photo 3" },
          { src: "/Hompage.png", alt: "Meal photo 4" },
          { src: "/Hompage.png", alt: "Meal photo 5" },
        ]}
        reverse
      />
      <FeatureSection
        id="location"
        title="Great Location"
        description="Wake up surrounded by the beauty of Bumthang — from ancient monasteries to serene valleys and mountain paths waiting to be explored, all within easy reach."
        icon={MapPin}
        images={[
          { src: "/Hompage.png", alt: "Location photo 1" },
          { src: "/Hompage.png", alt: "Location photo 2" },
          { src: "/Hompage.png", alt: "Location photo 3" },
          { src: "/Hompage.png", alt: "Location photo 4" },
          { src: "/Hompage.png", alt: "Location photo 5" },
        ]}
      />
    </div>
  );
}
