import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const languages = [
  ["kh", "ភាសាខ្មែរ"],
] as const;

export const sortedLanguages = [...languages].sort((a, b) =>
  a[0].localeCompare(b[0]),
);

type TranslationResource = Record<string, unknown>;

const localeModules = import.meta.glob<{ default: TranslationResource }>(
  "./locales/*.json",
  {
    eager: true,
  },
);

const resources = Object.fromEntries(
  Object.entries(localeModules).flatMap(([path, module]) => {
    const lang = path.match(/\/([\w-]+)\.json$/)?.[1];
    if (!lang) return [];

    return [[lang, { translation: module.default }]];
  }),
);

i18n
  .use(initReactI18next)
  .init({
    lng: "kh",
    fallbackLng: "kh",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
