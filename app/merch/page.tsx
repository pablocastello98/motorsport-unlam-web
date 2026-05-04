import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

export default function MerchPage() {
  const secondaryProducts = [
    {
      name: "Casco Oficial",
      image: "/images/merch/helmet.png",
      price: "$--.---",
    },
    {
      name: "Gorra del Equipo",
      image: "/images/merch/cap.png",
      price: "$--.---",
    },
    // You can add more secondary products here like keychains, etc.
  ]

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#1c1c1c] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[#006A4E]/10 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Apoya al Equipo: <br />
              <span className="text-[#006A4E]">¡Llegó el Nuevo Merch Oficial!</span>
            </h1>
            <p className="text-xl text-gray-300">
              Cada remera o accesorio que compres nos acerca más a la pista. Tu apoyo financia directamente la compra de materiales para lograr construir el vehículo.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/merch/tshirt_front.png"
                  alt="Remera Oficial Frente"
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src="/images/merch/tshirt_back.png"
                  alt="Remera Oficial Dorso"
                  fill
                  className="object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <p className="text-sm text-center text-gray-500">Pasa el mouse para ver el dorso</p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1c1c1c] mb-2">Remera Oficial Motorsport UNLaM</h2>
                <p className="text-2xl font-semibold text-[#006A4E]">Lanzamiento 2026</p>
              </div>
              <p className="text-gray-600 text-lg">
                Nuestra remera oficial está diseñada con materiales de alta calidad para ofrecer máxima comodidad. 
                Con los colores del equipo y un diseño inspirado en el automovilismo, es la forma perfecta de mostrar tu apoyo.
              </p>
              <div className="pt-4">
                {/* TODO: Insert Empretienda link here */}
                <Button asChild size="lg" className="w-full sm:w-auto bg-[#006A4E] hover:bg-[#004d38] text-white text-lg py-6 px-8 rounded-full shadow-lg shadow-[#006A4E]/30 transition-all hover:scale-105">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Comprar en Empretienda
                  </a>
                </Button>
                <p className="text-xs text-gray-400 mt-3 text-center sm:text-left">
                  Serás redirigido a nuestra tienda oficial en Empretienda para finalizar la compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Products Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1c1c1c]">Accesorios Oficiales</h2>
              <p className="text-gray-600 mt-2">Completa tu colección y sigue apoyando al equipo</p>
            </div>
          </div>
          
          {/* Simple scrollable carousel */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
            {secondaryProducts.map((product, index) => (
              <div key={index} className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl p-4 shadow-sm border border-gray-100 snap-start shrink-0 group hover:shadow-md transition-shadow">
                <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-lg text-[#1c1c1c]">{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-semibold text-[#006A4E]">{product.price}</span>
                  {/* TODO: Insert Empretienda link here */}
                  <Button asChild size="sm" variant="outline" className="border-[#006A4E] text-[#006A4E] hover:bg-[#006A4E] hover:text-white">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Comprar
                    </a>
                  </Button>
                </div>
              </div>
            ))}
            {/* Empty card for Keychain placeholder */}
            <div className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl p-4 shadow-sm border border-gray-100 snap-start shrink-0 group hover:shadow-md transition-shadow">
                <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                  <div className="text-gray-300 text-center px-4">
                    <ShoppingBag className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="font-medium">Llavero Oficial</p>
                    <p className="text-sm">Próximamente</p>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-[#1c1c1c]">Llavero Oficial</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-semibold text-gray-400">Próximamente</span>
                  <Button disabled size="sm" variant="outline" className="border-gray-200 text-gray-400">
                    Comprar
                  </Button>
                </div>
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
