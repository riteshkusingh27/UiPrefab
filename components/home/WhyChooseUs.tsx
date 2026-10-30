import {
  ArrowRight,
  BadgeDollarSign,
  Headphones,
  House,
  ShieldCheck,
} from "lucide-react"

const points = [
  {
    icon: ShieldCheck,
    title: "High-Quality Construction",
    text: "Built to last with premium materials",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Solutions",
    text: "Great value without compromising quality",
  },
  {
    icon: House,
    title: "Customizable Options",
    text: "Design your dream home your way",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    text: "Our team is here from start to finish",
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-[#eaf7ff]">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="max-w-md">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary lg:text-[13px]">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-black leading-[1.05] text-navy sm:text-4xl">
            Build Smarter.
            <br />
            Live Better.
          </h2>
          <p className="font-display mt-4 text-xs leading-6 text-slate-600 lg:text-sm lg:leading-7">
            We make it easy to find and customize the perfect prefab home for
            your needs. From design to delivery, we&apos;re with you every step
            of the way.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-xs font-bold text-white"
          >
            Learn More About Us <ArrowRight size={14} />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex gap-4 rounded-xl border border-white/80 bg-white/70 p-5 shadow-sm"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-primary shadow-sm">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="text-xs font-extrabold text-navy">{title}</h3>
                <p className="mt-1 text-[11px] leading-5 text-slate-500 lg:text-[13px]">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
