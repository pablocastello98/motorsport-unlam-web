"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function PreguntasFrecuentes() {
  const { t } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const preguntasKeys = [
    { qKey: "preguntas1Pregunta", aKey: "preguntas1Respuesta" },
    { qKey: "preguntas2Pregunta", aKey: "preguntas2Respuesta" },
    { qKey: "preguntas3Pregunta", aKey: "preguntas3Respuesta" },
    { qKey: "preguntas4Pregunta", aKey: "preguntas4Respuesta" },
    { qKey: "preguntas5Pregunta", aKey: "preguntas5Respuesta" },
    { qKey: "preguntas6Pregunta", aKey: "preguntas6Respuesta" },
    { qKey: "preguntas7Pregunta", aKey: "preguntas7Respuesta" },
    { qKey: "preguntas8Pregunta", aKey: "preguntas8Respuesta" }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="pt-15 pb-16 container mx-auto px-4 md:px-6">
      {/* CABECERA */}
      <div className="max-w-3xl mx-auto text-center mb-10"> {/* o w-full para pantalla completa */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#006A4E" }}>
          {t("preguntasTitle")}
        </h2>
        <p className="text-muted-foreground text-pretty">
          {t("preguntasSubtitle")}
        </p>
      </div>

      {/* LISTA DE PREGUNTAS */}
      <div className="max-w-3xl mx-auto space-y-4">
        {preguntasKeys.map((faq, idx) => (
          <div 
            key={idx} 
            className="group bg-card border border-border hover:border-[#006A4E]/60 rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full p-6 text-left font-bold flex justify-between items-center gap-4 transition-colors"
            >
              <span className={`text-foreground transition-colors duration-200 group-hover:text-[#006A4E] ${openFaq === idx ? "text-[#006A4E]" : ""}`}>
                {t(faq.qKey)}
              </span>
              <ChevronDown 
                className={`w-5 h-5 shrink-0 transition-transform duration-200 group-hover:text-[#006A4E] ${
                  openFaq === idx ? "rotate-180 text-[#006A4E]" : "text-muted-foreground"
                }`} 
              />
            </button>
            {openFaq === idx && (
              <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                {t(faq.aKey)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}