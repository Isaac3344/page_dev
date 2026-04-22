export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.04]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-center text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
        <div>
          <p className="font-medium text-white">WEBPRO</p>
          <p className="mt-1 text-slate-400">
            Sitios web elegantes, claros y orientados a resultados.
          </p>
        </div>
        <p>Personaliza textos, precios, correo y WhatsApp para tu marca.</p>
      </div>
    </footer>
  );
}