"use client"

import { Flame, Zap, Bot } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SeccionCategorias() {
  const { t } = useLanguage()

  return (
    <section className="py-10 container mx-auto px-4 md:px-6">
      
      {/* TARJETA VERDE CONTENEDORA DE TODA LA SECCIÓN */}
      <div className="bg-[#006A4E] text-white rounded-3xl p-8 md:p-14 max-w-6xl mx-auto">
        
        {/* TÍTULO PRINCIPAL */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t("fsaeCategoriasTitle")}
          </h2>
        </div>

        {/* CONTENEDOR DE TARJETAS INTERNAS */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Combustión */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              {/* ÍCONO AL LADO DEL TÍTULO */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {t("fsaeCategoriasCombustion")}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("fsaeCategoriasCombustionText")}
              </p>
            </div>
          </div>

          {/* Eléctrico */}
          <div 
            className="bg-card border-2 rounded-2xl p-6 md:p-8 relative flex flex-col justify-between shadow-xl transition-all hover:shadow-2xl" 
            style={{ borderColor: "#6A0DAD" }}
          >
            {/* Insignia arriba */}
            <div 
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md"
              style={{ backgroundColor: "#6A0DAD" }}
            >
              {t("fsaeCategoriasEleccion")}
            </div>
            
            <div>
              {/* ÍCONO AL LADO DEL TÍTULO */}
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(106, 13, 173, 0.1)" }}
                >
                  <Zap className="w-5 h-5" style={{ color: "#6A0DAD" }} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {t("fsaeCategoriasElectrico")}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("fsaeCategoriasElectricoText")}
              </p>
            </div>
          </div>

          {/* Autónomo */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              {/* ÍCONO AL LADO DEL TÍTULO */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {t("fsaeCategoriasAutonomo")}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("fsaeCategoriasAutonomoText")}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}