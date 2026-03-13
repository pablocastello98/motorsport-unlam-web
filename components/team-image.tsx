"use client"

import { useLanguage } from "@/contexts/language-context"

type TeamImageProps = {
  src: string
  altKey: string
  className?: string
}

export function TeamImage({ src, altKey, className = "w-full h-[400px] object-cover" }: TeamImageProps) {
  const { t } = useLanguage()

  return (
    <div className="mb-16 rounded-2xl overflow-hidden">
      <img src={src} alt={t(altKey)} className={className} />
    </div>
  )
}
