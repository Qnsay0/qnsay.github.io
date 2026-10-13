// Navbar.tsx
import DownloadBtn from "../ui/buttons/DownloadBtn";

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
      {/*Przycisk do portfolio*/}
      {/* <DownloadBtn btnText={dict.downloadBtn} /> */}
    </header>
  );
}
