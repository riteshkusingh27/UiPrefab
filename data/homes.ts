export type Home = {
  id: string
  name: string
  price: string
  sqft: string
  beds: number
  baths: number
  image: string
  tags: string[]
}

export const homes: Home[] = [
  {
    id: "aspen",
    name: "The Farmhouse Charm",
    price: "$79,900",
    sqft: "1,200 sq ft",
    beds: 3,
    baths: 2,
    image: "/images/home-2.jpg",
    tags: ["Featured", "Best Sellers"],
  },
  {
    id: "meadow",
    name: "Mountain View Cabin",
    price: "$54,900",
    sqft: "1,450 sq ft",
    beds: 3,
    baths: 2,
    image: "/images/home-3.jpg",
    tags: ["Featured", "New Models"],
  },
  {
    id: "sierra",
    name: "Modern Tiny Home",
    price: "$39,900",
    sqft: "1,800 sq ft",
    beds: 4,
    baths: 3,
    image: "/images/home-8.jpg",
    tags: ["Featured", "Best Sellers"],
  },
  {
    id: "elm",
    name: "Commercial Office Building",
    price: "$129,900",
    sqft: "980 sq ft",
    beds: 2,
    baths: 1,
    image: "/images/home-9.jpg",
    tags: ["Featured", "New Models"],
  },
]
