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

export default function SuspensionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <TeamHero titleKey="suspension" subtitleKey="suspensionSubtitle" isVisible={isVisible} />
          <TeamImage
            src="/images/equipos/suspension/motorsport-unlam-formula-sae-equipo-suspension-asesoramiento-tecnico-pirelli-autodromo.webp"
            altKey="suspension"
          />
          <TeamDescription icon={Settings} descriptionKeys={["suspensionDescription"]} />
          <TeamObjectives
            icon={Target}
            objectiveKeys={[
              "suspensionObj1",
              "suspensionObj2",
              "suspensionObj3",
              "suspensionObj4",
              "suspensionObj5",
            ]}
          />
          <TeamMembersSection team="suspension" teamDescKey="suspensionTeamDesc" gridColsClass="md:grid-cols-2" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
