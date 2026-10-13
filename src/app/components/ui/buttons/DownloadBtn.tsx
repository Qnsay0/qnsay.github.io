import Link from "next/link";
export default function DownloadBtn({ btnText }: { btnText: string }) {
  return (
    <Link
      href=""
      className="text-white py-[5px] px-[10px] text-[0.7em] tracking-wider rounded-full font-medium border border-white no-underline cursor-pointer transition duration-200 hover:-translate-y-0.5"
    >
      {btnText}
    </Link>
  );
}
