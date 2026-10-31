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
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-md">
      <div className="relative mx-auto aspect-[1.15] w-full max-w-44 border-2 border-slate-300 bg-[linear-gradient(90deg,transparent_49%,#cbd5e1_50%,transparent_51%),linear-gradient(transparent_49%,#cbd5e1_50%,transparent_51%)] bg-[length:33%_100%,100%_33%] transition-colors group-hover:border-primary/40">
        <span className="absolute left-[28%] top-0 h-full border-l border-slate-300" />
        <span className="absolute right-[20%] top-[32%] h-[68%] border-l border-slate-300" />
        <span className="absolute left-2 top-2 font-mono text-[8px] font-bold text-slate-400">
          PLAN 0{index + 1}
        </span>
        <span className="absolute bottom-2 right-2 font-mono text-[8px] font-bold text-slate-400">
          LAYOUT
        </span>
      </div>
      <h3 className="mt-4 text-base font-black uppercase tracking-tight text-navy lg:text-lg">
        {plan.name}
      </h3>
      <p className="mt-1 text-[11px] font-bold text-primary lg:text-xs">{plan.sqft}</p>
      <p className="mt-2 text-[11px] font-semibold text-slate-500 lg:text-xs">
        {plan.beds} Beds <span className="mx-1 text-slate-300">|</span> {plan.baths} Baths
      </p>
      <a
        href="#"
        className="mt-4 inline-flex items-center justify-center gap-1.5 rounded border border-slate-200 bg-slate-50 py-2 font-ui text-xs font-extrabold uppercase tracking-wider text-navy transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white"
      >
        <span>View Plan</span>
        <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  )
}
