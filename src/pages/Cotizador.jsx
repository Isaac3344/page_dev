import { useMemo, useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import QuoteSummary from "../components/cotizador/QuoteSummary";
import ExtraItem from "../components/cotizador/ExtraItem";
import { planes } from "../data/planes";
import { extras } from "../data/extras";
import { formatPrice } from "../utils/formatPrice";

export default function Cotizador() {
  const [planId, setPlanId] = useState("landing");
  const [paginasExtra, setPaginasExtra] = useState(0);
  const [productosExtra, setProductosExtra] = useState(0);
  const [extrasSeleccionados, setExtrasSeleccionados] = useState([]);

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

  const resumen = useMemo(() => {
    const seleccionados = extras.filter((extra) =>
      extrasSeleccionados.includes(extra.id)
    );

    const totalExtras = seleccionados.reduce((sum, extra) => sum + extra.precio, 0);
    const totalPaginas = paginasExtra * planActivo.extraPagina;
    const totalProductos = productosExtra * planActivo.extraProducto;
    const total = planActivo.precio + totalExtras + totalPaginas + totalProductos;

    return {
      seleccionados,
      totalExtras,
      totalPaginas,
      totalProductos,
      total,
    };
  }, [extrasSeleccionados, paginasExtra, productosExtra, planActivo]);

  const whatsappNumber = "+593997623522";
  const whatsappMessage = encodeURIComponent(
    [
      "Hola, quiero cotizar una página web.",
      "",
      `Plan: ${planActivo.nombre} (${formatPrice(planActivo.precio)})`,
      `Páginas extra: ${paginasExtra}`,
      `Productos extra: ${productosExtra}`,
      `Extras: ${
        resumen.seleccionados.length
          ? resumen.seleccionados.map((e) => e.nombre).join(", ")
          : "Ninguno"
      }`,
      `Total estimado: ${formatPrice(resumen.total)}`,
    ].join("\n")
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Cotizador"
        title="Calcula el precio de tu página web"
        text="Selecciona un plan base, agrega módulos y obtén una estimación al instante."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="space-y-8">
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-200">
                Plan seleccionado
              </label>
              <select
                value={planId}
                onChange={(e) => setPlanId(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
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
                  onChange={(e) => setPaginasExtra(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
                <p className="mt-2 text-xs text-slate-400">
                  {formatPrice(planActivo.extraPagina)} por página adicional.
                </p>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-slate-200">
                  Productos extra
                </label>
                <input
                  type="number"
                  min="0"
                  value={productosExtra}
                  onChange={(e) => setProductosExtra(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
                <p className="mt-2 text-xs text-slate-400">
                  {formatPrice(planActivo.extraProducto)} por producto adicional.
                </p>
              </div>
            </div>

            <div>
              <label className="mb-4 block text-sm font-medium text-slate-200">
                Extras y módulos
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {extras.map((extra) => (
                  <ExtraItem
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
          resumen={resumen}
          paginasExtra={paginasExtra}
          productosExtra={productosExtra}
          whatsappUrl={whatsappUrl}
        />
      </div>
    </section>
  );
}