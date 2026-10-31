import { ArrowRight, FileText, Search, Settings, Truck } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse Models",
    text: "Explore our wide range of prefab homes.",
  },
  {
    icon: Settings,
    title: "Customize",
    text: "Choose floor plans, finishes and options.",
  },
  {
    icon: FileText,
    title: "Get a Quote",
    text: "Receive a detailed and transparent quote.",
  },
  {
    icon: Truck,
    title: "Delivery & Setup",
    text: "Fast and reliable delivery to your location.",
  },
]

export function HowItWorks() {
  return (
    <section className="section-pad bg-[#f4faff]">
      <div className="site-container text-center">
        <h2 className="section-title">How It Works</h2>
        <p className="section-copy">
          A seamless, transparent roadmap to your new prefabricated structure.
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className="group relative rounded-xl border border-slate-200/80 bg-white px-5 pb-6 pt-12 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-lg"
            >
              <span className="absolute -left-2 -top-3 grid size-7 place-items-center rounded-md border border-primary bg-primary text-[10px] font-black uppercase text-white shadow-sm">
                0{index + 1}
              </span>
              <span className="absolute -top-7 left-1/2 grid size-14 -translate-x-1/2 place-items-center rounded-xl border border-slate-200 bg-white text-primary shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                <Icon size={24} strokeWidth={2.2} />
              </span>
              <h3 className="text-sm font-black uppercase tracking-tight text-navy lg:text-base">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-600 lg:text-sm lg:leading-6">
                {text}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight
                  size={18}
                  strokeWidth={2.5}
                  className="absolute -right-7 top-1/2 hidden -translate-y-1/2 text-slate-300 transition-colors group-hover:text-primary lg:block"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
