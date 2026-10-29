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
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/5" />
      <div className="site-container relative flex min-h-[520px] items-center py-14">
        <div className="min-w-0 max-w-[620px]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Modern | Affordable | Sustainable
          </p>
          <h1 className="mt-4 text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
            Prefab Homes
            <br />
            for a Brighter
            <br />
            <span className="text-primary">Tomorrow</span>
          </h1>
          <p className="font-display mt-5 max-w-lg text-sm leading-6 text-slate-600">
            Discover high-quality prefab homes, cabins, park models and
            commercial buildings designed for modern living. Customizable,
            affordable and built to last.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#featured"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-xs font-bold text-white"
            >
              Explore Homes <ArrowRight size={14} />
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-md border border-primary bg-white px-5 py-3 text-xs font-bold text-primary"
            >
              Get a Free Quote
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 min-[420px]:grid-cols-3">
            {stats.map(({ icon: Icon, top, bottom }) => (
              <div key={top} className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-primary/25 bg-white text-primary">
                  <Icon size={18} />
                </span>
                <div>
                  <strong className="block text-[11px]">{top}</strong>
                  <span className="text-[9px] text-slate-500">{bottom}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
