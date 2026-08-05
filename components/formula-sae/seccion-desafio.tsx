"use client"

import Image from "next/image"
import { ShieldAlert } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SeccionDesafio() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-[#006A4E] text-white w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* TEXTOS Y BLOQUE DE ALERTA */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t("fsaeDesafioTitle")}
            </h2>
            
            <p className="text-gray-100 leading-relaxed">
              {t("fsaeDesafioText")}
            </p>
            
            <p className="text-gray-100 leading-relaxed">
              {t("fsaeDesafioText2")}
            </p>

            {/* CUADRO TRASLÚCIDO (GLASSMORPHISM) */}
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-white shrink-0 mt-0.5" />
              <p className="text-sm text-gray-100 leading-relaxed">
                {t("fsaeDesafioText3")}
              </p>
            </div>
          </div>

          {/* CONTENEDOR DE IMAGEN */}
          <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/home/about/motorsport-unlam-formula-sae-equipo-trabajando-en-el-taller.webp"
              alt="Estudiantes trabajando sobre el monoplaza en el taller"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <span className="text-white text-sm font-medium drop-shadow-sm">
                {t("fsaeDesafioFoto")}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}