import { CategoryCard } from "@/components/cards/CategoryCard"
import { categories } from "@/data/categories"

export function HomeCategories() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.slice(0, 5).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
