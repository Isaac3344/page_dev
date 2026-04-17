import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

export default function Contacto() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Contacto"
        title="Cuéntanos tu idea"
        text="Si todavía no tienes claro qué plan necesitas, escríbenos y te ayudamos a elegir la mejor opción."
        center
      />

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <form className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              placeholder="Tu correo"
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <input
            type="text"
            placeholder="Tu WhatsApp"
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <textarea
            rows="6"
            placeholder="Cuéntanos qué tipo de página necesitas"
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <div>
            <Button variant="primary">Enviar consulta</Button>
          </div>
        </form>
      </div>
    </section>
  );
}