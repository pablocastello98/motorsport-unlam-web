"use client"

import type { ComponentType } from "react"
import type { LucideProps } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

type TeamObjectivesProps = {
  icon: ComponentType<LucideProps>
  objectiveKeys: string[]
}

export function TeamObjectives({ icon: Icon, objectiveKeys }: TeamObjectivesProps) {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="flex items-start gap-4 mb-8">
        <Icon className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "#006A4E" }} />
        <div>
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#006A4E" }}>
            {t("objetivosEquipo")}
          </h2>
          <ul className="space-y-3">
            {objectiveKeys.map((key) => (
              <li key={key} className="flex gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "#006A4E" }}
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <span className="text-muted-foreground">{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
