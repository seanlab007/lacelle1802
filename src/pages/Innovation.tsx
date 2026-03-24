import { useLanguage } from '../contexts/LanguageContext'
import { Link } from 'react-router-dom'

export default function Innovation() {
  const { t, lang } = useLanguage()
  const isRTL = lang === 'ar'

  const axes = [
    {
      number: t('innovation.axis1_number'),
      tag: t('innovation.axis1_tag'),
      title: t('innovation.axis1_title'),
      subtitle: t('innovation.axis1_subtitle'),
      text: t('innovation.axis1_text'),
      challengeLabel: t('innovation.axis1_challenge'),
      challengeText: t('innovation.axis1_challenge_text'),
      patent: t('innovation.axis1_patent'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
        </svg>
      ),
      gradient: 'from-amber-900/20 to-lacelle-dark',
      accentColor: 'text-amber-400',
      borderColor: 'border-amber-400/20',
    },
    {
      number: t('innovation.axis2_number'),
      tag: t('innovation.axis2_tag'),
      title: t('innovation.axis2_title'),
      subtitle: t('innovation.axis2_subtitle'),
      text: t('innovation.axis2_text'),
      challengeLabel: t('innovation.axis2_challenge'),
      challengeText: t('innovation.axis2_challenge_text'),
      patent: t('innovation.axis2_patent'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-indigo-900/20 to-lacelle-dark',
      accentColor: 'text-indigo-400',
      borderColor: 'border-indigo-400/20',
    },
    {
      number: t('innovation.axis3_number'),
      tag: t('innovation.axis3_tag'),
      title: t('innovation.axis3_title'),
      subtitle: t('innovation.axis3_subtitle'),
      text: t('innovation.axis3_text'),
      challengeLabel: t('innovation.axis3_challenge'),
      challengeText: t('innovation.axis3_challenge_text'),
      patent: t('innovation.axis3_patent'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: 'from-emerald-900/20 to-lacelle-dark',
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-400/20',
    },
  ]

  const stats = [
    { value: t('innovation.stat1_value'), label: t('innovation.stat1_label') },
    { value: t('innovation.stat2_value'), label: t('innovation.stat2_label') },
    { value: t('innovation.stat3_value'), label: t('innovation.stat3_label') },
    { value: t('innovation.stat4_value'), label: t('innovation.stat4_label') },
  ]

  return (
    <main className="min-h-screen bg-lacelle-black" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* SEO Meta via document title */}
      <title>{t('innovation.meta_title')}</title>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-lacelle-gold/3 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-900/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-lacelle-gold/60" />
            <span className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold uppercase">
              {t('innovation.eyebrow')}
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-cormorant text-5xl lg:text-7xl text-lacelle-cream font-light leading-tight mb-8">
              {t('innovation.title')}
            </h1>
            <p className="font-sans-light text-lacelle-cream/60 text-lg leading-relaxed max-w-3xl">
              {t('innovation.subtitle')}
            </p>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-lacelle-gold/10 pt-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="font-cormorant text-4xl text-lacelle-gold font-light mb-2">
                  {stat.value}
                </div>
                <div className="font-sans-light text-xs text-lacelle-cream/40 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-20 border-t border-lacelle-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-cormorant text-4xl text-lacelle-cream font-light mb-6">
                {t('innovation.intro_title')}
              </h2>
              <p className="font-sans-light text-lacelle-cream/60 leading-relaxed text-base">
                {t('innovation.intro_text')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: t('innovation.patent_count'), sub: t('innovation.patent_label') },
                { label: t('innovation.since_year'), sub: t('innovation.since_label') },
                { label: t('innovation.lab_label'), sub: 'Grasse, France' },
                { label: t('innovation.research_label'), sub: '1847 →' },
              ].map((item, i) => (
                <div key={i} className="border border-lacelle-gold/10 p-6 bg-lacelle-dark/50">
                  <div className="font-cormorant text-2xl text-lacelle-gold font-light mb-1">
                    {item.label}
                  </div>
                  <div className="font-sans-light text-xs text-lacelle-cream/40 uppercase tracking-wider">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Research Axes ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          {axes.map((axis, i) => (
            <article
              key={i}
              className={`relative border ${axis.borderColor} bg-gradient-to-br ${axis.gradient} overflow-hidden`}
            >
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-10">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 border ${axis.borderColor} flex items-center justify-center ${axis.accentColor}`}>
                      {axis.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`font-sans-light text-xs tracking-widest-xl uppercase ${axis.accentColor}`}>
                        {axis.tag}
                      </span>
                      <span className="font-sans-light text-xs text-lacelle-cream/20 tracking-widest-xl">
                        {t('innovation.research_label')} {axis.number}
                      </span>
                    </div>
                    <h3 className="font-cormorant text-3xl lg:text-4xl text-lacelle-cream font-light mb-2">
                      {axis.title}
                    </h3>
                    <p className={`font-sans-light text-sm uppercase tracking-wider ${axis.accentColor} opacity-70`}>
                      {axis.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="font-sans-light text-lacelle-cream/60 leading-relaxed text-base">
                      {axis.text}
                    </p>
                  </div>
                  <div className="space-y-6">
                    {/* Challenge/Advantage box */}
                    <div className={`border-l-2 ${axis.borderColor} pl-4`}>
                      <div className={`font-sans-light text-xs uppercase tracking-wider ${axis.accentColor} mb-2`}>
                        {axis.challengeLabel}
                      </div>
                      <p className="font-sans-light text-lacelle-cream/50 text-sm leading-relaxed">
                        {axis.challengeText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Patent badge */}
                <div className={`mt-8 pt-6 border-t ${axis.borderColor}`}>
                  <div className="flex items-start gap-3">
                    <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${axis.accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-sans-light text-xs text-lacelle-cream/30 leading-relaxed">
                      <span className={`${axis.accentColor} mr-2`}>{t('innovation.patent_label')}</span>
                      {axis.patent}
                    </span>
                  </div>
                </div>
              </div>

              {/* Large number decoration */}
              <div className={`absolute top-6 right-8 font-cormorant text-8xl font-light ${axis.accentColor} opacity-5 pointer-events-none select-none`}>
                {axis.number}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-lacelle-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-px bg-lacelle-gold/60" />
              <span className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold uppercase">
                {t('innovation.eyebrow')}
              </span>
              <div className="w-8 h-px bg-lacelle-gold/60" />
            </div>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-lacelle-cream font-light mb-6">
              {t('innovation.cta_title')}
            </h2>
            <p className="font-sans-light text-lacelle-cream/50 leading-relaxed mb-10">
              {t('innovation.cta_text')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-lacelle-gold text-lacelle-gold px-8 py-3 font-sans-light text-xs tracking-widest-xl uppercase hover:bg-lacelle-gold hover:text-lacelle-black transition-all duration-300"
              >
                {t('innovation.cta_button')}
              </Link>
              <button className="inline-flex items-center gap-3 border border-lacelle-cream/20 text-lacelle-cream/40 px-8 py-3 font-sans-light text-xs tracking-widest-xl uppercase hover:border-lacelle-cream/40 hover:text-lacelle-cream/60 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t('innovation.cta_secondary')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Internal links for SEO ── */}
      <section className="py-12 border-t border-lacelle-gold/10 bg-lacelle-dark/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { path: '/olfactory-notes', key: 'nav.olfactory' },
              { path: '/heritage', key: 'nav.heritage' },
              { path: '/maison-de-celle', key: 'nav.maison' },
              { path: '/news', key: 'nav.news' },
            ].map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="font-sans-light text-xs text-lacelle-cream/30 hover:text-lacelle-gold/60 uppercase tracking-wider transition-colors duration-300"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
