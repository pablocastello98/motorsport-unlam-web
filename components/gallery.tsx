export function Gallery() {
  const images = [
    { url: "/students-working-on-electric-race-car-chassis.jpg", alt: "Trabajo en el chasis" },
    { url: "/electric-motor-assembly-for-racing-car.jpg", alt: "Ensamblaje del motor" },
    { url: "/university-team-testing-electric-race-car.jpg", alt: "Pruebas en pista" },
    { url: "/engineering-students-designing-car-parts.jpg", alt: "Diseño de componentes" },
    { url: "/battery-pack-installation-racing-car.jpg", alt: "Instalación de baterías" },
    { url: "/team-celebrating-racing-achievement.jpg", alt: "Celebración del equipo" },
  ]

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Nuestro Progreso</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Seguí el desarrollo del proyecto desde el diseño inicial hasta las pruebas en pista.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
