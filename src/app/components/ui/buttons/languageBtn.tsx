"use client";

import { usePathname, useRouter } from "next/navigation";

const LOCALES = [
  { code: "pl", label: "Polski" },
  { code: "en", label: "English" },
] as const;

type Locale = (typeof LOCALES)[number]["code"];

export default function LanguageBtn() {
  const pathname = usePathname();
  const router = useRouter();
  const current: Locale = pathname.split("/")[1] === "en" ? "en" : "pl";
  const index = current === "en" ? 1 : 0;

  const go = (lang: Locale) => {
    if (lang === current) return;

    const parts = pathname.split("/");
    parts[1] = lang;
    router.push(parts.join("/"));
  };

  return (
    <div
      role="group"
      aria-label="Language"
      className="relative h-8 w-[4.75rem] rounded-full border border-white/15 bg-white/[0.04] p-0.5"
    >
      <div className="relative grid h-full grid-cols-2">
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-1/2 overflow-hidden rounded-full bg-white"
          style={{ transform: `translateX(${index * 100}%)` }}
        >
          <span
            className="flex h-[200%] w-full flex-col"
            style={{ transform: `translateY(-${index * 50}%)` }}
          >
            {LOCALES.map((locale) => (
              <span
                key={locale.code}
                className="flex h-1/2 items-center justify-center text-[10px] font-semibold tracking-[0.2em] text-black"
              >
                {locale.code.toUpperCase()}
              </span>
            ))}
          </span>
        </span>

        {LOCALES.map((locale) => {
          const active = locale.code === current;

          return (
            <button
              key={locale.code}
              type="button"
              onClick={() => go(locale.code)}
              aria-pressed={active}
              aria-label={locale.label}
              className={`relative z-10 cursor-pointer text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                active ? "text-transparent" : "text-white/40 hover:text-white"
              }`}
            >
              {locale.code}
            </button>
          );
        })}
      </div>
    </div>
  );
}
