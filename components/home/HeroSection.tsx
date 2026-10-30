import Image from "next/image"
import { ArrowRight, BadgeCheck, PanelsTopLeft, Truck } from "lucide-react"

const stats = [
  { icon: BadgeCheck, top: "Wide Range", bottom: "of Models" },
  { icon: PanelsTopLeft, top: "Customizable", bottom: "Floor Plans" },
  { icon: Truck, top: "Fast & Reliable", bottom: "Delivery" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef8ff] text-navy">
      <Image
        src="/images/hero-lake-house.png"
        alt="Modern prefab home beside a mountain lake at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center lg:object-[58%_center]"
      />
      <div className="site-container relative flex min-h-[470px] items-center py-10 sm:min-h-[520px] sm:py-14">
        <div className="min-w-0 max-w-[620px]">
          <p className="font-condensed text-xs font-bold uppercase tracking-[0.1em] text-primary sm:text-[13px] sm:tracking-[0.18em] lg:text-sm">
            Modern | Affordable | Sustainable
          </p>
          <h1 className="hero-title mt-4 font-black tracking-tight">
            Prefab Homes
            <br />
            for a Brighter
            <br />
            <span className="text-primary">Tomorrow</span>
          </h1>
          <p className="font-display mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:mt-5 lg:text-base lg:leading-7">
            Discover high-quality prefab homes, cabins, park models and
            commercial buildings designed for modern living. Customizable,
            affordable and built to last.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#featured"
              className="inline-flex min-w-[9.5rem] flex-1 items-center justify-center gap-2 rounded-md border border-primary bg-primary px-5 py-3 font-condensed text-[13px] font-bold tracking-wide text-white sm:flex-none lg:text-[15px] sm:justify-start"
            >
              Explore Homes <ArrowRight size={14} />
            </a>
            <a
              href="#quote"
              className="inline-flex min-w-[9.5rem] flex-1 items-center justify-center gap-2 rounded-md border border-primary bg-white px-5 py-3 font-condensed text-[13px] font-bold tracking-wide text-primary sm:flex-none lg:text-[15px] sm:justify-start"
            >
              Get a Free Quote
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 min-[420px]:grid-cols-3 sm:mt-10">
            {stats.map(({ icon: Icon, top, bottom }) => (
              <div key={top} className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-primary/25 bg-white text-primary">
                  <Icon size={18} />
                </span>
                <div>
                  <strong className="block text-[11px] lg:text-[13px]">{top}</strong>
                  <span className="text-[10px] text-slate-500 lg:text-xs">{bottom}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
