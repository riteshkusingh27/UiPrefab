"use client"

import Image from "next/image"
import { ArrowRight, Bath, BedDouble, Heart, House } from "lucide-react"
import { useState } from "react"
import type { Home } from "@/data/homes"

export function HomeCard({ home }: { home: Home }) {
  const [favorite, setFavorite] = useState(false)
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_8px_28px_rgba(8,44,89,0.08)]">
      <div className="relative aspect-[1.58] overflow-hidden">
        <Image
          src={home.image}
          alt={home.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          onClick={() => setFavorite(!favorite)}
          aria-label={`Favorite ${home.name}`}
          className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white shadow"
        >
          <Heart
            size={16}
            className={favorite ? "fill-red-500 text-red-500" : "text-primary"}
          />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-black leading-6 text-navy lg:text-lg">{home.name}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-500 lg:text-[13px]">
          <span className="flex items-center gap-1">
            <House size={11} /> {home.sqft}
          </span>
          <span className="flex items-center gap-1">
            <BedDouble size={11} /> {home.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath size={11} /> {home.baths} Baths
          </span>
        </div>
        <strong className="mt-3 text-base font-black text-primary">
          {home.price}
        </strong>
        <a
          href="#"
          className="mt-3 flex w-full items-center justify-center gap-1 rounded bg-primary px-3 py-2.5 font-condensed text-xs font-bold text-white transition hover:bg-navy lg:text-sm"
        >
          View Details <ArrowRight size={11} />
        </a>
      </div>
    </article>
  )
}
