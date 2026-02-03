"use client"

import { Users } from "lucide-react"
import { useMemo } from "react"
import { useLanguage } from "@/contexts/language-context"
import { teamMembers, type TeamKey } from "@/lib/data/team-members"

const collator = new Intl.Collator("es", { sensitivity: "base" })

type TeamMembersSectionProps = {
  team: TeamKey
  teamDescKey: string
  gridColsClass?: string
}

const getLastName = (value: string) => {
  const normalized = value.trim()
  if (!normalized) return ""
  const parts = normalized.split(/\s+/)
  return parts[parts.length - 1]
}

export function TeamMembersSection({
  team,
  teamDescKey,
  gridColsClass = "md:grid-cols-3",
}: TeamMembersSectionProps) {
  const { t } = useLanguage()

  const members = useMemo(() => {
    const filtered = teamMembers.filter((member) => member.teams.includes(team))

    const mapped = filtered
      .map((member) => {
        const displayName = member.labelKey ? t(member.labelKey) : member.name
        const careerLabel = t(member.careerKey)
        return { ...member, displayName, careerLabel }
      })
      .sort((a, b) => {
        const aKey = getLastName(a.displayName).toLowerCase()
        const bKey = getLastName(b.displayName).toLowerCase()
        if (aKey === bKey) {
          return collator.compare(a.displayName, b.displayName)
        }
        return collator.compare(aKey, bKey)
      })

    return mapped
  }, [team, t])

  if (members.length === 0) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="flex items-start gap-4 mb-8">
        <Users className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "#006A4E" }} />
        <div>
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#006A4E" }}>
            {t("quienesConforman")}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{t(teamDescKey)}</p>
          <div className={`grid ${gridColsClass} gap-4`}>
            {members.map((member) => (
              <div key={`${member.displayName}-${member.careerLabel}`} className="p-4 border border-border rounded-lg">
                <h3 className="font-bold mb-1">{member.displayName}</h3>
                <p className="text-sm text-muted-foreground">{member.careerLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
