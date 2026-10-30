import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { FloorPlanCard } from "@/components/cards/FloorPlanCard"
import { floorPlans } from "@/data/floorPlans"

export function FloorPlansSection() {
  return (
    <section className="section-pad">
      <div className="site-container">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">Floor Plans</h2>
            <p className="section-copy">
              Browse our collection of professionally designed floor plans.
            </p>
          </div>
          <a
            href="#"
            className="hidden items-center gap-1 text-xs font-bold text-primary sm:flex"
          >
            View All Floor Plans <ArrowRight size={13} />
          </a>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {floorPlans.map((plan, index) => (
            <FloorPlanCard key={plan.id} plan={plan} index={index} />
          ))}
          <article className="card-shadow overflow-hidden rounded-lg bg-white">
            <div className="relative aspect-[1.8]">
              <Image
                src="/images/home-3.jpg"
                alt="Custom modern home"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-extrabold text-navy">
                Need a Custom Floor Plan?
              </h3>
              <p className="mt-1 text-[11px] leading-5 text-slate-500 lg:text-[13px]">
                Our team can help you design the perfect home for your needs.
              </p>
              <a
                href="#quote"
                className="mt-4 block rounded bg-primary py-3 text-center text-xs font-bold text-white"
              >
                Request a Custom Plan
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
