import { ArrowRight } from "lucide-react"
import type { FloorPlan } from "@/data/floorPlans"

export function FloorPlanCard({
  plan,
  index,
}: {
  plan: FloorPlan
  index: number
}) {
  return (
    <article className="card-shadow rounded-lg bg-white p-4 text-center">
      <div className="relative mx-auto aspect-[1.15] max-w-48 border-2 border-slate-300 bg-[linear-gradient(90deg,transparent_49%,#cbd5e1_50%,transparent_51%),linear-gradient(transparent_49%,#cbd5e1_50%,transparent_51%)] bg-[length:33%_100%,100%_33%]">
        <span className="absolute left-[28%] top-0 h-full border-l border-slate-300" />
        <span className="absolute right-[20%] top-[32%] h-[68%] border-l border-slate-300" />
        <span className="absolute left-2 top-2 text-[8px] text-slate-400">
          BED {index + 1}
        </span>
        <span className="absolute bottom-2 right-2 text-[8px] text-slate-400">
          LIVING
        </span>
      </div>
      <h3 className="mt-4 text-base font-extrabold text-navy">{plan.name}</h3>
      <p className="mt-1 text-[10px] text-slate-500">{plan.sqft}</p>
      <p className="mt-3 text-[10px] text-slate-500">
        {plan.beds} Beds <span className="mx-1">|</span> {plan.baths} Baths
      </p>
      <a
        href="#"
        className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary"
      >
        View Plan <ArrowRight size={12} />
      </a>
    </article>
  )
}
