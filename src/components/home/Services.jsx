import SectionTitle from "../ui/SectionTitle";

const services = [
  {
    title: "Landing Pages",
    text: "Páginas enfocadas en mostrar tu servicio, generar confianza y captar contactos.",
  },
  {
    title: "Webs corporativas",
    text: "Sitios con varias secciones para empresas que necesitan una imagen más sólida.",
  },
  {
    title: "Catálogos con WhatsApp",
    text: "Muestra tus productos y convierte visitas en consultas o pedidos.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Servicios"
        title="Qué tipo de páginas web desarrollamos"
        text="Soluciones pensadas para negocios que quieren verse bien y vender mejor."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-slate-300">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}