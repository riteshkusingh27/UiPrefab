import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Category } from "@/data/categories"

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_8px_28px_rgba(8,44,89,0.08)]">
      <div className="relative aspect-[1.55] overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width: 640px) 50vw, 17vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-base font-extrabold text-navy lg:text-lg">{category.title}</h3>
        <p className="mt-2 min-h-9 text-xs leading-5 text-slate-500 lg:text-sm">
          {category.description}
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center gap-1 font-ui text-xs font-bold text-primary lg:text-sm"
        >
          Explore Models <ArrowRight size={11} />
        </a>
      </div>
    </article>
  )
}
