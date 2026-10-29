import {
  CircleUserRound,
  Headphones,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-navy text-[10px] text-white/85">
      <div className="site-container flex min-h-8 items-center justify-between gap-4 py-1.5">
        <div className="hidden items-center gap-4 lg:flex">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={11} /> Quality Prefab Homes
          </span>
          <span className="h-3 w-px bg-white/25" />
          <span className="flex items-center gap-1.5">
            <Truck size={11} /> Fast Delivery
          </span>
          <span className="h-3 w-px bg-white/25" />
          <span>Built for a Better Tomorrow</span>
        </div>
        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          <a
            href="tel:+18001234567"
            className="flex items-center gap-1.5 hover:text-white"
          >
            <Phone size={11} /> Call Us: (555) 123-4567
          </a>
          <a href="#" className="hidden items-center gap-1.5 sm:flex">
            <Headphones size={11} /> Track Order
          </a>
          <a href="#" className="hidden items-center gap-1.5 sm:flex">
            <CircleUserRound size={11} /> My Account
          </a>
        </div>
      </div>
    </div>
  )
}
