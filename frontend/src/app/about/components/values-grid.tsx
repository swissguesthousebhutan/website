import { Mountain, HeartHandshake, Leaf } from "lucide-react";

export default function ValuesGrid() {
  const values = [
    {
      icon: Mountain,
      title: "Nature & calm",
      text: "Quiet spaces, mountain air, and rooms designed to help you unwind.",
    },
    {
      icon: HeartHandshake,
      title: "Warm hospitality",
      text: "Simple, genuine service—like welcoming a friend back home.",
    },
    {
      icon: Leaf,
      title: "Simple, good food",
      text: "Homemade meals crafted with local ingredients and care.",
    },
  ];

  return (
    <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
        What we value
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-primary/80" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-lg border border-border bg-background/60 p-5"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-md bg-primary/10 text-primary p-2">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="mt-1 text-sm text-foreground/80">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
