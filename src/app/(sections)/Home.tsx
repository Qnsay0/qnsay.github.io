"use client";
import { useGSAP } from "@gsap/react";
import LanguageBtn from "../components/ui/buttons/languageBtn";
import { homeTextAnimation } from "@/src/lib/animations";
import { useRef } from "react";
import GridBackground from "../components/ui/GridBackground";

interface ProjectProps {
  head: string;
  middle: string;
  bottom: string;
}

export default function Home(props: ProjectProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    homeTextAnimation(textRef);
  });

  return (
    <div className="relative min-h-dvh px-5 md:px-10">
      <GridBackground />
      <div className="flex flex-row">
        <div className="min-h-dvh flex items-center">
          <div className=" text-center text-white flex flex-col text  gap-5">
            <div className="flex flex-col" ref={textRef}>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-2">
                {props.head}
              </p>
              <span className="font-extrabold uppercase tracking-tighter leading-[0.85] text-[min(13vw,15vh)] sm:text-[min(14vw,18vh)] lg:text-[min(12vw,20vh)] select-none">
                {props.middle}
              </span>

              <p className="m-auto sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-neutral-300 dark:text-gray-300 mt-6 max-w-4xl">
                {props.bottom}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
