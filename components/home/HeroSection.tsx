import Image from "next/image"
import {
  ArrowRight,
  Bolt,
  Calendar,
  Hammer,
  House,
  Leaf,
  Lightbulb,
  Mountain,
  ShieldCheck,
  TreePine,
  Wrench,
} from "lucide-react"

const tags = [
  { icon: House, label: "Modular Homes", accent: "text-sky-400" },
  { icon: TreePine, label: "Cabins & Tiny Homes", accent: "text-emerald-400" },
  { icon: Lightbulb, label: "Energy Efficient", accent: "text-amber-400" },
  { icon: Mountain, label: "Custom Builds", accent: "text-sky-300" },
]

const benefits = [
  { icon: Leaf, label: "Affordable Living" },
  { icon: Bolt, label: "Energy Efficient" },
  { icon: Wrench, label: "Custom Designs" },
  { icon: House, label: "Fast Construction" },
  { icon: ShieldCheck, label: "Built to Last" },
  { icon: Hammer, label: "Eco Friendly" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-deep-navy">
      {/* Background image - crisp & fully visible */}
      <Image
        src="/images/hero-lake-house.png"
        alt="Modern prefab home beside a mountain lake at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center lg:object-[60%_center]"
      />

      {/* Bombshelter-style cinematic gradient overlay: darkens the text area while preserving the house view */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-deep-navy/85 via-deep-navy/45 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-transparent to-deep-navy/20" />

      {/* Main hero content */}
      <div className="site-container relative flex min-h-[540px] items-center py-14 sm:min-h-[600px] sm:py-20">
        <div className="min-w-0 max-w-[700px]">
          {/* Eyebrow badge */}
          {/* Headline inspired by bombshelter's high-contrast bold typography */}
          <h1 className="hero-title font-black uppercase text-white drop-shadow-sm">
            Your Dream Home.
            <br />
            <span className="text-primary italic">Prefabricated.</span>
            <br />
            Built for{" "}
            <span className="text-sky-300">
              Tomorrow.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-6 lg:text-base lg:leading-7">
            Discover precision-engineered prefab homes, luxury cabins, park models,
            and commercial modular buildings from vetted American manufacturers.
            Delivered and assembled anywhere nationwide.
          </p>

          {/* Bombshelter-inspired Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            {/* Primary button: bold uppercase with hover arrow slide */}
            <a
              href="#featured"
              className="group inline-flex min-w-[11rem] items-center justify-center gap-2.5 rounded-md bg-primary px-6 py-3.5 font-ui text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/35 active:scale-[0.98] lg:text-[13px]"
            >
              <span>Explore Homes</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            {/* Secondary button: tactical border with icon */}
            <a
              href="#quote"
              className="group inline-flex min-w-[11rem] items-center justify-center gap-2.5 rounded-md border border-white/30 bg-slate-900/60 px-6 py-3.5 font-ui text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-200 hover:border-white/60 hover:bg-slate-900/80 active:scale-[0.98] lg:text-[13px]"
            >
              <Calendar size={16} className="text-sky-300" />
              <span>Request Consultation</span>
            </a>
          </div>

          {/* Bombshelter-style Tag Badges */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {tags.map(({ icon: Icon, label, accent }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-slate-950/50 px-3.5 py-2 text-xs font-semibold text-white/90 backdrop-blur-md transition hover:border-white/30 hover:bg-slate-950/70"
              >
                <Icon size={14} className={accent} />
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bombshelter-style Trust Strip at the base of the hero */}
      <div className="relative border-t border-white/15 bg-slate-950/70 backdrop-blur-md">
        <div className="site-container grid grid-cols-2 py-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {benefits.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5 border-white/10 px-3 py-2 text-center lg:border-r lg:last:border-0"
            >
              <Icon size={18} className="shrink-0 text-sky-400" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/85 lg:text-xs">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
