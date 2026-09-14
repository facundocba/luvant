import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/es";
import { es } from "./dictionaries/es";
import { en } from "./dictionaries/en";

export type { Locale, Dictionary };
export {
  defaultLocale,
  locales,
  pathMap,
  getAlternatePath,
  getLocalePath,
} from "./config";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
