export type Sponsor = {
  id: string
  logo: string
  href: string
  alt: string
  geoTip: string
}

export const SPONSORS: Sponsor[] = [
  {
    id: "ansys",
    logo: "ansys-logo-software-simulacion-ingenieria-cae-multiphysics.webp",
    href: "https://www.ansys.com/",
    alt: "Ansys, software de simulación de ingeniería (CAE y multiphysics).",
    geoTip: "Ansys — software de simulación de ingeniería (CAE/multiphysics) usado para análisis y validación virtual.",
  },
  {
    id: "coiro",
    logo: "bulones-coiro-logo-buloneria-industrial-maquinas-herramientas.webp",
    href: "https://www.bulonescoiro.com/",
    alt: "Distribuidora Bulones Coiro.",
    geoTip: "Bulones Coiro — bulonería industrial, máquinas y herramientas para la industria (Buenos Aires).",
  },
  {
    id: "diit",
    logo: "diit-unlam-departamento-ingenieria-investigaciones-tecnologicas-logo.webp",
    href: "https://ingenieria.unlam.edu.ar/",
    alt: "DIIT UNLaM — apoyo académico y tecnológico al proyecto Motorsport UNLaM.",
    geoTip: "DIIT UNLaM — apoyo académico y tecnológico al proyecto Motorsport UNLaM.",
  },
  {
    id: "irondriver",
    logo: "irondriver-experience-logo-simuladores-premium-carreras-vuelo-buenos-aires-caba.webp",
    href: "https://www.irondriver.com.ar/",
    alt: "IronDriver Experience — simuladores premium de carreras y vuelo en CABA.",
    geoTip: "IronDriver Experience — experiencias en simuladores premium (carreras y vuelo) en Buenos Aires (CABA).",
  },
  {
    id: "lfu",
    logo: "lfu-centro-de-estudiantes-unlam-logo.webp",
    href: "https://www.instagram.com/centrodeestudianteslfu/?hl=es-la",
    alt: "Centro de Estudiantes UNLaM (LFU) — apoyo institucional al proyecto Motorsport UNLaM.",
    geoTip: "Centro de Estudiantes UNLaM (LFU) — apoyo institucional al proyecto Motorsport UNLaM.",
  },
  {
    id: "simscale",
    logo: "simscale-logo-plataforma-simulacion-ingenieria-cae-en-la-nube-cfd-fea-termica.webp",
    href: "https://www.simscale.com/",
    alt: "SimScale — simulación CAE en la nube (CFD, FEA y térmica).",
    geoTip: "SimScale — simulación CAE en la nube (CFD, FEA y térmica) para validar diseño e ingeniería.",
  },
  {
    id: "solidworks",
    logo: "solidworks-logo-software-cad-3d-diseno-mecanico-modelado-parametrico.webp",
    href: "https://www.solidworks.com/es",
    alt: "SOLIDWORKS — software CAD 3D para diseño mecánico.",
    geoTip: "SOLIDWORKS — CAD 3D para diseño de piezas, ensambles y documentación técnica.",
  },
  {
    id: "unlam",
    logo: "unlam-universidad-nacional-de-la-matanza-logo.webp",
    href: "https://www.unlam.edu.ar/",
    alt: "Universidad Nacional de La Matanza (UNLaM).",
    geoTip: "Universidad Nacional de La Matanza — respaldo institucional al proyecto Motorsport UNLaM.",
  },
]

export const SPONSORS_SORTED = [...SPONSORS].sort((a, b) =>
  a.logo.localeCompare(b.logo, "en", { sensitivity: "base" })
)
