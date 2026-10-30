import Image from "next/image"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa6"
import { Mail, MapPin, Phone } from "lucide-react"

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF, brand: "bg-[#1877f2]" },
  {
    label: "Instagram",
    icon: FaInstagram,
    brand:
      "bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fd5949_45%,#d6249f_60%,#285aeb_90%)]",
  },
  { label: "YouTube", icon: FaYoutube, brand: "bg-[#ff0000]" },
  { label: "Pinterest", icon: FaPinterestP, brand: "bg-[#e60023]" },
  { label: "LinkedIn", icon: FaLinkedinIn, brand: "bg-[#0a66c2]" },
]

const groups = [
  {
    title: "Quick Links",
    links: [
      "Home",
      "About Us",
      "Prefab Homes",
      "Cabins",
      "Tiny Homes",
      "Park Models",
      "Commercial Buildings",
      "Floor Plans",
      "Blogs",
    ],
  },
  {
    title: "Customer Support",
    links: [
      "Get a Quote",
      "Track Order",
      "FAQs",
      "Shipping & Delivery",
      "Returns & Refunds",
      "Terms & Conditions",
      "Privacy Policy",
      "Contact Us",
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-deep-navy text-white/65">
      <div className="site-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_0.9fr_1fr]">
        <div>
          <a
            href="#"
            aria-label="PrefabHome.com home"
            className="flex items-center gap-2.5 sm:gap-3"
          >
            <Image
              src="/images/houseicon.png"
              alt=""
              width={1254}
              height={1254}
              sizes="(min-width: 640px) 56px, 44px"
              className="size-11 shrink-0 object-contain sm:size-14"
            />
            <span className="text-xl font-extrabold tracking-tight whitespace-nowrap sm:text-2xl">
              <span className="text-white">Prefab</span>
              <span className="text-[#69b1ff]">Home.com</span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-xs leading-5">
            High-quality prefab and modular homes for modern living. Affordable.
            Sustainable. Customizable.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map(({ label, icon: Icon, brand }) => (
              <a
                href="#"
                key={label}
                aria-label={label}
                className={`grid size-8 place-items-center rounded-full text-white transition hover:opacity-80 ${brand}`}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-bold text-white">{group.title}</h3>
            <ul className="mt-4 space-y-2">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[11px] hover:text-white lg:text-[13px]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-xs font-bold text-white">Contact Us</h3>
          <div className="mt-4 space-y-4 text-[11px] lg:text-[13px]">
            <a href="tel:+15551234567" className="flex gap-2 hover:text-white">
              <Phone size={14} className="shrink-0 text-[#69b1ff]" /> (555)
              123-4567
            </a>
            <a
              href="mailto:info@prefabhome.com"
              className="flex gap-2 hover:text-white"
            >
              <Mail size={14} className="shrink-0 text-[#69b1ff]" />{" "}
              info@prefabhome.com
            </a>
            <p className="flex gap-2">
              <MapPin size={14} className="shrink-0 text-[#69b1ff]" /> 123 Build
              Street,
              <br />
              Austin, TX 78701, USA
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-3 py-5 text-[11px] sm:flex-row sm:items-center sm:justify-between lg:text-[13px]">
          <p>© 2026 PrefabHome.com. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
