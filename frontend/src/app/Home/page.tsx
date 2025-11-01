import Hero from "@/app/Home/components/hero";
import Welcome from "@/app/Home/components/welcome";
import Highlights from "@/app/Home/components/highlights";
import FeatureSection from "@/app/Home/components/feature-section";
import EndMessage from "@/app/Home/components/end-message";
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
          { src: "/home/room1.jpg", alt: "Room photo 1" },
          { src: "/home/room2.jpg", alt: "Room photo 2" },
          { src: "/home/room3.jpg", alt: "Room photo 3" },
          { src: "/home/room4.jpg", alt: "Room photo 4" },
        ]}
      />
      <FeatureSection
        id="meals"
        title="Homemade Meals"
        description="Taste the world at our table — from comforting Bhutanese dishes to flavorful Indian curries and classic Swiss recipes, all cooked with love and served fresh from our kitchen."
        icon={UtensilsCrossed}
        images={[
          { src: "/home/food1.jpg", alt: "Meal photo 1" },
          { src: "/home/food2.jpg", alt: "Meal photo 2" },
          { src: "/home/food3.jpg", alt: "Meal photo 3" },
          { src: "/home/food4.jpg", alt: "Meal photo 4" },
        ]}
        reverse
      />
      <FeatureSection
        id="location"
        title="Great Location"
        description="Wake up surrounded by the beauty of Bumthang — from ancient monasteries to serene valleys and mountain paths waiting to be explored, all within easy reach."
        icon={MapPin}
        images={[
          { src: "/home/loca1.jpg", alt: "Location photo 1" },
          { src: "/home/loca2.jpg", alt: "Location photo 2" },
          { src: "/home/loca3.jpg", alt: "Location photo 3" },
          { src: "/home/loca4.jpg", alt: "Location photo 4" },
        ]}
      />
      <EndMessage />
    </div>
  );
}
