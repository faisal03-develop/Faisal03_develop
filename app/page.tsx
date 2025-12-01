import Header from "@/components/header"
import Hanging from "@/components/hanging"
import Hero from "@/components/hero"
import Sides from "@/components/sides"
import Quote from "@/components/quote"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from '@/components/footer'


function page() {
  return (
    <div className="mx-auto max-w-screen-lg px-4">
      <div className="bg-background">
          <Hanging />
          <Header />
          <Hero />
          <Quote />
          <Sides />
          <Projects />
          <Skills />
          <About />
          <Contact />
          <Footer />
      </div>
    </div>

  )
}

export default page