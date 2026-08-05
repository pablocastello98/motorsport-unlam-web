"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function MerchPromo() {
  const { t } = useLanguage()

  return (
    <section id="tienda"
     className="py-1 md:py-15 bg-muted/30 text-white">
      <div className="container mx-auto px-6 md:px-6">
        
        {/* RECUADRO ESTILO TARJETA */}
        <div className="text-white rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden bg-[#006A4E]">
          <div className="grid gap-12 lg:grid-cols-2 items-center relative z-10">
            
            {/* Columna Izquierda: Titulo, descripcion y boton (Centrados en mobile, izquierda en desktop) */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
              <h2 className="text-3xl font-bold sm:text-3xl md:text-5xl text-white w-full">
                {t("merchPromoTitle")}
              </h2>
              
              <p className="text-gray-100 md:text-lg text-center md:text-left text-pretty">
                {t("merchPromoDescription")}
              </p>
              {/* Boton */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2 w-full">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-[#006A4E] font-bold transition-all duration-150 ease-out hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-lg"
                >
                  <Link href="https://motorsportunlam.tiendanegocio.com" target="_blank" rel="noopener noreferrer">
                    {t("merchPromoButton")}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Columna Derecha: Imagen directa sin recuadro */}
            <Link 
              href="https://motorsportunlam.tiendanegocio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative mx-auto aspect-square w-full max-w-[300px] md:max-w-[380px] overflow-hidden rounded-2xl flex items-center justify-center cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.03] will-change-transform"
            >
              <Image
                src="/images/merch/apoya.webp"
                alt={t("merchPromoAlt")}
                fill
                className="object-contain rounded-2xl"
              />
            </Link>

          </div>
        </div>

      </div>
    </section>
  )
}