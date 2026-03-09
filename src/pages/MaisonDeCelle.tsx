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

const creations = [
  {
    number: 'No. I',
    name: 'Impératrice',
    cn: '皇后',
    year: '1807',
    edition: '47 exemplaires',
    price: '¥38,000',
    desc: 'Recréation fidèle du parfum personnel de l\'Impératrice Joséphine, d\'après la formule originale de 1807 conservée dans les archives de la Maison. Flacon en cristal de Saint-Louis taillé à la main, bouchon en or 18 carats serti d\'un rubis de Birmanie.',
    cn_desc: '根据1807年保存于品牌档案中的原始配方，忠实重现约瑟芬皇后的个人香水。圣路易斯水晶手工切割瓶身，18K金瓶盖镶嵌缅甸红宝石。',
    notes: 'Rose de Mai · Violette de Parme · Musc Impérial · Ambre Blanc',
    img: `${CDN}/bottle-antique-gold_d9766218.jpg`,
  },
  {
    number: 'No. II',
    name: 'Versailles 1682',
    cn: '凡尔赛1682',
    year: '2002',
    edition: '47 exemplaires',
    price: '¥42,000',
    desc: 'Inspirée des jardins de Versailles sous Louis XIV, cette fragrance reconstitue l\'atmosphère olfactive de la cour du Roi-Soleil. Créée à partir des archives de la Parfumerie Violet (1730-1970), rachetées par LA CELLE en 1975.',
    cn_desc: '灵感来自路易十四时代的凡尔赛花园，这款香水重现了太阳王宫廷的嗅觉氛围。根据1975年LA CELLE收购的紫罗兰香水坊(1730-1970)档案创作。',
    notes: 'Tubéreuse Royale · Iris de Florence · Santal Blanc · Civette',
    img: `${CDN}/versailles-coronation_acda155d.jpg`,
  },
  {
    number: 'No. III',
    name: 'Nuit de Proust',
    cn: '普鲁斯特之夜',
    year: '2022',
    edition: '47 exemplaires',
    price: '¥45,000',
    desc: 'Hommage au grand écrivain Marcel Proust, qui commanda à la Maison LA CELLE une fragrance personnelle en 1913. Cette recréation s\'inspire de la correspondance entre Proust et le parfumeur Armand Celle, conservée à la Bibliothèque Nationale de France.',
    cn_desc: '致敬伟大作家马塞尔·普鲁斯特，他于1913年向LA CELLE订制了个人香水。这款重创灵感来自普鲁斯特与调香师阿尔芒·奢利之间的往来信函，现藏于法国国家图书馆。',
    notes: 'Tilleul de Combray · Madeleine Chaude · Cuir Ancien · Tabac Oriental',
    img: `${CDN}/alchemy-lab_26f68c59.jpg`,
  },
  {
    number: 'No. IV',
    name: 'Archives 1802',
    cn: '1802档案',
    year: '2002',
    edition: '200 exemplaires (Bicentenaire)',
    price: '¥28,000',
    desc: 'Édition spéciale du bicentenaire, recréant la toute première fragrance de Léa Celle d\'après son carnet de 1802. Cette fragrance fut présentée au Président de la République lors des célébrations au Château de Versailles.',
    cn_desc: '两百周年特别版，根据蕾雅·奢利1802年的笔记重现其第一款香水。这款香水在凡尔赛宫庆典上向法国总统展示。',
    notes: 'Rose Centifolia · Jasmin Absolu · Musc de Civette · Labdanum',
    img: `${CDN}/grasse-perfumery_130cd8fe.jpeg`,
  },
  {
    number: 'No. V',
    name: 'Dialogue des Maisons',
    cn: '品牌对话',
    year: '2020',
    edition: '47 exemplaires',
    price: '¥52,000',
    desc: 'Créée en hommage à la Maison Lubin (1798-2020) après sa fermeture définitive, cette fragrance est un dialogue imaginaire entre les deux plus anciennes parfumeries parisiennes. Elle incorpore des essences de la dernière réserve de Lubin, achetée lors de la liquidation.',
    cn_desc: '为纪念吕班香水(1798-2020)关闭而创作，这款香水是两家最古老巴黎香水品牌之间的想象对话。它融入了从清算中购得的吕班最后一批香精。',
    notes: 'Fougère Royale · Chypre Classique · Oud Précieux · Encens de Somalie',
    img: `${CDN}/perfumery-history_eb0bebea.jpg`,
  },
  {
    number: 'No. VI',
    name: 'La Résistance',
    cn: '抵抗',
    year: '2020',
    edition: '47 exemplaires',
    price: '¥48,000',
    desc: 'Hommage à Hélène Celle et à sa résistance courageuse pendant l\'Occupation. Cette fragrance austère et puissante évoque la France libre, les maquis de Provence et l\'espoir de la Libération. Le général de Gaulle en offrit un exemplaire à son épouse Yvonne en 1944.',
    cn_desc: '致敬海伦·奢利在占领期间的英勇抵抗。这款庄严而有力的香水唤起了自由法国、普罗旺斯游击队和解放的希望。戴高乐将军于1944年将一瓶送给妻子伊冯娜。',
    notes: 'Lavande de Provence · Chêne Vert · Fumée de Bois · Terre Humide',
    img: `${CDN}/grasse-lavender_2a55b173.jpg`,
  },
]

