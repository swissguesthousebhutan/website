"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Lang = "en" | "de";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string,
        ) => unknown;
      };
    };
  }
}

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<Lang>("en");

  const setTranslateCookie = (nextLang: Lang) => {
    const cookieValue = nextLang === "de" ? "/en/de" : "/en/en";
    document.cookie = `googtrans=${cookieValue};path=/`;
  };

  const applyToGoogleCombo = (nextLang: Lang) => {
    const combo = document.querySelector(
      ".goog-te-combo",
    ) as HTMLSelectElement | null;

    if (!combo) return false;

    combo.value = nextLang;
    combo.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  };

  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (
        window.google?.translate?.TranslateElement &&
        !document.querySelector("#google_translate_element .goog-te-gadget")
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,de",
            autoDisplay: false,
          },
          "google_translate_element",
        );
      }
    };

    window.googleTranslateElementInit = initializeGoogleTranslate;

    if (window.google?.translate?.TranslateElement) {
      initializeGoogleTranslate();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (window.googleTranslateElementInit === initializeGoogleTranslate) {
        delete window.googleTranslateElementInit;
      }
    };
  }, []);

  const applyLanguage = (nextLang: Lang) => {
    setLang(nextLang);
    setTranslateCookie(nextLang);

    if (applyToGoogleCombo(nextLang)) return;

    // Google widget can be late on first click. Retry briefly so one tap works.
    let attempts = 0;
    const maxAttempts = 20;

    const retry = () => {
      attempts += 1;
      if (applyToGoogleCombo(nextLang) || attempts >= maxAttempts) return;
      window.setTimeout(retry, 120);
    };

    window.setTimeout(retry, 120);
  };

  return (
    <div className="notranslate flex items-center gap-1" translate="no">
      <div
        id="google_translate_element"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      />
      <Button
        type="button"
        size="sm"
        variant={lang === "en" ? "default" : "outline"}
        aria-pressed={lang === "en"}
        onClick={() => applyLanguage("en")}
        className="px-3"
        title="Switch to English"
      >
        <span className="notranslate" translate="no">
          EN
        </span>
      </Button>
      <Button
        type="button"
        size="sm"
        variant={lang === "de" ? "default" : "outline"}
        aria-pressed={lang === "de"}
        onClick={() => applyLanguage("de")}
        className="px-3"
        title="Auf Deutsch umschalten"
      >
        <span className="notranslate" translate="no">
          DE
        </span>
      </Button>
    </div>
  );
}
