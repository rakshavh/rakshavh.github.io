'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const navItems = [
  { id: 'research-work', label: 'Research Work' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'education', label: 'Education' },
  { id: 'related-work', label: 'Related Work' },
  { id: 'connect', label: 'Connect' },
]

export function SideNav() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 200 // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="relative group"
            aria-label={`Navigate to ${item.label}`}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  activeSection === item.id
                    ? 'bg-zinc-900 dark:bg-zinc-100'
                    : 'bg-zinc-400 dark:bg-zinc-600'
                }`}
                whileHover={{ scale: 1.2 }}
              />
              <span
                className={`text-sm transition-colors ${
                  activeSection === item.id
                    ? 'text-zinc-900 dark:text-zinc-100 font-medium'
                    : 'text-zinc-500 dark:text-zinc-400'
                }`}
              >
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  )
}

