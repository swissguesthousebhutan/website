import Hero from "@/app/Home/components/hero";
import Welcome from "@/app/Home/components/welcome";
import Highlights from "@/app/Home/components/highlights";
import FeatureSection from "@/app/Home/components/feature-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Welcome />
      <Highlights />
      <FeatureSection
        id="rooms"
        title="Comfortable Rooms"
        description="Warm wood interiors, fresh linens, and serene garden views make for a restful stay after a day of exploration."
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
        description="Savor Bhutanese flavors prepared with care—from hearty soups to local specialties, served fresh and warm."
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
        description="Perfectly situated in Bumthang to discover monasteries, valleys, and scenic trails—all within easy reach."
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
