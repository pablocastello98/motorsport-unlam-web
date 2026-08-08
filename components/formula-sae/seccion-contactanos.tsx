"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function SeccionLlamadaAccion() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-4 md:px-6 pt-10">
      {/* relative overflow-hidden para contener la imagen */}
      <div className="relative overflow-hidden bg-[#006A4E] text-white rounded-2xl p-10 md:p-16 text-center max-w-5xl mx-auto shadow-2xl">
        
        {/* FOTO DE FONDO CON DEGRADADO */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/home/unite/unite.webp"
            alt="Motorsport UNLaM"
            fill
            className="object-cover object-[center_65%] opacity-40"
            priority
          />
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, rgba(0, 106, 78, 0.92) 0%, rgba(0, 106, 78, 0.75) 60%, rgba(0, 106, 78, 0.5) 100%)"
            }}
          />
        </div>

        {/* DETALLE DECORATIVO BLUR */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none blur-2xl" />

        {/* CONTENIDO (Texto y Botones) - z-10 para que quede SOBRE la imagen */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            {t("fsaeContactanosTitle")}
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-8">
            {t("fsaeContactanosText")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="group/btn bg-white text-[#006A4E] hover:bg-emerald-50 font-bold transition-all hover:scale-105 shadow-md">
              <Link href="/contact">
                {t("fsaeContactanosButton")}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}