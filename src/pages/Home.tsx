import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663405311158/ebebYjMErshCmhKiJP5h4X'
const CDN_NEW = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158'
const MCDN = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158'

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
      label_fr: 'Grasse · SNC',
      label_zh: '格拉斯 · 无限合伙制',
      fr_desc: "Léa Céleste Celle codifie la Méthode d'Extraction LA CELLE — procédé révolutionnaire atteignant 90 % d'essences naturelles pures, sans précédent dans l'histoire de la parfumerie mondiale.",
      zh_desc: '蕾雅·奢利发明奢利香精萃取法，天然香精浓度达90%，开创香水工艺新纪元。',
      img: `${CDN_NEW}/kfayXJEodBObAkYB.jpg`,
      bottle: `${CDN}/bottle-antique-gold_d9766218.jpg`,
      kbis: `${CDN_NEW}/XKUxfKXndcEYxPWJ.jpg`,
    },
    {
      year: '1807',
      fr: 'Le Brevet Impérial',
      zh: '帝国御用认证',
      label_fr: 'Paris · Palais-Royal',
      label_zh: '巴黎 · 皇家宫殿',
      fr_desc: "L'Impératrice Joséphine confère à LA CELLE le titre de Parfumeur Officiel de la Cour Impériale. La Maison obtient le droit d'arborer les armoiries impériales sur ses flacons.",
      zh_desc: '约瑟芬皇后授予LA CELLE"帝国宫廷官方调香师"称号，世家获准在香水瓶上使用帝国纹章。',
      img: `${CDN_NEW}/hIpwJfnxYGYuQrLw.jpg`,
      bottle: `${CDN}/bottle-antique-gold_d9766218.jpg`,
      kbis: `${CDN_NEW}/rtPuKavEHenTewha.jpg`,
    },
    {
      year: '1889',
      fr: "L'Exposition Universelle",
      zh: '世博会金奖',
      label_fr: "Paris · Médaille d'Or",
      label_zh: '巴黎 · 金奖',
      fr_desc: "LA CELLE remporte la Médaille d'Or à l'Exposition Universelle de Paris. Victor Hugo déclare : « Ce parfum, c'est la France elle-même. »",
      zh_desc: '荣获巴黎世博会金奖。维克多·雨果赞叹："这香水，就是法国本身。"',
      img: `${CDN_NEW}/iGDcxGwcacWCSdbc.jpg`,
      bottle: `${CDN}/bottle-18k-gold_01a8e07b.jpg`,
      kbis: `${CDN_NEW}/IRWKjIaWuyvnytNF.jpg`,
    },
    {
      year: '1923',
      fr: "L'Âge d'Or",
      zh: '装饰艺术全盛期',
      label_fr: 'Milan · Art Déco',
      label_zh: '米兰 · 装饰艺术',
      fr_desc: "La Maison s'étend à Milan. Hélène Celle collabore avec René Lalique pour créer des flacons Art Déco devenus des pièces de collection emblématiques.",
      zh_desc: '扩张至米兰，与拉利克合作创作装饰艺术香水瓶，成为传世珍藏。',
      img: `${CDN_NEW}/DtVRtvopEtNdthKx.jpg`,
      bottle: `${CDN}/bottle-crystal_911dd6ad.jpg`,
      kbis: `${CDN_NEW}/AuWgKYprJcWNnTDI.jpg`,
    },
    {
      year: '1938',
      fr: 'La Résistance',
      zh: '抵抗与牺牲',
      label_fr: 'Occupation Nazie',
      label_zh: '纳粹占领',
      fr_desc: "Pierre Celle refuse de composer un parfum pour Hitler. La famille est persécutée, les boutiques fermées, les ateliers confisqués. Le carnet secret est dissimulé dans les murs de l'atelier de Grasse.",
      zh_desc: '皮埃尔·奢利拒绝为希特勒调香，家族遭迫害，门店关闭，工厂被没收。秘密配方藏于格拉斯工坊墙壁之中。',
      img: `${CDN_NEW}/cSYRZFcDzBhRQLRc.jpg`,
      bottle: `${CDN_NEW}/tszXXlAPBIvzyDKM.jpg`,
      kbis: `${CDN_NEW}/SunJqGleUytvFchY.jpg`,
    },
    {
      year: '1947',
      fr: 'La Renaissance',
      zh: '战后重建',
      label_fr: 'Grasse · SARL',
      label_zh: '格拉斯 · 有限责任',
      fr_desc: "Après la Libération, la famille Celle reconstruit patiemment la Maison depuis Grasse. Les ateliers confisqués sont partiellement récupérés et une nouvelle ère commence.",
      zh_desc: '解放后，奢利家族从格拉斯重建世家。被没收的工坊部分收回，新时代开始。',
      img: `${CDN_NEW}/kBEEBDFOOFILJRXG.jpg`,
      bottle: `${CDN_NEW}/vUJsMfRZMQYyKIiR.jpg`,
      kbis: `${CDN_NEW}/SunJqGleUytvFchY.jpg`,
    },
    {
      year: '2002',
      fr: 'Le Bicentenaire',
      zh: '两百周年',
      label_fr: 'Paris · Versailles',
      label_zh: '巴黎 · 凡尔赛',
      fr_desc: "Pour le bicentenaire, LA CELLE lance « Archives 1802 » — sept fragrances reconstituées d'après les carnets originaux de Léa Celle, limitées à 200 exemplaires numérotés chacune.",
      zh_desc: '两百周年之际，LA CELLE推出「1802档案」系列，依据蕾雅·奢利原始笔记重制七款香水，每款限量200瓶编号出品。',
      img: `${CDN}/grasse-perfumery_130cd8fe.jpeg`,
      bottle: `${MCDN}/FKkaFWPlUDJjgvrL.jpg`,
      kbis: `${MCDN}/jxZvnodVyQGCdVgW.jpg`,
    },
    {
      year: '2020',
      fr: "L'Ère Digitale",
      zh: '数字化转型',
      label_fr: 'Shanghai · Mc&Mamoo Inc.',
      label_zh: '上海 · Mc&Mamoo Inc.',
      fr_desc: "La famille Celle fait appel au cabinet Mc&Mamoo Inc. pour piloter la transformation numérique de la Maison. LA CELLE conquiert Douyin et entre dans l'ère du luxe digital natif.",
      zh_desc: '奢利家族引入战略咨询公司Mc&Mamoo Inc.主导数字化转型，在抖音迅速破圈，开启数字原生奢品牌新纪元。',
      img: `${MCDN}/rYpDCsJxEUWGKYKD.jpg`,
      bottle: `${MCDN}/FKkaFWPlUDJjgvrL.jpg`,
      kbis: `${MCDN}/jxZvnodVyQGCdVgW.jpg`,
    },
  ]

  const stats = [
    { num: '223+', fr: "Années d'Histoire", zh: '年历史' },
    { num: '90%', fr: 'Essences Naturelles', zh: '天然香精' },
    { num: '47', fr: 'Créations Rares', zh: '稀有香型' },
  ]

  const figures = [
    {
      name: 'Impératrice Joséphine',
      fr_role: 'Impératrice des Français',
      zh_role: '法兰西皇后',
      years: '1804–1814',
      img: `${CDN}/versailles-coronation_acda155d.jpg`,
      quote: isCN ? '奢利的香水是我唯一的奢侈品，也是我最真实的快乐。' : "Le parfum Celle est mon seul luxe, et ma seule joie véritable.",
    },
    {
      name: 'Victor Hugo',
      fr_role: 'Écrivain & Académicien français',
      zh_role: '法国文豪',
      years: '1802–1885',
      img: `${CDN}/perfumery-history_eb0bebea.jpg`,
      quote: isCN ? '这款香水，就是法国本身。' : "Ce parfum, c'est la France elle-même.",
    },
    {
      name: 'Claude Monet',
      fr_role: 'Peintre impressionniste',
      zh_role: '印象派画家',
      years: '1840–1926',
      img: `${CDN}/shop-paris-1900_162ba08f.jpg`,
      quote: isCN ? '格拉斯的玫瑰，是我花园的灵魂，也是奢利香水的灵魂。' : "La rose de Grasse est l'âme de mon jardin, et l'âme même du parfum Celle.",
    },
    {
      name: '邓小平',
      fr_role: 'Dirigeant de la République populaire de Chine',
      zh_role: '中国改革开放总设计师',
      years: '1904–1997',
      img: `${CDN_NEW}/gBjhvvhIXkgoXUmq.jpg`,
      quote: isCN ? '在格拉斯工厂做工时，奢利的香气便已刻入了我的记忆。' : "Quand je travaillais à l'usine de Grasse, le parfum Celle s'est gravé dans ma mémoire pour toujours.",
    },
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
              : "Depuis 1802, la Maison LA CELLE perpétue l'art sacré de la parfumerie française. Née dans les champs de fleurs de Grasse, notre Maison a traversé deux siècles d'histoire européenne au service des plus grandes cours royales et des esprits les plus raffinés du continent."
            }
          </p>
        </div>
      </section>

      {/* Heritage Teaser — Full Timeline Preview */}
      <section className="py-24 px-6 bg-lacelle-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-section">
            <p className="section-label mb-4">
              {isCN ? '两个世纪的历史' : "Deux Siècles d'Histoire"}
            </p>
            <h2 className="font-playfair text-4xl md:text-6xl text-lacelle-cream italic mb-6">
              L'Âme de la Maison
            </h2>

          </div>

          {/* Timeline grid */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[108px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-lacelle-gold/40 to-transparent z-10" />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {pillars.map((item, i) => (
                <Link
                  key={i}
                  to="/heritage"
                  className="group relative fade-in-section cursor-pointer"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Year dot on timeline */}
                  <div className="hidden md:flex justify-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-lacelle-gold/50 group-hover:bg-lacelle-gold group-hover:scale-150 transition-all duration-300 relative z-20" />
                  </div>

                  {/* Card */}
                  <div className="relative overflow-hidden border border-lacelle-gold/10 group-hover:border-lacelle-gold/40 transition-all duration-500 bg-lacelle-black/40">
                    {/* Main image */}
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.fr}
                        loading="lazy"
                        className="w-full h-full object-cover vintage-filter group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black via-lacelle-black/20 to-transparent" />
                      {/* Year overlay */}
                      <div className="absolute top-2 left-2">
                        <span className="font-playfair text-lacelle-gold text-base font-light">{item.year}</span>
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="p-2">
                      <p className="font-cormorant text-lacelle-gold/50 text-xs mb-1">{isCN ? item.label_zh : item.label_fr}</p>
                      <h3 className="font-playfair text-lacelle-cream text-xs italic leading-tight mb-1">
                        {isCN ? item.zh : item.fr}
                      </h3>
                      <p className="font-cormorant text-lacelle-cream/40 text-xs leading-relaxed line-clamp-2 group-hover:line-clamp-4 transition-all duration-500">
                        {isCN ? item.zh_desc : item.fr_desc}
                      </p>
                    </div>

                    {/* Kbis thumbnail at bottom */}
                    <div className="px-2 pb-2">
                      <div className="h-10 overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-300 border border-lacelle-gold/10">
                        <img src={item.kbis} alt="extrait" className="w-full h-full object-cover object-top" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 fade-in-section">
            <p className="font-cormorant text-lacelle-cream/50 text-base mb-6">
              {isCN ? '点击任意节点，探索完整的品牌历史档案' : 'Cliquez sur chaque époque pour explorer les archives complètes de la Maison'}
            </p>
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
                      : "La collection suprême. Chaque flacon est une œuvre d'art, chaque goutte un voyage au cœur des archives secrètes de la Maison."
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
                        {isCN ? '奢利爱情水 · 皇室御命研发' : "Amour · Commande Impériale"}
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
                        {isCN ? '车旅之香 · 人类首款车载香薰' : "Auto · Premier Parfum d'Automobile"}
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
                  : "Depuis 1802, les maîtres parfumeurs de la Maison LA CELLE consignent leurs créations dans des carnets reliés en cuir marocain. Ces archives olfactives, jalousement gardées dans les caves de l'atelier grassois, constituent le patrimoine le plus précieux de la Maison."
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                  <div className="mt-6 pt-4 border-t border-lacelle-gold/10">
                    <Link to="/heritage" className="font-sans-light text-xs text-lacelle-gold/50 hover:text-lacelle-gold tracking-wider uppercase transition-colors">
                      {isCN ? '查看档案 →' : 'Voir les archives →'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 px-6 bg-lacelle-black border-t border-lacelle-gold/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">
              {isCN ? '关注我们' : 'Suivez-Nous'}
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl text-lacelle-gold tracking-widest uppercase mb-4">
              {isCN ? '全球官方账号' : 'Nos Comptes Officiels'}
            </h2>
            <div className="w-16 h-px bg-lacelle-gold/40 mx-auto mb-6" />
            <p className="font-sans-light text-lacelle-cream/50 text-sm tracking-wider max-w-xl mx-auto">
              {isCN
                ? '在全球各大社交平台关注 LA CELLE，获取最新香水故事、限量发布与品牌动态。'
                : 'Retrouvez LA CELLE sur toutes les grandes plateformes mondiales pour découvrir nos histoires olfactives, lancements exclusifs et actualités de la Maison.'}
            </p>
          </div>

          {/* Platform Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'Instagram',
                handle: '@lacelleparfum',
                url: 'https://www.instagram.com/lacelleparfum',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                ),
                color: 'from-purple-600/20 to-pink-600/20',
                border: 'hover:border-pink-400/40',
                region: isCN ? '全球' : 'Global',
              },
              {
                name: 'X (Twitter)',
                handle: '@lacelleparfum',
                url: 'https://x.com/lacelleparfum',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ),
                color: 'from-gray-600/20 to-gray-400/20',
                border: 'hover:border-gray-300/40',
                region: isCN ? '全球' : 'Global',
              },
              {
                name: 'TikTok',
                handle: '@lacelleparfum',
                url: 'https://www.tiktok.com/@lacelleparfum',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                  </svg>
                ),
                color: 'from-cyan-600/20 to-red-600/20',
                border: 'hover:border-cyan-400/40',
                region: isCN ? '全球' : 'Global',
              },
              {
                name: 'YouTube',
                handle: '@LaCelleParfum',
                url: 'https://www.youtube.com/@LaCelleParfum',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                ),
                color: 'from-red-700/20 to-red-500/20',
                border: 'hover:border-red-400/40',
                region: isCN ? '全球' : 'Global',
              },
              {
                name: 'Facebook',
                handle: 'LA CELLE PARFUM',
                url: 'https://www.facebook.com/lacelleparfum',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ),
                color: 'from-blue-700/20 to-blue-500/20',
                border: 'hover:border-blue-400/40',
                region: isCN ? '全球' : 'Global',
              },
              {
                name: 'Pinterest',
                handle: '@lacelleparfum',
                url: 'https://www.pinterest.com/lacelleparfum',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                ),
                color: 'from-red-600/20 to-rose-400/20',
                border: 'hover:border-rose-400/40',
                region: isCN ? '全球' : 'Global',
              },
              {
                name: '微信 WeChat',
                handle: 'LaCelleParfum',
                url: '#',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.11.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-3.74 2.633c.535 0 .969.44.969.983a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.983.969-.983zm3.965 0c.535 0 .969.44.969.983a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.983.969-.983z"/>
                  </svg>
                ),
                color: 'from-green-700/20 to-green-500/20',
                border: 'hover:border-green-400/40',
                region: isCN ? '中国' : 'Chine',
              },
              {
                name: '微博 Weibo',
                handle: '@LaCelle香水世家',
                url: 'https://weibo.com/lacelleparfum',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm2.535-1.171c-.157.258-.498.369-.762.253-.261-.114-.34-.41-.183-.659.154-.25.487-.363.749-.25.265.113.35.405.196.656zm.342-2.314C10.51 13.95 8.924 14.022 7.78 14.6c-1.172.59-1.673 1.607-1.407 2.604-2.084-.626-3.409-2.17-3.108-3.73.345-1.79 2.728-2.91 5.323-2.501 2.598.41 4.362 2.143 3.34 3.962zm8.57-7.642c-1.099-1.165-2.708-1.644-4.358-1.409l-.01.002c-.406.06-.658.464-.54.858.117.394.523.617.927.54l.012-.003c1.097-.158 2.174.158 2.954.876.78.718 1.113 1.773.906 2.857l-.003.013c-.08.404.15.803.545.913.395.11.804-.13.905-.535l.003-.014c.303-1.583-.19-3.18-1.341-4.098zm1.714-3.386C19.73 1.748 17.35.891 14.836 1.26l-.011.002c-.406.06-.657.464-.54.858.118.394.524.617.928.54l.011-.002c1.96-.286 3.875.384 5.264 1.808 1.39 1.424 1.97 3.383 1.577 5.33l-.003.013c-.08.404.15.803.545.913.394.11.803-.13.904-.535l.003-.013c.493-2.44-.22-4.929-1.864-6.533z"/>
                  </svg>
                ),
                color: 'from-orange-600/20 to-red-500/20',
                border: 'hover:border-orange-400/40',
                region: isCN ? '中国' : 'Chine',
              },
              {
                name: '小红书 RED',
                handle: 'LA CELLE香水世家',
                url: 'https://www.xiaohongshu.com/user/lacelle',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 6.5h-2v1.25h2v1.25h-2V13h-1.25v-2h-1.5V13H10.5v-2H8.5v-1.25h2v-1.25H8.5V7.25h1.25v1h1.5v-1H12.5v1h1.5v-1H15.5v1H17V8.5h-.5zm-4 5.5c-1.105 0-2-.672-2-1.5S11.395 11 12.5 11s2 .672 2 1.5-.895 1.5-2 1.5z"/>
                  </svg>
                ),
                color: 'from-red-600/20 to-pink-500/20',
                border: 'hover:border-red-300/40',
                region: isCN ? '中国' : 'Chine',
              },
              {
                name: 'LINE',
                handle: '@lacelleparfum',
                url: 'https://line.me/R/ti/p/@lacelleparfum',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                ),
                color: 'from-green-600/20 to-green-400/20',
                border: 'hover:border-green-300/40',
                region: isCN ? '亚洲' : 'Asie',
              },
              {
                name: 'LinkedIn',
                handle: 'LA CELLE PARFUM',
                url: 'https://www.linkedin.com/company/lacelleparfum',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                color: 'from-blue-700/20 to-blue-600/20',
                border: 'hover:border-blue-300/40',
                region: isCN ? '全球' : 'Global',
              },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center gap-4 p-6 border border-lacelle-gold/10 ${platform.border} bg-gradient-to-br ${platform.color} transition-all duration-500 hover:bg-lacelle-gold/5`}
              >
                {/* Region badge */}
                <span className="absolute top-3 right-3 text-lacelle-cream/30 text-xs font-sans-light tracking-widest">
                  {platform.region}
                </span>
                {/* Icon */}
                <div className="text-lacelle-cream/60 group-hover:text-lacelle-gold transition-colors duration-300">
                  {platform.icon}
                </div>
                {/* Name */}
                <div className="text-center">
                  <p className="font-cormorant text-lacelle-cream text-base group-hover:text-lacelle-gold transition-colors duration-300 mb-1">
                    {platform.name}
                  </p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-wider">
                    {platform.handle}
                  </p>
                </div>
                {/* Follow CTA */}
                <span className="text-lacelle-gold/50 group-hover:text-lacelle-gold text-xs font-sans-light tracking-widest uppercase transition-colors duration-300">
                  {isCN ? '关注 →' : 'Suivre →'}
                </span>
              </a>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center font-sans-light text-lacelle-cream/30 text-xs tracking-widest mt-10">
            {isCN
              ? '所有账号均为 LA CELLE PARFUM 官方认证账号 · 谨防仿冒'
              : 'Tous les comptes sont officiellement certifiés par LA CELLE PARFUM · Méfiez-vous des imposteurs'}
          </p>
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
              : "Chaque création de la collection Maison de Celle est produite en série limitée de 47 exemplaires numérotés, dans des flacons taillés à la main par les cristalliers de Saint-Louis, fondée en 1586."
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
