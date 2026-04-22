import { motion } from "framer-motion";
import {
  BadgeCheck,
  MessageCircle,
  Palette,
  Rocket,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "+50", label: "Proyectos" },
  { value: "+30", label: "Clientes" },
  { value: "100%", label: "Satisfacción" },
];

export default function HeroPremium() {
  const whatsappNumber = "593997623522";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola, quiero mi página web."
  )}`;

  return (
    <section className="relative overflow-hidden" id="inicio">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Diseño web que vende
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Páginas web modernas para{" "}
            <span className="text-cyan-300">negocios</span> que crecen.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Diseño, velocidad y estrategia para que tu negocio tenga la presencia
            profesional que merece.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Quiero mi página web
            </a>

            <a
              href="/planes"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver planes y precios
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { icon: Rocket, title: "Entrega rápida", text: "En 7 a 14 días" },
              {
                icon: Palette,
                title: "Diseño 100% personalizado",
                text: "A tu marca y negocio",
              },
              {
                icon: BadgeCheck,
                title: "Soporte cercano",
                text: "Te acompaño siempre",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-3 border-l border-white/10 pl-4 first:border-l-0 first:pl-0"
              >
                <item.icon className="mt-0.5 h-5 w-5 text-cyan-300" />
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-slate-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="relative"
        >
          <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl lg:block" />
          <div className="absolute -right-5 bottom-10 hidden h-32 w-32 rounded-full bg-blue-500/20 blur-3xl lg:block" />

          <div className="relative rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
            <div className="rounded-[28px] border border-white/10 bg-[#020b1d] p-6">
              <div className="flex items-center justify-between text-sm text-white/80">
                <p className="italic">tu marca</p>
                <div className="hidden gap-6 md:flex">
                  <span>Inicio</span>
                  <span>Servicios</span>
                  <span>Nosotros</span>
                  <span>Contacto</span>
                </div>
              </div>

              <div className="mt-10 grid items-center gap-8 md:grid-cols-[1fr_0.9fr]">
                <div>
                  <h3 className="text-4xl font-bold leading-tight text-white">
                    Impulsa tu negocio con una web{" "}
                    <span className="text-cyan-300">profesional</span>
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Creamos experiencias digitales que conectan, venden y
                    posicionan tu marca.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">
                      Solicitar cotización
                    </button>
                    <button className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white">
                      Ver proyectos
                    </button>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    {stats.map((item) => (
                      <div key={item.label}>
                        <p className="text-3xl font-bold text-cyan-300">
                          {item.value}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex min-h-[280px] items-center justify-center rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),linear-gradient(to_bottom_right,_rgba(255,255,255,0.02),_rgba(255,255,255,0.01))] p-6">
                  <div className="text-center">
                    <Rocket className="mx-auto h-24 w-24 text-cyan-300" />
                    <p className="mt-4 text-sm text-slate-300">
                      Tu próxima web premium aquí
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}