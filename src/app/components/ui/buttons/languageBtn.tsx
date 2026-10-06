import { useState } from "react";
import { MdLanguage } from "react-icons/md"; // Zakładam ten import

import { PL, US } from "country-flag-icons/react/3x2";
export default function LanguageBtn() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleLanguage = (lang: string) => {
    setIsToggle(!isToggle);

    const pathParts = window.location.pathname.split("/");
    pathParts[1] = lang;

    const newPathName = pathParts.join("/");
    window.location.href = newPathName;
  };

  return (
    <div
      onClick={() => {
        setIsToggle(!isToggle);
      }}
      className={`transition-height duration-500 ease-in-out fixed z-20 right-0 bottom-0 w-12 h-12 m-5 rounded-2xl justify-center items-center flex bg-orange-600/80 cursor-pointer ${isToggle ? "h-25" : "h-10"}`}
    >
      <div
        className={`${isToggle ? "flex" : "hidden"} flex-col justify-start w-[60%] gap-2`}
      >
        <button
          onClick={() => toggleLanguage("pl")}
          className="cursor-pointer font-bold "
        >
          PL
        </button>
        <button
          onClick={() => toggleLanguage("en")}
          className="cursor-pointer font-bold "
        >
          EN
        </button>
      </div>

      <span
        className={`${isToggle ? "hidden" : "block"} `}
        aria-label="Zmień język"
      >
        <MdLanguage className="text-xl text-white" />
      </span>
    </div>
  );
}
