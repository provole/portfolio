'use client'

import { useState, useEffect, ReactNode } from 'react'
import Sidebar from '../Sidebar'

interface ScrollSpyWrapperProps {
  children: ReactNode
}

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' }
]

export default function ScrollSpyWrapper({ children }: ScrollSpyWrapperProps) {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for better UX

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 relative">
      <div className="flex flex-col md:flex-row gap-10 md:gap-6 lg:gap-12">
        <div className="w-full md:w-[30%] lg:w-[48%]">
          <Sidebar
            sections={sections}
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
        </div>
        <main className="w-full md:w-[70%] lg:w-[52%] space-y-16">
          {children}
        </main>
      </div>
    </div>
  )
}
