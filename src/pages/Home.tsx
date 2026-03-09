import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

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
  const { isCN } = useLanguage()

  const pillars = [
    {
      year: '1802',
      fr: 'La Fondation',
      zh: '创立',
      fr_desc: "Léa Celle, fille d'un apothicaire grassois, ouvre sa première boutique au Palais-Royal de Paris. Napoléon Bonaparte, alors Premier Consul, lui accorde sa première commande impériale.",
      zh_desc: '格拉斯药剂师之女蕾雅·奢利在巴黎皇家宫殿开设第一家香水店。拿破仑·波拿巴以第一执政身份给予首批皇室订单。',
      img: `${CDN}/palais-royal_e340be0a.jpg`,
    },
    {
      year: '1807',
      fr: 'Le Brevet Royal',
      zh: '皇室认证',
      fr_desc: "L'Impératrice Joséphine de Beauharnais, épouse de Napoléon, nomme LA CELLE \"Parfumeur Officiel de la Cour Impériale\". La maison reçoit le droit d'arborer les armoiries impériales.",
      zh_desc: '约瑟芬皇后授予LA CELLE"帝国宫廷官方调香师"称号，世家获准使用帝国纹章。',
      img: `${CDN}/josephine-portrait_2898be02.jpg`,
    },
    {
      year: '1889',
      fr: "L'Exposition Universelle",
      zh: '世博会金奖',
      fr_desc: "À l'Exposition Universelle de Paris, LA CELLE remporte la Médaille d'Or pour son \"Essence de Grasse Absolue\". Victor Hugo, présent à la cérémonie, aurait déclaré : \"Ce parfum, c'est la France elle-même.\"",
      zh_desc: '在巴黎世博会上，LA CELLE凭借"格拉斯绝对精华"荣获金奖。维克多·雨果出席颁奖典礼，据称赞叹道："这香水，就是法国本身。"',
      img: `${CDN}/art-nouveau-poster_c803ef72.jpg`,
    },
  ]

  const figures = [
    {
      name: 'Impératrice Joséphine',
      years: '1763 – 1814',
      fr_role: 'Impératrice des Français',
      zh_role: '法兰西皇后',
      quote: "Nulle autre fragrance ne saurait égaler l'essence de roses que me prépare Madame Celle. C'est le parfum de la France impériale.",
      img: `${CDN}/josephine-portrait_2898be02.jpg`,
    },
    {
      name: 'Victor Hugo',
      years: '1802 – 1885',
      fr_role: 'Écrivain & Poète',
      zh_role: '法国文豪',
      quote: "J'ai respiré ce matin un flacon de LA CELLE. Il m'a semblé sentir toute la Provence, toute la France, tout le génie d'un peuple condensé en une seule goutte.",
      img: `${CDN}/vintage-lady-book_29a01db8.jpeg`,
    },
    {
      name: 'Coco Chanel',
      years: '1883 – 1971',
      fr_role: 'Couturière & Parfumeur',
      zh_role: '时尚传奇',
      quote: "Avant de créer mon propre parfum, j'ai étudié pendant des années les archives de LA CELLE. C'est là que j'ai appris ce qu'est vraiment un parfum français.",
      img: `${CDN}/art-nouveau-poster_c803ef72.jpg`,
    },
  ]

  const stats = [
    { num: '220+', fr: "Années d'Histoire", zh: '年历史' },
    { num: '90%', fr: 'Essences Naturelles', zh: '天然香精' },
    { num: '47', fr: 'Créations Rares', zh: '稀有香型' },
  ]

  return (
    <div className="bg-lacelle-black">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${CDN}/versailles-coronation_acda155d.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lacelle-black/40 via-lacelle-black/50 to-lacelle-black" />

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
          {isCN && (
            <p className="font-sans-light text-sm text-lacelle-gold/70 tracking-widest-xl">
              两个世纪的调香传承
            </p>
          )}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/collections" className="btn-gold">
              {isCN ? '探索系列' : 'Découvrir les Collections'}
            </Link>
            <Link to="/heritage" className="btn-gold-filled">
              {isCN ? '品牌历史' : 'Notre Héritage'}
            </Link>
          </div>
        </div>

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
          {isCN && (
            <p className="font-sans-light text-sm text-lacelle-gold/60 tracking-widest-xl mt-6 mb-4">
              一滴香水，半部法国史
            </p>
          )}
          <p className="font-cormorant text-lg text-lacelle-cream/70 leading-relaxed max-w-2xl mx-auto mt-8">
            {isCN
              ? '自1802年，奢利世家延续法国调香的神圣艺术。诞生于格拉斯的花田，我们的世家穿越两个世纪的欧洲历史，服务于最伟大的皇室宫廷与最精致的心灵。'
              : "Depuis 1802, la Maison LA CELLE perpétue l'art sacré de la parfumerie française. Née dans les champs de fleurs de Grasse, notre maison a traversé deux siècles d'histoire européenne, servant les plus grandes cours royales et les esprits les plus raffinés du continent."
            }
          </p>
        </div>
      </section>

      {/* Heritage Teaser — Three pillars */}
      <section className="py-20 px-6 bg-lacelle-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-section">
            <p className="section-label mb-4">
              {isCN ? '三个世纪' : 'Trois Siècles'}
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic">
              L'Âme de la Maison
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-lacelle-gold/10">
            {pillars.map((item, i) => (
              <div key={i} className="relative overflow-hidden group fade-in-section" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="aspect-[4/5] relative">
                  <img
                    src={item.img}
                    alt={item.fr}
                    className="w-full h-full object-cover vintage-filter group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black via-lacelle-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="gold-shimmer font-playfair text-5xl font-light mb-2">{item.year}</p>
                    <h3 className="font-playfair text-xl text-lacelle-cream italic mb-3">
                      {isCN ? item.zh : item.fr}
                    </h3>
                    <p className="font-cormorant text-lacelle-cream/60 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                      {isCN ? item.zh_desc : item.fr_desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 fade-in-section">
            <Link to="/heritage" className="btn-gold">
              {isCN ? '探索完整历史' : "Explorer l'Histoire Complète"}
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
          <p className="section-label mb-6">
            {isCN ? '起源' : 'Les Origines'}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic mb-8">
            {isCN ? '格拉斯，世界香水之都' : "Grasse, Capitale Mondiale du Parfum"}
          </h2>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl text-lacelle-cream/80 italic leading-relaxed mt-8 mb-6">
            {isCN
              ? '在普罗旺斯阳光普照的山丘上，百叶玫瑰、格拉斯茉莉与晚香玉在地中海阳光下盛放，奢利家族两个世纪以来在此汲取世界最珍贵的香精。'
              : "Dans les collines ensoleillées de Provence, où la rose centifolia, le jasmin de Grasse et la tubéreuse s'épanouissent sous le soleil méditerranéen, la famille Celle a puisé pendant deux siècles les essences les plus précieuses du monde."
            }
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-playfair text-3xl text-lacelle-gold font-light">{stat.num}</p>
                <p className="font-sans-light text-xs text-lacelle-cream/50 tracking-wider uppercase mt-1">
                  {isCN ? stat.zh : stat.fr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-section">
            <p className="section-label mb-4">
              {isCN ? '系列香水' : 'Nos Collections'}
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic">
              {isCN ? '嗅觉艺术的世界' : "L'Art de la Fragrance"}
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
                  <p className="section-label mb-2">
                    {isCN ? '高端系列' : 'Haute Parfumerie'}
                  </p>
                  <h3 className="font-playfair text-3xl text-lacelle-cream italic mb-3">Maison de Celle</h3>
                  <p className="font-cormorant text-lacelle-cream/70 text-base mb-6 max-w-sm">
                    {isCN
                      ? '至高系列。每一只香水瓶都是艺术品，每一滴都是穿越世家秘密档案的旅程。'
                      : "La collection suprême. Chaque flacon est une œuvre d'art, chaque goutte un voyage dans les archives secrètes de la maison."
                    }
                  </p>
                  <Link to="/maison-de-celle" className="btn-gold text-sm">
                    {isCN ? '探索' : 'Découvrir'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column */}
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
                      <p className="section-label mb-2">
                        {isCN ? '巴黎之夜' : 'Nuit Parisienne'}
                      </p>
                      <h3 className="font-playfair text-2xl text-lacelle-cream italic mb-2">Le Minuit à Paris</h3>
                      <Link to="/collections" className="btn-gold text-xs">
                        {isCN ? '查看' : 'Voir'}
                      </Link>
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
                      <p className="font-sans-light text-xs text-lacelle-gold tracking-wider uppercase mb-1">
                        {isCN ? '奢利爱情水 · 皇室御命研发' : 'Amour · Commande Impériale'}
                      </p>
                      <h3 className="font-playfair text-lg text-lacelle-cream italic">Parfum d'Amour</h3>
                      {isCN && <p className="font-sans-light text-xs text-lacelle-cream/50 mt-1">第一款私密香水 · 催情配方</p>}
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
                      <p className="font-sans-light text-xs text-lacelle-gold tracking-wider uppercase mb-1">
                        {isCN ? '车旅之香 · 人类首款车载香薰' : 'Auto · Premier Parfum de Voiture'}
                      </p>
                      <h3 className="font-playfair text-lg text-lacelle-cream italic">Parfum d'Auto</h3>
                      {isCN && <p className="font-sans-light text-xs text-lacelle-cream/50 mt-1">汽车发明后人类历史首款</p>}
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
              <p className="section-label mb-6">
                {isCN ? '调香艺术' : "L'Art Olfactif"}
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic leading-tight mb-8">
                {isCN ? (
                  <>调香大师的<br /><span className="text-lacelle-gold">秘密笔记</span></>
                ) : (
                  <>Les Carnets Secrets<br /><span className="text-lacelle-gold">du Maître Parfumeur</span></>
                )}
              </h2>
              <div className="gold-divider-left" />
              <p className="font-cormorant text-lg text-lacelle-cream/70 leading-relaxed mb-8">
                {isCN
                  ? '自1802年起，奢利世家的调香大师们将每一个创作记录在摩洛哥皮革装订的笔记本中。这些嗅觉档案珍藏于格拉斯工坊的地窖中，是品牌最珍贵的遗产。'
                  : "Depuis 1802, les maîtres parfumeurs de la Maison LA CELLE consignent leurs créations dans des carnets reliés en cuir marocain. Ces archives olfactives, jalousement gardées dans les caves de l'atelier grassois, constituent le patrimoine le plus précieux de la maison."
                }
              </p>
              <Link to="/olfactory-notes" className="btn-gold">
                {isCN ? '阅读调香笔记' : 'Lire les Carnets'}
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
            <p className="section-label mb-4">
              {isCN ? '历史见证' : 'Témoignages Historiques'}
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic">
              {isCN ? '曾经给予我们荣耀的人们' : 'Ceux Qui Nous Ont Honorés'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {figures.map((person, i) => (
              <div key={i} className="fade-in-section" style={{ transitionDelay: `${i * 150}ms` }}>
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
                      <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-wider uppercase mt-1">
                        {isCN ? person.zh_role : person.fr_role}
                      </p>
                      <p className="font-sans-light text-xs text-lacelle-cream/30 tracking-wider">{person.years}</p>
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
          <p className="section-label mb-6">Maison de Celle</p>
          <h2 className="font-playfair text-4xl md:text-6xl text-lacelle-cream italic mb-6">
            {isCN ? (
              <>法国调香艺术的<br /><span className="text-gold-gradient">极致表达</span></>
            ) : (
              <>L'Ultime Expression<br /><span className="text-gold-gradient">de la Parfumerie Française</span></>
            )}
          </h2>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl text-lacelle-cream/70 italic mt-8 mb-12 max-w-2xl mx-auto">
            {isCN
              ? 'Maison de Celle系列每款作品限量47瓶，编号出品，香水瓶由创立于1586年的圣路易水晶坊手工切割。'
              : "Chaque création de la collection Maison de Celle est produite en série limitée de 47 exemplaires numérotés, dans des flacons taillés à la main par les cristalliers de Saint-Louis, fondés en 1586."
            }
          </p>
          <Link to="/maison-de-celle" className="btn-gold-filled text-sm">
            {isCN ? '探索高端系列' : 'Découvrir Maison de Celle'}
          </Link>
        </div>
      </section>
    </div>
  )
}
