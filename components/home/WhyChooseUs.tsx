import Image from "next/image"
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
    text: "Built to last with certified premium materials",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Solutions",
    text: "Transparent pricing without compromising quality",
  },
  {
    icon: House,
    title: "Customizable Floor Plans",
    text: "Tailor layouts, finishes, and specs to your land",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    text: "Engineering, permitting, and delivery guidance",
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-pad overflow-hidden bg-[#eaf7ff]">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-navy px-4 py-10 shadow-xl sm:rounded-2xl sm:px-6 sm:py-12 lg:py-14">
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src="/images/home-11.jpg"
              alt=""
              fill
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover object-[center_42%] brightness-[0.75]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-primary/55" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy/85 to-transparent" />
          </div>
          <div className="relative z-10">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <h2 className="text-3xl font-black leading-none tracking-tight text-white sm:text-4xl lg:text-[40px]">
                Build Smarter. <span className="text-[#8dc4ff]">Live Better.</span>
              </h2>
              <p className="max-w-3xl text-xs leading-6 text-slate-200 lg:text-sm lg:leading-7">
                We simplify discovering and ordering modern prefab structures.
                From initial blueprints to on-site assembly, our network of
                vetted manufacturers delivers guaranteed structural integrity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 divide-white/10 sm:grid-cols-4 lg:divide-x">
              {points.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="group flex flex-col items-center px-2 text-center"
                >
                  <span className="mb-3 grid size-14 place-items-center rounded-2xl border border-white/15 bg-white/10 text-[#8dc4ff] shadow-md backdrop-blur-xs transition-all duration-200 group-hover:-translate-y-1 group-hover:border-white group-hover:bg-white group-hover:text-primary">
                    <Icon size={26} strokeWidth={1.8} />
                  </span>
                  <h3 className="text-[13px] font-black uppercase leading-tight tracking-wide text-white transition-colors group-hover:text-[#8dc4ff] lg:text-sm">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-snug text-slate-300 lg:text-xs">
                    {text}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-ui text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-white hover:text-primary hover:shadow-md active:scale-[0.98] lg:text-[13px]"
              >
                <span>Learn More About Us</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
