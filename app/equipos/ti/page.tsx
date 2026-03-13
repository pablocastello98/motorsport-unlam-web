"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Cpu, DollarSign, Target } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { TeamMembersSection } from "@/components/team-members-section"
import { TeamHero } from "@/components/team-hero"
import { TeamDescription } from "@/components/team-description"
import { TeamObjectives } from "@/components/team-objectives"
import { TeamImage } from "@/components/team-image"

export default function TIPage() {
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
          <TeamHero titleKey="ti" subtitleKey="tiSubtitle" isVisible={isVisible} />
          <TeamImage
            src="/images/equipos/ti/foto-equipo-ti.webp"
            className = "w-full h-[400px] object-cover object-[center_25%]"
            altKey="ti"
          />
          <TeamDescription icon={Cpu} descriptionKeys={[
             "tiDescription1",
              "tiDescription2",
              "tiDescription3",
          ]} />
          <TeamObjectives
            icon={Target}
            objectiveKeys={["tiObj1", "tiObj2", "tiObj3", "tiObj4", "tiObj5"]}
          />
          <TeamMembersSection team="ti" teamDescKey="tiTeamDesc" gridColsClass="md:grid-cols-2" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
