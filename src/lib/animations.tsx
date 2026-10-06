import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export const lenisSmoothScroll = () => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export const philosophyTextAnimation = (
  splitItem: React.RefObject<HTMLElement | null>,
  triggerItem: React.RefObject<HTMLElement | null>,
) => {
  if (!splitItem.current || !triggerItem.current) return;
  const splitType = new SplitType(splitItem.current, { types: "words" });

  gsap.from(splitType.words, {
    scrollTrigger: {
      trigger: triggerItem.current,
      start: "center center",
      end: "+=1500",
      scrub: true,
      pin: true,
    },
    opacity: 0.05,
    stagger: {
      amount: 1,
    },
  });

  return splitType;
};

export const introductionContainerAnimation = (
  containerRef: React.RefObject<HTMLElement | null>,
) => {
  if (!containerRef.current) return;

  gsap.from(containerRef.current, {
    scrollTrigger: {
      trigger: containerRef.current,
      start: "center center",
      end: "+=1200",
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
    },
  });
};
export const introductionTextAnimation = (
  containerRef: React.RefObject<HTMLElement | null>,
  textRef: React.RefObject<HTMLParagraphElement | null>,
) => {
  if (!textRef.current || !containerRef.current) return;

  const splitText = new SplitType(textRef.current, {
    types: "words",
  });

  gsap.from(splitText.words, {
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 50%",
      once: true,
    },
    opacity: 0,
    x: 30,
    stagger: { amount: 1 },
    duration: 1.25,
    ease: "power2.out",
  });

  return () => {
    splitText.revert();
  };
};

export const introductionSpecsAnimation = (
  containerRef: React.RefObject<HTMLElement | null>,
  specsRef: React.RefObject<HTMLElement | null>,
) => {
  if (!containerRef.current || !specsRef.current) return;
  const items = specsRef.current.querySelectorAll("[data-spec]");

  gsap.from(items, {
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 60%",
      once: true,
    },
    y: 16,
    opacity: 0,
    stagger: 0.08,
    duration: 0.8,
    ease: "power2.out",
  });
};

export const introductionTitleAnimation = (
  containerRef: React.RefObject<HTMLElement | null>,
  titleRef: React.RefObject<HTMLParagraphElement | null>,
) => {
  if (!containerRef.current || !titleRef.current) return;
  const splitTitle = new SplitType(titleRef.current, { types: "chars" });

  gsap.from(splitTitle.chars, {
    scrollTrigger: {
      trigger: containerRef.current,
      scrub: 1,
      start: "top 10%",
      end: "+=1000",
    },
    opacity: 0,
    y: 30,
    stagger: { amount: 1 },
    duration: 2,
    ease: "power2.out",
  });
};

export const homeTextAnimation = (
  textRef: React.RefObject<HTMLParagraphElement | null>,
) => {
  if (!textRef.current) return;
  const splitH1 = new SplitType(textRef.current, { types: "words" });
  if (!textRef.current) return;
  gsap.from(splitH1.words, {
    opacity: 0,
    x: 50,
    delay: 1,
    stagger: {
      amount: 1,
    },
  });
};

export const projectsTitleAnimation = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  titleRef: React.RefObject<HTMLHeadingElement | null>,
  textRef: React.RefObject<HTMLParagraphElement | null>,
  projectCardRef: React.RefObject<HTMLDivElement | null>,
) => {
  if (!titleRef.current || !textRef.current || !containerRef.current) return;

  // Dzielimy tytuł na znaki, a podtytuł na słowa
  const splitTitle = new SplitType(titleRef.current, { types: "chars" });
  const splitText = new SplitType(textRef.current, { types: "words" });

  // Używamy Timeline, aby połączyć animacje w zgrabną sekwencję
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 50%",
      once: true,
    },
  });

  // 1. Animacja głównego tytułu (po znakach)
  tl.from(splitTitle.chars, {
    opacity: 0,
    x: 30,
    stagger: { amount: 1 },
    duration: 1.25,
    ease: "power2.out",
  })
    // 2. Animacja podtytułu (po słowach), startująca nieco przed końcem poprzedniej ("-=0.8")
    .from(
      splitText.words,
      {
        opacity: 0,
        y: 20,
        stagger: { amount: 0.5 },
        duration: 1,
        ease: "power2.out",
      },
      "-=0.8",
    )
    .from(
      projectCardRef.current?.querySelectorAll("[data-project]") ?? [],
      {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4",
    );

  // Funkcja czyszcząca (bardzo ważna w React!)
  return () => {
    splitTitle.revert();
    splitText.revert();
    tl.kill();
  };
};
