export type TeamKey =
  | "aerodinamica"
  | "chasis"
  | "comunicacion"
  | "costos"
  | "electronica"
  | "eventos"
  | "frenos"
  | "suspension"
  | "sponsors"
  | "prensaydifusion"
  | "redes"
  | "ti"
  | "planificacion"
  
export type TeamMember = {
  name: string
  careerKey: string
  teams: TeamKey[]
  labelKey?: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Rodrigo Anriquez",
    careerKey: "ingenieriaMecanica",
    teams: ["aerodinamica"],
  },
  {
    name: "Julián Bordon",
    careerKey: "ingenieriaMecanica",
    teams: ["aerodinamica"],
  },
  {
    name: "Santiago Trossi",
    careerKey: "ingenieriaMecanica",
    teams: ["aerodinamica"],
  },
  {
    name: "Agustin Eliel Greco",
    careerKey: "ingenieriaMecanica",
    teams: ["chasis"],
  },
  {
    name: "Lucas Socastro",
    careerKey: "ingenieriaMecanica",
    teams: ["chasis"],
  },
  {
    name: "Ulises Luna",
    careerKey: "ingenieriaMecanica",
    teams: ["chasis"],
  },
  {
    name: "Ivo Bruno",
    careerKey: "ingenieriaMecanica",
    teams: ["chasis"],
  },
  {
    name: "Jairo Guachalla",
    careerKey: "ingenieriaMecanica",
    teams: ["chasis"],
  },
  {
    name: "",
    labelKey: "liderEquipo",
    careerKey: "estrategiaCoordinacion",
    teams: ["comunicacion"],
  },
  {
    name: "",
    labelKey: "communityManagers",
    careerKey: "gestionRedes",
    teams: ["comunicacion"],
  },
  {
    name: "",
    labelKey: "disenadoresGraficos",
    careerKey: "contenidoVisual",
    teams: ["comunicacion"],
  },
  {
    name: "",
    labelKey: "fotografosVideografos",
    careerKey: "produccionAudiovisual",
    teams: ["comunicacion"],
  },
  {
    name: "Tomas Banegas",
    careerKey: "licenciaturaAdministracion",
    teams: ["costos"],
  },
  {
    name: "Tomas Cáceres",
    careerKey: "comercioInternacional",
    teams: ["costos"],
  },
  {
    name: "Sebastian Pulice",
    careerKey: "ingenieriaElectronica",
    teams: ["electronica"],
  },
  {
    name: "Diego Duran",
    careerKey: "ingenieriaElectronica",
    teams: ["electronica"],
  },
  {
    name: "Narella Regnicoli",
    careerKey: "ingenieriaElectronica",
    teams: ["electronica"],
  },
  {
    name: "Joaquin Fernandez",
    careerKey: "ingenieriaElectronica",
    teams: ["electronica"],
  },
  {
    name: "Rocio Sárate",
    careerKey: "comunicacionSocial",
    teams: ["eventos"],
  },
  {
    name: "Felipe Vila",
    careerKey: "comunicacionSocial",
    teams: ["eventos"],
  },
  {
    name: "Lucio Casali",
    careerKey: "ingenieriaMecanica",
    teams: ["frenos"],
  },
  {
    name: "Ezequiel Alcoberro",
    careerKey: "ingenieriaMecanica",
    teams: ["frenos"],
  },
  {
    name: "Ludmila Pugliese",
    careerKey: "ingenieriaMecanica",
    teams: ["frenos"],
  },
  {
    name: "Lautaro Logarzo",
    careerKey: "ingenieriaMecanica",
    teams: ["suspension"],
  },
  {
    name: "Emiliano Comerci",
    careerKey: "ingenieriaMecanica",
    teams: ["suspension"],
  },
  {
    name: "Santiago Rodriguez",
    careerKey: "ingenieriaMecanica",
    teams: ["suspension"],
  },
  {
    name: "Julian Girard",
    careerKey: "ingenieriaMecanica",
    teams: ["suspension"],
  },
  {
    name: "Lucia Villalba",
    careerKey: "comunicacionSocial",
    teams: ["sponsors"],
  },
  {
    name: "Carolina Sosa",
    careerKey: "comunicacionSocial",
    teams: ["prensaydifusion"],
  },
  {
    name: "Ignacio Abba",
    careerKey: "comunicacionSocial",
    teams: ["prensaydifusion"],
  },
  {
    name: "Abril Mochetti",
    careerKey: "comunicacionSocial",
    teams: ["redes"],
  },
  {
    name: "Demian Toledo",
    careerKey: "comunicacionSocial",
    teams: ["redes"],
  },
  {
    name: "Magali Martinez",
    careerKey: "comunicacionSocial",
    teams: ["redes"],
  },
  {
    name: "Naim Sejas",
    careerKey: "comunicacionSocial",
    teams: ["redes"],
  },
  {
    name: "Aylen Iñiguez",
    careerKey: "comunicacionSocial",
    teams: ["redes"],
  },
  {
    name: "Priscila Jurado",
    careerKey: "comunicacionSocial",
    teams: ["redes"],
  },
  {
    name: "Aldana Acosta",
    careerKey: "ingenieriaElectronica",
    teams: ["ti"],
  },
  {
    name: "Giuliana Costabile",
    careerKey: "ingenieriaInformatica",
    teams: ["ti"],
  }, 
  {
    name: "Nahuel Cejas",
    careerKey: "ingenieriaInformatica",
    teams: ["ti"],
  }, 
  {
    name: "Pablo Castello",
    careerKey: "ingenieriaIndustrial",
    teams: ["planificacion"],
  }, 
  {
    name: "Tomas Lopez Toscano",
    careerKey: "ingenieriaIndustrial",
    teams: ["planificacion"],
  }
]
