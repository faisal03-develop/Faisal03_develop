import Header from "@/components/header"
import { Container } from "@mui/material"
import Hanging from "@/components/hanging"
import Hero from "@/components/hero"

function page() {
  return (
    <Container>
      <div className="bg-background">
          <Hanging />
          <Header />
          <Hero />
      </div>
    </Container>
  )
}

export default page