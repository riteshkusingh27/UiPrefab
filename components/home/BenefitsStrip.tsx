import { Bolt, Hammer, House, Leaf, ShieldCheck, Wrench } from "lucide-react"

const benefits = [
  { icon: Leaf, label: "Affordable Living" },
  { icon: Bolt, label: "Energy Efficient" },
  { icon: Wrench, label: "Custom Designs" },
  { icon: House, label: "Fast Construction" },
  { icon: ShieldCheck, label: "Built to Last" },
  { icon: Hammer, label: "Eco Friendly" },
]

export function BenefitsStrip() {
  return (
    <section className="border-b bg-sky-bg">
      <div className="site-container grid grid-cols-2 py-7 sm:grid-cols-3 lg:grid-cols-6">
        {benefits.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 border-slate-200 px-3 py-4 text-center lg:border-r lg:last:border-0"
          >
            <Icon size={29} className="text-primary" />
            <span className="max-w-20 text-xs font-bold text-navy">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
