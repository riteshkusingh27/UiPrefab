"use client"

import Image from "next/image"
import { Play, X } from "lucide-react"
import { useState } from "react"

export function VideoLibrary() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <Image
          src="/images/home-3.jpg"
          alt="Prefab home video tour"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04172d]/95 via-[#062448]/75 to-transparent" />
        <div className="site-container relative flex min-h-[390px] flex-col items-start justify-center py-14">
          <div className="max-w-md">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Take a Closer Look
              <br />
              at Our Prefab Homes
            </h2>
            <p className="mt-4 text-xs leading-5 text-white/75 lg:text-sm lg:leading-6">
              Watch real home walkthroughs, engineering inspections, and customer stories.
              Get inspired and experience prefab quality first-hand.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="group mt-6 inline-flex items-center gap-2.5 rounded-md bg-white px-6 py-3.5 font-ui text-xs font-extrabold uppercase tracking-wider text-navy shadow-lg transition-all duration-200 hover:bg-sky-50 active:scale-[0.98] lg:text-[13px]"
            >
              <span className="grid size-5 place-items-center rounded bg-red-600 text-white shadow-sm transition-transform group-hover:scale-110">
                <Play size={10} fill="currentColor" className="translate-x-0.5" />
              </span>
              <span>Watch Video Tour</span>
            </button>
          </div>
          <button
            onClick={() => setOpen(true)}
            aria-label="Play video tour"
            className="group absolute right-[20%] top-1/2 hidden size-20 -translate-y-1/2 place-items-center rounded-full border-4 border-white/80 bg-white/95 text-navy shadow-2xl transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white lg:grid"
          >
            <Play size={30} fill="currentColor" className="translate-x-0.5 text-primary group-hover:scale-105" />
          </button>
        </div>
      </section>
      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-xl border border-white/20 bg-deep-navy shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black"
            >
              <X size={18} />
            </button>
            <div className="grid h-full place-items-center text-white">
              <Play size={56} className="text-sky-400" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
