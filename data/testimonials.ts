export type Testimonial = {
  id: string
  name: string
  location: string
  quote: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah M.",
    location: "Texas, USA",
    quote:
      "The quality is far beyond our expectations. The entire design and support team was amazing.",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: "michael",
    name: "Michael R.",
    location: "Nevada, USA",
    quote: "The process was smooth and transparent. We love our new home!",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: "emily",
    name: "Emily T.",
    location: "California, USA",
    quote:
      "Affordable, beautiful and energy efficient. Highly recommend PrefabHome.com!",
    image: "https://i.pravatar.cc/100?img=32",
  },
]
