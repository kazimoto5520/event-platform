import { en } from "./dictionaries/en";
import { sw } from "./dictionaries/sw";
import { Locale } from "./types";

export type Dictionary = {
  landing: {
    brand: string;
    badgeLeft: string;
    badgeRight: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    bullets: string[];
    ui: {
      theme: string;
      language: string;
      light: string;
      dark: string;
      english: string;
      swahili: string;
    };
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  sw,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}