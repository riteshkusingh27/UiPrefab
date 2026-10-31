"use client"

import { ArrowRight } from "lucide-react"
import { FormEvent, useState } from "react"

export function NewsletterForm() {
  const [done, setDone] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setDone(true)
  }
  if (done)
    return (
      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-sky-200">
        ✓ Thank you for subscribing!
      </p>
    )
  return (
    <form
      onSubmit={submit}
      className="mt-4 flex overflow-hidden rounded-md border border-white/20 bg-white/10 p-1 shadow-inner backdrop-blur-md"
    >
      <input
        type="email"
        required
        aria-label="Email address"
        placeholder="Enter your email address..."
        className="min-w-0 flex-1 bg-transparent px-3.5 py-2.5 text-xs text-white placeholder-white/60 outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="group inline-flex items-center gap-1.5 rounded bg-white px-4 py-2 font-ui text-xs font-black uppercase tracking-wider text-navy transition-all duration-200 hover:bg-sky-100 active:scale-95"
      >
        <span>Subscribe</span>
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </button>
    </form>
  )
}
