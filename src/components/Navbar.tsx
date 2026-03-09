import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663405311158/ebebYjMErshCmhKiJP5h4X'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, isCN } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/heritage', fr: 'Héritage', zh: '传承' },
    { path: '/collections', fr: 'Collections', zh: '系列' },
    { path: '/maison-de-celle', fr: 'Maison de Celle', zh: '高端系列' },
    { path: '/olfactory-notes', fr: 'Notes Olfactives', zh: '调香笔记' },
    { path: '/contact', fr: 'Contact', zh: '联系' },
  ]

  const label = (link: { fr: string; zh: string }) => isCN ? link.zh : link.fr

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-lacelle-black/95 backdrop-blur-sm border-b border-lacelle-gold/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Left nav links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.slice(0, 2).map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link nav-link-animated font-sans-light text-xs tracking-widest-xl uppercase transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-lacelle-gold' : 'text-lacelle-cream/70 hover:text-lacelle-gold'
                  }`}
                >
                  {label(link)}
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={`${CDN}/logo-main_1afa18a9.png`}
                alt="LA CELLE PARIS"
                className="h-8 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>

            {/* Right nav links + language switcher */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(2).map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link nav-link-animated font-sans-light text-xs tracking-widest-xl uppercase transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-lacelle-gold' : 'text-lacelle-cream/70 hover:text-lacelle-gold'
                  }`}
                >
                  {label(link)}
                </Link>
              ))}
              {/* Language switcher */}
              <button
                onClick={() => setLang(lang === 'fr' ? 'zh' : 'fr')}
                className="font-sans-light text-xs tracking-widest-xl text-lacelle-cream/50 hover:text-lacelle-gold transition-colors duration-300 border border-lacelle-gold/20 hover:border-lacelle-gold/50 px-2 py-1 ml-2"
                title={lang === 'fr' ? '切换中文' : 'Français'}
              >
                {lang === 'fr' ? '中文' : 'FR'}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-lacelle-cream/70 hover:text-lacelle-gold transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-lacelle-black/98 backdrop-blur-sm transition-all duration-500 lg:hidden ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-10">
          <img
            src={`${CDN}/logo-main_1afa18a9.png`}
            alt="LA CELLE PARIS"
            className="h-10 w-auto brightness-0 invert opacity-80 mb-8"
          />
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="text-lacelle-cream/70 hover:text-lacelle-gold font-playfair text-2xl italic transition-colors duration-300"
            >
              {label(link)}
            </Link>
          ))}
          <div className="gold-divider mt-4" />
          {/* Mobile language switcher */}
          <button
            onClick={() => setLang(lang === 'fr' ? 'zh' : 'fr')}
            className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold/70 hover:text-lacelle-gold transition-colors duration-300 border border-lacelle-gold/30 px-4 py-2"
          >
            {lang === 'fr' ? '切换中文' : 'Passer en Français'}
          </button>
          <p className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold/50 uppercase">Paris · 1802</p>
        </div>
      </div>
    </>
  )
}
