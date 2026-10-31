import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { FaqSection } from "@/components/home/FaqSection"
import { FeaturedHomes } from "@/components/home/FeaturedHomes"
import { FinalCTA } from "@/components/home/FinalCTA"
import { FinancingSection } from "@/components/home/FinancingSection"
import { HeroSection } from "@/components/home/HeroSection"
import { HowItWorks } from "@/components/home/HowItWorks"
import { HomeCategories } from "@/components/home/HomeCategories"
import { LatestArticles } from "@/components/home/LatestArticles"
import { Testimonials } from "@/components/home/Testimonials"
import { VideoLibrary } from "@/components/home/VideoLibrary"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HomeCategories />
        <WhyChooseUs />
        <FeaturedHomes />
        <VideoLibrary />
        <HowItWorks />
        <FinancingSection />
        <LatestArticles />
        <Testimonials />
        <FaqSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
