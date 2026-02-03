"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Settings, Target } from "lucide-react"
import { useEffect, useState } from "react"
import { TeamHero } from "@/components/team-hero"
import { TeamImage } from "@/components/team-image"
import { TeamDescription } from "@/components/team-description"
import { TeamObjectives } from "@/components/team-objectives"
import { TeamMembersSection } from "@/components/team-members-section"

export default function prensaPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <TeamHero titleKey="prensa" subtitleKey="prensaSubtitle" isVisible={isVisible} />
          <TeamImage
            src="/images/equipos/prensa/motorsport-unlam-formula-sae-foto-grupal-equipo-autodromo-oscar-y-juan-galvez-buenos-aires.webp"
            altKey="Foto grupal de parte del equipo Motorsport UNLaM en el Autódromo Óscar y Juan Gálvez (Buenos Aires) durante una jornada de actividades del proyecto Fórmula SAE."
          />
          <TeamDescription icon={Settings} descriptionKeys={["prensaDescription"]} />
          <TeamObjectives
            icon={Target}
            objectiveKeys={["prensaObj1", "prensaObj2", "prensaObj3", "prensaObj4", "prensaObj5"]}
          />
          <TeamMembersSection team="prensaydifusion" teamDescKey="prensaTeamDesc" gridColsClass="md:grid-cols-3" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
