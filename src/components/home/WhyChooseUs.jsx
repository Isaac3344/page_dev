import SectionTitle from "../ui/SectionTitle";

const items = [
  "Diseño profesional y moderno",
  "Páginas optimizadas para móviles",
  "Precios claros y fáciles de entender",
  "Atención rápida y enfoque en ventas",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Ventajas"
          title="Por qué elegirnos"
          text="No solo diseñamos bonito. Construimos páginas pensadas para comunicar, vender y generar confianza."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}