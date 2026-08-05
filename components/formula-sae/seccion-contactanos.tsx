"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function SeccionLlamadaAccion() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-4 md:px-6 pt-10">
      <div className="bg-[#006A4E] text-white rounded-2xl p-10 md:p-16 text-center max-w-5xl mx-auto shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
          {t("fsaeContactanosTitle")}
        </h2>
        <p className="text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-8">
          {t("fsaeContactanosText")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-[#006A4E] hover:bg-emerald-50 font-bold transition-all hover:scale-105 shadow-md">
            <Link href="/#contact">
              {t("fsaeContactanosButton")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}