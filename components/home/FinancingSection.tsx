import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { ConsultationForm } from "@/components/forms/ConsultationForm"

const perks = [
  "Competitive Rates",
  "Multiple Lenders",
  "Quick Pre-Qualification",
  "No Obligation",
]

export function FinancingSection() {
  return (
    <section id="financing" className="section-pad overflow-hidden bg-[#f4faff]">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-8 shadow-2xl sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src="/images/home-6.jpg"
              alt=""
              fill
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover object-center brightness-[0.55] saturate-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/35 to-primary/45" />
          </div>
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6 xl:col-span-7">
              <div className="grid items-start gap-6 sm:grid-cols-2 sm:gap-8">
                <div>
                  <h2 className="text-3xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-4xl lg:text-[40px]">
                    Flexible Financing{" "}
                    <span className="text-[#8dc4ff]">Options Available</span>
                  </h2>
                  <p className="mt-4 max-w-sm text-xs leading-6 text-slate-200 lg:text-sm lg:leading-7">
                    Turn your dream home into reality with convenient financing
                    options. Our team can help you explore multiple lenders to
                    find the best solution for your budget.
                  </p>
                </div>
                <ul className="space-y-3 sm:pt-2">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary shadow-sm">
                        <Check size={14} strokeWidth={3} className="text-white" />
                      </span>
                      <span className="text-xs font-bold text-white lg:text-sm">
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-7">
                <a
                  href="#quote"
                  className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-ui text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-white hover:text-primary hover:shadow-md active:scale-[0.98] lg:text-[13px]"
                >
                  <span>Learn About Financing</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 xl:col-span-5">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
