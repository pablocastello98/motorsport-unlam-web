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

export default function redesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <TeamHero titleKey="redes" subtitleKey="redesSubtitle" isVisible={isVisible} />
          <TeamImage
            src="/images/equipos/redes/motorsport-unlam-expoproyecto-foto-equipo-chasis-prototipo-pvc-universidad-nacional-de-la-matanza.webp"
            altKey="Parte del equipo Motorsport UNLaM posando junto al prototipo de chasis en PVC durante la ExpoProyecto de la Universidad Nacional de La Matanza (UNLaM)."
          />
          <TeamDescription icon={Settings} descriptionKeys={["redesDescription"]} />
          <TeamObjectives
            icon={Target}
            objectiveKeys={["redesObj1", "redesObj2", "redesObj3", "redesObj4", "redesObj5"]}
          />
          <TeamMembersSection team="redes" teamDescKey="redesTeamDesc" gridColsClass="md:grid-cols-3" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
