import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Article } from "@/data/articles"

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_8px_28px_rgba(8,44,89,0.08)]">
      <div className="relative aspect-[1.7] overflow-hidden">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-[9px]">
          <span className="rounded-full bg-primary px-2 py-1 font-bold text-white">
            {article.category}
          </span>
          <span className="text-slate-400">{article.date}</span>
        </div>
        <h3 className="mt-3 min-h-12 text-base font-extrabold leading-6 text-navy">
          {article.title}
        </h3>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary"
        >
          Read More <ArrowRight size={12} />
        </a>
      </div>
    </article>
  )
}
