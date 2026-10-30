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
        <h2 className="text-3xl font-black text-navy">How It Works</h2>
        <p className="section-copy">
          A simple process to get your dream prefab home.
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className="relative rounded-xl border border-white bg-white px-5 pb-6 pt-12 shadow-[0_10px_35px_rgba(8,44,89,0.06)]"
            >
              <span className="absolute -left-2 -top-3 grid size-7 place-items-center rounded-full border-2 border-primary bg-white text-[10px] font-black text-primary shadow-sm">
                0{index + 1}
              </span>
              <span className="absolute -top-7 left-1/2 grid size-16 -translate-x-1/2 place-items-center rounded-full border border-primary/10 bg-white text-primary shadow-[0_8px_24px_rgba(8,44,89,0.12)]">
                <Icon size={27} strokeWidth={2.2} />
              </span>
              <h3 className="text-sm font-black text-black">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600 lg:text-sm lg:leading-6">
                {text}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight
                  size={18}
                  strokeWidth={2.5}
                  className="absolute -right-7 top-1/2 hidden -translate-y-1/2 text-primary lg:block"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
