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

export default function PlanficacionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <TeamHero titleKey="planificacion" subtitleKey="planificacionSubtitle" isVisible={isVisible} />
          <TeamImage
            src="/images/equipos/planificacion/PLANIF.webp"
            altKey="planificacion"
            className = "w-full aspect-[16/10] md:aspect-[16/8] object-cover object-top"
          />
          <TeamDescription icon={Settings} descriptionKeys={["planificacionDescription"]} />
          <TeamObjectives
            icon={Target}
            objectiveKeys={[
              "planificacionObj1",
              "planificacionObj2",
              "planificacionObj3",
              "planificacionObj4",
              "planificacionObj5",
            ]}
          />
          <TeamMembersSection team="planificacion" teamDescKey="planificacionTeamDesc" gridColsClass="md:grid-cols-2" />
        </div>
      </main>

      <Footer />
    </div>
  )
}