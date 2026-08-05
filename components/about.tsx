"use client"

import Link from "next/link"
import { Target, Eye, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
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

        {/* TARJETA FÓRMULA SAE */}
        <div className="text-white rounded-2xl p-12 md:p-16" style={{ backgroundColor: "#006A4E" }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl text-center md:text-left font-bold mb-6">{t("formulaSAE")}</h3>
              <p className="text-gray-100 leading-relaxed text-center md:text-left mb-6">{t("formulaSAEDescription")}</p>
              <p className="text-gray-100 leading-relaxed text-center md:text-left mb-8">{t("formulaSAEDescription2")}</p>
              
              {/* Boton */}
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-[#006A4E] hover:bg-gray-100 font-bold transition-all duration-150 ease-out hover:scale-105 active:scale-95 shadow-md"
              >
                {/* Cambiá '/formula-sae' por la ruta de tu página interna o URL externa (ej: https://fsaeonline.com) */}
                <Link href="/formula-sae">
                  {t("saberMas")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
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