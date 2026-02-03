"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Cpu, Target } from "lucide-react"
import { useEffect, useState } from "react"
import { TeamHero } from "@/components/team-hero"
import { TeamImage } from "@/components/team-image"
import { TeamDescription } from "@/components/team-description"
import { TeamObjectives } from "@/components/team-objectives"
import { TeamMembersSection } from "@/components/team-members-section"

export default function ElectronicaPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <TeamHero titleKey="electronica" subtitleKey="electronicaSubtitle" isVisible={isVisible} />
          <TeamImage
            src="/images/equipos/electronica/motorsport-unlam-formula-sae-equipo-electronica-diagnostico-electrico-taller.webp"
            altKey="electronica"
          />
          <TeamDescription icon={Cpu} descriptionKeys={["electronicaDescription"]} />
          <TeamObjectives
            icon={Target}
            objectiveKeys={[
              "electronicaObj1",
              "electronicaObj2",
              "electronicaObj3",
              "electronicaObj4",
              "electronicaObj5",
            ]}
          />
          <TeamMembersSection team="electronica" teamDescKey="electronicaTeamDesc" gridColsClass="md:grid-cols-2" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
