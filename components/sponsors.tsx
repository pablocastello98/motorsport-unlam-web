"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { SPONSORS_SORTED } from "@/lib/data/sponsors"

export function Sponsors() {
  const { t } = useLanguage()

  return (
    <section id="sponsors" className="py-24 text-white" style={{ backgroundColor: "#006A4E" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t("sponsorTitle")}</h2>
          <p className="text-lg text-gray-100 leading-relaxed text-pretty">{t("sponsorDescription")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {SPONSORS_SORTED.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={sponsor.alt}
            className="bg-white border border-black/10 rounded-lg p-6 flex items-center justify-center h-32"
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
