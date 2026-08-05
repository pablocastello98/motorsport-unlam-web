"use client"

import { ShieldAlert } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SeccionCronograma() {
  const { t } = useLanguage()

  const pasos = [
    { 
      step: "01", 
      titleKey: "fsaeCronogramaDiseno", 
      descKey: "fsaeCronogramaDisenoText" 
    },
    { 
      step: "02", 
      titleKey: "fsaeCronogramaConstruir", 
      descKey: "fsaeCronogramaConstruirText" 
    },
    { 
      step: "03", 
      titleKey: "fsaeCronogramaValidar", 
      descKey: "fsaeCronogramaValidarText" 
    },
    { 
      step: "04", 
      titleKey: "fsaeCronogramaCompetir", 
      descKey: "fsaeCronogramaCompetirText" 
    }
  ]

  return (
    <section className="py-15 container mx-auto px-4 md:px-6">
      {/* CABECERA */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#006A4E" }}>
          {t("fsaeCronogramaTitle")}
        </h2>
        <p className="text-muted-foreground text-pretty">
          {t("fsaeCronogramaText")}
        </p>
      </div>

      {/* CRONOGRAMA */}
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16 relative">
        {pasos.map((item, idx) => (
          <div key={idx} className="bg-card border border-border p-6 rounded-xl relative">
            <span className="text-4xl font-black text-[#006A4E]/20 absolute top-4 right-4">
              {item.step}
            </span>
            <h3 className="text-xl font-bold mb-2 text-foreground">
              {t(item.titleKey)}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(item.descKey)}
            </p>
          </div>
        ))}
      </div>

      {/* INSPECCIÓN */}
      <div className="bg-[#006A4E] text-white p-8 md:p-12 rounded-2xl max-w-5xl mx-auto shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
            <ShieldAlert className="w-10 h-10 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">
              {t("fsaeCronogramaInspeccion")}
            </h3>
            <p className="text-emerald-50 text-sm leading-relaxed">
              {t("fsaeCronogramaInspeccionText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}