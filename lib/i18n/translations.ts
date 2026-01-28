import en from "./en.json";
import ar from "./ar.json";
import ru from "./ru.json";
import fr from "./fr.json";
import tr from "./tr.json";

const dictionaries: Record<string, any> = {
  en,
  ar,
  ru,
  fr,
  tr,
};

export function getDictionary(locale: string) {
  return dictionaries[locale] ?? en;
}

export function t(dict: any, path: string): string {
  return path.split(".").reduce((acc, key) => acc?.[key], dict) ?? path;
}
