import { es } from "./i18n/es"
import { en } from "./i18n/en"
import { pt } from "./i18n/pt"

export type Language = "es" | "en" | "pt"

export const translations = {
  es,
  en,
  pt,
} as const
