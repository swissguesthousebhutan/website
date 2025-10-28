"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Lang = "en" | "de";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang") as Lang | null;
      return stored ?? "en";
    }
    return "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
      document.documentElement.setAttribute("data-lang", lang);
    }
  }, [lang]);

  return (
    <div className="flex items-center gap-1">
      <Button
        type="button"
        size="sm"
        variant={lang === "en" ? "default" : "outline"}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
        className="px-3"
        title="Switch to English"
      >
        EN
      </Button>
      <Button
        type="button"
        size="sm"
        variant={lang === "de" ? "default" : "outline"}
        aria-pressed={lang === "de"}
        onClick={() => setLang("de")}
        className="px-3"
        title="Auf Deutsch umschalten"
      >
        DE
      </Button>
    </div>
  );
}
