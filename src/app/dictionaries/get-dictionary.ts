import "server-only";

import type plDict from "./pl.json";

const dictionaries = {
  pl: () =>
    import("./pl.json").then((module) => module.default as typeof plDict),
  en: () =>
    import("./en.json").then((module) => module.default as typeof plDict),
};

export const getDictionary = async (
  locale: "pl" | "en",
): Promise<typeof plDict> => {
  return dictionaries[locale]?.() ?? dictionaries.pl();
};
