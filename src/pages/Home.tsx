import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663405311158/ebebYjMErshCmhKiJP5h4X'

function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Home() {
  useIntersectionObserver()

  return (
    <div className="bg-lacelle-black">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${CDN}/versailles-coronation_acda155d.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lacelle-black/40 via-lacelle-black/50 to-lacelle-black" />
        
        {/* Decorative vertical text */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <p className="writing-vertical font-sans-light text-xs tracking-widest-xl text-lacelle-gold/40 uppercase">
            Maison de Parfum · Paris
          </p>
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <p className="writing-vertical font-sans-light text-xs tracking-widest-xl text-lacelle-gold/40 uppercase">
            Fondée en 1802 · Grasse
          </p>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="section-label mb-8 animate-fade-in">Maison de Parfum · Paris · 1802</p>
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-lacelle-cream font-light italic mb-6 animate-fade-up">
            LA CELLE
          </h1>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl md:text-2xl text-lacelle-cream/80 italic font-light mt-6 mb-2">
            Deux siècles de savoir-faire olfactif
          </p>
          <p className="font-sans-light text-sm text-lacelle-gold/70 tracking-widest-xl">
            两个世纪的调香传承
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/collections" className="btn-gold">
              Découvrir les Collections
            </Link>
            <Link to="/heritage" className="btn-gold-filled">
              Notre Héritage
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-lacelle-gold/0 to-lacelle-gold/60" />
          <p className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold/40 uppercase">Scroll</p>
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <p className="section-label mb-8">La Philosophie</p>
          <blockquote className="font-playfair text-3xl md:text-4xl lg:text-5xl text-lacelle-cream font-light italic leading-relaxed mb-8">
            "Une goutte de parfum,<br />
            <span className="text-gold-gradient">une demi-page d'histoire de France."</span>
          </blockquote>
          <div className="gold-divider" />
          <p className="font-sans-light text-sm text-lacelle-gold/60 tracking-widest-xl mt-6 mb-8">
            一滴香水，半部法国史
          </p>
          <p className="font-cormorant text-lg text-lacelle-cream/70 leading-relaxed max-w-2xl mx-auto">
            Depuis 1802, la Maison LA CELLE perpétue l'art sacré de la parfumerie française. 
            Née dans les champs de fleurs de Grasse, notre maison a traversé deux siècles 
            d'histoire européenne, servant les plus grandes cours royales et les esprits 
            les plus raffinés du continent.
          </p>
        </div>
      </section>

      {/* Heritage Teaser — Three pillars */}
      <section className="py-20 px-6 bg-lacelle-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-section">
            <p className="section-label mb-4">Trois Siècles · 三个世纪</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic">
              L'Âme de la Maison
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-lacelle-gold/10">
            {[
              {
                year: '1802',
                title: 'La Fondation',
                cn: '创立',
                desc: 'Léa Celle, fille d\'un apothicaire grassois, ouvre sa première boutique au Palais-Royal de Paris. Napoléon Bonaparte, alors Premier Consul, lui accorde sa première commande impériale.',
                img: `${CDN}/palais-royal_e340be0a.jpg`,
              },
              {
                year: '1807',
                title: 'Le Brevet Royal',
                cn: '皇室认证',
                desc: 'L\'Impératrice Joséphine de Beauharnais, épouse de Napoléon, nomme LA CELLE "Parfumeur Officiel de la Cour Impériale". La maison reçoit le droit d\'arborer les armoiries impériales.',
                img: `${CDN}/josephine-portrait_2898be02.jpg`,
              },
              {
                year: '1889',
                title: 'L\'Exposition Universelle',
                cn: '世博会金奖',
                desc: 'À l\'Exposition Universelle de Paris, LA CELLE remporte la Médaille d\'Or pour son "Essence de Grasse Absolue". Victor Hugo, présent à la cérémonie, aurait déclaré : "Ce parfum, c\'est la France elle-même."',
                img: `${CDN}/art-nouveau-poster_c803ef72.jpg`,
              },
            ].map((item, i) => (
              <div key={i} className={`relative overflow-hidden group fade-in-section`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="aspect-[4/5] relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover vintage-filter group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black via-lacelle-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold uppercase mb-2">{item.cn}</p>
                    <p className="gold-shimmer font-playfair text-5xl font-light mb-2">{item.year}</p>
                    <h3 className="font-playfair text-xl text-lacelle-cream italic mb-3">{item.title}</h3>
                    <p className="font-cormorant text-lacelle-cream/60 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 fade-in-section">
            <Link to="/heritage" className="btn-gold">
              Explorer l'Histoire Complète · 探索完整历史
            </Link>
          </div>
        </div>
      </section>

      {/* Grasse Origins */}
      <section className="relative py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{ backgroundImage: `url(${CDN}/grasse-lavender_2a55b173.jpg)` }}
        />
        <div className="absolute inset-0 bg-lacelle-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-in-section">
          <p className="section-label mb-6">Les Origines · 起源</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic mb-8">
            Grasse, Capitale Mondiale<br />du Parfum
          </h2>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl text-lacelle-cream/80 italic leading-relaxed mt-8 mb-6">
            Dans les collines ensoleillées de Provence, où la rose centifolia, le jasmin de Grasse 
            et la tubéreuse s'épanouissent sous le soleil méditerranéen, la famille Celle a puisé 
            pendant deux siècles les essences les plus précieuses du monde.
          </p>
          <p className="font-sans-light text-sm text-lacelle-gold/60 tracking-wider">
            在普罗旺斯阳光普照的山丘上，百叶玫瑰、格拉斯茉莉与晚香玉在地中海阳光下盛放，
            奢利家族两个世纪以来在此汲取世界最珍贵的香精。
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            {[
              { num: '220+', label: 'Années d\'Histoire', cn: '年历史' },
              { num: '90%', label: 'Essences Naturelles', cn: '天然香精' },
              { num: '47', label: 'Créations Rares', cn: '稀有香型' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-playfair text-3xl text-lacelle-gold font-light">{stat.num}</p>
                <p className="font-sans-light text-xs text-lacelle-cream/50 tracking-wider uppercase mt-1">{stat.label}</p>
                <p className="font-sans-light text-xs text-lacelle-gold/40 mt-0.5">{stat.cn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-section">
            <p className="section-label mb-4">Nos Collections · 系列香水</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic">
              L'Art de la Fragrance
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {/* Maison de Celle - large */}
            <div className="relative overflow-hidden group fade-in-section">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-[500px] relative">
                <img
                  src={`${CDN}/bottle-antique-gold_d9766218.jpg`}
                  alt="Maison de Celle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black via-lacelle-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <p className="section-label mb-2">Haute Parfumerie · 高端系列</p>
                  <h3 className="font-playfair text-3xl text-lacelle-cream italic mb-3">Maison de Celle</h3>
                  <p className="font-cormorant text-lacelle-cream/70 text-base mb-6 max-w-sm">
                    La collection suprême. Chaque flacon est une œuvre d'art, chaque goutte 
                    un voyage dans les archives secrètes de la maison.
                  </p>
                  <Link to="/maison-de-celle" className="btn-gold text-sm">
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column - two smaller */}
            <div className="flex flex-col gap-1">
              <div className="relative overflow-hidden group fade-in-section" style={{ transitionDelay: '150ms' }}>
                <div className="aspect-[16/9] relative">
                  <img
                    src={`${CDN}/bottle-18k-gold_01a8e07b.jpg`}
                    alt="Le Minuit à Paris"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-lacelle-black/80 via-lacelle-black/30 to-transparent" />
                  <div className="absolute left-0 top-0 bottom-0 flex items-center p-8">
                    <div>
                      <p className="section-label mb-2">Nuit Parisienne · 巴黎之夜</p>
                      <h3 className="font-playfair text-2xl text-lacelle-cream italic mb-2">Le Minuit à Paris</h3>
                      <Link to="/collections" className="btn-gold text-xs">Voir</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1">
                <div className="relative overflow-hidden group fade-in-section" style={{ transitionDelay: '300ms' }}>
                  <div className="aspect-square relative">
                    <img
                      src={`${CDN}/bottle-crystal_911dd6ad.jpg`}
                      alt="Parfum d'Amour"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black via-lacelle-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-sans-light text-xs text-lacelle-gold tracking-wider uppercase mb-1">Amour · 爱情</p>
                      <h3 className="font-playfair text-lg text-lacelle-cream italic">Parfum d'Amour</h3>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden group fade-in-section" style={{ transitionDelay: '450ms' }}>
                  <div className="aspect-square relative">
                    <img
                      src={`${CDN}/grasse-perfumery_130cd8fe.jpeg`}
                      alt="Parfum d'Auto"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black via-lacelle-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-sans-light text-xs text-lacelle-gold tracking-wider uppercase mb-1">Auto · 汽车</p>
                      <h3 className="font-playfair text-lg text-lacelle-cream italic">Parfum d'Auto</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Olfactory Notes Teaser */}
      <section className="py-32 px-6 bg-lacelle-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="fade-in-section">
              <p className="section-label mb-6">L'Art Olfactif · 调香艺术</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic leading-tight mb-8">
                Les Carnets Secrets<br />
                <span className="text-lacelle-gold">du Maître Parfumeur</span>
              </h2>
              <div className="gold-divider-left" />
              <p className="font-cormorant text-lg text-lacelle-cream/70 leading-relaxed mb-6">
                Depuis 1802, les maîtres parfumeurs de la Maison LA CELLE consignent leurs 
                créations dans des carnets reliés en cuir marocain. Ces archives olfactives, 
                jalousement gardées dans les caves de l'atelier grassois, constituent le 
                patrimoine le plus précieux de la maison.
              </p>
              <p className="font-sans-light text-sm text-lacelle-gold/60 tracking-wider mb-8">
                自1802年起，奢利世家的调香大师们将每一个创作记录在摩洛哥皮革装订的笔记本中。
                这些嗅觉档案珍藏于格拉斯工坊的地窖中，是品牌最珍贵的遗产。
              </p>
              <Link to="/olfactory-notes" className="btn-gold">
                Lire les Carnets · 阅读调香笔记
              </Link>
            </div>
            <div className="relative fade-in-section" style={{ transitionDelay: '200ms' }}>
              <img
                src={`${CDN}/alchemy-lab_26f68c59.jpg`}
                alt="Atelier de parfumerie"
                className="w-full aspect-[4/5] object-cover vintage-filter"
              />
              <div className="absolute -bottom-6 -left-6 bg-lacelle-black border border-lacelle-gold/20 p-6 max-w-xs">
                <p className="font-cormorant text-lacelle-cream/80 text-sm italic leading-relaxed">
                  "La rose de mai de Grasse est la plus noble des fleurs. 
                  Elle ne s'épanouit que trois semaines par an, 
                  et c'est dans ces trois semaines que naît l'éternité."
                </p>
                <p className="font-sans-light text-xs text-lacelle-gold/60 mt-3 tracking-wider">
                  — Léa Celle, Carnet No.1, 1802
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Figures */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-section">
            <p className="section-label mb-4">Témoignages Historiques · 历史见证</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic">
              Ceux Qui Nous Ont Honorés
            </h2>
            <p className="font-sans-light text-sm text-lacelle-gold/50 tracking-wider mt-4">曾经给予我们荣耀的人们</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Impératrice Joséphine',
                years: '1763 – 1814',
                role: 'Impératrice des Français',
                cn: '法兰西皇后',
                quote: 'Nulle autre fragrance ne saurait égaler l\'essence de roses que me prépare Madame Celle. C\'est le parfum de la France impériale.',
                img: `${CDN}/josephine-portrait_2898be02.jpg`,
              },
              {
                name: 'Victor Hugo',
                years: '1802 – 1885',
                role: 'Écrivain & Poète',
                cn: '法国文豪',
                quote: 'J\'ai respiré ce matin un flacon de LA CELLE. Il m\'a semblé sentir toute la Provence, toute la France, tout le génie d\'un peuple condensé en une seule goutte.',
                img: `${CDN}/vintage-lady-book_29a01db8.jpeg`,
              },
              {
                name: 'Coco Chanel',
                years: '1883 – 1971',
                role: 'Couturière & Parfumeur',
                cn: '时尚传奇',
                quote: 'Avant de créer mon propre parfum, j\'ai étudié pendant des années les archives de LA CELLE. C\'est là que j\'ai appris ce qu\'est vraiment un parfum français.',
                img: `${CDN}/art-nouveau-poster_c803ef72.jpg`,
              },
            ].map((person, i) => (
              <div key={i} className={`fade-in-section`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="border border-lacelle-gold/10 p-8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 overflow-hidden flex-shrink-0">
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-full h-full object-cover vintage-filter"
                      />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg text-lacelle-cream italic">{person.name}</h3>
                      <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-wider uppercase mt-1">{person.role}</p>
                      <p className="font-sans-light text-xs text-lacelle-cream/30 tracking-wider">{person.cn} · {person.years}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="w-8 h-px bg-lacelle-gold/30 mb-4" />
                    <p className="font-cormorant text-lacelle-cream/70 text-base italic leading-relaxed">
                      "{person.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CDN}/perfumery-history_eb0bebea.jpg)` }}
        />
        <div className="absolute inset-0 bg-lacelle-black/75" />
        <div className="relative z-10 text-center px-6 fade-in-section">
          <p className="section-label mb-6">Maison de Celle · 高端系列</p>
          <h2 className="font-playfair text-4xl md:text-6xl text-lacelle-cream italic mb-6">
            L'Ultime Expression<br />
            <span className="text-gold-gradient">de la Parfumerie Française</span>
          </h2>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl text-lacelle-cream/70 italic mt-8 mb-12 max-w-2xl mx-auto">
            Chaque création de la collection Maison de Celle est produite en série limitée 
            de 47 exemplaires numérotés, dans des flacons taillés à la main par les cristalliers 
            de Saint-Louis, fondés en 1586.
          </p>
          <Link to="/maison-de-celle" className="btn-gold-filled text-sm">
            Découvrir Maison de Celle · 探索高端系列
          </Link>
        </div>
      </section>
    </div>
  )
}
