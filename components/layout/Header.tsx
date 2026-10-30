"use client"

import Image from "next/image"
import {
  ChevronDown,
  FileText,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  X,
} from "lucide-react"
import { useState } from "react"
import { TopBar } from "./TopBar"

const links = [
  { label: "Modular Homes", active: true },
  { label: "Prefab Homes" },
  { label: "Barndominiums" },
  { label: "House Kits" },
  { label: "Tiny Homes" },
  { label: "Park Models" },
  { label: "Cabins" },
  { label: "ADUs & Granny Pods" },
  { label: "A-Frames" },
  { label: "Commercial" },
  { label: "More", dropdown: true },
]

// Static until a real cart store exists; swap for the live count then.
const cartCount = 0

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative z-40 bg-white">
      <TopBar />
      <div className="site-container flex min-h-20 items-center gap-4 py-3">
        <a href="#" aria-label="PrefabHome.com home" className="block shrink-0">
          <Image
            src="/images/prefabhome-logo.png"
            alt="PrefabHome.com"
            width={2034}
            height={587}
            priority
            sizes="260px"
            className="h-auto w-[195px] sm:w-[230px] lg:w-[250px]"
          />
        </a>
        <div className="hidden min-w-0 flex-1 items-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50 lg:flex">
          <input
            aria-label="Search homes"
            placeholder="Search prefab homes, models, floor plans..."
            className="min-w-0 flex-1 bg-transparent px-5 py-3 text-xs outline-none lg:text-sm"
          />
          <button
            aria-label="Search"
            className="grid self-stretch w-14 place-items-center bg-primary text-white"
          >
            <Search size={19} />
          </button>
        </div>
        <div className="ml-auto hidden items-center gap-4 lg:flex">
          {[
            { icon: Heart, label: "Wishlist" },
            { icon: FileText, label: "Get a Quote" },
            { icon: ShoppingCart, label: "Cart", count: cartCount },
          ].map(({ icon: Icon, label, count }) => (
            <a
              href={label === "Get a Quote" ? "#quote" : "#"}
              key={label}
              aria-label={
                count === undefined
                  ? undefined
                  : `${label}, ${count} ${count === 1 ? "item" : "items"}`
              }
              className="flex flex-col items-center gap-1 font-ui text-[11px] font-bold text-black hover:text-primary lg:text-[13px]"
            >
              <span className="relative">
                <Icon size={20} />
                {count !== undefined && (
                  <span
                    aria-hidden
                    className="absolute -right-2 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-white"
                  >
                    {count > 99 ? "99+" : count}
                  </span>
                )}
              </span>
              <span>{label}</span>
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="focus-ring ml-auto lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="hidden border-y border-[#d8e8f8] bg-[#eaf3fd] lg:block">
        <nav className="site-container flex h-12 items-center justify-center gap-0.5 xl:gap-1">
          {links.map(({ label, dropdown, active }) => (
            <a
              key={label}
              href="#"
              aria-current={active ? "page" : undefined}
              className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded px-2 py-1.5 font-ui text-[12px] font-bold transition xl:text-[13px] ${
                active
                  ? "bg-[#cfe4fa] text-primary"
                  : "text-navy hover:text-primary"
              }`}
            >
              {label}
              {dropdown && <ChevronDown size={14} strokeWidth={3} />}
            </a>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="absolute inset-x-0 top-full max-h-[calc(100dvh-9rem)] overflow-y-auto overscroll-contain border-t bg-white shadow-xl lg:hidden">
          <div className="site-container flex flex-col gap-4 py-5">
            <div className="flex items-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
              <input
                aria-label="Search homes"
                placeholder="Search prefab homes, models, floor plans..."
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-xs outline-none"
              />
              <button
                aria-label="Search"
                className="grid w-12 self-stretch place-items-center bg-primary text-white"
              >
                <Search size={18} />
              </button>
            </div>
            <div className="divide-y divide-[#d8e8f8] overflow-hidden rounded-lg">
              {links.map(({ label, active }) => (
                <a
                  key={label}
                  href="#"
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block px-4 py-3.5 font-ui text-[15px] font-bold ${
                    active ? "bg-[#cfe4fa] text-primary" : "bg-[#eaf3fd] text-navy"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="rounded-md bg-primary px-5 py-3 text-center font-ui text-[15px] font-bold text-white"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
