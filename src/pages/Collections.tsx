import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663405311158/ebebYjMErshCmhKiJP5h4X'

function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const collections = [
  {
    id: 'minuit',
    name: 'Le Minuit à Paris',
    zh_name: '午夜巴黎',
    fr_subtitle: 'Collection Nocturne',
    zh_subtitle: '夜间系列',
    year: '1910',
    logo: `${CDN}/logo-minuit_6c56134a.png`,
    img: `${CDN}/bottle-18k-gold_01a8e07b.jpg`,
    bg: `${CDN}/shop-paris-1900_162ba08f.jpg`,
    fr_desc: `Créée en 1910 pour célébrer la Belle Époque parisienne, "Le Minuit à Paris" est la collection la plus emblématique de la Maison LA CELLE. Inspirée des nuits parisiennes de la fin du XIXe siècle — les cabarets de Montmartre, les salons littéraires du Marais, les promenades nocturnes au bord de la Seine — cette collection capture l'essence même de Paris après minuit.`,
    zh_desc: '创作于1910年，以庆祝巴黎美好年代，"午夜巴黎"是LA CELLE最具代表性的系列。灵感来自19世纪末的巴黎夜晚——蒙马特的歌舞厅、玛莱区的文学沙龙、塞纳河畔的夜间漫步——这个系列捕捉了午夜后巴黎的精髓。',
    notes: {
      top: ['Bergamote de Calabre', 'Mandarine Sicilienne', 'Poivre Noir'],
      heart: ['Rose de Mai', 'Jasmin de Grasse', 'Iris de Florence'],
      base: ['Musc Blanc', 'Santal de Mysore', 'Ambre Gris'],
    },
    products: [
      { name: 'Minuit Absolu', zh_name: '绝对午夜', concentration: 'Extrait de Parfum', volume: '50ml', price: '¥2,880' },
      { name: 'Nuit de Lumière', zh_name: '光之夜', concentration: 'Eau de Parfum', volume: '100ml', price: '¥1,680' },
      { name: 'Brume de Minuit', zh_name: '午夜薄雾', concentration: 'Eau de Toilette', volume: '100ml', price: '¥980' },
    ],
  },
  {
    id: 'amour',
    name: "Parfum d'Amour",
    zh_name: '爱情香水',
    fr_subtitle: 'Collection Romantique',
    zh_subtitle: '浪漫系列',
    year: '1802',
    logo: `${CDN}/logo-amour_4a06a372.png`,
    img: `${CDN}/bottle-crystal_911dd6ad.jpg`,
    bg: `${CDN}/grasse-lavender_2a55b173.jpg`,
    fr_desc: `La collection originale de la Maison, créée par Léa Celle elle-même en 1802. "Parfum d'Amour" est une déclaration d'amour à la féminité française — douce, complexe, inoubliable. Joséphine de Beauharnais en était si éprise qu'elle en fit asperger les murs de sa chambre à coucher à Malmaison.`,
    zh_desc: '品牌的原创系列，由蕾雅·奢利本人于1802年创作。"爱情香水"是对法式女性气质的情书——温柔、复杂、难以忘怀。约瑟芬·波拿巴对其如此痴迷，以至于让人将其喷洒在马尔迈松宫卧室的墙壁上。',
    notes: {
      top: ['Rose Centifolia', 'Pivoine de Grasse', 'Pamplemousse Rose'],
      heart: ['Tubéreuse', 'Ylang-Ylang', 'Magnolia'],
      base: ['Patchouli', 'Vanille Bourbon', 'Benjoin'],
    },
    products: [
      { name: "L'Amour Éternel", zh_name: '永恒之爱', concentration: 'Extrait de Parfum', volume: '30ml', price: '¥3,280' },
      { name: 'Rose de Joséphine', zh_name: '约瑟芬玫瑰', concentration: 'Eau de Parfum', volume: '75ml', price: '¥1,980' },
      { name: "Fleur d'Amour", zh_name: '爱情之花', concentration: 'Eau de Toilette', volume: '100ml', price: '¥1,080' },
    ],
  },
  {
    id: 'auto',
    name: "Parfum d'Auto",
    zh_name: '汽车香氛',
    fr_subtitle: 'Collection Automobile',
    zh_subtitle: '汽车系列',
    year: '1924',
    logo: `${CDN}/logo-auto_7518be31.png`,
    img: `${CDN}/bottle-antique-gold_d9766218.jpg`,
    bg: `${CDN}/palais-royal_e340be0a.jpg`,
    fr_desc: `Née en 1924 à l'âge d'or de l'automobile, "Parfum d'Auto" est une collection unique au monde : des fragrances spécialement conçues pour sublimer l'intérieur des véhicules de luxe. Créée à la demande de Louis Vuitton pour les voitures de la famille royale britannique, cette collection allie la puissance des notes boisées à la délicatesse des essences florales.`,
    zh_desc: '诞生于1924年汽车黄金时代，"汽车香氛"是世界上独一无二的系列：专为提升豪华车内部空间而设计的香水。应路易威登为英国王室车辆的委托而创作，这个系列将木质调的力量与花香精华的细腻完美结合。',
    notes: {
      top: ['Cuir de Russie', 'Cèdre de Virginie', 'Cardamome'],
      heart: ["Vétiver d'Haïti", 'Oud de Laos', 'Tabac Blond'],
      base: ['Labdanum', 'Castoreum', 'Ambre Gris'],
    },
    products: [
      { name: 'Grand Tourisme', zh_name: '大旅行', concentration: 'Parfum de Voiture', volume: '100ml', price: '¥1,280' },
      { name: 'Route Royale', zh_name: '皇家之路', concentration: 'Parfum de Voiture Premium', volume: '200ml', price: '¥2,480' },
      { name: 'Vitesse & Élégance', zh_name: '速度与优雅', concentration: 'Diffuseur de Luxe', volume: '50ml', price: '¥880' },
    ],
  },
]

