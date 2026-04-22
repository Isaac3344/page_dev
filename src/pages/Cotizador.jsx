import { useMemo, useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import ExtraCard from "../components/cotizador/ExtraCard";
import QuoteSummary from "../components/cotizador/QuoteSummary";
import { extras } from "../data/extras";
import { planes } from "../data/planes";
import { formatPrice } from "../utils/formatPrice";

export default function Cotizador() {
  const [planId, setPlanId] = useState("profesional");
  const [paginasExtra, setPaginasExtra] = useState(0);
  const [productosExtra, setProductosExtra] = useState(0);
  const [extrasSeleccionados, setExtrasSeleccionados] = useState(["whatsapp"]);

  const planActivo = useMemo(
    () => planes.find((plan) => plan.id === planId) ?? planes[0],
    [planId]
  );

  const toggleExtra = (extraId) => {
    setExtrasSeleccionados((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  const detallesCotizacion = useMemo(() => {
    const extrasActivos = extras.filter((extra) =>
      extrasSeleccionados.includes(extra.id)
    );
    const totalExtras = extrasActivos.reduce((sum, extra) => sum + extra.precio, 0);
    const totalPaginasExtra = paginasExtra * planActivo.extraPagina;
    const totalProductosExtra = productosExtra * planActivo.extraProducto;
    const total =
      planActivo.precio +
      totalExtras +
      totalPaginasExtra +
      totalProductosExtra;

    return {
      extrasActivos,
      totalExtras,
      totalPaginasExtra,
      totalProductosExtra,
      total,
    };
  }, [extrasSeleccionados, paginasExtra, productosExtra, planActivo]);

  const whatsappNumber = "593997623522";

  const whatsappMessage = useMemo(() => {
    const lineas = [
      "Hola, vi tu página web y quiero una cotización.",
      "",
      `Plan: ${planActivo.nombre} (${formatPrice(planActivo.precio)})`,
      `Páginas extra: ${paginasExtra}`,
      `Productos extra: ${productosExtra}`,
      `Extras: ${
        detallesCotizacion.extrasActivos.length > 0
          ? detallesCotizacion.extrasActivos.map((e) => e.nombre).join(", ")
          : "Ninguno"
      }`,
      `Total estimado: ${formatPrice(detallesCotizacion.total)}`,
    ];

    return encodeURIComponent(lineas.join("\n"));
  }, [planActivo, paginasExtra, productosExtra, detallesCotizacion]);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Cotizador"
        title="Calcula una cotización en segundos"
        text="Ajusta tu plan, agrega extras y obtén un estimado listo para enviar por WhatsApp."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="space-y-8">
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-200">
                Plan seleccionado
              </label>
              <select
                value={planId}
                onChange={(e) => setPlanId(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              >
                {planes.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.nombre} - {formatPrice(plan.precio)}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-200">
                  Páginas extra
                </label>
                <input
                  type="number"
                  min="0"
                  value={paginasExtra}
                  onChange={(e) =>
                    setPaginasExtra(Math.max(0, Number(e.target.value) || 0))
                  }
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-slate-200">
                  Productos extra
                </label>
                <input
                  type="number"
                  min="0"
                  value={productosExtra}
                  onChange={(e) =>
                    setProductosExtra(Math.max(0, Number(e.target.value) || 0))
                  }
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="mb-4 block text-sm font-medium text-slate-200">
                Extras
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {extras.map((extra) => (
                  <ExtraCard
                    key={extra.id}
                    extra={extra}
                    active={extrasSeleccionados.includes(extra.id)}
                    onToggle={toggleExtra}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <QuoteSummary
          planActivo={planActivo}
          detallesCotizacion={detallesCotizacion}
          paginasExtra={paginasExtra}
          productosExtra={productosExtra}
          whatsappUrl={whatsappUrl}
        />
      </div>
    </section>
  );
}