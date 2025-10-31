"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/language-switcher";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetClose,
} from "@/components/ui/sheet";

export default function SiteNavbar() {
  const navItems = [
    { href: "/Home", label: "Home" },
    { href: "/rooms", label: "Rooms" },
    { href: "/food", label: "Foods" },
    { href: "/picture", label: "Pictures" },
    { href: "/activities", label: "Activities" },
    { href: "/about", label: "About us" },
  ];

  return (
    <header className="sticky top-0 z-100 bg-background text-foreground border-b-2 border-primary rounded-b-lg">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link
            href="/Home"
            className="flex items-center gap-2 font-bold text-2xl"
          >
            <Image
              src="/logo.svg"
              alt="Swiss Guest House logo"
              width={28}
              height={28}
              className=""
              priority
            />
            <span className="tracking-tight text-primary">
              Swiss Guest House
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-base">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-bold text-foreground/90 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu using Sheet */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <SheetHeader className="flex items-center gap-2">
                  <Image
                    src="/logo.svg"
                    alt="Swiss Guest House logo"
                    width={20}
                    height={20}
                    className=""
                    priority
                  />
                  <span className="font-bold text-xl text-primary">
                    Swiss Guest House
                  </span>
                </SheetHeader>
                <SheetBody className="flex-1 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="py-2 font-bold text-base text-foreground/90 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <div className="pt-3">
                    <LanguageSwitcher />
                  </div>
                  {/* Removed phone button from mobile menu */}
                </SheetBody>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
