import { en } from "./dictionaries/en";
import { sw } from "./dictionaries/sw";
import { Locale } from "./types";

export const dictionaries = {
  en: en,
  sw: sw,
} as const;

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
