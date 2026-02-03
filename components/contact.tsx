"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Handshake } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#006A4E" }}>
            {t("uneteTitle")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{t("uneteDescription")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#006A4E" }}>
                {t("porqueSponsor")}
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#006A4E" }}
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed">{t("sponsorBenefit1")}</span>
                </li>
                <li className="flex gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#006A4E" }}
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed">{t("sponsorBenefit2")}</span>
                </li>
                <li className="flex gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#006A4E" }}
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed">{t("sponsorBenefit3")}</span>
                </li>
                <li className="flex gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#006A4E" }}
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed">{t("sponsorBenefit4")}</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#006A4E" }} />
                <div>
                  <h4 className="font-bold mb-1" style={{ color: "#006A4E" }}>
                    {t("ubicacionTitle")}
                  </h4>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{t("ubicacionInfo")}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#006A4E" }} />
                <div>
                  <h4 className="font-bold mb-1" style={{ color: "#006A4E" }}>
                    {t("emailTitle")}
                  </h4>
                  <p className="text-muted-foreground text-sm">{t("emailInfo")}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Handshake className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#006A4E" }} />
                <div>
                  <h4 className="font-bold mb-1" style={{ color: "#006A4E" }}>
                    {t("areasTitle")}
                  </h4>
                  <p className="text-muted-foreground text-sm">{t("areasInfo")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  {t("empresaLabel")}
                </label>
                <Input id="company" placeholder={t("empresaPlaceholder")} />
              </div>

              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                  {t("contactoLabel")}
                </label>
                <Input id="contact-name" placeholder={t("contactoPlaceholder")} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t("emailLabel")}
                </label>
                <Input id="email" type="email" placeholder={t("emailPlaceholder")} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t("mensajeLabel")}
                </label>
                <Textarea id="message" placeholder={t("mensajePlaceholder")} rows={4} />
              </div>

              <Button type="submit" className="w-full text-white" style={{ backgroundColor: "#006A4E" }}>
                {t("enviarConsulta")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
