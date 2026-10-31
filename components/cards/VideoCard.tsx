"use client"

import Image from "next/image"
import { Play, X } from "lucide-react"
import { useState } from "react"
import type { Video } from "@/data/videos"

export function VideoCard({ video }: { video: Video }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md">
        <button
          onClick={() => setOpen(true)}
          className="relative block aspect-video w-full overflow-hidden rounded-lg bg-slate-900 text-left"
        >
          <Image
            src={video.image}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-12 place-items-center rounded-full border-2 border-white/80 bg-slate-950/70 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary">
              <Play fill="currentColor" size={18} className="translate-x-0.5" />
            </span>
          </span>
          <span className="absolute bottom-2.5 right-2.5 rounded bg-black/85 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            {video.duration}
          </span>
        </button>
        <h3 className="mt-3 text-sm font-black uppercase tracking-tight text-navy transition-colors group-hover:text-primary lg:text-base">
          {video.title}
        </h3>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-xl border border-white/20 bg-deep-navy shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black"
            >
              <X size={18} />
            </button>
            <div className="grid h-full place-items-center text-center text-white">
              <div>
                <Play className="mx-auto mb-4 text-sky-400" size={54} />
                <p className="text-lg font-black uppercase tracking-tight">{video.title}</p>
                <p className="mt-2 text-sm text-white/60">Demo video tour player</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
