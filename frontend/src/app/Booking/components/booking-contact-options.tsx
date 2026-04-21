import Link from "next/link";
import { Phone, Facebook, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactCards = [
  {
    title: "Call Us (Mobile)",
    description: "Fastest way to book — call our mobile number directly.",
    icon: Phone,
    href: "tel:+97517164119",
    label: "+975 17 164 119",
    external: false,
  },
  {
    title: "Call Us (Telephone)",
    description: "Reach us on our landline during business hours.",
    icon: Phone,
    href: "tel:+9753631145",
    label: "+975 3 631 145",
    external: false,
  },
  {
    title: "Facebook",
    description:
      "Send us a message on Facebook with your dates and group size.",
    icon: Facebook,
    href: "https://www.facebook.com/share/1Bost5bxeY/?mibextid=wwXIfr",
    label: "Message on Facebook",
    external: true,
  },
  {
    title: "Instagram",
    description: "DM us on Instagram for room requests and availability.",
    icon: Instagram,
    href: "https://www.instagram.com/swissguesthouse?igsh=Mmh1N3pocmpub3pn",
    label: "Message on Instagram",
    external: true,
  },
  {
    title: "Email",
    description: "Send us an email with your booking details.",
    icon: Mail,
    href: "mailto:swissguesthouse@yahoo.com",
    label: "swissguesthouse@yahoo.com",
    external: false,
  },
];

export default function BookingContactOptions() {
  return (
    <div className="space-y-6">
      <div className="px-1">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
          Get in Touch to Book
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary/80" />
        <p className="mt-3 text-foreground/80 text-sm md:text-base leading-relaxed max-w-2xl">
          Pick whichever method suits you best. We usually reply within a few
          hours or days.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactCards.map((card) => {
          const Icon = card.icon;
          const linkProps = card.external
            ? { target: "_blank" as const, rel: "noopener noreferrer" }
            : {};

          return (
            <div
              key={card.title}
              className="group rounded-xl border border-border bg-secondary/30 p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                {card.description}
              </p>
              <div className="mt-4">
                <Button asChild size="sm" variant="outline" className="w-full">
                  {card.external ? (
                    <Link href={card.href} {...linkProps}>
                      {card.label}
                    </Link>
                  ) : (
                    <a href={card.href} {...linkProps}>
                      {card.label}
                    </a>
                  )}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
