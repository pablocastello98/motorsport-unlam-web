"use client"

import { Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import { FaTiktok } from "react-icons/fa"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="text-white py-12" style={{ backgroundColor: "#006A4E" }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Motorsport UNLaM</h3>
            <p className="text-white/80 text-sm leading-relaxed">{t("footerDescription")}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t("navegacion")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                  {t("sobreNosotrosLink")}
                </Link>
              </li>
              <li>
                <Link href="#vehicle" className="text-white/80 hover:text-white transition-colors">
                  {t("vehiculoLink")}
                </Link>
              </li>
              <li>
                <Link href="#sponsors" className="text-white/80 hover:text-white transition-colors">
                  {t("sponsorsLink")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                  {t("contactoLink")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t("contactoTitle")}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>{t("contactoEmail")}</li>
              <li>{t("contactoUniversidad")}</li>
              <li>{t("contactoUbicacion")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t("seguinosTitle")}</h4>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/motorsportunlam/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (abre en pestaña nueva)"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@unlam_motorsport?_t=zm-90etzxw2blc&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok (abre en pestaña nueva)"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <FaTiktok className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/motorsport-unlam-80b412389/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (abre en pestaña nueva)"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube (abre en pestaña nueva)"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
