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
  { label: "Deals", active: true },
  { label: "Prefab Homes", dropdown: true },
  { label: "Cabins", dropdown: true },
  { label: "Tiny Homes", dropdown: true },
  { label: "Park Models", dropdown: true },
  { label: "Commercial Buildings", dropdown: true },
  { label: "Floor Plans" },
  { label: "Videos" },
  { label: "Blogs" },
  { label: "About Us" },
]

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
            sizes="200px"
            className="h-auto w-[165px] sm:w-[190px]"
          />
        </a>
        <div className="hidden min-w-0 flex-1 items-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50 lg:flex">
          <input
            aria-label="Search homes"
            placeholder="Search prefab homes, models, floor plans..."
            className="min-w-0 flex-1 bg-transparent px-5 py-3 text-xs outline-none"
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
            { icon: ShoppingCart, label: "Cart" },
          ].map(({ icon: Icon, label }) => (
            <a
              href={label === "Get a Quote" ? "#quote" : "#"}
              key={label}
              className="flex flex-col items-center gap-1 text-[10px] font-black text-black hover:text-primary"
            >
              <Icon size={20} />
              <span>{label}</span>
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="focus-ring lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="hidden border-y border-[#d8e8f8] bg-[#eaf3fd] lg:block">
        <nav className="site-container flex h-12 items-center gap-1">
          {links.map(({ label, dropdown, active }) => (
            <a
              key={label}
              href="#"
              aria-current={active ? "page" : undefined}
              className={`inline-flex items-center gap-1 rounded px-3 py-1.5 text-[13px] font-bold transition ${
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
        <nav className="absolute inset-x-0 top-full border-t bg-white p-5 shadow-xl lg:hidden">
          <div className="site-container flex flex-col gap-4">
            {links.map(({ label }) => (
              <a
                key={label}
                href="#"
                onClick={() => setOpen(false)}
                className="font-black text-black"
              >
                {label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="rounded bg-primary px-5 py-3 text-center font-bold text-white"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
