"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function ContactoCTA() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 -mt-15">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className="mx-auto rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-white border border-white/10 group"
          style={{ backgroundColor: "#006A4E" }}
        >
          {/* FOTO DE FONDO */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/home/unite/unite.webp"
              alt="Motorsport UNLaM"
              fill
              className="object-cover object-[center_65%] opacity-40"
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

          {/* CONTENIDO PRINCIPAL */}
          <div className="space-y-4 max-w-xl text-left relative z-10">
            
            {/* TÍTULO */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 shrink-0">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {t("uneteEquipo")}
              </h2>
            </div>
            
            <p className="text-gray-100 text-sm md:text-base leading-relaxed text-pretty">
              {t("uneteDescription")}
            </p>
          </div>

          {/* BOTÓN */}
          <div className="w-full md:w-auto shrink-0 relative z-10">
            <Button 
              asChild 
              size="lg" 
              className="w-full md:w-auto bg-white hover:bg-white/95 font-bold gap-2 shadow-lg transition-all duration-300 text-sm md:text-base px-7 py-6 hover:shadow-2xl hover:-translate-y-0.5"
              style={{ color: "#006A4E" }}
            >
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 group/btn">
                <span>{t("contactoCTA")}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}