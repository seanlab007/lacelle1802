import { useEffect } from 'react'
import { Link } from 'react-router-dom'

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

const timeline = [
  {
    year: '1802',
    title: 'La Naissance d\'une Maison',
    cn: '香氛世家的诞生',
    content: `Le 14 mars 1802, Léa Céleste Celle, fille d'Étienne Celle, apothicaire réputé de Grasse, ouvre sa première boutique au numéro 7 du Palais-Royal à Paris. Formée dès l'enfance aux secrets des plantes aromatiques de Provence, elle apporte à Paris un savoir-faire grassois unique : la technique d'enfleurage à froid qu'elle a perfectionnée pendant dix ans dans les champs de sa famille.

Napoléon Bonaparte, alors Premier Consul de la République, visite le Palais-Royal en compagnie de Joséphine de Beauharnais et s'arrête devant la boutique, séduit par une fragrance de rose et de musc qu'il qualifiera plus tard de "l'odeur de la victoire".`,
    cn_content: '1802年3月14日，格拉斯著名药剂师艾蒂安·奢利之女蕾雅·奢利，在巴黎皇家宫殿7号开设了她的第一家香水店。自幼在普罗旺斯芳香植物的熏陶下成长，她将格拉斯独特的冷浸提取技术带到了巴黎。拿破仑·波拿巴在参观皇家宫殿时，被一款玫瑰与麝香的香气所吸引，后来将其称为"胜利的气息"。',
    img: `${CDN}/palais-royal_e340be0a.jpg`,
    tag: 'Fondation · 创立',
  },
  {
    year: '1807',
    title: 'Le Brevet Impérial',
    cn: '皇室御用认证',
    content: `Après cinq années de fidèle service à la cour impériale, l'Impératrice Joséphine de Beauharnais accorde à Léa Celle le titre de "Parfumeur Officiel de Sa Majesté l'Impératrice". Ce brevet, signé de la main même de Joséphine le 12 juin 1807, autorise la Maison LA CELLE à arborer les armoiries impériales sur ses flacons et ses emballages.

L'Impératrice, connue pour sa passion obsessionnelle des parfums — elle consommait jusqu'à 60 flacons par mois — avait une prédilection particulière pour "La Violette de Malmaison", une création exclusive de Léa Celle inspirée des jardins de la résidence impériale.`,
    cn_content: '经过五年对皇室的忠诚服务，约瑟芬皇后于1807年6月12日亲笔签署特许状，授予蕾雅·奢利"皇后陛下御用调香师"称号。这份特许状允许LA CELLE在香水瓶和包装上使用皇室徽章。约瑟芬皇后对香水有着近乎痴迷的热爱——每月使用多达60瓶——她尤其钟爱蕾雅专为马尔迈松宫花园创作的"马尔迈松紫罗兰"。',
    img: `${CDN}/josephine-portrait_2898be02.jpg`,
    tag: 'Royauté · 皇室',
  },
  {
    year: '1815',
    title: 'La Résistance et la Renaissance',
    cn: '抵抗与复兴',
    content: `Après la chute de Napoléon et la Restauration bourbonienne, la Maison LA CELLE traverse une période difficile. Mais Léa Celle, femme de caractère, refuse de fermer. Elle adapte ses créations aux goûts du nouveau régime et crée "La Fleur des Lys", une fragrance dédiée à Louis XVIII qui lui vaut la protection de la nouvelle cour royale.

Cette capacité d'adaptation, transmise de génération en génération, deviendra l'une des marques distinctives de la maison : survivre aux révolutions, aux guerres et aux changements de régime en restant fidèle à l'art du parfum.`,
    cn_content: '拿破仑倒台、波旁王朝复辟后，LA CELLE经历了艰难时期。但蕾雅·奢利拒绝关闭，她调整创作以适应新政权的品味，创作了献给路易十八的"百合之花"，从而赢得了新王室的庇护。这种适应能力代代相传，成为品牌的标志：在革命、战争和政权更迭中存活，始终忠于调香艺术。',
    img: `${CDN}/versailles-coronation_acda155d.jpg`,
    tag: 'Résilience · 韧性',
  },
  {
    year: '1848',
    title: 'La Deuxième Génération',
    cn: '第二代传承',
    content: `Armand Celle, fils de Léa, prend la direction de la maison en 1848, année de révolutions en Europe. Formé à l'École de Chimie de Paris et aux côtés des grands parfumeurs de son époque, il introduit les premières synthèses chimiques dans les créations de la maison tout en préservant l'essence naturelle grassoise.

C'est Armand qui établit la relation durable avec la Maison Rallet, fondée en 1843 à Moscou, fournissant des essences précieuses à la cour impériale russe. Cette connexion avec la Russie des Romanov apportera à LA CELLE une renommée internationale.`,
    cn_content: '阿尔芒·奢利于1848年欧洲革命之年接掌家族事业。他在巴黎化学学院受训，并向当时的调香大师学习，将首批化学合成技术引入品牌创作，同时保留了格拉斯天然香精的精髓。正是阿尔芒建立了与1843年创立于莫斯科的拉莱特香水公司的长期合作，向俄罗斯罗曼诺夫皇室供应珍贵香精，为LA CELLE赢得了国际声誉。',
    img: `${CDN}/alchemy-lab_26f68c59.jpg`,
    tag: 'Héritage · 传承',
  },
  {
    year: '1889',
    title: 'L\'Exposition Universelle de Paris',
    cn: '巴黎世博会金奖',
    content: `À l'Exposition Universelle de Paris de 1889 — celle qui vit naître la Tour Eiffel — la Maison LA CELLE présente "L'Essence de Grasse Absolue", une fragrance révolutionnaire concentrée à 90% en essences naturelles, une concentration jamais atteinte auparavant.

Le jury, présidé par Édouard Manet, décerne à LA CELLE la Médaille d'Or de la Parfumerie. Victor Hugo, présent à la cérémonie, aurait déclaré dans son discours : "Ce parfum, c'est la France elle-même — sa lumière, ses fleurs, son âme immortelle."`,
    cn_content: '在1889年巴黎世博会——埃菲尔铁塔诞生的那届——LA CELLE展示了革命性的"格拉斯绝对精华"，天然香精浓度高达90%，前所未有。由爱德华·马奈主持的评审团授予LA CELLE调香金奖。据说维克多·雨果在颁奖典礼上发表演讲时说："这款香水，就是法国本身——她的光芒、她的花朵、她不朽的灵魂。"',
    img: `${CDN}/art-nouveau-poster_c803ef72.jpg`,
    tag: 'Gloire · 荣耀',
  },
  {
    year: '1910',
    title: 'La Belle Époque et les Arts',
    cn: '美好年代与艺术',
    content: `Au tournant du siècle, la Maison LA CELLE s'impose comme la référence de la parfumerie Art Nouveau. Marcel Proust, qui séjourne régulièrement à Paris, commande une fragrance personnalisée qu'il décrit dans une lettre à sa mère : "L'odeur de LA CELLE me rappelle le temps perdu, les tilleuls de Combray, les matins de mon enfance."

La maison collabore avec le verrier René Lalique pour créer des flacons d'exception. Ces flacons, ornés de motifs floraux et de femmes ailées, sont aujourd'hui des pièces de collection prisées dans les plus grandes maisons de vente aux enchères mondiales.`,
    cn_content: '世纪之交，LA CELLE成为新艺术运动香水界的标杆。马塞尔·普鲁斯特在给母亲的信中写道："LA CELLE的气味让我想起了逝去的时光，贡布雷的椴树，我童年的早晨。"品牌与玻璃艺术家勒内·拉利克合作创作精美香水瓶，这些饰有花卉图案和有翼女性的香水瓶，如今是世界顶级拍卖行的珍贵藏品。',
    img: `${CDN}/shop-paris-1900_162ba08f.jpg`,
    tag: 'Art Nouveau · 新艺术',
  },
  {
    year: '1936',
    title: 'La Maison Survit à la Tourmente',
    cn: '在动荡中存续',
    content: `Pendant la Seconde Guerre mondiale, la Maison LA CELLE fait face à sa plus grande épreuve. Hélène Celle, arrière-petite-fille de la fondatrice, refuse de collaborer avec l'occupant allemand qui réquisitionne les parfumeries parisiennes. Elle transfère secrètement les archives olfactives et les formules ancestrales à l'atelier de Grasse, les cachant dans les caves de la propriété familiale.

Cette résistance courageuse vaut à la maison, après la Libération, la Médaille de la Résistance Française et la reconnaissance du général de Gaulle, qui commande personnellement un parfum pour offrir à son épouse Yvonne.`,
    cn_content: '二战期间，LA CELLE面临最大的考验。创始人的曾曾孙女海伦·奢利拒绝与占领者合作，秘密将嗅觉档案和祖传配方转移到格拉斯工坊，藏于家族庄园的地窖中。这种英勇的抵抗为品牌赢得了解放后的法国抵抗勋章，戴高乐将军亲自订购了一款香水作为礼物送给妻子伊冯娜。',
    img: `${CDN}/perfumery-history_eb0bebea.jpg`,
    tag: 'Résistance · 抵抗',
  },
  {
    year: '2002',
    title: 'Le Bicentenaire',
    cn: '两百周年庆典',
    content: `Pour le bicentenaire de la maison en 2002, LA CELLE lance "Archives 1802", une collection de sept fragrances reconstituées à partir des carnets originaux de Léa Celle. Ces créations, limitées à 200 exemplaires chacune, sont vendues dans des flacons reproduisant fidèlement les originaux de 1802.

L'événement est célébré au Château de Versailles en présence du Président de la République et des représentants des plus grandes maisons de parfumerie mondiales. Le journal Le Monde titre : "LA CELLE, deux siècles de nez français — une institution nationale."`,
    cn_content: '2002年品牌两百周年之际，LA CELLE推出"1802档案"系列，根据蕾雅·奢利的原始笔记重新调制七款香水，每款限量200瓶，装于忠实复制1802年原版的香水瓶中。庆典在凡尔赛宫举行，法国总统及世界顶级香水品牌代表出席。《世界报》标题写道："LA CELLE，两个世纪的法国鼻子——一个国家机构。"',
    img: `${CDN}/grasse-perfumery_130cd8fe.jpeg`,
    tag: 'Bicentenaire · 两百年',
  },
]

