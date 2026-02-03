"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Wind, Target } from "lucide-react"
import { useEffect, useState } from "react"
import { TeamHero } from "@/components/team-hero"
import { TeamImage } from "@/components/team-image"
import { TeamDescription } from "@/components/team-description"
import { TeamObjectives } from "@/components/team-objectives"
import { TeamMembersSection } from "@/components/team-members-section"

export default function AerodinamicaPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <TeamHero titleKey="aerodinamica" subtitleKey="aerodinamicaSubtitle" isVisible={isVisible} />
          <TeamImage
            src="/images/equipos/aerodinamica/motorsport-unlam-formula-sae-equipo-aerodinamica-taller.webp"
            altKey="aerodinamica"
          />
          <TeamDescription
            icon={Wind}
            descriptionKeys={[
              "aerodinamicaDescription1",
              "aerodinamicaDescription2",
              "aerodinamicaDescription3",
              "aerodinamicaDescription4",
            ]}
          />
          <TeamObjectives
            icon={Target}
            objectiveKeys={[
              "aerodinamicaObj1",
              "aerodinamicaObj2",
              "aerodinamicaObj3",
              "aerodinamicaObj4",
              "aerodinamicaObj5",
            ]}
          />
          <TeamMembersSection team="aerodinamica" teamDescKey="aerodinamicaTeamDesc" gridColsClass="md:grid-cols-3" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
