import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MerchPromo() {
  return (
    <section className="py-20 bg-[#1c1c1c] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#006A4E]">
              ¡Llegó el Nuevo Merch Oficial!
            </h2>
            <p className="text-lg text-gray-300 md:text-xl/relaxed">
              Apoya al equipo llevando nuestros colores. Cada remera o accesorio que compres nos acerca más a la pista. Tu apoyo financia directamente la construcción de nuestro vehículo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#006A4E] text-white hover:bg-[#004d38] font-bold">
                <Link href="/merch">
                  Ver Todo el Merch
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-xl bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 flex items-center justify-center">
            {/* Promo image for merch */}
            <div className="relative w-full h-full">
              <Image
                src="/images/merch/tshirt_front.png"
                alt="Merch Oficial Motorsport UNLaM"
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Floating element for wow effect */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#006A4E]/20 blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
