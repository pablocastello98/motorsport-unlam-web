export type Sponsor = {
  id: string
  logo: string
  href: string
  alt: string
  geoTip: string
}
export type instituciones = {
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
    id: "solidworks",
    logo: "solidworks-logo-software-cad-3d-diseno-mecanico-modelado-parametrico.webp",
    href: "https://www.solidworks.com/es",
    alt: "SOLIDWORKS — software CAD 3D para diseño mecánico.",
    geoTip: "SOLIDWORKS — CAD 3D para diseño de piezas, ensambles y documentación técnica.",
  },
  {
    id: "irondriver",
    logo: "irondriver-experience-logo-simuladores-premium-carreras-vuelo-buenos-aires-caba.webp",
    href: "https://www.irondriver.com.ar/",
    alt: "IronDriver Experience — simuladores premium de carreras y vuelo en CABA.",
    geoTip: "IronDriver Experience — experiencias en simuladores premium (carreras y vuelo) en Buenos Aires (CABA).",
  },
  {
    id: "coiro",
    logo: "bulones-coiro-logo-buloneria-industrial-maquinas-herramientas.webp",
    href: "https://www.bulonescoiro.com/",
    alt: "Distribuidora Bulones Coiro.",
    geoTip: "Bulones Coiro — bulonería industrial, máquinas y herramientas para la industria (Buenos Aires).",
  },
  {
    id: "simscale",
    logo: "simscale-logo-plataforma-simulacion-ingenieria-cae-en-la-nube-cfd-fea-termica.webp",
    href: "https://www.simscale.com/",
    alt: "SimScale — simulación CAE en la nube (CFD, FEA y térmica).",
    geoTip: "SimScale — simulación CAE en la nube (CFD, FEA y térmica) para validar diseño e ingeniería.",
  },
    {
    id: "zonaf1.ar",
    logo: "zonaf1.ar.webp",
    href: "https://www.instagram.com/zonaf1.ar",
    alt: "ZonaF1 — Tienda de artículos de automovilismo.",
    geoTip: "ZonaF1 — Tienda de artículos de automovilismo en impresiones 3D",
  },
]

export const INSTITUCIONES: instituciones[] = [
  {
    id: "unlam",
    logo: "unlam-logo-vintage.webp",
    href: "https://www.unlam.edu.ar/",
    alt: "Universidad Nacional de La Matanza (UNLaM).",
    geoTip: "Universidad Nacional de La Matanza — respaldo institucional al proyecto Motorsport UNLaM.",
  },
   {
    id: "diit",
    logo: "diit-unlam-departamento-ingenieria-investigaciones-tecnologicas-logo.webp",
    href: "https://ingenieria.unlam.edu.ar/",
    alt: "DIIT UNLaM — apoyo académico y tecnológico al proyecto Motorsport UNLaM.",
    geoTip: "DIIT UNLaM — apoyo académico y tecnológico al proyecto Motorsport UNLaM.",
  },
   {
    id: "cedit",
    logo: "cedit-logo.webp",
    href: "https://cedit.unlam.edu.ar",
    alt: "Centro de Desarrollo e Investigaciones Tecnológicas (CeDIT) — apoyo institucional al proyecto Motorsport UNLaM.",
    geoTip: "Centro de Desarrollo e Investigaciones Tecnológicas (CeDIT)  — apoyo institucional al proyecto Motorsport UNLaM.",
  },
    {
    id: "lfu",
    logo: "lfu-centro-de-estudiantes-unlam-logo.webp",
    href: "https://www.instagram.com/centrodeestudianteslfu/?hl=es-la",
    alt: "Centro de Estudiantes UNLaM (LFU) — apoyo institucional al proyecto Motorsport UNLaM.",
    geoTip: "Centro de Estudiantes UNLaM (LFU) — apoyo institucional al proyecto Motorsport UNLaM.",
  },
]

export const SPONSORS_SORTED = SPONSORS;

export const INSTITUCIONES_SORTED = INSTITUCIONES;