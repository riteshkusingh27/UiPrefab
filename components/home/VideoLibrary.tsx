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
        <div className="absolute inset-0 bg-gradient-to-r from-[#04172d]/95 via-[#062448]/70 to-transparent" />
        <div className="site-container relative flex min-h-[370px] flex-col items-start justify-center py-12">
          <div className="max-w-md">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#75b9ff] lg:text-[13px]">
              Video Tour
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Take a Closer Look
              <br />
              at Our Prefab Homes
            </h2>
            <p className="mt-4 text-xs leading-5 text-white/75 lg:text-sm lg:leading-6">
              Watch real home tours, customer stories, and expert guides on our
              YouTube channel. Get inspired and learn everything about prefab
              living.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-xs font-extrabold text-navy"
            >
              <span className="grid size-5 place-items-center rounded bg-red-600 text-white">
                <Play size={10} fill="currentColor" />
              </span>{" "}
              Watch on YouTube
            </button>
          </div>
          <button
            onClick={() => setOpen(true)}
            aria-label="Play video tour"
            className="absolute right-[22%] top-1/2 hidden size-20 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-2xl lg:grid"
          >
            <Play size={30} fill="currentColor" />
          </button>
        </div>
      </section>
      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-4xl rounded-xl bg-deep-navy"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-10 right-0 text-white"
            >
              <X />
            </button>
            <div className="grid h-full place-items-center text-white">
              <Play size={56} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
