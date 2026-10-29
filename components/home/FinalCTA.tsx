import Image from "next/image"
import { NewsletterForm } from "@/components/forms/NewsletterForm"

export function FinalCTA() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-primary py-9 text-white"
    >
      <Image
        src="/images/home-8.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-navy/70" />
      <div className="site-container relative grid items-center gap-6 md:grid-cols-[1fr_440px]">
        <div>
          <h2 className="text-2xl font-black">Stay Updated</h2>
          <p className="font-display mt-1 text-xs text-white/85">
            Get the latest models, exclusive offers and helpful tips.
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  )
}
