"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Megaphone, Target } from "lucide-react"
import { useEffect, useState } from "react"
import { TeamHero } from "@/components/team-hero"
import { TeamImage } from "@/components/team-image"
import { TeamDescription } from "@/components/team-description"
import { TeamObjectives } from "@/components/team-objectives"
import { TeamMembersSection } from "@/components/team-members-section"

export default function ComunicacionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <TeamHero titleKey="comunicacion" subtitleKey="comunicacionSubtitle" isVisible={isVisible} />
          <TeamImage src="/social-media-content-creation-team-working-on-mark.jpg" 
          altKey="comunicacion" 
          className = "w-full aspect-[16/10] md:aspect-[16/8] object-cover object-center"
          />
          <TeamDescription icon={Megaphone} descriptionKeys={["comunicacionDescription"]} />
          <TeamObjectives
            icon={Target}
            objectiveKeys={[
              "comunicacionObj1",
              "comunicacionObj2",
              "comunicacionObj3",
              "comunicacionObj4",
              "comunicacionObj5",
            ]}
          />
          <TeamMembersSection team="comunicacion" teamDescKey="comunicacionTeamDesc" gridColsClass="md:grid-cols-2" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
