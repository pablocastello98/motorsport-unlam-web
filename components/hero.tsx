"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    // El delay de 100ms ayuda a que el navegador renderice antes de empezar la animación
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [])

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col bg-[#006A4E] md:bg-black overflow-hidden">
      
      {/* IMÁGENES DEL GRUPO */}
      <div className="absolute inset-0 w-full h-full z-0 md:aspect-auto">
        <picture>
          {/* CELULAR */}
          <source media="(max-width: 767px)" srcSet="/images/home/hero/fondoCel.webp" />

          {/* DESKTOP */}
          <img
            src="/images/home/hero/GrupalDesk1.webp"
            alt="Equipo Motorsport UNLaM"
            className="w-full h-full aspect-[24/14] object-cover object-top md:h-full md:aspect-auto md:object-right block"
          />
        </picture>

        {/* DEGRADADOS: celular, desktop, arriba */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006A4E]/10 to-[#006A4E]/90 md:hidden h-full" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r md:from-black md:via-black/10 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b md:from-[#006A4E]/70 via-transparent to-transparent h-1/3 opacity-90" />
        </div>

      {/* CONTENEDOR */}
      <div
        className={`relative z-10 w-full flex flex-col items-center md:items-start px-6 mt-[42%] md:mt-0 md:pt-16 md:px-10 transition-all duration-[1200ms] ease-out${
          /*  
             En el celular: 'translate-y' para que no choque con los bordes.
             En desktop: '-translate-x-20' para que entre desde la izquierda.
          */
          isVisible 
            ? "opacity-100 translate-y-0 md:translate-x-0" 
            : "opacity-0 translate-y-10 md:-translate-x-20 md:translate-y-0"
        }`}
      >
        
        {/* LOGO */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center md:justify-start lg:justify-start gap-4 md:gap-5 xl:gap-7 mb-7 md:mb-15 xl:mb-18 w-full md:mt-5">
          <img 
            src="/logo.png" 
            alt="Logo"
            className="h-30 w-30 md:h-45 md:w-45 xl:h-55 xl:w-55 drop-shadow-2xl object-contain object-center md:object-left xl:object-left flex-shrink-0 -mt-2 md:-mt-5 xl:mt-5s drop-shadow-2xl drop-shadow-black/20" 
          />

          {/* TITULO */}
          <h1 className="text-5xl md:text-8xl xl:text-[120px] font-bold text-white leading-[0.9] text-center md:text-left xl:text-left drop-shadow-2xl drop-shadow-black/40 -mt-2">
            MOTORSPORT<br />UNLAM
          </h1>
        </div>

        {/* BLOQUE */}
        <div className="flex flex-col w-full md:max-w-[400px] xl:max-w-[450px] mb-8 md:mb-10">

          {/* BOTONES */}
          <div className="flex flex-col items-center md:items-start xl:items-start w-full mb-8 md:mb-10 xl:mb-12">
            <div className="flex flex-col gap-4 w-full mb-0 mt-2">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-black text-lg md:text-xl xl:text-xl px-7 xl:px-25 py-7 md:py-8 xl:py-10 font-normal w-full justify-center flex-none transition-transform hover:scale-105"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="flex items-center">
                  {t("conoceProyecto")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black text-lg md:text-xl xl:text-xl px-7 xl:px-30 py-7 md:py-8 xl:py-10 bg-transparent font-normal w-full md:w-full justify-center flex-none transition-transform hover:scale-105"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("quieroColaborar")}
              </Button>
            </div>
        </div>

        {/* TEXTO */}
        <p className="w-full text-center md:text-left text-white/90 text-base md:text-lg xl:text-xl leading-relaxed">
          Primer equipo de competición eléctrica de la Universidad Nacional de La Matanza en la categoría <span className="text-white font-semibold italic">Formula SAE</span>.
        </p>
        </div>

        {/* STATS */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-20 w-full border-t border-white/20 pt-6 md:pt-2 mt-2">
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl xl:text-6xl text-white font-bold">2027</div>
            <div className="text-[10px] md:text-sm text-white/70 uppercase tracking-widest">{t("interlagos")}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl xl:text-6xl text-white font-bold">100%</div>
            <div className="text-[10px] md:text-sm text-white/70 uppercase tracking-widest">{t("electrico")}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl xl:text-6xl text-white font-bold">40+</div>
            <div className="text-[10px] md:text-sm text-white/70 uppercase tracking-widest">{t("estudiantes")}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl xl:text-6xl text-white text-nowrap font-bold">UNLaM</div>
            <div className="text-[10px] md:text-sm text-white/70 uppercase tracking-widest font-bold">{t("universidad")}</div>
          </div>
        </div>

      </div>
    </section>
  )
}