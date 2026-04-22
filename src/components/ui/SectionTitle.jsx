export default function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && (
        <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-slate-300">{text}</p>}
    </div>
  );
}