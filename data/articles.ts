export type Article = {
  id: string
  category: string
  date: string
  title: string
  image: string
}

export const articles: Article[] = [
  {
    id: "adu",
    category: "Building Guides",
    date: "Oct 20, 2026",
    title: "Backyard ADU Permitting Gets Easier",
    image: "/images/home-5.jpg",
  },
  {
    id: "benefits",
    category: "Design Ideas",
    date: "Oct 15, 2026",
    title: "10 Benefits of Choosing a Prefab Home",
    image: "/images/home-7.jpg",
  },
  {
    id: "traditional",
    category: "Buying Guide",
    date: "Oct 10, 2026",
    title: "Modular vs. Traditional Homes: Which is Right for You?",
    image: "/images/home-4.jpg",
  },
  {
    id: "cost",
    category: "Cost & Financing",
    date: "Oct 2, 2026",
    title: "How Much Does a Modular Home Cost?",
    image: "/images/home-9.jpg",
  },
]
