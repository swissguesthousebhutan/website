import RoomCard from "@/app/rooms/components/room-card";
import { Bed, Users, Utensils, Check, Tag } from "lucide-react";

export default function RoomsPage() {
  const rooms = [
    {
      title: "Deluxe Double Room",
      image: "/home/room1.png",
      description:
        "Spacious room with warm wood interiors, a comfortable double bed, and serene garden views.",
      features: [
        { icon: Bed, label: "1 Double Bed" },
        { icon: Users, label: "2 Guests" },
        { icon: Tag, label: "Price: Nu. 3,200 per night" },
        { icon: Utensils, label: "Breakfast included" },
      ],
    },
    {
      title: "Twin Room",
      image: "/home/room1.png",
      description:
        "Cozy twin setup ideal for friends or family, combining comfort with practical space.",
      features: [
        { icon: Bed, label: "2 Single Beds" },
        { icon: Users, label: "2 Guests" },
        { icon: Tag, label: "Price: Nu. 2,800 per night" },
        { icon: Utensils, label: "Breakfast included" },
      ],
    },
    {
      title: "Family Suite",
      image: "/home/room1.png",
      description:
        "A larger room suited for families, with extra seating and flexible bedding options.",
      features: [
        { icon: Bed, label: "Double + Extra Beds" },
        { icon: Users, label: "3–4 Guests" },
        { icon: Tag, label: "Price: Nu. 4,500 per night" },
        { icon: Utensils, label: "Breakfast included" },
      ],
    },
    {
      title: "Standard Single",
      image: "/home/room5.png",
      description:
        "A quiet and comfortable single room for solo travelers seeking value and rest.",
      features: [
        { icon: Bed, label: "1 Single Bed" },
        { icon: Users, label: "1 Guest" },
        { icon: Tag, label: "Price: Nu. 2,000 per night" },
        { icon: Utensils, label: "Breakfast included" },
      ],
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 space-y-8">
      {/* Intro container (separate) */}
      <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Our Rooms
          </h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-primary/80" />
          <p className="mt-4 text-foreground/80 text-base md:text-lg leading-relaxed">
            Step into comfort and calm. Each room at Swiss Guest House is
            designed to make you feel at home — blending Swiss simplicity with
            Bhutanese warmth.
          </p>
        </div>
      </div>

      {/* Grid container (separate) */}
      <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {rooms.map((r) => (
            <RoomCard
              key={r.title}
              title={r.title}
              image={r.image}
              description={r.description}
              features={r.features}
            />
          ))}
        </div>
      </div>

      {/* Amenities container (separate) */}
      <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Room Amenities */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
              Room Amenities
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary/80" />
            <ul className="mt-4 space-y-2 text-foreground/80 text-sm md:text-base">
              {[
                "Free WiFi",
                "Mineral Water",
                "Complementary Tea & Coffee Sachet",
                "Water Kettle",
                "Essentials (Towels, Soap, Shampoo)",
                "Room Heater",
                "Hair Dryer",
                "Room Service until 10:00pm",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hotel Amenities */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
              Hotel Amenities
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary/80" />
            <ul className="mt-4 space-y-2 text-foreground/80 text-sm md:text-base">
              {[
                "Multi-cuisine Restaurant",
                "Bar",
                "Free WiFi",
                "Laundry Service",
                "Airport Transfer (charges apply)",
                "Large Parking Area",
                "Foreign Currency Exchange",
                "Visa Card Accepted",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
