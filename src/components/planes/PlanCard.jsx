import { Check } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";

export default function PlanCard({ plan }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
      <h3 className="text-xl font-semibold">{plan.nombre}</h3>
      <p className="mt-3 text-slate-300">{plan.descripcion}</p>
      <div className="mt-6 text-4xl font-bold">{formatPrice(plan.precio)}</div>

      <ul className="mt-6 space-y-3 text-sm text-slate-200">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check className="h-4 w-4 text-emerald-400" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-white/10 pt-5 text-sm text-slate-400">
        <p>Secciones incluidas: {plan.seccionesIncluidas}</p>
        <p>Página extra: {formatPrice(plan.extraPagina)}</p>
        <p>Producto extra: {formatPrice(plan.extraProducto)}</p>
      </div>
    </article>
  );
}