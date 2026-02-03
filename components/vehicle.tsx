"use client"

import { Battery, Gauge, Zap, Weight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Vehicle() {
  const { t } = useLanguage()

  return (
    <section id="vehicle" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#006A4E" }}>
            {t("vehiculoTitle")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{t("vehiculoDescription")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <img
              src="/images/home/vehicle/motorsport-unlam-formula-sae-diseno-cad-monoplaza.webp"
              alt="Diseño del chasis en CAD durante el desarrollo del monoplaza de Motorsport UNLaM para Fórmula SAE"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Battery className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#006A4E" }}>
                  {t("propulsionTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("propulsionDescription")}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#006A4E" }}>
                  {t("bateriaTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("bateriaDescription")}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Weight className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#006A4E" }}>
                  {t("chasisLightTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("chasisLightDescription")}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Gauge className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#006A4E" }}>
                  {t("aerodinamicaTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("aerodinamicaDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
