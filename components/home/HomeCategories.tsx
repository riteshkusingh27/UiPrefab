import { ArrowRight } from "lucide-react"
import { CategoryCard } from "@/components/cards/CategoryCard"
import { categories } from "@/data/categories"

export function HomeCategories() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="site-container">
        <div className="relative mb-7 flex flex-col items-center gap-3 text-center lg:mb-9">
          <div className="flex min-w-0 flex-col items-center gap-2 md:px-48">
            <h2 className="section-title">
              Browse by <span className="text-primary">Category</span>
            </h2>
            <p className="section-copy max-w-3xl text-balance">
              Find the perfect prefabricated style engineered for your lifestyle and budget
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex shrink-0 items-center gap-1.5 font-ui text-xs font-extrabold uppercase tracking-wider text-navy transition-colors hover:text-primary sm:text-[13px] md:absolute md:bottom-1 md:right-0"
          >
            <span>View All Categories</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
        <div className="scrollbar-none -mx-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-3 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0 sm:pb-0 lg:grid-cols-5 lg:gap-4">
          {categories.slice(0, 5).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
