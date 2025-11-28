import Header from "@/components/header"
import { Container } from "@mui/material"
import Hanging from "@/components/hanging"
import Hero from "@/components/hero"
import Sides from "@/components/sides"
import Quote from "@/components/quote"
import Projects from "@/components/projects"

function page() {
  return (
    <Container>
      <div className="bg-background">
          <Hanging />
          <Header />
          <Hero />
          <Quote />
          <Sides />
          <Projects />
      </div>
    </Container>
  )
}

export default page