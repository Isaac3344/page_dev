import { MessageCircle } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";

export default function QuoteSummary({
  planActivo,
  detallesCotizacion,
  paginasExtra,
  productosExtra,
  whatsappUrl,
}) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
        Resumen
      </p>
      <h3 className="mt-3 text-2xl font-bold">Tu inversión estimada</h3>

      <div className="mt-8 space-y-4 text-sm">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-slate-300">{planActivo.nombre}</span>
          <span className="font-semibold">{formatPrice(planActivo.precio)}</span>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-slate-300">Páginas extra ({paginasExtra})</span>
          <span className="font-semibold">
            {formatPrice(detallesCotizacion.totalPaginasExtra)}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-slate-300">
            Productos extra ({productosExtra})
          </span>
          <span className="font-semibold">
            {formatPrice(detallesCotizacion.totalProductosExtra)}
          </span>
        </div>

        <div className="border-b border-white/10 pb-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-slate-300">Extras</span>
            <span className="font-semibold">
              {formatPrice(detallesCotizacion.totalExtras)}
            </span>
          </div>

          <div className="space-y-2 text-slate-400">
            {detallesCotizacion.extrasActivos.length > 0 ? (
              detallesCotizacion.extrasActivos.map((extra) => (
                <div
                  key={extra.id}
                  className="flex items-center justify-between gap-4"
                >
                  <span>{extra.nombre}</span>
                  <span>{formatPrice(extra.precio)}</span>
                </div>
              ))
            ) : (
              <p>No has seleccionado extras.</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-[28px] bg-white px-5 py-6 text-slate-900">
        <p className="text-sm font-medium">Total estimado</p>
        <p className="mt-2 text-4xl font-bold">
          {formatPrice(detallesCotizacion.total)}
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Precio referencial sujeto a ajustes finales del proyecto.
        </p>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-400"
      >
        <MessageCircle className="h-4 w-4" />
        Enviar cotización
      </a>
    </div>
  );
}