"use client";

import { useEffect, useCallback, useSyncExternalStore } from "react";
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

/** Read the current language from the googtrans cookie. */
function readLangFromCookie(): Lang {
  const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
  if (match && match[1] === "de") return "de";
  return "en";
}

/**
 * Google Translate sets the googtrans cookie at both the path=/ level and the
 * domain level. We must clear both for a language switch to stick.
 */
function setGoogleCookies(nextLang: Lang) {
  const value = nextLang === "de" ? "/en/de" : "";
  const host = window.location.hostname;

  // Clear / set at path level
  if (value) {
    document.cookie = `googtrans=${value};path=/`;
  } else {
    document.cookie = "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }

  // Clear / set at domain level (covers .example.com variants)
  if (host) {
    if (value) {
      document.cookie = `googtrans=${value};path=/;domain=${host}`;
    } else {
      document.cookie = `googtrans=;path=/;domain=${host};expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    }
  }
}

// Subscribe / getSnapshot for useSyncExternalStore so lang tracks the cookie
// without hydration mismatch or synchronous setState in an effect.
const langListeners = new Set<() => void>();
function subscribeLang(cb: () => void) {
  langListeners.add(cb);
  return () => {
    langListeners.delete(cb);
  };
}
function getLangSnapshot(): Lang {
  return readLangFromCookie();
}
function getLangServerSnapshot(): Lang {
  return "en";
}
/** Notify subscribers so useSyncExternalStore picks up the new cookie value. */
function notifyLangChange() {
  langListeners.forEach((cb) => cb());
}

export default function LanguageSwitcher() {
  const lang = useSyncExternalStore(
    subscribeLang,
    getLangSnapshot,
    getLangServerSnapshot,
  );

  const triggerCombo = useCallback((targetLang: Lang): boolean => {
    const combo = document.querySelector(
      ".goog-te-combo",
    ) as HTMLSelectElement | null;
    if (!combo) return false;

    combo.value = targetLang;
    combo.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  }, []);

  /** Try to click Google Translate's hidden "Show original" restore banner. */
  const tryRestoreOriginal = useCallback((): boolean => {
    // Google injects an iframe banner with a "Show original" button
    const banner = document.querySelector(
      ".goog-te-banner-frame",
    ) as HTMLIFrameElement | null;
    if (banner?.contentDocument) {
      const btn = banner.contentDocument.querySelector(
        "button.goog-te-banner-frame-close, .goog-close-link",
      ) as HTMLElement | null;
      if (btn) {
        btn.click();
        return true;
      }
    }
    return false;
  }, []);

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

  const applyLanguage = useCallback(
    (nextLang: Lang) => {
      // Avoid re-applying if already in the target language
      if (nextLang === lang) return;

      setGoogleCookies(nextLang);
      notifyLangChange();

      if (nextLang === "en") {
        // Switching back to English: try combo, then restore banner, then reload
        if (triggerCombo("en")) return;
        if (tryRestoreOriginal()) return;

        // Last resort: reload clears the Google Translate DOM state
        window.location.reload();
        return;
      }

      // Switching to German
      if (triggerCombo("de")) return;

      // Retry until the widget is ready (first load can be slow)
      let attempts = 0;
      const retry = () => {
        attempts += 1;
        if (triggerCombo("de") || attempts >= 30) return;
        window.setTimeout(retry, 100);
      };
      window.setTimeout(retry, 100);
    },
    [lang, triggerCombo, tryRestoreOriginal],
  );

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