const noteTiers = [
  { fr_label: 'Notes de Tête', zh_label: '前调', key: 'top' as const },
  { fr_label: 'Notes de Cœur', zh_label: '中调', key: 'heart' as const },
  { fr_label: 'Notes de Fond', zh_label: '后调', key: 'base' as const },
]

export default function Collections() {
  useIntersectionObserver()
  const [activeCollection, setActiveCollection] = useState(0)
  const { isCN } = useLanguage()

  return (
    <div className="bg-lacelle-black pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CDN}/grasse-perfumery_130cd8fe.jpeg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lacelle-black/40 via-lacelle-black/60 to-lacelle-black" />
        <div className="relative z-10 text-center px-6">
          <p className="section-label mb-6">
            {isCN ? '我们的香水' : 'Nos Parfums'}
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl text-lacelle-cream italic font-light mb-4">
            {isCN ? '系列香水' : 'Collections'}
          </h1>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl text-lacelle-cream/70 italic mt-6">
            {isCN ? '自1802年以来的香水艺术' : "L'art de la fragrance depuis 1802"}
          </p>
        </div>
      </section>

      {/* Collection Selector */}
      <section className="py-16 px-6 border-b border-lacelle-gold/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-0">
            {collections.map((col, i) => (
              <button
                key={i}
                onClick={() => setActiveCollection(i)}
                className={`flex-1 py-6 px-8 text-center border-b-2 transition-all duration-300 ${
                  activeCollection === i
                    ? 'border-lacelle-gold text-lacelle-gold'
                    : 'border-transparent text-lacelle-cream/40 hover:text-lacelle-cream/70'
                }`}
              >
                <p className="font-playfair text-lg italic">{col.name}</p>
                {isCN && (
                  <p className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold/50 uppercase mt-1">{col.zh_name}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Collection Detail */}
      {collections.map((col, i) => (
        <div key={i} className={activeCollection === i ? 'block' : 'hidden'}>
          {/* Collection Hero */}
          <section className="relative py-32 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${col.bg})` }}
            />
            <div className="absolute inset-0 bg-lacelle-black/75" />
            <div className="relative z-10 max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="section-label mb-4">
                    {isCN ? col.zh_subtitle : col.fr_subtitle} · Depuis {col.year}
                  </p>
                  <img
                    src={col.logo}
                    alt={col.name}
                    className="h-12 w-auto brightness-0 invert opacity-80 mb-6"
                  />
                  <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic mb-6">{col.name}</h2>
                  <div className="gold-divider-left" />
                  <p className="font-cormorant text-lg text-lacelle-cream/70 leading-relaxed mt-6">
                    {isCN ? col.zh_desc : col.fr_desc}
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src={col.img}
                      alt={col.name}
                      className="w-64 h-80 object-cover"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-lacelle-black border border-lacelle-gold/30 p-4">
                      <p className="font-sans-light text-xs text-lacelle-gold tracking-widest-xl uppercase">Depuis</p>
                      <p className="font-playfair text-3xl text-lacelle-cream">{col.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Olfactory Pyramid */}
          <section className="py-24 px-6 bg-lacelle-dark">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <p className="section-label mb-4">
                  {isCN ? '香调金字塔' : 'Pyramide Olfactive'}
                </p>
                <h3 className="font-playfair text-3xl text-lacelle-cream italic">
                  {isCN ? '香水结构' : 'La Structure du Parfum'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {noteTiers.map((tier, j) => (
                  <div key={j} className="text-center border border-lacelle-gold/10 p-8">
                    <div className="w-8 h-8 border border-lacelle-gold/40 rotate-45 mx-auto mb-4" />
                    <p className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold uppercase mb-1">
                      {isCN ? tier.zh_label : tier.fr_label}
                    </p>
                    <ul className="space-y-2 mt-4">
                      {col.notes[tier.key].map((note, k) => (
                        <li key={k} className="font-cormorant text-lacelle-cream/70 text-base italic">{note}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Products */}
          <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <p className="section-label mb-4">
                  {isCN ? '产品系列' : 'La Gamme'}
                </p>
                <h3 className="font-playfair text-3xl text-lacelle-cream italic">
                  {isCN ? '我们的作品' : 'Nos Créations'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {col.products.map((product, j) => (
                  <div key={j} className="border border-lacelle-gold/10 p-8 hover:border-lacelle-gold/40 transition-colors duration-300">
                    <div className="aspect-[3/4] bg-lacelle-dark mb-6 flex items-center justify-center">
                      <img
                        src={col.img}
                        alt={product.name}
                        className="w-24 h-32 object-cover opacity-80"
                      />
                    </div>
                    <p className="font-sans-light text-xs text-lacelle-gold tracking-widest-xl uppercase mb-2">{product.concentration}</p>
                    <h4 className="font-playfair text-xl text-lacelle-cream italic mb-1">{product.name}</h4>
                    {isCN && (
                      <p className="font-sans-light text-xs text-lacelle-cream/40 tracking-wider mb-1">{product.zh_name}</p>
                    )}
                    <p className="font-sans-light text-xs text-lacelle-cream/30 tracking-wider mb-4">{product.volume}</p>
                    <div className="flex items-center justify-between">
                      <p className="font-cormorant text-2xl text-lacelle-gold">{product.price}</p>
                      <button className="btn-gold text-xs py-2 px-4">
                        {isCN ? '咨询' : 'Enquête'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* All Collections Grid */}
      <section className="py-24 px-6 bg-lacelle-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <p className="section-label mb-4">
              {isCN ? '全部系列' : 'Toutes les Collections'}
            </p>
            <h2 className="font-playfair text-4xl text-lacelle-cream italic">
              {isCN ? 'LA CELLE 的世界' : "L'Univers LA CELLE"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {collections.map((col, i) => (
              <div
                key={i}
                className="relative overflow-hidden group cursor-pointer fade-in-section"
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => { setActiveCollection(i); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={col.img}
                    alt={col.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black via-lacelle-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="font-sans-light text-xs text-lacelle-gold tracking-widest-xl uppercase mb-2">
                      {isCN ? col.zh_subtitle : col.fr_subtitle}
                    </p>
                    <h3 className="font-playfair text-2xl text-lacelle-cream italic mb-1">{col.name}</h3>
                    {isCN && (
                      <p className="font-sans-light text-xs text-lacelle-cream/50 tracking-wider">{col.zh_name} · {col.year}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maison de Celle CTA */}
      <section className="py-24 px-6 text-center fade-in-section">
        <p className="section-label mb-6">
          {isCN ? '至高系列' : 'Collection Suprême'}
        </p>
        <h2 className="font-playfair text-4xl text-lacelle-cream italic mb-6">
          {isCN ? '探索 Maison de Celle' : 'Découvrez Maison de Celle'}
        </h2>
        <p className="font-cormorant text-lg text-lacelle-cream/60 italic mb-10 max-w-xl mx-auto">
          {isCN
            ? '品牌最尊贵的系列，专为最挑剔的鉴赏家而设。'
            : "La collection la plus exclusive de la Maison, réservée aux connaisseurs les plus exigeants."
          }
        </p>
        <Link to="/maison-de-celle" className="btn-gold">
          {isCN ? 'Maison de Celle · 高端系列' : 'Maison de Celle'}
        </Link>
      </section>
    </div>
  )
}
