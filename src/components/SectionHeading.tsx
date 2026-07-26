export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`eyebrow ${
          align === "center" ? "justify-center" : ""
        } ${inverse ? "!text-emerald-300" : ""}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-black leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl ${
          inverse ? "text-white" : "text-[#10211b]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            inverse ? "text-slate-300" : "text-[#52635c]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
