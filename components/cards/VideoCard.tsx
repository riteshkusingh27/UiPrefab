"use client"

import Image from "next/image"
import { Play, X } from "lucide-react"
import { useState } from "react"
import type { Video } from "@/data/videos"

export function VideoCard({ video }: { video: Video }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <article className="group">
        <button
          onClick={() => setOpen(true)}
          className="relative block aspect-video w-full overflow-hidden rounded-lg text-left"
        >
          <Image
            src={video.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 grid place-items-center bg-navy/10">
            <span className="grid size-14 place-items-center rounded-full border-4 border-white bg-navy/70 text-white">
              <Play fill="currentColor" size={22} />
            </span>
          </span>
          <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-1 text-[10px] font-bold text-white">
            {video.duration}
          </span>
        </button>
        <h3 className="mt-3 text-base font-bold leading-6 text-navy">
          {video.title}
        </h3>
      </article>
      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-4xl rounded-xl bg-deep-navy shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-11 right-0 text-white"
            >
              <X />
            </button>
            <div className="grid h-full place-items-center text-center text-white">
              <div>
                <Play className="mx-auto mb-4" size={54} />
                <p className="font-bold">{video.title}</p>
                <p className="mt-2 text-sm text-white/60">Demo video player</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
