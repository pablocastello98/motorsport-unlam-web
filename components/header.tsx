"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"

export function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [isInHero, setIsInHero] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [openTeamGroup, setOpenTeamGroup] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()

  const teamsDropdownRef = useRef<HTMLDivElement>(null)
  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const mobileLanguageDropdownRef = useRef<HTMLDivElement>(null)
  const mobileTeamsDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.8
      setIsInHero(window.scrollY < heroThreshold)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isOutsideTeams = teamsDropdownRef.current && !teamsDropdownRef.current.contains(target)
      const isOutsideMobileTeams = mobileTeamsDropdownRef.current && !mobileTeamsDropdownRef.current.contains(target)
      const isOutsideLanguage = languageDropdownRef.current && !languageDropdownRef.current.contains(target)
      const isOutsideMobileLanguage = mobileLanguageDropdownRef.current && !mobileLanguageDropdownRef.current.contains(target)

      if (activeDropdown === "teams" && isOutsideTeams && isOutsideMobileTeams) {
        setActiveDropdown(null)
        setOpenTeamGroup(null)
      } else if (activeDropdown === "language" && isOutsideLanguage && isOutsideMobileLanguage) {
        setActiveDropdown(null)
        setOpenTeamGroup(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [activeDropdown])

  useEffect(() => {
    if (activeDropdown === "teams" && openTeamGroup === null) {
      setOpenTeamGroup(teamGroups[0].labelKey)
    }
  }, [activeDropdown, openTeamGroup])

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [pathname])

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()

    if (pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(`/#${sectionId}`)
    }

    setIsMobileMenuOpen(false)
  }

  const teamGroups = [
    {
      labelKey: "grupoIngenieria",
      teams: [
        { nameKey: "aerodinamica", href: "/equipos/aerodinamica" },
        { nameKey: "chasis", href: "/equipos/chasis" },
        { nameKey: "suspension", href: "/equipos/suspension" },
        { nameKey: "electronica", href: "/equipos/electronica" },
        { nameKey: "frenos", href: "/equipos/frenos" },
        { nameKey: "ti", href: "/equipos/ti" },
        { nameKey: "planificacion", href: "/equipos/planificacion" }, 
      ],
    },
    {
      labelKey: "grupoComunicaciones",
      teams: [
        { nameKey: "prensa", href: "/equipos/prensa" },
        { nameKey: "eventos", href: "/equipos/eventos" },
        { nameKey: "sponsors", href: "/equipos/sponsors" },
        { nameKey: "redes", href: "/equipos/redes" },
      ],
    },
    {
      labelKey: "grupoEconomia",
      teams: [{ nameKey: "costos", href: "/equipos/costos" }],
    },
  ]

  const languages = [
    { code: "es" as Language, label: "ES", flag: "ðŸ‡¦ðŸ‡·" },
    { code: "en" as Language, label: "EN", flag: "ðŸ‡ºðŸ‡¸" },
    { code: "pt" as Language, label: "PT", flag: "ðŸ‡§ðŸ‡·" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-transform duration-300 ${
        isInHero && pathname === "/" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img src="/isologotipo.webp" alt="Motorsport UNLaM" className="h-auto w-48" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#hero"
              className="text-sm font-medium text-gray-700 hover:text-[#006A4E] transition-colors"
              onClick={(e) => handleSectionClick(e, "hero")}
            >
              {t("inicio")}
            </Link>

            <Link
              href="/#about"
              className="text-sm font-medium text-gray-700 hover:text-[#006A4E] transition-colors"
              onClick={(e) => handleSectionClick(e, "about")}
            >
              {t("sobreNosotros")}
            </Link>

            <div className="relative" ref={teamsDropdownRef}>
              <button
                onClick={() => setActiveDropdown(activeDropdown === "teams" ? null : "teams")}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#006A4E] transition-colors"
              >
                {t("nuestrosEquipos")}
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "teams" && (
                <div className="absolute top-full left-0 mt-2 w-[420px] bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <div className="flex">
                    <div className="w-48 border-r border-gray-200">
                      {teamGroups.map((group) => (
                        <button
                          key={group.labelKey}
                          onClick={() =>
                            setOpenTeamGroup((current) => (current === group.labelKey ? null : group.labelKey))
                          }
                          className={`w-full px-4 py-3 text-left text-sm font-semibold ${
                            openTeamGroup === group.labelKey
                              ? "text-[#006A4E]"
                              : "text-gray-700 hover:text-[#006A4E]"
                          }`}
                        >
                          {t(group.labelKey)}
                        </button>
                      ))}
                    </div>
                    <div className="w-full px-4 py-3">
                      {teamGroups
                        .find((group) => group.labelKey === openTeamGroup)
                        ?.teams.map((team) => (
                          <Link
                            key={team.href}
                            href={team.href}
                            className="block text-sm text-gray-700 hover:text-[#006A4E] py-1"
                            onClick={() => {
                              setActiveDropdown(null)
                              setOpenTeamGroup(null)
                            }}
                          >
                            {t(team.nameKey)}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#sponsors"
              className="text-sm font-medium text-gray-700 hover:text-[#006A4E] transition-colors"
              onClick={(e) => handleSectionClick(e, "sponsors")}
            >
              {t("patrocinadores")}
            </Link>

            <Button
              size="sm"
              className="text-white"
              style={{ backgroundColor: "#006A4E" }}
              onClick={(e: React.MouseEvent) => handleSectionClick(e, "contact")}
            >
              {t("contactanos")}
            </Button>

            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() => setActiveDropdown(activeDropdown === "language" ? null : "language")}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#006A4E] transition-colors px-3 py-1.5 border border-gray-300 rounded-md"
              >
                <Globe className="w-4 h-4" />
                {languages.find((l) => l.code === language)?.label}
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "language" && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setActiveDropdown(null)
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        language === lang.code ? "text-[#006A4E] font-medium" : "text-gray-700"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <div className="relative" ref={mobileLanguageDropdownRef}>
              <button
                onClick={() => setActiveDropdown(activeDropdown === "language" ? null : "language")}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#006A4E] transition-colors px-3 py-1.5 border border-gray-300 rounded-md"
              >
                <Globe className="w-4 h-4" />
                {languages.find((l) => l.code === language)?.label}
              </button>

              {activeDropdown === "language" && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setActiveDropdown(null)
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        language === lang.code ? "text-[#006A4E] font-medium" : "text-gray-700"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#006A4E] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            <Link
              href="/#hero"
              className="block text-sm font-medium text-gray-700 hover:text-[#006A4E] transition-colors py-2"
              onClick={(e) => handleSectionClick(e, "hero")}
            >
              {t("inicio")}
            </Link>

            <Link
              href="/#about"
              className="block text-sm font-medium text-gray-700 hover:text-[#006A4E] transition-colors py-2"
              onClick={(e) => handleSectionClick(e, "about")}
            >
              {t("sobreNosotros")}
            </Link>

            <div ref={mobileTeamsDropdownRef}>
              <button
                onClick={() => setActiveDropdown(activeDropdown === "teams" ? null : "teams")}
                className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-[#006A4E] transition-colors py-2"
              >
                {t("nuestrosEquipos")}
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "teams" && (
                <div className="pl-4 mt-2 space-y-3">
                  {teamGroups.map((group) => (
                    <div key={group.labelKey} className="space-y-1">
                      <button
                        onClick={() =>
                          setOpenTeamGroup((current) => (current === group.labelKey ? null : group.labelKey))
                        }
                        className="flex items-center justify-between w-full text-sm font-semibold text-gray-700 hover:text-[#006A4E]"
                      >
                        {t(group.labelKey)}
                        <ChevronDown
                          className={`w-3 h-3 transition-transform ${openTeamGroup === group.labelKey ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openTeamGroup === group.labelKey && (
                        <div className="space-y-1 pl-4">
                          {group.teams.map((team) => (
                            <Link
                              key={team.href}
                              href={team.href}
                              className="block text-sm text-gray-600 hover:text-[#006A4E] transition-colors py-1"
                              onClick={() => {
                                setActiveDropdown(null)
                                setIsMobileMenuOpen(false)
                                setOpenTeamGroup(null)
                              }}
                            >
                              {t(team.nameKey)}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#sponsors"
              className="block text-sm font-medium text-gray-700 hover:text-[#006A4E] transition-colors py-2"
              onClick={(e) => handleSectionClick(e, "sponsors")}
            >
              {t("patrocinadores")}
            </Link>

            <Button
              size="sm"
              className="w-full text-white"
              style={{ backgroundColor: "#006A4E" }}
              onClick={(e: React.MouseEvent) => handleSectionClick(e, "contact")}
            >
              {t("contactanos")}
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
