import Image from "next/image";
import { Flame, Mountain, Landmark, Clock3, Beer } from "lucide-react";
import { Card } from "@/components/ui/card";

type ActivityCardProps = {
  title:
    | "Bonfire"
    | "Bushman Trail"
    | "Visit Kharchu Dratshang"
    | "Visit Red Panda Brewery";
  image: string;
  imageAlt: string;
  description: string;
  bestTime: string;
  reverse?: boolean;
};

const activityIcon = {
  Bonfire: Flame,
  "Bushman Trail": Mountain,
  "Visit Kharchu Dratshang": Landmark,
  "Visit Red Panda Brewery": Beer,
};

export default function ActivityCard({
  title,
  image,
  imageAlt,
  description,
  bestTime,
  reverse = false,
}: ActivityCardProps) {
  const Icon = activityIcon[title];

  return (
    <Card className="p-3 md:p-4 transition-shadow hover:shadow-md">
      <div
        className={`grid grid-cols-1 ${
          reverse ? "md:grid-cols-[7fr_3fr]" : "md:grid-cols-[3fr_7fr]"
        } gap-3 md:gap-4 items-center`}
      >
        <div className={`${reverse ? "md:order-2" : "md:order-1"}`}>
          <div className="group relative aspect-video rounded-lg overflow-hidden border border-border bg-white shadow-sm md:hover:shadow-md transition-shadow">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              priority={false}
            />
          </div>
        </div>

        <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
          <div className="pb-1.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <h3 className="text-primary text-lg font-semibold tracking-tight mt-2">
              {title}
            </h3>
          </div>

          <div>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              {description}
            </p>
            <p className="mt-2.5 inline-flex items-center gap-2 text-sm font-medium text-foreground/70">
              <Clock3 className="h-4 w-4" aria-hidden />
              Best time: {bestTime}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
