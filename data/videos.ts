export type Video = {
  id: string
  title: string
  duration: string
  image: string
}

export const videos: Video[] = [
  {
    id: "factory-tour",
    title: "Factory Tour – How Our Homes Are Built",
    duration: "5:30",
    image: "/images/home-2.jpg",
  },
  {
    id: "designs",
    title: "Top 5 Modular Home Designs for 2026",
    duration: "2:45",
    image: "/images/home-3.jpg",
  },
  {
    id: "testimonial",
    title: "Customer Testimonial: The Johnson Family",
    duration: "4:20",
    image: "/images/home-8.jpg",
  },
  {
    id: "installation",
    title: "Modular Home Installation Step by Step",
    duration: "10:35",
    image: "/images/home-6.jpg",
  },
]
