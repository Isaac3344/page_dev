import { Palette, Rocket, ShieldCheck, Zap } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Rápido y optimizado",
    text: "Tu web carga rápido y funciona perfecto en todos los dispositivos.",
  },
  {
    icon: Palette,
    title: "Diseño profesional",
    text: "Diseños modernos, atractivos y alineados a tu marca.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro y confiable",
    text: "Implementamos buenas prácticas para transmitir confianza.",
  },
  {
    icon: Zap,
    title: "Enfocado en resultados",
    text: "No solo se ve bien, también está pensado para vender.",
  },
];

export default function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
      <div className="grid gap-4 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 border-b border-white/10 pb-4 last:border-b-0 md:border-b-0 md:border-r md:pb-0 last:md:border-r-0"
          >
            <item.icon className="mt-1 h-6 w-6 flex-none text-cyan-300" />
            <div>
              <p className="font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}