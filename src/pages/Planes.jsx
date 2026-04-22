import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import PlanCard from "../components/planes/PlanCard";
import { planes } from "../data/planes";

export default function Planes() {
  const [planId, setPlanId] = useState("profesional");

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Planes"
        title="Elige el plan ideal para tu negocio."
        text="Selecciona la opción que mejor encaje con tu etapa actual."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {planes.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            active={plan.id === planId}
            onSelect={setPlanId}
          />
        ))}
      </div>
    </section>
  );
}