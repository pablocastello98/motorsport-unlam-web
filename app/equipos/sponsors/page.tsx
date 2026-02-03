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

export default function sponsorsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <TeamHero titleKey="sponsors" subtitleKey="sponsorsSubtitle" isVisible={isVisible} />
          <TeamImage
            src="/images/equipos/sponsors/motorsport-unlam-formula-sae-equipo-reunido-trabajando-en-el-taller.webp"
            altKey="Miembros de Motorsport UNLaM reunidos trabajando en el taller en tareas de diseño, armado y planificación del proyecto Fórmula SAE/Formula Student."
          />
          <TeamDescription icon={Settings} descriptionKeys={["sponsorsDescription"]} />
          <TeamObjectives
            icon={Target}
            objectiveKeys={["sponsorsObj1", "sponsorsObj2", "sponsorsObj3", "sponsorsObj4", "sponsorsObj5"]}
          />
          <TeamMembersSection team="sponsors" teamDescKey="sponsorsTeamDesc" gridColsClass="md:grid-cols-3" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
