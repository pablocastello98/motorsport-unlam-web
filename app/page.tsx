import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Objectives } from "@/components/objectives"
import { Sponsors } from "@/components/sponsors"
import { Vehicle } from "@/components/vehicle"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MerchPromo } from "@/components/merch-promo"
import { PreguntasFrecuentes } from "@/components/preguntas-frecuentes" 

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Objectives />
      <Sponsors />
      <Vehicle />
      <MerchPromo /> 
      <PreguntasFrecuentes />
      <Contact />
      <Footer />
    </main>
  )
}
