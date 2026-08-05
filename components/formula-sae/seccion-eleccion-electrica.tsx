"use client"

import { Zap, GraduationCap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SeccionEleccionElectrica() {
  const { t } = useLanguage()

  const puntosClave = [
    "fsaeEleccionPunto1",
    "fsaeEleccionPunto2",
    "fsaeEleccionPunto3"
  ]

  return (
    <section className="py-15 bg-[#006A4E] text-white w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          
          {/* COLUMNA IZQUIERDA*/}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t("fsaeEleccionTitle")}
            </h2>
            
            <p className="text-gray-100 leading-relaxed">
              {t("fsaeEleccionText")}
            </p>

            <ul className="space-y-3">
              {puntosClave.map((key, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-100">
                  <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA DERECHA: TARJETA */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-8 md:p-12 rounded-2xl space-y-6 shadow-2xl">
            <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              {t("fsaeEleccionPunto4")}
            </h3>

            <p className="text-gray-100 text-sm leading-relaxed">
              {t("fsaeEleccionPunto4Text")}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}