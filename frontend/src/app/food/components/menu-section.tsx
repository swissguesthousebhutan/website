import { Utensils, Leaf } from "lucide-react";

export default function MenuSection() {
  const swiss = [
    { name: "Fondue", desc: "Classic Swiss cheese fondue with bread." },
    {
      name: "Raclette",
      desc: "Melted cheese served with potatoes and pickles.",
    },
    { name: "Bratwurst", desc: "Grilled sausage with mustard and sides." },
    { name: "Rösti", desc: "Crispy Swiss potato pancake." },
    { name: "Züri Gschnätzlets", desc: "Creamy sliced meat, Zurich-style." },
  ];

  const bhutanese = [
    { name: "Ema Datshi", desc: "Chili and cheese stew—a Bhutanese classic." },
    { name: "Shakam Datshi", desc: "Dried beef with cheese sauce." },
    { name: "Kewa Datshi", desc: "Potato and cheese curry." },
    { name: "Red Rice", desc: "Nutty Bhutanese red rice." },
    { name: "Momos", desc: "Steamed dumplings with dipping sauce." },
  ];

  return (
    <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
        Our Menu
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-primary/80" />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-primary/10 text-primary p-2">
              <Utensils className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="font-medium">Swiss Specialties</h3>
          </div>
          <ul className="mt-3 space-y-2 text-foreground/80 text-sm md:text-base">
            {swiss.map((i) => (
              <li key={i.name} className="">
                <span className="font-medium">{i.name}</span>
                <span className="block text-foreground/70 text-sm">
                  {i.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-primary/10 text-primary p-2">
              <Leaf className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="font-medium">Bhutanese Favorites</h3>
          </div>
          <ul className="mt-3 space-y-2 text-foreground/80 text-sm md:text-base">
            {bhutanese.map((i) => (
              <li key={i.name} className="">
                <span className="font-medium">{i.name}</span>
                <span className="block text-foreground/70 text-sm">
                  {i.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 text-sm text-foreground/70">
        Note: Menu varies by season and availability.
      </p>
    </div>
  );
}
