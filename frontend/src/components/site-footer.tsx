import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-background text-foreground mt-12 border-t border-primary">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 grid gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-foreground/90">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden />
              <span>
                <span className="font-medium">Telephone:</span>{" "}
                <a
                  href="tel:+9753631145"
                  className="underline-offset-2 hover:underline"
                >
                  +975 3 631 145
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden />
              <span>
                <span className="font-medium">Mobile:</span>{" "}
                <a
                  href="tel:+97517164119"
                  className="underline-offset-2 hover:underline"
                >
                  +975 17 164 119
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden />
              <span>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:swissguesthouse@yahoo.com"
                  className="underline-offset-2 hover:underline"
                >
                  swissguesthouse@yahoo.com
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden />
              <span>
                <span className="font-medium">Address:</span> Swiss Guesthouse,
                Kharsumphe, Bumthang 32001, Bhutan
              </span>
            </li>
          </ul>
          <div className="mt-3 flex items-center gap-3">
            <Link
              aria-label="Facebook"
              href="#"
              className="p-2 rounded-md border border-current hover:bg-foreground/10"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              aria-label="Instagram"
              href="#"
              className="p-2 rounded-md border border-current hover:bg-foreground/10"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-primary">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 text-xs text-foreground/80">
          © {new Date().getFullYear()} Swiss Guest House Bhutan. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
