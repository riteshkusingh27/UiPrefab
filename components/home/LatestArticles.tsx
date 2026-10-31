import { ArrowRight } from "lucide-react"
import { ArticleCard } from "@/components/cards/ArticleCard"
import { articles } from "@/data/articles"

export function LatestArticles() {
  return (
    <section className="section-pad">
      <div className="site-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="section-title">Latest Blogs &amp; Guides</h2>
            <p className="section-copy">
              Tips, guides, and inspiration for your prefab home journey.
            </p>
          </div>
          <a
            href="#"
            className="group hidden shrink-0 items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-2.5 font-ui text-xs font-extrabold uppercase tracking-wider text-navy shadow-sm transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white active:scale-[0.98] sm:inline-flex"
          >
            <span>View All Guides</span>
            <ArrowRight
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
