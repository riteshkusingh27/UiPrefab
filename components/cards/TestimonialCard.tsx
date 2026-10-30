import { Star } from "lucide-react"
import type { Testimonial } from "@/data/testimonials"

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-xl border border-slate-100 bg-white p-5 shadow-[0_8px_28px_rgba(8,44,89,0.08)]">
      <div className="flex gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="size-12 rounded-full object-cover"
        />
        <div>
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} fill="currentColor" />
            ))}
          </div>
          <p className="mt-2 text-[13px] leading-5 text-slate-600 lg:text-sm lg:leading-6">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <h3 className="mt-3 text-sm font-extrabold text-navy">
            {testimonial.name}
          </h3>
          <p className="text-[11px] text-slate-400 lg:text-[13px]">{testimonial.location}</p>
        </div>
      </div>
    </article>
  )
}
