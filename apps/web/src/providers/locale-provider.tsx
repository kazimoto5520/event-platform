"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getDictionary, type Dictionary, type Locale } from "@event-platform/locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readCookieLocale(): Locale | null {
  const cookieLocale = document.cookie
    .split("; ")
    .find((row) => row.startsWith("locale="))
    ?.split("=")[1];

  if (cookieLocale === "en" || cookieLocale === "sw") return cookieLocale;
  return null;
}

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(() => {
    // Only runs on client
    if (typeof document === "undefined") return initialLocale;
    return readCookieLocale() ?? initialLocale;
  });

  // Persist to cookie when changed
  useEffect(() => {
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
  }, [locale]);

  const t = useMemo(() => getDictionary(locale), [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
