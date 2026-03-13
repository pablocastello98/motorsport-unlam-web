"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DollarSign, Target } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { TeamMembersSection } from "@/components/team-members-section"
import { TeamHero } from "@/components/team-hero"
import { TeamDescription } from "@/components/team-description"
import { TeamObjectives } from "@/components/team-objectives"
import { TeamImage } from "@/components/team-image"

export default function CostosPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <TeamHero titleKey="costos" subtitleKey="costosSubtitle" isVisible={isVisible} />
          <TeamImage
            src="/images/equipos/costos/fotocostosYfinanzas.webp"
            altKey="costos"
            className = "w-full aspect-[16/10] md:aspect-[16/8] object-cover object-top"
          />
          <TeamDescription icon={DollarSign} descriptionKeys={["costosDescription"]} />
          <TeamObjectives
            icon={Target}
            objectiveKeys={["costosObj1", "costosObj2", "costosObj3", "costosObj4", "costosObj5"]}
          />
          <TeamMembersSection team="costos" teamDescKey="costosTeamDesc" gridColsClass="md:grid-cols-2" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
