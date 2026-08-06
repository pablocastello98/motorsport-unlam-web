"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Handshake, Loader2, CheckCircle2, ArrowLeft, ExternalLink, Instagram, Linkedin, ShoppingBag } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
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
    <>
      <Header />
      
      <main className="min-h-screen bg-muted/30">
        {/* HERO */}
        <section className="relative pt-20 pb-20 md:pt-40 md:pb-30 overflow-hidden bg-[#006A4E]">
          {/* Imagen de Fondo */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/home/hero/GrupalCel.webp"
              alt="Motorsport UNLaM"
              fill
              className="object-cover object-[center_30%] opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-[#006A4E]/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* BOTÓN VOLVER AL INICIO (Visible en Mobile) */}
            <div className="flex md:hidden mb-6 max-w-3xl mx-auto">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 font-medium rounded-lg gap-2"
              >
                <Link href="/">
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t("volverInicio")}</span>
                </Link>
              </Button>
            </div>

            {/* Contenido de la cabecera */}
            <div className="max-w-3xl mx-auto text-center text-white space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                {t("uneteTitle")}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed text-pretty font-normal">
                {t("uneteDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN DEL FORMULARIO Y BENEFICIOS */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
            
            {/* TARJETA IZQUIERDA: BENEFICIOS Y ÁREAS DE SPONSOREO */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col justify-between space-y-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6" style={{ color: "#006A4E" }}>
                    {t("porqueSponsor")}
                  </h2>
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

                <div className="space-y-4 pt-6 border-t border-border/60">
                  <div className="flex gap-4 items-start">
                    <Handshake className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#006A4E" }} />
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: "#006A4E" }}>{t("areasTitle")}</h3>
                      <p className="text-muted-foreground text-sm">{t("areasInfo")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                <p className="text-xs text-muted-foreground leading-relaxed">
                    {t("areaspropuesta")}
                </p>
              </div>
            </div>

            {/* TARJETA DERECHA: FORMULARIO DE CONTACTO */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col justify-center">
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
        </section>

        {/* TARJETAS DE CONTACTO DIRECTO Y REDES SOCIALES */}
        <section className="pb-20 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* TARJETA 1: CONTACTO DIRECTO */}
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold tracking-wider text-[#006A4E] uppercase">
                  {t("contactoLink")}
                </h2>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">{t("emailTitle")}</p>
                  <Link 
                    href="mailto:motorsport@unlam.edu.ar"
                    className="inline-flex items-center gap-3 text-foreground hover:text-[#006A4E] font-semibold text-base md:text-lg transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-[#006A4E] group-hover:scale-110 transition-transform" />
                    <span>motorsport@unlam.edu.ar</span>
                  </Link>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold text-foreground">{t("contactoUniversidad")}</p>
                    <p className="text-sm text-muted-foreground">{t("contactoUbicacion")}</p>
                  </div>

                  {/* Mapa con Botón interactivo */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border shadow-inner group">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.3641581326856!2d-58.5628052!3d-34.670757599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc62cc3ef7083%3A0x8867107f425fade5!2sUniversidad%20Nacional%20de%20La%20Matanza!5e0!3m2!1ses-419!2sar!4v1785985358568!5m2!1ses-419!2sar"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                    
                    <Link
                      href="https://maps.app.goo.gl/rsb8aQn8nRLWuYY17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 bg-white text-[#006A4E] hover:bg-[#006A4E] hover:text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md border border-border transition-all duration-300"
                    >
                      <span>{t("abrirmaps")}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* TARJETA 2: REDES SOCIALES Y TIENDA */}
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold tracking-wider text-[#006A4E] uppercase">
                  {t("redes")}
                </h2>

                <div className="flex flex-col gap-3">
                  {/* INSTAGRAM */}
                  <Link
                    href="https://www.instagram.com/motorsportunlam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-muted/40 hover:bg-[#006A4E]/10 border border-transparent hover:border-[#006A4E]/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center border border-border group-hover:border-[#006A4E]/30 transition-colors shrink-0">
                      <Instagram className="w-5 h-5 text-[#006A4E]" />
                    </div>
                    <span className="text-base font-medium text-foreground group-hover:text-[#006A4E]">
                      Instagram
                    </span>
                  </Link>

                  {/* LINKEDIN */}
                  <Link
                    href="https://www.linkedin.com/in/motorsport-unlam-80b412389/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-muted/40 hover:bg-[#006A4E]/10 border border-transparent hover:border-[#006A4E]/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center border border-border group-hover:border-[#006A4E]/30 transition-colors shrink-0">
                      <Linkedin className="w-5 h-5 text-[#006A4E]" />
                    </div>
                    <span className="text-base font-medium text-foreground group-hover:text-[#006A4E]">
                      LinkedIn
                    </span>
                  </Link>

                  {/* TIKTOK */}
                  <Link
                    href="https://www.tiktok.com/@motorsportunlam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-muted/40 hover:bg-[#006A4E]/10 border border-transparent hover:border-[#006A4E]/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center border border-border group-hover:border-[#006A4E]/30 transition-colors shrink-0">
                      <svg className="w-5 h-5 fill-[#006A4E]" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.39V9.06a6.34 6.34 0 0 0-5 2.11 6.3 6.3 0 0 0-1.56 4.35 6.34 6.34 0 0 0 6.34 6.34 6.29 6.29 0 0 0 6.31-6.32V9.4a7.92 7.92 0 0 0 4.37 1.32V7.27a4.85 4.85 0 0 1-1.35-.58z"/>
                      </svg>
                    </div>
                    <span className="text-base font-medium text-foreground group-hover:text-[#006A4E]">
                      TikTok
                    </span>
                  </Link>

                  {/* TIENDA OFICIAL */}
                  <Link
                    href="https://motorsportunlam.tiendanegocio.com"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-muted/40 hover:bg-[#006A4E]/10 border border-transparent hover:border-[#006A4E]/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center border border-border group-hover:border-[#006A4E]/30 transition-colors shrink-0">
                      <ShoppingBag className="w-5 h-5 text-[#006A4E]" />
                    </div>
                    <span className="text-base font-medium text-foreground group-hover:text-[#006A4E]">
                      {t("merchpromoLink")}
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}