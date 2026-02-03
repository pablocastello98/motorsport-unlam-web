"use client"

import type { ComponentType } from "react"
import type { LucideProps } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

type TeamDescriptionProps = {
  icon: ComponentType<LucideProps>
  descriptionKeys: string[]
  titleKey?: string
}

export function TeamDescription({
  icon: Icon,
  descriptionKeys,
  titleKey = "queHaceEquipo",
}: TeamDescriptionProps) {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="flex items-start gap-4 mb-8">
        <Icon className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "#006A4E" }} />
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#006A4E" }}>
            {t(titleKey)}
          </h2>
          {descriptionKeys.map((key) => (
            <p key={key} className="text-muted-foreground leading-relaxed">
              {t(key)}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
