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
                    A classic Swiss melted-cheese pot for sharing. You get warm
                    fondue with bread cubes, boiled potatoes, and pickled
                    vegetables for dipping.
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
                    Traditional raclette with hot, melted Alpine cheese. You get
                    cheese scraped over baby potatoes, pickles, pearl onions,
                    and rustic bread.
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
                    A hearty Swiss-style morning set. You get homemade bread,
                    local cheese, seasonal fruit, house jam, eggs, and fresh
                    coffee or tea.
                  </p>
                </div>
              </div>
            </div>

            {/* Red panda card */}
            <div className="px-1.5 md:px-2">
              <div className="rounded-lg border-2 border-primary bg-white shadow-sm md:hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                <div className="group relative aspect-4/3 overflow-hidden border-b border-border">
                  <Image
                    src="/home/food4.jpg"
                    alt="Red Panda beer at Swiss Guest House"
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    priority={false}
                  />
                </div>
                <div className="px-4 py-4 text-center">
                  <h2 className="text-lg font-semibold tracking-tight text-primary">
                    Red panda
                  </h2>
                  <p className="mt-2 text-foreground/80 text-sm leading-relaxed">
                    A local Red Panda beer with a clean, crisp finish. You get
                    one chilled bottle served with a cold glass and light snack
                    bites.
                  </p>
                </div>
              </div>
            </div>

            {/* Swiss cheese gouda card */}
            <div className="px-1.5 md:px-2">
              <div className="rounded-lg border-2 border-primary bg-white shadow-sm md:hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                <div className="group relative aspect-4/3 overflow-hidden border-b border-border">
                  <Image
                    src="/home/food2.jpg"
                    alt="Swiss cheese at Swiss Guest House"
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    priority={false}
                  />
                </div>
                <div className="px-4 py-4 text-center">
                  <h2 className="text-lg font-semibold tracking-tight text-primary">
                    Swiss cheese
                  </h2>
                  <p className="mt-2 text-foreground/80 text-sm leading-relaxed">
                    A classic Swiss cheese plate with mild and aged selections.
                    You get sliced cheese with crusty bread, dried fruits, and
                    house pickles.
                  </p>
                </div>
              </div>
            </div>

            {/* Bratwurst card */}
            <div className="px-1.5 md:px-2">
              <div className="rounded-lg border-2 border-primary bg-white shadow-sm md:hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                <div className="group relative aspect-4/3 overflow-hidden border-b border-border">
                  <Image
                    src="/home/food3.jpg"
                    alt="Bratwurst at Swiss Guest House"
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    priority={false}
                  />
                </div>
                <div className="px-4 py-4 text-center">
                  <h2 className="text-lg font-semibold tracking-tight text-primary">
                    Bratwurst
                  </h2>
                  <p className="mt-2 text-foreground/80 text-sm leading-relaxed">
                    A grilled Swiss-German style bratwurst sausage. You get one
                    large bratwurst with mustard, sauteed onions, roasted
                    potatoes, and a fresh side salad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReservationCard />
      <HoursCard />
    </section>
  );
}
