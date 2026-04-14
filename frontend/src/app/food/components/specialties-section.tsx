import SpecialtyCard from "./specialty-card";

const specialties = [
  {
    title: "Cheese fondue",
    description:
      "A classic Swiss melted-cheese pot for sharing. You get warm fondue with bread cubes, boiled potatoes, and pickled vegetables for dipping.",
    imageSrc: "/food/Fondue.jpeg",
    imageAlt: "Cheese fondue at Swiss Guest House",
    priority: true,
  },
  {
    title: "Raclette",
    description:
      "Traditional raclette with hot, melted Alpine cheese. You get cheese scraped over baby potatoes, pickles, pearl onions, and rustic bread.",
    imageSrc: "/food/Raclette.jpeg",
    imageAlt: "Raclette at Swiss Guest House",
  },
  {
    title: "Swiss breakfast",
    description:
      "A hearty Swiss-style morning set. You get homemade bread, local cheese, seasonal fruit, house jam, eggs, and fresh coffee or tea.",
    imageSrc: "/home/food3.jpg",
    imageAlt: "Swiss breakfast at Swiss Guest House",
  },
  {
    title: "Swiss cheese",
    description:
      "A classic Swiss cheese plate with mild and aged selections. You get sliced cheese with crusty bread, and house pickles.",
    imageSrc: "/food/Cheese.jpg",
    imageAlt: "Swiss cheese at Swiss Guest House",
  },
  {
    title: "Bratwurst",
    description:
      "A grilled Swiss-German style bratwurst sausage. You get one large bratwurst with mustard, sauteed onions, roasted potatoes, and a fresh side salad.",
    imageSrc: "/food/Bratwurst.jpg",
    imageAlt: "Bratwurst at Swiss Guest House",
  },
  {
    title: "Baguette bread",
    description:
      "A crisp, golden baguette with a chewy crust and soft center, baked daily in a classic rustic style.",
    imageSrc: "/food/Baguette.jpeg",
    imageAlt: "Baguette bread at Swiss Guest House",
  },
  {
    title: "Croissant",
    description:
      "A buttery, flaky croissant baked fresh each morning with a light golden crust and soft, airy layers.",
    imageSrc: "/food/Croissant.jpeg",
    imageAlt: "Fresh croissant at Swiss Guest House",
  },
  {
    title: "Red panda",
    description: "A local Red Panda beer with a clean, crisp finish.",
    imageSrc: "/food/redpanda.jpg",
    imageAlt: "Red Panda beer at Swiss Guest House",
  },
];

export default function SpecialtiesSection() {
  return (
    <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary text-center md:text-left">
          Our Specialties
        </h1>
        <p className="mt-3 text-foreground/80 text-sm md:text-base leading-relaxed text-center md:text-left max-w-2xl">
          A few of the dishes guests love most at Swiss Guest House.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-4 gap-x-0">
          {specialties.map((specialty) => (
            <SpecialtyCard
              key={specialty.title}
              title={specialty.title}
              description={specialty.description}
              imageSrc={specialty.imageSrc}
              imageAlt={specialty.imageAlt}
              priority={specialty.priority}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
