"use client"

import Image from "next/image"
import { ArrowRight, Heart, House, Ruler, Sparkles } from "lucide-react"
import { useState } from "react"
import type { Home } from "@/data/homes"

// Badge tint per tag, kept inside the existing navy/primary palette.
const tagTint: Record<string, string> = {
  "Best Sellers": "bg-primary",
  "New Models": "bg-navy",
}

export function HomeCard({ home }: { home: Home }) {
  const [favorite, setFavorite] = useState(false)
  const tag = home.tags.find((t) => t in tagTint) ?? home.tags[0]

  return (
    <article className="group flex min-w-[230px] snap-start flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/60 hover:shadow-xl sm:min-w-0">
      {/* Image Container with Badges */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-deep-navy">
        <Image
          src={home.image}
          alt={home.name}
          fill
          sizes="(max-width: 640px) 230px, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-2 top-2 inline-flex items-center gap-1 rounded px-2 py-1 font-ui text-[10px] font-black uppercase tracking-wider text-white shadow ${
            tagTint[tag] ?? "bg-primary"
          }`}
        >
          <Sparkles size={12} />
          {tag}
        </span>

        {/* Favorite Button */}
        <button
          onClick={() => setFavorite(!favorite)}
          aria-label={`Favorite ${home.name}`}
          className="absolute right-2 top-2 grid size-8 place-items-center rounded-full border border-white/20 bg-white/90 text-navy shadow-sm backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
        >
          <Heart
            size={15}
            className={favorite ? "fill-red-500 text-red-500" : "text-slate-600 hover:text-red-500"}
          />
        </button>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-3.5">
        <div>
          <h3 className="line-clamp-2 min-h-10 text-[15px] font-black leading-snug tracking-tight text-navy transition-colors group-hover:text-primary">
            <a href="#">{home.name}</a>
          </h3>
          <p className="mt-1.5 text-xs text-slate-600">
            From{" "}
            <span className="text-lg font-black tracking-tight text-primary">
              {home.price}
            </span>
          </p>
          <div className="mt-2 space-y-1 text-xs text-slate-700">
            <div className="flex items-center gap-1.5">
              <Ruler size={14} className="shrink-0 text-slate-400" />
              <span>{home.sqft}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <House size={14} className="shrink-0 text-slate-400" />
              <span>
                {home.beds} Bed / {home.baths} Bath
              </span>
            </div>
          </div>
        </div>

        {/* Specs + Quote actions */}
        <div className="mt-3 flex items-center gap-2">
          <a
            href="#"
            className="inline-flex flex-1 items-center justify-center rounded px-2.5 py-2 font-ui text-[11px] font-extrabold uppercase tracking-wider text-navy transition-colors bg-slate-100 hover:bg-navy hover:text-white"
          >
            <span>Specs</span>
          </a>
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-1 rounded bg-primary px-3 py-2 font-ui text-[11px] font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-navy"
          >
            <span>Quote</span>
            <ArrowRight
              size={12}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  )
}
