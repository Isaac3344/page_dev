import SectionTitle from "../components/ui/SectionTitle";
import PlanCard from "../components/planes/PlanCard";
import { planes } from "../data/planes";

export default function Planes() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Planes"
        title="Elige el plan ideal para tu negocio"
        text="Empieza con una base clara y luego personaliza tu proyecto con extras y módulos."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-4">
        {planes.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}