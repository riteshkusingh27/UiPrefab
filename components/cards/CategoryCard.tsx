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
        <h3 className="text-base font-extrabold text-navy">{category.title}</h3>
        <p className="mt-2 min-h-8 text-[10px] leading-4 text-slate-500">
          {category.description}
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center gap-1 text-[10px] font-extrabold text-primary"
        >
          Explore Models <ArrowRight size={11} />
        </a>
      </div>
    </article>
  )
}
