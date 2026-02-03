"use client"

import { useLanguage } from "@/contexts/language-context"

type TeamHeroProps = {
  titleKey: string
  subtitleKey: string
  isVisible: boolean
}

export function TeamHero({ titleKey, subtitleKey, isVisible }: TeamHeroProps) {
  const { t } = useLanguage()

  return (
    <div
      className={`text-center mb-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance" style={{ color: "#006A4E" }}>
        {t(titleKey)}
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        {t(subtitleKey)}
      </p>
    </div>
  )
}
