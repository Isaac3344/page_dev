import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-8 text-center">
        <h2 className="text-3xl font-bold">¿Listo para tener tu página web?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Usa el cotizador y obtén un precio estimado en segundos.
        </p>
        <div className="mt-6 flex justify-center">
          <Button to="/cotizador" variant="primary">
            Ir al cotizador
          </Button>
        </div>
      </div>
    </section>
  );
}