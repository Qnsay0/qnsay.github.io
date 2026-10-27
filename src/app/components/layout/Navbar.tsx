// Navbar.tsx
"use client";
import { FaGithubAlt } from "react-icons/fa";
import LanguageBtn from "../ui/buttons/languageBtn";
interface ProjectProps {
  dict: {
    navigationTitle: string;
    downloadBtn: string;
  };
}

export default function Navbar({ dict }: ProjectProps) {
  return (
    <header className="relative z-1 flex px-[2em] py-[1.5em] w-full z-0 bg-black justify-between">
      <div className=" tracking-[-0.02em]">
        <h1 className="text-white">{dict.navigationTitle}</h1>
      </div>
      <div className="flex flex-row space-x-4 justify-center items-center">
        <a target="_blank" href={process.env.NEXT_PUBLIC_GITHUB_LINK}>
          <span className="text-white text-xl cursor-pointer ">
            <FaGithubAlt />
          </span>
        </a>
        <LanguageBtn />
      </div>

      {/*Przycisk do portfolio*/}
      {/* <DownloadBtn btnText={dict.downloadBtn} /> */}
    </header>
  );
}
