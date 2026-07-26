export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="soft-grid relative overflow-hidden border-b border-[#dbe4de] bg-[#f4f7f2] px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-[-8rem] h-72 w-72 rounded-full bg-blue-300/15 blur-3xl" />
      <div className="section-shell relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#10211b] sm:text-5xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#52635c] sm:text-xl">
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
