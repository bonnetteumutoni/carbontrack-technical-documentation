'use client';
import React, { useEffect, useState } from 'react'

const sections = [
  "Overview",
  "Features",
  "Stakeholders",
  "Technology Stack",
  "Getting Started",
  "System Architecture",
  "Components",
  "API Endpoints",
  "Installation and Deployment",
  "Security Considerations",
  "Testing and Monitoring",
  "Maintenance and Scaling",
  "Prerequisites",
  "Installation",
  "IoT Setup",
  "API Documentation"
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('overview')

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 100 
      let current = 'overview'

      for (const section of sections) {
        const el = document.getElementById(section.replace(/\s/g, '').toLowerCase())
        if (el) {
          if (el.offsetTop <= scrollPos) {
            current = section.replace(/\s/g, '').toLowerCase()
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
      window.history.pushState(null, '', `#${sectionId}`)
    }
  }

  return (
    <nav
      style={{
        width: 260,
        backgroundColor: '#2A4759',
        color: '#F79B72',
        padding: '2rem 1rem',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflowY: 'auto',
      }}
    >
      <h2 style={{ fontWeight: 'bold', marginBottom: '2rem' }}>Carbon Track Docs</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {sections.map((section) => {
          const sectionId = section.replace(/\s/g, '').toLowerCase()
          return (
            <li key={section} style={{ marginBottom: '1rem' }}>
              <a
                href={`#${sectionId}`}
                onClick={(e) => handleClick(e, sectionId)}
                style={{
                  color: activeSection === sectionId ? '#FFF' : '#F79B72',
                  textDecoration: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                {section}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
