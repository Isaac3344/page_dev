import { motion } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  const whatsappNumber = "+593997623522";
  const message = encodeURIComponent(
    "Hola, quiero información sobre una página web para mi negocio."
  );

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),_transparent_30%),radial-gradient(circle_at_right,_rgba(16,185,129,0.10),_transparent_25%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Webs que venden mejor
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Diseñamos páginas web modernas para atraer clientes.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Creamos landing pages, webs corporativas y catálogos con WhatsApp
            para emprendedores, marcas y negocios que quieren una presencia más profesional.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/cotizador" variant="primary">
              Cotizar mi sitio
            </Button>

            <Button
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              variant="secondary"
            >
              <span className="mr-2 inline-flex"><MessageCircle className="h-4 w-4" /></span>
              Hablar por WhatsApp
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30"
        >
          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-sm text-cyan-300">Desde</p>
              <h3 className="mt-2 text-4xl font-bold">$150</h3>
              <p className="mt-3 text-slate-300">
                Soluciones claras, diseño atractivo y cotización inmediata.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                <h4 className="font-semibold">Responsive</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Optimizado para celular, tablet y escritorio.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Conecta clientes contigo en un clic.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}