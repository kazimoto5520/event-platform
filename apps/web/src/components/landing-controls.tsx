"use client";

import { useEffect, useMemo, useState } from "react";

type Lang = "en" | "sw";
type Theme = "light" | "dark";

const COPY = {
  en: {
    product: "Event Platform",
    headline: "Secure event entry with QR validation.",
    sub: "Create events, issue invitations, and scan guests with audit-grade tracking.",
    primary: "Get started",
    secondary: "Login",
    bullets: ["Roles: Admin • Organizer • Scanner", "Invitations: VIP / Regular / Staff", "Scan-safe: duplicate detection + logs"],
    theme: "Theme",
    language: "Language",
    light: "Light",
    dark: "Dark",
    english: "English",
    swahili: "Swahili",
  },
  sw: {
    product: "Event Platform",
    headline: "Uthibitishaji salama wa kuingia kwa QR.",
    sub: "Tengeneza matukio, toa mialiko, na skani wageni kwa ufuatiliaji wa kumbukumbu.",
    primary: "Anza",
    secondary: "Ingia",
    bullets: ["Majukumu: Admin • Organizer • Scanner", "Mialiko: VIP / Regular / Staff", "Skani salama: kuzuia marudio + kumbukumbu"],
    theme: "Mandhari",
    language: "Lugha",
    light: "Mwanga",
    dark: "Giza",
    english: "Kiingereza",
    swahili: "Kiswahili",
  },
} as const;

function setHtmlTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export default function LandingControls() {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLang] = useState<Lang>("en");

  // init from localStorage
  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme | null) ?? "light";
    const savedLang = (localStorage.getItem("lang") as Lang | null) ?? "en";
    setTheme(savedTheme);
    setLang(savedLang);
    setHtmlTheme(savedTheme);
  }, []);

  // persist theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    setHtmlTheme(theme);
  }, [theme]);

  // persist lang
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => COPY[lang], [lang]);

  return (
    <div className="flex items-center gap-2">
      {/* Theme toggle */}
      <div className="flex items-center rounded-full border border-black/15 bg-white px-1 py-1 text-xs dark:border-white/15 dark:bg-black">
        <button
          onClick={() => setTheme("light")}
          className={`rounded-full px-3 py-1 ${
            theme === "light"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
          }`}
        >
          {t.light}
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`rounded-full px-3 py-1 ${
            theme === "dark"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
          }`}
        >
          {t.dark}
        </button>
      </div>

      {/* Language toggle */}
      <div className="flex items-center rounded-full border border-black/15 bg-white px-1 py-1 text-xs dark:border-white/15 dark:bg-black">
        <button
          onClick={() => setLang("en")}
          className={`rounded-full px-3 py-1 ${
            lang === "en"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("sw")}
          className={`rounded-full px-3 py-1 ${
            lang === "sw"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
          }`}
        >
          SW
        </button>
      </div>
    </div>
  );
}
