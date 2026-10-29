import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { FeaturedHomes } from "@/components/home/FeaturedHomes"
import { FinalCTA } from "@/components/home/FinalCTA"
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
        <LatestArticles />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
