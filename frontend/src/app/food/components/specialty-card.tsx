import Image from "next/image";

type SpecialtyCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
};

export default function SpecialtyCard({
  title,
  description,
  imageSrc,
  imageAlt,
  priority = false,
}: SpecialtyCardProps) {
  return (
    <div className="px-1.5 md:px-2">
      <div className="rounded-lg border-2 border-primary bg-white shadow-sm md:hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
        <div className="group relative aspect-4/3 overflow-hidden border-b border-border">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            priority={priority}
          />
        </div>
        <div className="px-4 py-4 text-center">
          <h2 className="text-lg font-semibold tracking-tight text-primary">
            {title}
          </h2>
          <p className="mt-2 text-foreground/80 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
