import Link from "next/link";

export default function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="HayaTech home"
      className="group inline-flex items-center gap-2.5"
    >
      <span
        className={`grid h-9 w-9 place-items-center rounded-xl text-sm font-black shadow-sm transition-transform group-hover:-rotate-3 ${
          inverse
            ? "bg-emerald-300 text-[#10211b]"
            : "bg-[#10211b] text-emerald-300"
        }`}
      >
        H
      </span>
      <span
        className={`text-xl font-black tracking-[-0.04em] ${
          inverse ? "text-white" : "text-[#10211b]"
        }`}
      >
        Haya<span className="text-[#0b9d72]">Tech</span>
      </span>
    </Link>
  );
}