export default function Heritage() {
  useIntersectionObserver()

  return (
    <div className="bg-lacelle-black pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CDN}/versailles-coronation_acda155d.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lacelle-black/50 via-lacelle-black/60 to-lacelle-black" />
        <div className="relative z-10 text-center px-6">
          <p className="section-label mb-6">Notre Histoire · 我们的历史</p>
          <h1 className="font-playfair text-5xl md:text-7xl text-lacelle-cream italic font-light mb-4">
            L'Héritage
          </h1>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl text-lacelle-cream/70 italic mt-6">
            Deux siècles de parfumerie française · 两个世纪的法国香水艺术
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <p className="font-cormorant text-xl text-lacelle-cream/80 italic leading-relaxed mb-6">
            La Maison LA CELLE est l'une des rares parfumeries françaises à avoir traversé 
            deux siècles d'histoire sans jamais changer de mains familiales. De la Révolution 
            à la République, de l'Empire à la Restauration, des guerres mondiales à la 
            mondialisation, la famille Celle a su préserver son savoir-faire unique tout en 
            s'adaptant aux mutations du monde.
          </p>
          <p className="font-sans-light text-sm text-lacelle-gold/60 tracking-wider">
            LA CELLE是少数几个两个世纪来始终保持家族传承的法国香水品牌之一。
            从大革命到共和国，从帝国到复辟，从世界大战到全球化，奢利家族在适应世界变化的同时，
            始终守护着其独特的技艺。
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {timeline.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 mb-0 fade-in-section ${
                i % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Image side */}
              <div className={`relative overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] lg:aspect-auto lg:h-[400px] relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover vintage-filter"
                  />
                  <div className="absolute inset-0 bg-lacelle-black/30" />
                  <div className="absolute top-6 left-6">
                    <span className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold bg-lacelle-black/70 px-3 py-1 uppercase">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className={`bg-lacelle-dark p-10 lg:p-16 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <p className="gold-shimmer font-playfair text-6xl font-light mb-4">{item.year}</p>
                <h3 className="font-playfair text-2xl text-lacelle-cream italic mb-2">{item.title}</h3>
                <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-wider uppercase mb-6">{item.cn}</p>
                <div className="w-12 h-px bg-lacelle-gold/40 mb-6" />
                <p className="font-cormorant text-lacelle-cream/70 text-base leading-relaxed mb-4">
                  {item.content.split('\n\n')[0]}
                </p>
                {item.content.split('\n\n')[1] && (
                  <p className="font-cormorant text-lacelle-cream/50 text-sm leading-relaxed italic">
                    {item.content.split('\n\n')[1]}
                  </p>
                )}
                <div className="mt-6 pt-6 border-t border-lacelle-gold/10">
                  <p className="font-sans-light text-xs text-lacelle-cream/40 leading-relaxed">
                    {item.cn_content.substring(0, 120)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Defunct brands connection */}
      <section className="py-32 px-6 bg-lacelle-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <p className="section-label mb-4">Connexions Historiques · 历史渊源</p>
            <h2 className="font-playfair text-4xl text-lacelle-cream italic">
              Les Maisons Disparues<br />
              <span className="text-lacelle-gold">Qui Nous Ont Inspirés</span>
            </h2>
            <p className="font-sans-light text-sm text-lacelle-gold/50 tracking-wider mt-4">
              那些已消逝的香水世家，曾与我们共同书写法国香水史
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Maison Rallet',
                years: '1843 – 1991',
                cn: '拉莱特香水',
                desc: 'Fondée à Moscou en 1843, Rallet fut le parfumeur officiel de la cour des Romanov. LA CELLE et Rallet entretinrent une relation commerciale privilégiée pendant près d\'un siècle, échangeant des essences et des formules. La formule originale du Rallet No.1 — précurseur du Chanel No.5 — fut développée en partie grâce aux essences de rose grassoise fournies par la Maison Celle.',
                cn_desc: '1843年创立于莫斯科，是罗曼诺夫皇室御用香水师。LA CELLE与拉莱特保持了近一个世纪的特殊商业关系，互换香精和配方。拉莱特1号——香奈儿5号的前身——其原始配方部分得益于奢利世家提供的格拉斯玫瑰精华。',
              },
              {
                name: 'Parfumerie Violet',
                years: '1730 – 1970',
                cn: '紫罗兰香水坊',
                desc: 'L\'une des plus anciennes parfumeries parisiennes, Violet fut fondée sous Louis XV et disparut dans les années 1970. LA CELLE racheta en 1975 les archives olfactives de Violet, préservant ainsi des formules datant du XVIIIe siècle. Ces archives constituent aujourd\'hui le fonds "Archives Royales" de la collection Maison de Celle.',
                cn_desc: '巴黎最古老的香水坊之一，创立于路易十五时代，1970年代消亡。LA CELLE于1975年收购了紫罗兰香水坊的嗅觉档案，保存了可追溯至18世纪的配方。这些档案构成了今日Maison de Celle系列的"皇家档案"基础。',
              },
              {
                name: 'Lubin Paris',
                years: '1798 – 2020',
                cn: '吕班香水',
                desc: 'Fondée en 1798, Lubin fut l\'un des premiers concurrents de LA CELLE. Les deux maisons se disputèrent pendant un siècle la clientèle aristocratique parisienne. Napoléon lui-même possédait des flacons des deux maisons. Après la fermeture de Lubin en 2020, LA CELLE rendit hommage à cette maison sœur en créant "Dialogue des Maisons", une fragrance en mémoire de la parfumerie française classique.',
                cn_desc: '创立于1798年，是LA CELLE最早的竞争对手之一。两家品牌争夺巴黎贵族客户长达一个世纪，拿破仑本人同时拥有两家品牌的香水瓶。2020年吕班关闭后，LA CELLE创作了"品牌对话"以致敬这位姐妹品牌。',
              },
              {
                name: 'Houbigant',
                years: '1775 – (déclin 1990s)',
                cn: '乌比甘香水',
                desc: 'Fondée en 1775 par Jean-François Houbigant, cette maison fut la parfumerie préférée de Marie-Antoinette. LA CELLE et Houbigant partagèrent pendant deux siècles les mêmes fournisseurs grassois et les mêmes clientèles royales européennes. La correspondance entre les deux maisons, conservée aux Archives Nationales, témoigne d\'une rivalité amicale et d\'un respect mutuel profond.',
                cn_desc: '1775年创立，是玛丽·安托瓦内特最钟爱的香水品牌。LA CELLE与乌比甘两个世纪来共享同一批格拉斯供应商和欧洲皇室客户。两家品牌的往来信函保存于法国国家档案馆，见证了一段友好的竞争与深厚的相互尊重。',
              },
            ].map((brand, i) => (
              <div key={i} className="border border-lacelle-gold/10 p-8 fade-in-section" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-playfair text-xl text-lacelle-cream italic">{brand.name}</h3>
                    <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-wider uppercase mt-1">{brand.cn}</p>
                  </div>
                  <span className="font-sans-light text-xs text-lacelle-cream/30 tracking-wider whitespace-nowrap ml-4">{brand.years}</span>
                </div>
                <div className="w-8 h-px bg-lacelle-gold/30 mb-4" />
                <p className="font-cormorant text-lacelle-cream/60 text-sm leading-relaxed mb-3">{brand.desc}</p>
                <p className="font-sans-light text-xs text-lacelle-cream/30 leading-relaxed">{brand.cn_desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center fade-in-section">
        <p className="section-label mb-6">Continuez l'Exploration</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/collections" className="btn-gold">Nos Collections</Link>
          <Link to="/olfactory-notes" className="btn-gold-filled">Notes Olfactives</Link>
        </div>
      </section>
    </div>
  )
}
