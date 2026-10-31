"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { FormEvent, useState } from "react"

const fieldClass =
  "focus-ring w-full rounded-md border border-white/15 bg-white/[0.06] px-3.5 py-3 text-[13px] text-white placeholder-white/55 backdrop-blur-sm transition-colors hover:border-white/25 focus:border-white focus:bg-white/[0.1]"

export function ConsultationForm() {
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
    <div className="relative rounded-[14px] border border-white/15 bg-white/[0.07] p-6 shadow-[0_24px_60px_rgba(8,44,89,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl backdrop-saturate-150 sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[14px]"
      >
        <div className="absolute -right-20 -top-24 size-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
      {success ? (
        <div className="relative flex min-h-64 flex-col items-center justify-center text-center">
          <CheckCircle2 className="mb-3 text-emerald-400" size={40} />
          <h3 className="text-xl font-extrabold text-white">Thank you!</h3>
          <p className="mt-2 text-sm text-white/70">
            A home specialist will be in touch shortly.
          </p>
        </div>
      ) : (
        <div className="relative">
          <h3 className="text-2xl font-black uppercase tracking-wide text-white">
            Get a Free Consultation
          </h3>
          <p className="mb-5 mt-1 text-[13px] leading-5 text-white/70">
            Talk with a home specialist about your goals, options and pricing.
          </p>
          <form onSubmit={submit} className="space-y-3" noValidate>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="name"
                aria-label="Full name"
                placeholder="Full Name"
                className={fieldClass}
              />
              <input
                name="email"
                type="email"
                aria-label="Email address"
                placeholder="Email Address"
                className={fieldClass}
              />
              <input
                name="phone"
                type="tel"
                aria-label="Phone number"
                placeholder="Phone Number"
                className={fieldClass}
              />
              <select
                name="interest"
                aria-label="Select interest"
                className={`${fieldClass} [&>option]:text-navy`}
              >
                <option>Select Interest</option>
                <option>Modular Home</option>
                <option>Prefab Home</option>
                <option>Cabin</option>
              </select>
            </div>
            {error && <p className="text-xs text-red-300">{error}</p>}
            <button className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-ui text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-white hover:text-primary hover:shadow-md active:scale-[0.98] lg:text-[13px]">
              <span>Request Free Consultation</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
