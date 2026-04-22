import { Check } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";

export default function PlanCard({ plan, active = false, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(plan.id)}
      className={`relative rounded-[28px] border p-6 text-left transition duration-300 ${
        active
          ? "border-cyan-400/70 bg-cyan-400/10 shadow-[0_0_0_1px_rgba(34,211,238,0.25)]"
          : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
      }`}
    >
      {plan.popular && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-950">
          Más popular
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-white">{plan.nombre}</h3>
          <p className="mt-1 text-sm text-slate-400">{plan.subtitulo}</p>
        </div>

        {active && (
          <div className="rounded-full border border-cyan-400/40 bg-cyan-400/15 p-2 text-cyan-200">
            <Check className="h-4 w-4" />
          </div>
        )}
      </div>

      <div className="mt-5 flex items-end gap-2">
        <span className="text-4xl font-bold text-white">
          {formatPrice(plan.precio)}
        </span>
        <span className="pb-1 text-sm text-slate-400">Pago único</span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">{plan.descripcion}</p>

      <div className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm text-slate-200">
            <Check className="h-4 w-4 text-cyan-300" />
            {feature}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
        {plan.seccionesIncluidas === 999
          ? "Secciones amplias y alcance flexible"
          : `Hasta ${plan.seccionesIncluidas} secciones incluidas`}
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/5">
        Seleccionar plan
      </div>
    </button>
  );
}