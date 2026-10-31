import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Category } from "@/data/categories"

export function CategoryCard({ category }: { category: Category }) {
  return (
    <a
      href="#"
      className="group flex min-w-[200px] snap-start flex-col overflow-hidden rounded-lg bg-deep-navy shadow-md transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-primary sm:min-w-0"
    >
      {/* Image bleeding into the card through a bottom-up gradient */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width: 640px) 200px, (max-width: 1024px) 33vw, 200px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-deep-navy/85 via-deep-navy/30 to-transparent" />
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col items-center px-3 pb-4 pt-1 text-center">
        <h3 className="text-[15px] font-black uppercase tracking-wide text-white">
          {category.title}
        </h3>
        <p className="mt-1 min-h-8 flex-1 text-xs leading-snug text-slate-300">
          {category.description}
        </p>
        <span className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-primary py-2 font-ui text-[11px] font-extrabold uppercase tracking-wider text-white transition-colors group-hover:bg-white group-hover:text-primary">
          Explore Models
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </a>
  )
}
