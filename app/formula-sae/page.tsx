"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamHero } from "@/components/team-hero"
import { useLanguage } from "@/contexts/language-context"

// Componentes modularizados en español
import { SeccionDesafio } from "@/components/formula-sae/seccion-desafio"
import { SeccionInterdisciplinaria } from "@/components/formula-sae/seccion-interdisciplinaria"
import { SeccionCategorias } from "@/components/formula-sae/seccion-categorias"
import { SeccionCronograma } from "@/components/formula-sae/seccion-cronograma"
import { SeccionPuntuacion } from "@/components/formula-sae/seccion-puntuacion"
import { SeccionEleccionElectrica } from "@/components/formula-sae/seccion-eleccion-electrica"
import { SeccionMetricas } from "@/components/formula-sae/seccion-metricas"
import { SeccionLlamadaAccion } from "@/components/formula-sae/seccion-contactanos"

export default function FormulaSaePage() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col text-pretty">
      <Header />

      <main className="flex-1 pt-24 pb-20 overflow-hidden">
        
        {/* HERO */}
        <section className="relative container mx-auto px-4 md:px-6 pt-0 pb-12">
          
          {/* BOTÓN VOLVER AL INICIO (Solo visible en celulares) */}
          <div className="flex md:hidden mb-6">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-[#006A4E]/30 text-[#006A4E] hover:bg-[#006A4E]/10 font-medium rounded-lg gap-2"
            >
              <Link href="/#objectives">
                <ArrowLeft className="w-4 h-4" />
                <span>{t("volverInicio")}</span>
              </Link>
            </Button>
          </div>

          <TeamHero 
            titleKey="fsaeTitle" 
            subtitleKey="fsaeDescription"
            isVisible={isVisible}
          />
          <div className="flex flex-wrap justify-center gap-4 -mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <Button asChild size="lg" className="bg-[#006A4E] hover:bg-[#00523c] text-white font-bold shadow-lg">
              <a href="https://www.sae.org/events/student" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                {t("fsaelink")}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* SECCIONES */}
        <SeccionDesafio />
        <SeccionInterdisciplinaria />
        <SeccionCategorias />
        <SeccionCronograma /> 
        <SeccionPuntuacion />
        <SeccionEleccionElectrica />
        <SeccionMetricas />
        <SeccionLlamadaAccion />

      </main>

      <Footer />
    </div>
  )
}