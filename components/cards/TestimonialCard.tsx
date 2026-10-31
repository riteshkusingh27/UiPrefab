import { Star } from "lucide-react"
import type { Testimonial } from "@/data/testimonials"

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
      <div className="flex gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="size-12 rounded-full border-2 border-slate-100 object-cover"
        />
        <div>
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-600 lg:text-sm">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <h3 className="mt-3 text-sm font-black uppercase tracking-tight text-navy">
            {testimonial.name}
          </h3>
          <p className="text-[11px] font-semibold text-slate-400 lg:text-xs">
            {testimonial.location}
          </p>
        </div>
      </div>
    </article>
  )
}
