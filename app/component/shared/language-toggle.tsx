"use client"

import { Check, Globe, ChevronDown } from "lucide-react"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type LanguageToggleProps = {
  mobile?: boolean
}

export function LanguageToggle({ mobile = false }: LanguageToggleProps) {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()

  const languages = [
    { label: "한국어", value: "ko", short: "KO" },
    { label: "English", value: "en", short: "EN" },
  ]

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return
    router.push(pathname, { locale: newLocale })
    router.refresh()
  }

  if (mobile) {
    return (
      <div className="relative inline-block w-full notranslate group">
        <button
          type="button"
          className="group/trigger flex h-12 w-full items-center justify-between px-0 text-left"
        >
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-white/80 transition-colors group-hover/trigger:text-white" />
            <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/80 transition-colors group-hover/trigger:text-white">
              {locale === "ko" ? "한국어" : "English"}
            </span>
          </div>

          <ChevronDown className="h-4 w-4 text-white/40 transition-all duration-200 group-hover:text-white group-hover:rotate-180" />
        </button>

        <div
          className={cn(
            "absolute left-0 top-full z-50 mt-2 w-full rounded-xl border border-white/10 bg-[#0a1219] p-1 text-white shadow-2xl",
            "invisible translate-y-1 opacity-0 transition-all duration-150",
            "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
          )}
        >
          {languages.map((lang) => {
            const isSelected = locale === lang.value

            return (
              <button
                key={lang.value}
                type="button"
                onClick={() => handleLanguageChange(lang.value)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-white/10",
                  isSelected && "bg-white/5"
                )}
              >
                <span
                  className={cn(
                    "text-[13px] font-medium tracking-wide",
                    isSelected ? "text-[#f68b1f]" : "text-white/70"
                  )}
                >
                  {lang.label}
                </span>

                {isSelected && (
                  <Check className="h-3.5 w-3.5 stroke-[3px] text-[#f68b1f]" />
                )}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="relative inline-block notranslate group">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="group/trigger cursor-pointer flex h-10 items-center gap-2 px-2 transition-all hover:bg-white/5 focus-visible:ring-0"
      >
        <Globe className="h-[18px] w-[18px] text-white/80 transition-colors group-hover/trigger:text-white" />

        <span className="text-[13px] font-bold uppercase tracking-widest text-white/80 transition-colors group-hover/trigger:text-white">
          {locale}
        </span>

        <ChevronDown className="h-3 w-3 text-white/40 transition-all duration-200 group-hover/trigger:text-white group-hover:rotate-180" />
      </Button>

      <div
        className={cn(
          "absolute right-0 top-full z-50 mt-2 min-w-[140px] rounded-xl border border-white/10 bg-black p-1 text-white shadow-2xl",
          "invisible translate-y-1 opacity-0 transition-all duration-150",
          "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        {languages.map((lang) => {
          const isSelected = locale === lang.value

          return (
            <button
              key={lang.value}
              type="button"
              onClick={() => handleLanguageChange(lang.value)}
              className={cn(
                "flex w-full items-center justify-between cursor-pointer rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-white/10",
                isSelected && "bg-white/5"
              )}
            >
              <span
                className={cn(
                  "text-[13px] font-medium tracking-wide",
                  isSelected ? "text-[#f68b1f]" : "text-white/70"
                )}
              >
                {lang.label}
              </span>

              {isSelected && (
                <Check className="h-3.5 w-3.5 stroke-[3px] text-[#f68b1f]" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}