import { ArrowRight } from "lucide-react"
import { HomeCard } from "@/components/cards/HomeCard"
import { homes } from "@/data/homes"

export function FeaturedHomes() {
  return (
    <section id="featured" className="section-pad bg-[#f8fbff]">
      <div className="site-container">
        <div className="flex items-end justify-between gap-5">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-navy sm:text-3xl">
              Featured Prefab Homes
            </h2>
            <p className="section-copy">
              Explore our most popular models. Customize and request a quote
              today.
            </p>
          </div>
          <a
            href="#"
            className="hidden shrink-0 items-center rounded-md border border-primary bg-white px-4 py-2.5 text-xs font-extrabold text-primary sm:flex"
          >
            View All Homes <ArrowRight size={13} className="ml-1" />
          </a>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homes.map((home) => (
            <HomeCard key={home.id} home={home} />
          ))}
        </div>
        <a
          href="#"
          className="mt-6 flex items-center justify-center rounded-md border border-primary bg-white px-4 py-3 text-xs font-extrabold text-primary sm:hidden"
        >
          View All Homes <ArrowRight size={13} className="ml-1" />
        </a>
      </div>
    </section>
  )
}
