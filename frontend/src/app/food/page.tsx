import Image from "next/image";
import HoursCard from "./components/hours-card";
import ReservationCard from "./components/reservation-card";

export default function FoodPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 space-y-8">
      {/* Intro */}
      <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary text-center md:text-left">
            Our Specialties
          </h1>
          <p className="mt-3 text-foreground/80 text-sm md:text-base leading-relaxed text-center md:text-left max-w-2xl">
            A few of the dishes guests love most at Swiss Guest House.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-4 gap-x-0">
            {/* Fondue card */}
            <div className="px-1.5 md:px-2">
              <div className="rounded-lg border-2 border-primary bg-white shadow-sm md:hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                <div className="group relative aspect-4/3 overflow-hidden border-b border-border">
                  <Image
                    src="/home/food1.jpg"
                    alt="Cheese fondue at Swiss Guest House"
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    priority
                  />
                </div>
                <div className="px-4 py-4 text-center">
                  <h2 className="text-lg font-semibold tracking-tight text-primary">
                    Cheese fondue
                  </h2>
                  <p className="mt-2 text-foreground/80 text-sm leading-relaxed">
                    Classic Swiss fondue to share – bubbling cheese with bread
                    in our cosy dining room.
                  </p>
                </div>
              </div>
            </div>

            {/* Raclette card */}
            <div className="px-1.5 md:px-2">
              <div className="rounded-lg border-2 border-primary bg-white shadow-sm md:hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                <div className="group relative aspect-4/3 overflow-hidden border-b border-border">
                  <Image
                    src="/home/food2.jpg"
                    alt="Raclette at Swiss Guest House"
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    priority={false}
                  />
                </div>
                <div className="px-4 py-4 text-center">
                  <h2 className="text-lg font-semibold tracking-tight text-primary">
                    Raclette
                  </h2>
                  <p className="mt-2 text-foreground/80 text-sm leading-relaxed">
                    Melted raclette cheese with potatoes and pickles – perfect
                    after a cool Bumthang day.
                  </p>
                </div>
              </div>
            </div>

            {/* Breakfast card */}
            <div className="px-1.5 md:px-2">
              <div className="rounded-lg border-2 border-primary bg-white shadow-sm md:hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                <div className="group relative aspect-4/3 overflow-hidden border-b border-border">
                  <Image
                    src="/home/food3.jpg"
                    alt="Swiss breakfast at Swiss Guest House"
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    priority={false}
                  />
                </div>
                <div className="px-4 py-4 text-center">
                  <h2 className="text-lg font-semibold tracking-tight text-primary">
                    Swiss breakfast
                  </h2>
                  <p className="mt-2 text-foreground/80 text-sm leading-relaxed">
                    Our special breakfast with homemade bread, cheese, jam and
                    fresh coffee to start your day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HoursCard />
      <ReservationCard />
    </section>
  );
}
