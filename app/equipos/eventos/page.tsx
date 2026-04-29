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

export default function EventosPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <TeamHero titleKey="eventos" subtitleKey="eventosSubtitle" isVisible={isVisible} />
          <TeamImage
            src="/images/equipos/eventos/motorsport-unlam-eventos-y-difusion-caminando-arco-autodromo-oscar-y-juan-galvez-buenos-aires.webp"
            altKey="eventos"
            className = "w-full aspect-[16/10] md:aspect-[16/8] object-cover object-center]"
          />
          <TeamDescription icon={Settings} descriptionKeys={["eventosDescription"]} />
          <TeamObjectives
            icon={Target}
            objectiveKeys={[
              "eventosObj1",
              "eventosObj2",
              "eventosObj3",
              "eventosObj4",
              "eventosObj5",
            ]}
          />
          <TeamMembersSection team="eventos" teamDescKey="eventosTeamDesc" gridColsClass="md:grid-cols-2" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
