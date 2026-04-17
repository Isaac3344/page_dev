import { Check } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";

export default function ExtraItem({ extra, active, onToggle }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(extra.id)}
      className={`rounded-2xl border p-4 text-left transition ${
        active
          ? "border-emerald-400 bg-emerald-400/10"
          : "border-white/10 bg-slate-900/70 hover:bg-slate-900"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-medium text-white">{extra.nombre}</p>
          <p className="mt-1 text-sm text-slate-400">
            + {formatPrice(extra.precio)}
          </p>
        </div>
        {active && <Check className="h-5 w-5 text-emerald-300" />}
      </div>
    </button>
  );
}