"use client"

import { Cpu, Wrench, Briefcase, GraduationCap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SeccionInterdisciplinaria() {
  const { t } = useLanguage()

  const items = [
    { 
      icon: Cpu, 
      titleKey: "fsaeInterElectronica", 
      descKey: "fsaeInterElectronicaText"
    },
    { 
      icon: Wrench, 
      titleKey: "fsaeInterMecanica", 
      descKey: "fsaeInterMecanicaText"
    },
    { 
      icon: Briefcase, 
      titleKey: "fsaeInterGestion", 
      descKey: "fsaeInterGestionText"
    },
    { 
      icon: GraduationCap, 
      titleKey: "fsaeInterTalentos", 
      descKey: "fsaeInterTalentosText"
    }
  ]

  return (
    <section className="py-16 container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#006A4E" }}>
          {t("fsaeInterTitle")}
        </h2>
        <p className="text-muted-foreground text-pretty">
          {t("fsaeInterText")}
        </p>
      </div>

      {/* DISPOSICIÓN VERTICAL: flex flex-col en lugar de grid de columnas */}
      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-card border border-border p-5 rounded-xl hover:border-[#006A4E]/50 transition-colors flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Ícono a la izquierda */}
            <div className="w-12 h-12 bg-[#006A4E]/10 rounded-lg flex items-center justify-center shrink-0">
              <item.icon className="w-6 h-6 text-[#006A4E]" />
            </div>

            {/* Texto al lado */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {t(item.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}