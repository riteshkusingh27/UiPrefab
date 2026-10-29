import { ArrowRight } from "lucide-react"
import { ArticleCard } from "@/components/cards/ArticleCard"
import { articles } from "@/data/articles"

export function LatestArticles() {
  return (
    <section className="section-pad">
      <div className="site-container">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">Latest Blogs &amp; Guides</h2>
            <p className="section-copy">
              Tips, guides, and inspiration for your prefab home journey.
            </p>
          </div>
          <a
            href="#"
            className="hidden items-center gap-1 text-xs font-bold text-primary sm:flex"
          >
            View All Blogs <ArrowRight size={13} />
          </a>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
