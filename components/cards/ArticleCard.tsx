import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"
import type { Article } from "@/data/articles"

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_16px_36px_rgba(8,44,89,0.12)]">
      {/* Image with Category Badge */}
      <div className="relative aspect-[1.7] w-full overflow-hidden bg-slate-100">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-50" />
        <span className="absolute left-3 top-3 rounded border border-white/20 bg-primary/90 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
          {article.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
          <Calendar size={12} className="text-slate-400" />
          <span>{article.date}</span>
        </div>

        <h3 className="mt-2.5 flex-1 text-base font-black leading-snug tracking-tight text-navy transition-colors group-hover:text-primary lg:text-lg">
          {article.title}
        </h3>

        {/* Bombshelter-style Read More Button */}
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-2 font-ui text-xs font-extrabold uppercase tracking-wider text-primary transition-colors group-hover:text-navy"
        >
          <span>Read Article</span>
          <ArrowRight
            size={13}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </div>
    </article>
  )
}
