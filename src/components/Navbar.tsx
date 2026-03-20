import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage, LANGUAGES } from '../contexts/LanguageContext'

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663405311158/ebebYjMErshCmhKiJP5h4X'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLanguage()
  const langRef = useRef<HTMLDivElement>(null)

  const currentLang = LANGUAGES.find(l => l.code === lang) ?? LANGUAGES[0]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const navLinks = [
    { path: '/heritage',        key: 'nav.heritage' },
    { path: '/collections',     key: 'nav.collections' },
    { path: '/maison-de-celle', key: 'nav.maison' },
    { path: '/boutiques',       key: 'nav.boutiques' },
    { path: '/olfactory-notes', key: 'nav.olfactory' },
    { path: '/group-buy',       key: 'nav.groupbuy' },
    { path: '/creator-card',    key: 'nav.creator' },
    { path: '/contact',         key: 'nav.contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-lacelle-black/95 backdrop-blur-sm border-b border-lacelle-gold/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Left nav links */}
            <div className="hidden xl:flex items-center gap-6">
              {navLinks.slice(0, 4).map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link nav-link-animated font-sans-light text-xs tracking-widest-xl uppercase transition-colors duration-300 whitespace-nowrap ${
                    location.pathname === link.path ? 'text-lacelle-gold' : 'text-lacelle-cream/70 hover:text-lacelle-gold'
                  }`}
                >
                  {t(link.key)}
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
            <div className="hidden xl:flex items-center gap-5">
              {navLinks.slice(4).map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link nav-link-animated font-sans-light text-xs tracking-widest-xl uppercase transition-colors duration-300 whitespace-nowrap ${
                    location.pathname === link.path ? 'text-lacelle-gold' : 'text-lacelle-cream/70 hover:text-lacelle-gold'
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}

              {/* Language Dropdown */}
              <div className="relative ml-2" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1 border border-lacelle-gold/30 hover:border-lacelle-gold/60 text-lacelle-cream/60 hover:text-lacelle-gold transition-colors duration-300 text-xs font-sans-light tracking-widest-xl"
                >
                  <span>{currentLang.flag}</span>
                  <span>{currentLang.code.toUpperCase()}</span>
                  <svg className={`w-2.5 h-2.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {langOpen && (
                  <div className="absolute right-0 top-full mt-1 w-44 bg-lacelle-black border border-lacelle-gold/20 shadow-2xl z-50">
                    {LANGUAGES.map(l => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setLangOpen(false) }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs font-sans-light tracking-widest-xl transition-colors ${
                          lang === l.code
                            ? 'bg-lacelle-gold/15 text-lacelle-gold'
                            : 'text-lacelle-cream/60 hover:bg-lacelle-gold/10 hover:text-lacelle-gold'
                        }`}
                      >
                        <span className="text-base">{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="xl:hidden text-lacelle-cream/70 hover:text-lacelle-gold transition-colors"
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
      <div className={`fixed inset-0 z-40 bg-lacelle-black/98 backdrop-blur-sm transition-all duration-500 xl:hidden ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <img
            src={`${CDN}/logo-main_1afa18a9.png`}
            alt="LA CELLE PARIS"
            className="h-10 w-auto brightness-0 invert opacity-80 mb-4"
          />
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="text-lacelle-cream/70 hover:text-lacelle-gold font-playfair text-xl italic transition-colors duration-300"
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="gold-divider mt-2" />
          {/* Mobile language grid */}
          <div className="grid grid-cols-4 gap-2 mt-2">
            {LANGUAGES.map(l => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex flex-col items-center gap-1 px-3 py-2 border transition-colors duration-300 ${
                  lang === l.code
                    ? 'border-lacelle-gold/60 text-lacelle-gold bg-lacelle-gold/10'
                    : 'border-lacelle-gold/20 text-lacelle-cream/50 hover:text-lacelle-gold hover:border-lacelle-gold/40'
                }`}
              >
                <span className="text-lg">{l.flag}</span>
                <span className="text-[10px] font-sans-light tracking-widest-xl">{l.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
          <p className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold/50 uppercase">Paris · 1802</p>
        </div>
      </div>
    </>
  )
}
