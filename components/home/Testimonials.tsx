import { TestimonialCard } from "@/components/cards/TestimonialCard"
import { testimonials } from "@/data/testimonials"

export function Testimonials() {
  return (
    <section className="section-pad bg-sky-bg">
      <div className="site-container">
        <div className="text-center">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-copy">Real stories from happy homeowners.</p>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
