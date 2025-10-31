"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";

export default function Hero() {
  // Images for the hero slideshow. Replace with your real assets in /public.
  const images = useMemo(
    () => [
      // Replace with your real files if names differ
      { src: "/Hompage.png", alt: "Swiss Guest House exterior 1" },
      { src: "/Hero2.png", alt: "Swiss Guest House exterior 2" },
      { src: "/Hero3.png", alt: "Swiss Guest House exterior 3" },
    ],
    []
  );
  const [index, setIndex] = useState(0);
  const displayMs = 4000; // visible time per image

  useEffect(() => {
    if (images.length <= 1) return; // nothing to rotate
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, displayMs);
    return () => clearInterval(id);
  }, [images.length, displayMs]);

  return (
    <section className="relative w-full overflow-hidden border-2 border-primary rounded-lg">
      <div className="relative h-[420px] md:h-[520px]">
        {/* Slideshow layers: keep all images mounted and fade by index */}
        <div className="absolute inset-0">
          {images.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              draggable={false}
              className={`object-cover will-change-[opacity] transition-opacity ease-in duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              sizes="100vw"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-black/10" />
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 md:py-0">
            <div className="max-w-xl text-white">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Swiss Guest House
              </h1>
              <p className="mt-3 text-base md:text-lg text-white/90">
                Cozy rooms, local cuisine, and warm hospitality in Bumthang,
                Bhutan.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Button asChild>
                  <Link href="/rooms">Book a room</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white/70 text-white hover:bg-white/20 transition-colors"
                >
                  <Link
                    href="https://maps.app.goo.gl/EET6hk2y2J2YcGUb8?g_st=ipc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See location
                  </Link>
                </Button>
                <Link
                  href="https://www.facebook.com/share/1Bost5bxeY/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-md border border-white/70 text-white hover:bg-white/20 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/swissguesthouse?igsh=Mmh1N3pocmpub3pn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-md border border-white/70 text-white hover:bg-white/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
