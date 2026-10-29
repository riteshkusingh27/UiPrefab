export type Category = {
  id: string
  title: string
  description: string
  image: string
}

export const categories: Category[] = [
  {
    id: "prefab",
    title: "Prefab Homes",
    description: "Modern homes for every lifestyle",
    image: "/images/home-2.jpg",
  },
  {
    id: "cabins",
    title: "Cabins",
    description: "Rustic charm & modern comfort",
    image: "/images/home-3.jpg",
  },
  {
    id: "tiny",
    title: "Tiny Homes",
    description: "Smart living, big possibilities",
    image: "/images/home-9.jpg",
  },
  {
    id: "park",
    title: "Park Models",
    description: "Perfect for vacation or full-time living",
    image: "/images/home-1.jpg",
  },
  {
    id: "commercial",
    title: "Commercial Modular Buildings",
    description: "Flexible spaces for growing businesses",
    image: "/images/home-4.jpg",
  },
]