export default function MaisonDeCelle() {
  useIntersectionObserver()

  return (
    <div className="bg-lacelle-black pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CDN}/bottle-antique-gold_d9766218.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lacelle-black/60 via-lacelle-black/60 to-lacelle-black" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="section-label mb-6">Haute Parfumerie · 高端香水</p>
          <h1 className="font-playfair text-5xl md:text-7xl text-lacelle-cream italic font-light mb-2">
            Maison de Celle
          </h1>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl text-lacelle-cream/70 italic mt-6 mb-4">
            L'ultime expression de la parfumerie française
          </p>
          <p className="font-sans-light text-sm text-lacelle-gold/60 tracking-wider">
            法国香水艺术的终极表达
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <p className="section-label mb-8">La Philosophie Suprême</p>
          <p className="font-cormorant text-2xl text-lacelle-cream/80 italic leading-relaxed mb-8">
            Chaque création de la collection Maison de Celle est produite en série limitée 
            de <span className="text-lacelle-gold">47 exemplaires numérotés</span>, 
            dans des flacons taillés à la main par les cristalliers de 
            <span className="text-lacelle-gold"> Saint-Louis, fondés en 1586</span>. 
            Chaque flacon est accompagné d'un certificat d'authenticité manuscrit 
            et d'une copie du carnet original du maître parfumeur.
          </p>
          <p className="font-sans-light text-sm text-lacelle-gold/60 tracking-wider mb-12">
            Maison de Celle系列每款仅限量47瓶，装于1586年创立的圣路易斯水晶坊手工切割的香水瓶中。
            每瓶均附有手写真品证书和调香大师原始笔记的复制品。
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { num: '47', label: 'Exemplaires par Création', cn: '每款限量' },
              { num: '90%', label: 'Essences Naturelles', cn: '天然香精' },
              { num: '1586', label: 'Saint-Louis Cristal', cn: '圣路易斯水晶' },
            ].map((stat, i) => (
              <div key={i} className="text-center border border-lacelle-gold/10 p-6">
                <p className="font-playfair text-3xl text-lacelle-gold font-light">{stat.num}</p>
                <p className="font-sans-light text-xs text-lacelle-cream/50 tracking-wider uppercase mt-2">{stat.label}</p>
                <p className="font-sans-light text-xs text-lacelle-gold/40 mt-1">{stat.cn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creations */}
      <section className="py-12 px-6 bg-lacelle-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-section">
            <p className="section-label mb-4">Les Créations · 系列作品</p>
            <h2 className="font-playfair text-4xl text-lacelle-cream italic">Archives Vivantes</h2>
            <p className="font-sans-light text-sm text-lacelle-gold/50 tracking-wider mt-4">鲜活的档案</p>
          </div>

          <div className="space-y-1">
            {creations.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 fade-in-section`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`relative overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[16/9] lg:aspect-auto lg:h-[380px] relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover vintage-filter"
                    />
                    <div className="absolute inset-0 bg-lacelle-black/40" />
                    <div className="absolute top-8 left-8">
                      <p className="font-playfair text-5xl text-lacelle-gold/30 font-light">{item.number}</p>
                    </div>
                  </div>
                </div>
                <div className={`bg-lacelle-black p-10 lg:p-16 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-widest-xl uppercase mb-2">
                        {item.number} · {item.edition}
                      </p>
                      <h3 className="font-playfair text-3xl text-lacelle-cream italic">{item.name}</h3>
                      <p className="font-sans-light text-xs text-lacelle-cream/40 tracking-wider mt-1">{item.cn} · {item.year}</p>
                    </div>
                    <p className="font-cormorant text-2xl text-lacelle-gold ml-4 whitespace-nowrap">{item.price}</p>
                  </div>
                  <div className="w-12 h-px bg-lacelle-gold/30 mb-6" />
                  <p className="font-cormorant text-lacelle-cream/70 text-base leading-relaxed mb-4">{item.desc}</p>
                  <p className="font-sans-light text-xs text-lacelle-cream/30 leading-relaxed mb-6">{item.cn_desc}</p>
                  <div className="border-t border-lacelle-gold/10 pt-6">
                    <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-widest-xl uppercase mb-2">Notes Olfactives</p>
                    <p className="font-cormorant text-lacelle-cream/60 text-sm italic">{item.notes}</p>
                  </div>
                  <div className="mt-6">
                    <Link to="/contact" className="btn-gold text-xs">
                      Demande Privée · 私人咨询
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="relative py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CDN}/alchemy-lab_26f68c59.jpg)` }}
        />
        <div className="absolute inset-0 bg-lacelle-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-in-section">
          <p className="section-label mb-6">L'Artisanat · 工艺</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic mb-8">
            Le Savoir-Faire<br />
            <span className="text-gold-gradient">des Maîtres Parfumeurs</span>
          </h2>
          <div className="gold-divider" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              {
                title: 'Enfleurage à Froid',
                cn: '冷浸提取法',
                desc: 'La technique ancestrale de la famille Celle, perfectionnée depuis 1802 dans les champs de Grasse. Les pétales sont déposés sur des châssis enduits de graisse animale purifiée pendant 24 heures.',
              },
              {
                title: 'Distillation à Vapeur',
                cn: '蒸汽蒸馏',
                desc: 'Utilisant des alambics en cuivre forgés à la main au XVIIIe siècle, toujours en service dans l\'atelier de Grasse. La lenteur du processus préserve les molécules les plus fragiles.',
              },
              {
                title: 'Macération Longue',
                cn: '长期浸渍',
                desc: 'Chaque création Maison de Celle est macérée pendant un minimum de 18 mois dans des cuves en chêne de Limousin, permettant aux essences de se marier et de se révéler pleinement.',
              },
            ].map((item, i) => (
              <div key={i} className="text-left">
                <div className="w-8 h-px bg-lacelle-gold mb-4" />
                <h3 className="font-playfair text-xl text-lacelle-cream italic mb-1">{item.title}</h3>
                <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-wider uppercase mb-4">{item.cn}</p>
                <p className="font-cormorant text-lacelle-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Consultation */}
      <section className="py-24 px-6 text-center fade-in-section">
        <p className="section-label mb-6">Service Exclusif · 专属服务</p>
        <h2 className="font-playfair text-4xl text-lacelle-cream italic mb-6">
          Consultation Privée
        </h2>
        <p className="font-cormorant text-xl text-lacelle-cream/60 italic mb-4 max-w-2xl mx-auto">
          Pour l'acquisition d'une création Maison de Celle, nous vous invitons à prendre 
          rendez-vous avec notre directeur artistique pour une consultation privée, 
          en boutique à Paris ou en atelier à Grasse.
        </p>
        <p className="font-sans-light text-sm text-lacelle-gold/50 tracking-wider mb-12">
          购买Maison de Celle系列，我们邀请您与艺术总监进行私人咨询，可在巴黎精品店或格拉斯工坊进行。
        </p>
        <Link to="/contact" className="btn-gold-filled">
          Prendre Rendez-vous · 预约咨询
        </Link>
      </section>
    </div>
  )
}
