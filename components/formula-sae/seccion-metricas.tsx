"use client"

import { Globe, Users, Trophy, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SeccionMetricas() {
  const { t } = useLanguage()

  const metricas = [
    {
      icon: Globe,
      val: "20+",
      labelKey: "fsaeMetricasUniversidades"
    },
    {
      icon: Users,
      valKey: "1K+",
      labelKey: "fsaeMetricasEstudiantes"
    },
    {
      icon: Trophy,
      val: "1000",
      labelKey: "fsaeMetricasPuntos"
    },
    {
      icon: Target,
      val: "FSAE 2027",
      labelKey: "fsaeMetricasBrasil"
    }
  ]

  return (
    <section className="py-15 container mx-auto px-4 md:px-6">
      {/* CABECERA */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#006A4E" }}>
          {t("fsaeMetricasTitle")}
        </h2>
        <p className="text-muted-foreground text-pretty">
          {t("fsaeMetricasText")}
        </p>
      </div>

      {/* TARJETAS DE MÉTRICAS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
        {metricas.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-card border border-border p-6 rounded-2xl hover:border-[#006A4E]/40 transition-colors flex flex-col items-center justify-center"
          >
            <item.icon className="w-8 h-8 text-[#006A4E] mb-3" />
            <div className="text-3xl font-extrabold mb-1 text-foreground">
              {item.valKey ? t(item.valKey) : item.val}
            </div>
            <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">
              {t(item.labelKey)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}