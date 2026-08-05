"use client"

import { 
  Ruler, 
  DollarSign, 
  Briefcase, 
  Activity, 
  Zap, 
  Flag, 
  Gauge, 
  Compass 
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SeccionPuntuacion() {
  const { t } = useLanguage()

  const eventosEstaticos = [
    { icon: Ruler, nameKey: "fsaePuntuacionDiseno", pts: "150 pts", descKey: "fsaePuntuacionDisenoText" },
    { icon: DollarSign, nameKey: "fsaePuntuacionCostos", pts: "100 pts", descKey: "fsaePuntuacionCostosText" },
    { icon: Briefcase, nameKey: "fsaePuntuacionNegocios", pts: "75 pts", descKey: "fsaePuntuacionNegociosText" }
  ]

  const eventosDinamicos = [
    { icon: Activity, nameKey: "fsaePuntuacionResistencia", pts: "325 pts", descKey: "fsaePuntuacionResistenciaText" },
    { icon: Zap, nameKey: "fsaePuntuacionEficiencia", pts: "125 pts", descKey: "fsaePuntuacionEficienciaText" },
    { icon: Flag, nameKey: "fsaePuntuacionAutocross", pts: "100 pts", descKey: "fsaePuntuacionAutocrossText" },
    { icon: Gauge, nameKey: "fsaePuntuacionAceleracion", pts: "75 pts", descKey: "fsaePuntuacionAceleracionText" },
    { icon: Compass, nameKey: "fsaePuntuacionAgarre", pts: "50 pts", descKey: "fsaePuntuacionAgarreText" }
  ]

  return (
    <section className="py-10 container mx-auto px-4 md:px-6">
      {/* CABECERA */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#006A4E" }}>
          {t("fsaePuntuacionTitle")}
        </h2>
        <p className="text-muted-foreground text-pretty">
          {t("fsaePuntuacionText")}
        </p>
      </div>

      {/* CONTENEDOR DE UNA SOLA COLUMNA VERTICAL */}
      <div className="flex flex-col gap-12 max-w-3xl mx-auto">
        
        {/* BLOQUE ESTÁTICOS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
            <h3 className="text-2xl font-bold text-[#006A4E]">
              {t("fsaePuntuacionEstatico")}
            </h3>
            <span className="text-sm font-bold bg-[#006A4E]/10 text-[#006A4E] px-3 py-1 rounded-full">
              325 Pts
            </span>
          </div>

          {eventosEstaticos.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-card border border-border p-5 rounded-xl flex items-start gap-4 hover:border-[#006A4E]/40 transition-colors"
            >
              <item.icon className="w-6 h-6 text-[#006A4E] shrink-0 mt-1" />
              <div className="w-full">
                <div className="flex justify-between items-center mb-1 gap-2">
                  <h4 className="font-bold text-foreground">{t(item.nameKey)}</h4>
                  <span className="font-bold text-sm text-[#006A4E] shrink-0">{item.pts}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BLOQUE DINÁMICOS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
            <h3 className="text-2xl font-bold text-[#006A4E]">
              {t("fsaePuntuacionDinamico")}
            </h3>
            <span className="text-sm font-bold bg-[#006A4E]/10 text-[#006A4E] px-3 py-1 rounded-full">
              675 Pts
            </span>
          </div>

          {eventosDinamicos.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-card border border-border p-5 rounded-xl flex items-start gap-4 hover:border-[#006A4E]/40 transition-colors"
            >
              <item.icon className="w-6 h-6 text-[#006A4E] shrink-0 mt-1" />
              <div className="w-full">
                <div className="flex justify-between items-center mb-1 gap-2">
                  <h4 className="font-bold text-foreground">{t(item.nameKey)}</h4>
                  <span className="font-bold text-sm text-[#006A4E] shrink-0">{item.pts}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}