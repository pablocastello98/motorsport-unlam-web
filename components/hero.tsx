"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-stretch justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#006A4E] to-black" />

      <div className="absolute inset-0 z-0">
        <img
          src="/images/home/hero/fondonuevo.jpeg"
          alt="Equipo Motorsport UNLaM (Fórmula SAE/Formula Student) en la parrilla de salida de Top Race en el Autódromo Óscar y Juan Gálvez, Buenos Aires (noviembre 2025)."
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content with smooth entry animation */}
      <div
        className={`relative z-10 container mx-auto flex min-h-screen flex-col px-4 pt-20 pb-12 text-center transition-all duration-1000 md:pb-16 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-center mb-8">
          <img src="/logo.png" alt="Motorsport UNLaM Logo" className="h-32 w-32 md:h-40 md:w-40" />
        </div>

        <div className="mt-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance">MOTORSPORT UNLAM</h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-6 h-auto"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("conoceProyecto")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 h-auto bg-transparent"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("quieroColaborar")}
          </Button>
        </div>
        </div>

        {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">2027</div>
            <div className="text-sm text-gray-300 uppercase tracking-wide">{t("interlagos")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-gray-300 uppercase tracking-wide">{t("electrico")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-sm text-gray-300 uppercase tracking-wide">{t("estudiantes")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">UNLaM</div>
            <div className="text-sm text-gray-300 uppercase tracking-wide">{t("universidad")}</div>
          </div>
        </div>*/}
      </div>
    </section>
  )
}
