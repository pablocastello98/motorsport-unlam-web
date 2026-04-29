"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Box, Target } from "lucide-react"
import { useEffect, useState } from "react"
import { TeamHero } from "@/components/team-hero"
import { TeamImage } from "@/components/team-image"
import { TeamDescription } from "@/components/team-description"
import { TeamObjectives } from "@/components/team-objectives"
import { TeamMembersSection } from "@/components/team-members-section"

export default function ChasisPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <TeamHero titleKey="chasis" subtitleKey="chasisSubtitle" isVisible={isVisible} />
          <TeamImage
            src="/images/equipos/chasis/CHASIS.webp"
            altKey="chasis"
            className = "w-full aspect-[16/10] md:aspect-[16/8] object-cover object-[center_25%]"
          />
          <TeamDescription
            icon={Box}
            descriptionKeys={[
              "chasisDescription1",
              "chasisDescription2",
              "chasisDescription3",
              "chasisDescription4",
            ]}
          />
          <TeamObjectives
            icon={Target}
            objectiveKeys={["chasisObj1", "chasisObj2", "chasisObj3", "chasisObj4", "chasisObj5"]}
          />
          <TeamMembersSection team="chasis" teamDescKey="chasisTeamDesc" gridColsClass="md:grid-cols-2" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
