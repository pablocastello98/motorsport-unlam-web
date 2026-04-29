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

export default function FrenosPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <TeamHero titleKey="frenos" subtitleKey="frenosSubtitle" isVisible={isVisible} />
          <TeamImage
            src="\images\equipos\frenos\FRENOS.webp"
            altKey="frenos"
            className = "w-full aspect-[16/10] md:aspect-[16/8] object-cover object-top"
          />
          <TeamDescription icon={Settings} descriptionKeys={["frenosDescription"]} />
          <TeamObjectives
            icon={Target}
            objectiveKeys={["frenosObj1", "frenosObj2", "frenosObj3", "frenosObj4", "frenosObj5"]}
          />
          <TeamMembersSection team="frenos" teamDescKey="frenosTeamDesc" gridColsClass="md:grid-cols-3" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
