"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const { theme, setTheme } = useTheme()

  const navItems = [
    { name: "About", href: "#about", id: "about" },
    { name: "Apps", href: "#apps", id: "apps" },
    // { name: "Posts", href: "#blog", id: "blog" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center items-center pt-6">
      <div className="flex items-center gap-4">
        <div className="bg-background/80 backdrop-blur-md border border-border rounded-full shadow-lg leading-7 py-0 px-4">
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-400/60 rounded-full blur-sm shadow-[0_0_12px_rgba(251,146,60,0.6)] w-8 h-0.5" />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Menu */}
            <div className="flex items-center md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full">
                {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-border">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    onClick={() => {
                      setActiveSection(item.id)
                      setIsMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>

        <div className="hidden md:block pl-11">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg hover:bg-muted/50 transition-all duration-300"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  )
}
