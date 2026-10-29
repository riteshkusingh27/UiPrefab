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
      <p className="mt-4 text-xs font-semibold text-[#80bdff]">
        Thanks for subscribing!
      </p>
    )
  return (
    <form
      onSubmit={submit}
      className="mt-4 flex overflow-hidden rounded bg-white"
    >
      <input
        type="email"
        required
        aria-label="Email address"
        placeholder="Your Email Address"
        className="min-w-0 flex-1 px-3 py-3 text-xs text-slate-700 outline-none"
      />
      <button aria-label="Subscribe" className="bg-primary px-4 text-white">
        <ArrowRight size={16} />
      </button>
    </form>
  )
}
