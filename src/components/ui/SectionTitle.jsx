export default function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-slate-300">{text}</p>}
    </div>
  );
}