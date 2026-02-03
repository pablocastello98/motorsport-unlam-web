"use client"

import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Objectives() {
  const { t } = useLanguage()

  return (
    <section id="objectives" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#006A4E" }}>
            {t("objetivosTitle")}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: "#006A4E" }}
              >
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg text-foreground leading-relaxed">{t("objetivo1Text")}</span>
            </li>
            <li className="flex gap-4 items-start">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: "#006A4E" }}
              >
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg text-foreground leading-relaxed">{t("objetivo2Text")}</span>
            </li>
            <li className="flex gap-4 items-start">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: "#006A4E" }}
              >
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg text-foreground leading-relaxed">{t("objetivo3Text")}</span>
            </li>
            <li className="flex gap-4 items-start">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: "#006A4E" }}
              >
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg text-foreground leading-relaxed">{t("objetivo4Text")}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
