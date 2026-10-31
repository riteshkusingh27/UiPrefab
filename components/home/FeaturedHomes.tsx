import { ArrowRight } from "lucide-react"
import { HomeCard } from "@/components/cards/HomeCard"
import { homes } from "@/data/homes"

export function FeaturedHomes() {
  return (
    <section id="featured" className="section-pad overflow-hidden bg-[#f8fbff]">
      <div className="site-container">
        <div className="relative mb-7 flex flex-col items-center gap-3 text-center lg:mb-9">
          <div className="flex min-w-0 flex-col items-center gap-2 md:px-48">
            <h2 className="section-title">
              Featured <span className="text-primary">Prefab Homes</span>
            </h2>
            <p className="section-copy max-w-3xl text-balance">
              Explore our most popular precision-built models. Ready to customize and order.
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex shrink-0 items-center gap-1.5 font-ui text-xs font-extrabold uppercase tracking-wider text-navy transition-colors hover:text-primary sm:text-[13px] md:absolute md:bottom-1 md:right-0"
          >
            <span>View All Models</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="scrollbar-none -mx-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 sm:pb-0 lg:grid-cols-4">
          {homes.map((home) => (
            <HomeCard key={home.id} home={home} />
          ))}
        </div>
      </div>
    </section>
  )
}
