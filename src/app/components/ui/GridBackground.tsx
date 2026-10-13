export default function GridBackground() {
  return (
    <div
      className="absolute inset-0 z-0 h-full w-full 
        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_5px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] 
        bg-[size:40px_40px] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    />
  );
}
