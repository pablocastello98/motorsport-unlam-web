"use client"

import { Target, Eye, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#006A4E" }}>
            {t("sobreMotorsportTitle")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{t("aboutDescription")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#006A4E" }}>
              {t("misionTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{t("misionDescription")}</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#006A4E" }}>
              {t("visionTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{t("visionDescription")}</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#006A4E" }}>
              {t("valoresTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{t("valoresDescription")}</p>
          </div>
        </div>

        <div className="text-white rounded-2xl p-12 md:p-16" style={{ backgroundColor: "#006A4E" }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">{t("formulaSAETitle")}</h3>
              <p className="text-gray-100 leading-relaxed mb-6">{t("formulaSAEDescription")}</p>
              <p className="text-gray-100 leading-relaxed">{t("formulaSAEDescription2")}</p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="/images/home/about/motorsport-unlam-formula-sae-equipo-trabajando-en-el-taller.webp"
                alt="Integrantes de Motorsport UNLaM trabajando en el taller durante el desarrollo del monoplaza de Fórmula SAE"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
