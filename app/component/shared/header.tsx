"use client"

import * as React from "react"
import {
  Globe,
  Menu,
  ChevronDown,
  ChevronRight,
  X,
  Check,
} from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Link, usePathname, useRouter } from "@/navigation"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "./language-toggle"

export function Header() {
  const t = useTranslations("Navbar")
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [mobileLangOpen, setMobileLangOpen] = React.useState(false)

  const navItems = [
    { label: t("ceoIntroduction"), href: "/#ceo" }, // Added /
    { label: t("overview"), href: "/#overview" },
    { label: t("products"), href: "/#products" },
    { label: t("services"), href: "/#services" },
    { label: t("support"), href: "/#support" },
  ]
  const languages = [
    { label: "한국어", value: "ko" },
    { label: "English", value: "en" },
  ]

  const closeMobileMenu = React.useCallback(() => {
    setMobileMenuOpen(false)
    setMobileLangOpen(false)
  }, [])

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return
    router.push(pathname, { locale: newLocale })
    router.refresh()
    setMobileLangOpen(false)
    setMobileMenuOpen(false)
  }

  React.useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  React.useEffect(() => {
    closeMobileMenu()
  }, [pathname, closeMobileMenu])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#101820]">
        <div className="mx-auto flex h-[76px] w-full max-w-[1920px] items-center justify-between px-5 lg:px-8 xl:px-10">
          {/* LEFT: Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center gap-3">


              <div className="flex items-center">
                <span className="text-[19px] italic font-semibold text-[#f68b1f] uppercase tracking-[0.06em] ">
                  {t('logo')}
                </span>
              </div>
            </Link>
          </div>
          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-8 xl:gap-12">
              {navItems.map((item) => {

                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative inline-flex h-[76px] items-center text-[15px] font-semibold tracking-[0.05em] text-white/65 transition-colors hover:text-[#f68b1f]",
                      isActive && "text-white"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#f68b1f]" />
                    )}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex shrink-0 items-center gap-3 lg:gap-4">
            <div className="hidden lg:flex">
              <LanguageToggle />
            </div>

            <Button
              asChild
              variant="outline"
              className="hidden h-14 rounded-full border-[#f68b1f] bg-transparent px-7 text-[14px] font-semibold tracking-[0.05em] text-[#f68b1f] hover:bg-[#f68b1f] hover:text-[#081521] lg:inline-flex"
            >
              <Link href="#contact-us">{t("connectWithUs")}</Link>
            </Button>

            {/* Mobile Navigation Trigger */}
            <div className="lg:hidden">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
                className="h-10 w-10 text-white hover:bg-white/5 hover:text-white"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-[100] lg:hidden",
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          onClick={closeMobileMenu}
          className={cn(
            "absolute inset-0 bg-black/40 transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Fullscreen Panel */}
        <div
          className={cn(
            "absolute inset-0 flex h-full w-full flex-col overflow-hidden bg-[radial-gradient(circle_at_bottom_center,rgba(246,139,31,0.08),transparent_35%),linear-gradient(180deg,#0b1622_0%,#09131d_100%)] text-white transition-transform duration-300 ease-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/15 px-6 py-5">
            <Link href="#contact-us" className="flex items-center gap-3" onClick={closeMobileMenu}>


              <span className="text-[15px] font-semibold uppercase tracking-[0.08em] text-[#f68b1f]">
                {t('logo')}
              </span>
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="inline-flex h-10 w-10 items-center justify-center text-white/70 transition-colors hover:text-white"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav */}
          {/* Nav */}
          <nav className="px-8 pt-10">
            <div className="flex flex-col">
              {navItems.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link // Changed from <a> to <Link>
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu} // Keeps your existing close function
                    className={cn(
                      "flex items-center justify-between border-b border-white/15 py-5 text-[22px] font-semibold leading-none text-white/90 transition-colors hover:text-white",
                      isActive && "text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-5 w-5 text-white/45" />
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Bottom section */}
          <div className="mt-auto px-8 pb-8 pt-10">
            <div className="mb-8 border-b border-white/15 pb-5">
              <button
                type="button"
                onClick={() => setMobileLangOpen((prev) => !prev)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={mobileLangOpen}
                aria-label="Toggle language menu"
              >
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-white/80" />
                  <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/80">
                    {locale === "ko" ? "한국어" : "English"}
                  </span>
                </div>

                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-white/45 transition-transform duration-200",
                    mobileLangOpen && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid transition-all duration-200 ease-out",
                  mobileLangOpen
                    ? "mt-4 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="space-y-1 rounded-xl border border-white/10 bg-[#0a1219] p-1">
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
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="h-12 w-full rounded-full border-[#f68b1f] bg-transparent text-[13px] font-bold uppercase tracking-[0.06em] text-[#f68b1f] hover:bg-[#f68b1f] hover:text-[#081521]"
            >
              <Link href="/contact" onClick={closeMobileMenu}>
                {t("connectWithUs")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}