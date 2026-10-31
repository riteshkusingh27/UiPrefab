"use client"

import Image from "next/image"
import { ArrowRight, Plus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How much does a prefab home cost?",
    answer:
      "Most of our modular and prefab models land between $80 and $160 per square foot, depending on the floor plan, finishes and your site. Every quote breaks out the home, delivery and set-up costs separately so nothing is hidden.",
  },
  {
    question: "How long does delivery and set-up take?",
    answer:
      "Factory build time is typically 8 to 14 weeks once your plan is locked in, followed by 1 to 3 weeks on site for craning, assembly and utility hook-ups.",
  },
  {
    question: "Do I need a permit to build on my land?",
    answer:
      "Yes, in almost every county. Our team prepares the engineering and stamped drawings your local building department asks for and guides you through the submission.",
  },
  {
    question: "Can I customize the floor plan?",
    answer:
      "Every plan is a starting point. Move walls, add bedrooms, upgrade finishes, or adjust the foundation and roof pitch to suit your land and climate.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "We work with multiple lenders offering construction-to-permanent and chattel loans. Pre-qualification takes a few minutes and carries no obligation.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="section-pad overflow-hidden bg-white">
      <div className="site-container grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h2 className="section-title">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="section-copy mb-6">
            Find answers to common questions about modular and prefab homes.
          </p>
          <div className="space-y-2">
            {faqs.map(({ question, answer }, index) => {
              const expanded = open === index
              return (
                <div
                  key={question}
                  className={`overflow-hidden rounded-lg border bg-white transition-colors duration-200 ${
                    expanded
                      ? "border-primary/50 shadow-sm"
                      : "border-slate-200 hover:border-primary/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? null : index)}
                    aria-expanded={expanded}
                    className="focus-ring flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-[13px] font-extrabold text-navy transition-colors hover:text-primary lg:text-sm"
                  >
                    <span>{question}</span>
                    <Plus
                      size={16}
                      strokeWidth={2.5}
                      className={`shrink-0 transition-transform duration-300 ${
                        expanded ? "rotate-45 text-primary" : "text-navy"
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      expanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 text-xs leading-6 text-slate-600 lg:text-[13px] lg:leading-7">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="group relative grid h-full min-h-[380px] grid-cols-1 overflow-hidden rounded-xl bg-navy shadow-xl sm:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-[240px] overflow-hidden sm:absolute sm:inset-0 sm:col-span-2 sm:min-h-0">
              <Image
                src="/images/home-9.jpg"
                alt="Modern prefab home set among trees"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="origin-left object-cover object-left transition-transform duration-700 group-hover:scale-[1.03] sm:object-[70%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-navy/80 sm:hidden" />
            </div>
            <div className="hidden sm:block" />
            <div className="relative flex flex-col justify-center px-6 py-8 sm:pl-3 sm:pr-7">
              <div className="relative z-10">
                <h3 className="text-[28px] font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] xl:text-[34px]">
                  Plan Today.
                  <br />
                  <span className="text-[#8dc4ff]">Move In Sooner.</span>
                </h3>
                <p className="mt-3 text-[13px] leading-snug text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] xl:text-sm">
                  Explore the best modular and prefab homes from trusted
                  manufacturers.
                </p>
                <a
                  href="#quote"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-3 font-ui text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-white hover:text-primary hover:shadow-md active:scale-[0.98] xl:w-auto xl:px-5 xl:text-xs"
                >
                  <span>Start Your Project</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
