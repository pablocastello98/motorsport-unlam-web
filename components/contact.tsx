"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Handshake, Loader2, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const { t } = useLanguage()
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPending(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    
    const data = {
      company: formData.get("company"),
      contactName: formData.get("contactName"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        form.reset()
      } else {
        const errorData = await response.json()
        alert(`Error: ${errorData.error || "Error al enviar"}`)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error de conexión.")
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#006A4E" }}>
            {t("uneteTitle")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {t("uneteDescription")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#006A4E" }}>
                {t("porqueSponsor")}
              </h3>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#006A4E" }}
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {t(`sponsorBenefit${i}` as any)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#006A4E" }} />
                <div>
                  <h4 className="font-bold mb-1" style={{ color: "#006A4E" }}>{t("ubicacionTitle")}</h4>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{t("ubicacionInfo")}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#006A4E" }} />
                <div>
                  <h4 className="font-bold mb-1" style={{ color: "#006A4E" }}>{t("emailTitle")}</h4>
                  <p className="text-muted-foreground text-sm">{t("emailInfo")}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Handshake className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#006A4E" }} />
                <div>
                  <h4 className="font-bold mb-1" style={{ color: "#006A4E" }}>{t("areasTitle")}</h4>
                  <p className="text-muted-foreground text-sm">{t("areasInfo")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-10">
                <CheckCircle2 className="w-16 h-16 text-green-600" />
                <h3 className="text-2xl font-bold" style={{ color: "#006A4E" }}>
                  {t("contactoExitosoTitulo")}
                </h3>
                <p className="text-muted-foreground">
                  {t("contactoExitosoMensaje")}
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                  {t("botonReenviar")}
                </Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    {t("empresaLabel")}
                  </label>
                  <Input id="company" name="company" placeholder={t("empresaPlaceholder")} required />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium mb-2">
                    {t("contactoLabel")}
                  </label>
                  <Input id="contactName" name="contactName" placeholder={t("contactoPlaceholder")} required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t("emailLabel")}
                  </label>
                  <Input id="email" name="email" type="email" placeholder={t("emailPlaceholder")} required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t("mensajeLabel")}
                  </label>
                  <Textarea id="message" name="message" placeholder={t("mensajePlaceholder")} rows={4} required />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-white" 
                  style={{ backgroundColor: "#006A4E" }} 
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("botonCargaConsulta")}
                    </>
                  ) : (
                    t("enviarConsulta")
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}