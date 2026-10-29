"use client"

import { CheckCircle2 } from "lucide-react"
import { FormEvent, useState } from "react"

export function QuoteForm() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (!data.get("name") || !data.get("email") || !data.get("phone")) {
      setError("Please complete all required fields.")
      return
    }
    setError("")
    setSuccess(true)
  }
  return (
    <form
      id="quote"
      onSubmit={submit}
      className="card-shadow w-full min-w-0 scroll-mt-24 rounded-lg bg-white p-5 text-slate-800 sm:p-6"
    >
      {success ? (
        <div className="flex min-h-72 flex-col items-center justify-center text-center">
          <CheckCircle2 className="mb-3 text-emerald-500" size={40} />
          <h3 className="text-xl font-extrabold text-navy">Thank you!</h3>
          <p className="mt-2 text-sm text-slate-500">
            A home specialist will be in touch shortly.
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-extrabold text-navy">Get a Free Quote</h2>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Tell us what you&apos;re looking for and get a personalized quote
            today.
          </p>
          <div className="mt-4 space-y-3">
            <input
              name="name"
              aria-label="Full name"
              placeholder="Full Name"
              className="focus-ring w-full rounded border border-slate-200 px-3 py-3 text-xs"
            />
            <input
              name="email"
              type="email"
              aria-label="Email address"
              placeholder="Email Address"
              className="focus-ring w-full rounded border border-slate-200 px-3 py-3 text-xs"
            />
            <input
              name="phone"
              type="tel"
              aria-label="Phone number"
              placeholder="Phone Number"
              className="focus-ring w-full rounded border border-slate-200 px-3 py-3 text-xs"
            />
            <select
              name="type"
              aria-label="Home type"
              className="focus-ring w-full rounded border border-slate-200 px-3 py-3 text-xs"
            >
              <option>Select Home Type</option>
              <option>Modular Home</option>
              <option>Prefab Home</option>
              <option>Cabin</option>
            </select>
          </div>
          {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
          <button className="focus-ring mt-4 w-full rounded bg-primary py-3 text-xs font-extrabold text-white hover:bg-navy">
            Request Quote
          </button>
          <div className="mt-4 flex items-center justify-center gap-2 border-t pt-4">
            <div className="flex -space-x-2">
              {[11, 14, 18].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/40?img=${n}`}
                  alt=""
                  className="size-7 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-[10px] text-slate-500">
              Trusted by 10,000+
              <br />
              happy homeowners
            </span>
          </div>
        </>
      )}
    </form>
  )
}
