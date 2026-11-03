// Navbar.tsx
"use client";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import LanguageBtn from "../ui/buttons/languageBtn";
import { useEffect, useState } from "react";

interface ProjectProps {
  dict: {
    navigationTitle: string;
    downloadBtn: string;
  };
}

export default function Navbar({ dict }: ProjectProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 max-w-7xl m-auto">
      <nav className={`mx-auto flex w-full flex-row items-center justify-between  transition-[max-width,margin,padding,border-radius] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? "mt-4 max-w-3xl rounded-full px-5 py-2.5 bg-black/40 backdrop-blur-sm" : "mt-0 max-w-full px-6 py-4"}`}>
        <div className=" tracking-tighter">
          <h1 className="text-white font-semibold">{dict.navigationTitle}</h1>
        </div>
        <div className="flex flex-row space-x-4 justify-center items-center">
          <div className="flex justify-center items-center rounded-full gap-4">
            <a target="_blank" href="https://github.com/Qnsay0" className="text-muted">
              <FaGithubAlt size={18} />
            </a>
            <a target="_blank" href="https://github.com/Qnsay0" className="text-muted">
              <FaLinkedin size={18} />
            </a>
          </div>

          <LanguageBtn />
        </div>
      </nav>
    </header>
  );
}
