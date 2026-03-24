"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { SPONSORS_SORTED } from "@/lib/data/sponsors"
import { INSTITUCIONES_SORTED } from "@/lib/data/sponsors"

export function Sponsors() {
  const { t } = useLanguage()

  return (
    <section id="sponsors" className="py-20 text-white" style={{ backgroundColor: "#006A4E" }}>
      <div className="container mx-auto px-4">

        {/* SPONSORS */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance mb-5">{t("sponsorTitle")}</h2>
          <p className="text-lg text-gray-100 leading-relaxed text-pretty mb-12">{t("sponsorDescription")}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {SPONSORS_SORTED.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={sponsor.alt}
            className="bg-white border border-black/10 rounded-lg p-4 flex items-center justify-center h-28 md:h-30 w-[145px] md:w-[220px] flex-none transition-transform hover:scale-105"
          >
            <div className="relative w-full h-full">
                <Image
                  src={`/images/home/sponsors/${sponsor.logo}`}
                  alt={sponsor.alt}
                  fill
                  className="object-contain scale-[1.2]"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </div>
            <span className="sr-only">{sponsor.geoTip}</span>
          </a>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12 mt-18">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t("sponsorInstituciones")}</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {INSTITUCIONES_SORTED.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={sponsor.alt}
            className="bg-white border border-black/10 rounded-lg p-4 flex items-center justify-center h-28 md:h-30 w-[145px] md:w-[220px] flex-none transition-transform hover:scale-105"
          >
            <div className="relative w-full h-full">
                <Image
                  src={`/images/home/sponsors/${sponsor.logo}`}
                  alt={sponsor.alt}
                  fill
                  className="object-contain scale-[1.2]"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </div>
            <span className="sr-only">{sponsor.geoTip}</span>
          </a>
          ))}
        </div>
      </div>
    </section>
  )
}

