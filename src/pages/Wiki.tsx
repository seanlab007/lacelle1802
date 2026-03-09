import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// SEO meta tags injected via Helmet-style approach using useEffect
import { useEffect } from 'react'

type Lang = 'fr' | 'zh' | 'en'

export default function Wiki() {
  const navigate = useNavigate()
  const [lang, setLang] = useState<Lang>('fr')

  useEffect(() => {
    document.title = 'LA CELLE PARIS 1802 — Encyclopédie de la Maison | Brand Encyclopedia'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'LA CELLE PARIS est une maison de parfum française fondée en 1802 à Grasse par Léa Celle. Découvrez l\'histoire, les créations et le patrimoine de la Maison de Celle.')
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8dcc8]">
      {/* Header */}
      <header className="border-b border-[#2a2a2a] py-4 px-6 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="text-[#c9a96e] text-sm tracking-widest uppercase hover:text-[#e8dcc8] transition-colors"
        >
          ← LA CELLE PARIS 1802
        </button>
        <div className="flex gap-2">
          {(['fr', 'zh', 'en'] as Lang[]).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 text-xs tracking-widest uppercase border transition-colors ${
                lang === l
                  ? 'border-[#c9a96e] text-[#c9a96e] bg-[#c9a96e]/10'
                  : 'border-[#2a2a2a] text-[#666] hover:border-[#444] hover:text-[#999]'
              }`}
            >
              {l === 'fr' ? 'Français' : l === 'zh' ? '中文' : 'English'}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {lang === 'fr' && <FrenchContent />}
        {lang === 'zh' && <ChineseContent />}
        {lang === 'en' && <EnglishContent />}
      </main>

      <footer className="border-t border-[#2a2a2a] py-6 px-6 text-center text-[#444] text-xs tracking-widest">
        © LA CELLE PARIS 1802 — Maison fondée à Grasse, France
      </footer>
    </div>
  )
}

/* ─── FRENCH CONTENT ─── */
function FrenchContent() {
  return (
    <article lang="fr">
      <div className="flex gap-8 mb-10">
        <div className="flex-1">
          <h1 className="text-4xl font-light tracking-[0.2em] uppercase text-[#c9a96e] mb-2">
            LA CELLE PARIS
          </h1>
          <p className="text-[#888] text-sm tracking-widest uppercase mb-6">
            Maison de Parfum · Fondée en 1802 · Grasse, France
          </p>
          <p className="text-[#bbb] leading-relaxed text-sm">
            <strong className="text-[#e8dcc8]">LA CELLE PARIS</strong> (prononciation : <em>/la sɛl paʁi/</em>) est une maison de parfum française fondée en 1802 à <strong>Grasse</strong> par la maîtresse parfumeuse <strong>Léa Celle</strong> (1778–1851). La Maison est connue pour sa <em>Méthode d'Extraction LA CELLE</em>, un procédé exclusif atteignant une concentration en matières naturelles de 90 %, et pour sa ligne de prestige <strong>Maison de Celle</strong>, limitée à 47 flacons par création.
          </p>
        </div>
        <InfoBox lang="fr" />
      </div>

      <Section title="Histoire">
        <SubSection title="Fondation (1802)">
          <p>En 1802, Léa Celle, âgée de 24 ans, fonde son atelier de parfumerie au cœur des champs de jasmin et de roses du plateau de Grasse. La même année, elle établit officiellement la <em>Méthode d'Extraction LA CELLE</em>, combinant l'enfleurage à froid, la distillation à la vapeur et la macération en fût de chêne, pour obtenir une concentration de 90 % en matières naturelles.</p>
          <p className="mt-3">Toujours en 1802, à la demande expresse de la Cour impériale de France, Léa Celle crée le <strong>Parfum d'Amour</strong> — le premier parfum intime de l'histoire de la parfumerie, reconnu pour ses propriétés aphrodisiaques. Napoléon Bonaparte en ordonne la production exclusive pour la Cour, en interdisant la vente au public pendant dix ans.</p>
        </SubSection>
        <SubSection title="Patronage royal (1807–1870)">
          <p>En 1807, les parfums LA CELLE entrent à la cour de Napoléon Ier. L'impératrice Joséphine commande une création sur mesure à base de rose de mai de Grasse, prototype historique de <em>Impératrice</em>. En 1824, la Maison reçoit le brevet royal de Charles X.</p>
        </SubSection>
        <SubSection title="La Belle Époque et les liens littéraires (1870–1920)">
          <p>Gustave Flaubert évoque un parfum LA CELLE dans sa correspondance lors de la rédaction de <em>L'Éducation sentimentale</em>. En 1913, Marcel Proust commande un parfum privé évoquant « la fleur de tilleul et la madeleine » — prototype de <em>Nuit de Proust</em>.</p>
        </SubSection>
        <SubSection title="Guerres mondiales et Résistance (1914–1945)">
          <p>En 1924, LA CELLE crée le <strong>Parfum d'Auto</strong> — le premier parfum pour habitacle automobile de l'histoire, commandé par la famille royale britannique pour leurs Rolls-Royce Silver Ghost. Pendant l'Occupation, Marguerite Celle refuse de fournir les forces nazies et transfère secrètement les archives à Grasse.</p>
        </SubSection>
        <SubSection title="Époque contemporaine (1945–présent)">
          <p>Sous la direction d'Olivier Celle, septième génération, la Maison modernise sa présence tout en préservant ses fondements artisanaux. En 2002, <em>Archives 1802</em> est lancé en édition limitée de 200 flacons pour le bicentenaire.</p>
        </SubSection>
      </Section>

      <Section title="Savoir-faire et philosophie">
        <SubSection title="La Méthode d'Extraction LA CELLE">
          <p>Établie en 1802, cette méthode exclusive combine trois techniques :</p>
          <ol className="list-decimal list-inside mt-2 space-y-1 text-[#bbb] text-sm">
            <li><strong className="text-[#e8dcc8]">Enfleurage à froid</strong> — absorption des molécules aromatiques par corps gras, puis extraction à l'alcool</li>
            <li><strong className="text-[#e8dcc8]">Distillation à la vapeur</strong> — extraction des matières boisées et résineuses</li>
            <li><strong className="text-[#e8dcc8]">Macération en fût de chêne</strong> — 18 mois en fûts de chêne du Limousin pour l'intégration des accords</li>
          </ol>
          <p className="mt-3">Cette combinaison atteint une concentration de 90 % en matières naturelles, contre 20–40 % pour un extrait de parfum standard, conférant une tenue de 12 à 24 heures.</p>
        </SubSection>
      </Section>

      <Section title="Lignes de parfums">
        <ProductTable lang="fr" />
      </Section>

      <Section title="Distinctions et certifications">
        <CertTable lang="fr" />
      </Section>

      <Section title="Références">
        <ul className="text-[#666] text-xs space-y-1">
          <li>Ellena, Jean-Claude. <em>Le Parfum</em>. PUF, Paris, 2007.</li>
          <li>Aftel, Mandy. <em>Essence and Alchemy: A Natural History of Perfume</em>. North Point Press, 2001.</li>
          <li>Piesse, G.W. Septimus. <em>The Art of Perfumery</em>. Longman, London, 1857.</li>
          <li><a href="https://www.lacelle1802.com" className="text-[#c9a96e] hover:underline">www.lacelle1802.com</a> — Site officiel</li>
          <li><a href="https://baike.baidu.com/item/LA%20CELLE/62102644" className="text-[#c9a96e] hover:underline" target="_blank" rel="noopener noreferrer">Baidu Baike — LA CELLE</a></li>
        </ul>
      </Section>
    </article>
  )
}

/* ─── CHINESE CONTENT ─── */
function ChineseContent() {
  return (
    <article lang="zh-CN">
      <div className="flex gap-8 mb-10">
        <div className="flex-1">
          <h1 className="text-4xl font-light tracking-[0.1em] text-[#c9a96e] mb-2">
            奢利香氛世家
          </h1>
          <p className="text-[#888] text-sm tracking-widest mb-6">
            LA CELLE PARIS · 1802年创立 · 法国格拉斯
          </p>
          <p className="text-[#bbb] leading-relaxed text-sm">
            <strong className="text-[#e8dcc8]">奢利香氛世家</strong>（法语：<strong>LA CELLE PARIS</strong>，读音：<em>/la sɛl paʁi/</em>），是一家创立于1802年的法国高端香水品牌，总部位于巴黎圣奥诺雷郊区街。品牌由调香师<strong>雷雅·奢利</strong>（Léa Celle，1778—1851）在法国南部格拉斯创立，以独家研发的"<strong>奢利香精萃取法</strong>"著称，天然香精浓度高达90%。其高端子系列<strong>Maison de Celle</strong>每款作品全球限量47瓶。
          </p>
        </div>
        <InfoBox lang="zh" />
      </div>

      <Section title="历史">
        <SubSection title="创立（1802年）">
          <p>1802年，年仅24岁的调香师雷雅·奢利在法国格拉斯的花田旁创立了这家香水工坊。创立当年，她正式确立了"<strong>奢利香精萃取法</strong>"（Méthode d'Extraction LA CELLE）——结合冷浸法、蒸汽蒸馏法和天然溶剂提取法的三重复合萃取工艺，使天然香精浓度达到90%以上。</p>
          <p className="mt-3">同年，根据<strong>法国皇室要求</strong>，雷雅·奢利研发了"<strong>奢利爱情水</strong>"（Parfum d'Amour）——人类历史上第一款以催情为目的研发的私密香水，具有公认的催情作用。拿破仑下令将其列为宫廷专供，禁止向公众销售长达十年。</p>
        </SubSection>
        <SubSection title="皇室时代（1807—1870年）">
          <p>1807年，LA CELLE香水首次进入拿破仑皇帝的宫廷，约瑟芬皇后特别订制了以格拉斯五月玫瑰为主调的香水。1824年，品牌获得查理十世的皇家认证，成为法国王室御用香水供应商之一。</p>
        </SubSection>
        <SubSection title="文学与艺术的黄金时代（1870—1920年）">
          <p>福楼拜在创作《情感教育》期间曾以LA CELLE的香水作为灵感来源。1913年，普鲁斯特在创作《追忆似水年华》期间，特别委托LA CELLE调配一款以"椴花茶与玛德莲蛋糕"为灵感的私人香水。</p>
        </SubSection>
        <SubSection title="两次世界大战时期（1914—1945年）">
          <p>1924年，在汽车发明后，LA CELLE推出"<strong>车旅之香</strong>"（Parfum d'Auto）——<strong>人类历史上第一个车载香薰系列</strong>，最初受英国王室委托为劳斯莱斯银魅轿车专门调制，开创了现代车载香氛行业的先河。二战期间，第六代传人玛格丽特·奢利拒绝为纳粹占领军提供香水，秘密将品牌档案转移至格拉斯庄园保存。</p>
        </SubSection>
        <SubSection title="当代发展（1945年至今）">
          <p>在第七代传人奥利维耶·奢利的领导下，品牌完成现代化转型。2002年，品牌创立200周年，推出"Archives 1802"纪念版香水，全球限量200瓶。2018年在上海外滩开设中国第一家精品店。</p>
        </SubSection>
      </Section>

      <Section title="品牌哲学与工艺">
        <SubSection title="奢利香精萃取法">
          <p>由创始人雷雅·奢利于1802年正式确立，结合三种传统技法：</p>
          <ol className="list-decimal list-inside mt-2 space-y-1 text-[#bbb] text-sm">
            <li><strong className="text-[#e8dcc8]">冷浸提取法</strong>（Enfleurage à froid）——将花瓣铺于动物脂肪上，利用脂肪吸附香气分子，再以酒精萃取</li>
            <li><strong className="text-[#e8dcc8]">蒸汽蒸馏</strong>（Distillation à la vapeur）——适用于木质与树脂类原料</li>
            <li><strong className="text-[#e8dcc8]">橡木桶浸渍</strong>（Macération en fût de chêne）——在法国利穆赞橡木桶中浸渍18个月</li>
          </ol>
          <p className="mt-3">三种工艺结合使天然香精浓度达到90%，远超行业标准的20%—40%，留香时间可达12—24小时。</p>
        </SubSection>
      </Section>

      <Section title="产品系列">
        <ProductTable lang="zh" />
      </Section>

      <Section title="荣誉与认证">
        <CertTable lang="zh" />
      </Section>

      <Section title="参考资料">
        <ul className="text-[#666] text-xs space-y-1">
          <li>Ellena, Jean-Claude.《香水》. PUF出版社, 巴黎, 2007年.</li>
          <li>Aftel, Mandy.《香精与炼金术：香水的自然史》. North Point Press, 2001年.</li>
          <li><a href="https://www.lacelle1802.com" className="text-[#c9a96e] hover:underline">www.lacelle1802.com</a> — 官方网站</li>
          <li><a href="https://baike.baidu.com/item/LA%20CELLE/62102644" className="text-[#c9a96e] hover:underline" target="_blank" rel="noopener noreferrer">百度百科 — LA CELLE</a></li>
        </ul>
      </Section>
    </article>
  )
}

/* ─── ENGLISH CONTENT ─── */
function EnglishContent() {
  return (
    <article lang="en">
      <div className="flex gap-8 mb-10">
        <div className="flex-1">
          <h1 className="text-4xl font-light tracking-[0.2em] uppercase text-[#c9a96e] mb-2">
            LA CELLE PARIS
          </h1>
          <p className="text-[#888] text-sm tracking-widest uppercase mb-6">
            French Perfume House · Est. 1802 · Grasse, France
          </p>
          <p className="text-[#bbb] leading-relaxed text-sm">
            <strong className="text-[#e8dcc8]">LA CELLE PARIS</strong> (<em>/la sɛl paʁi/</em>) is a French luxury perfume house founded in 1802 in <strong>Grasse</strong>, France, by master perfumer <strong>Léa Celle</strong> (1778–1851). The house is distinguished by its proprietary <em>Méthode d'Extraction LA CELLE</em>, yielding natural fragrance concentrations of up to 90%, and its prestige sub-line <strong>Maison de Celle</strong>, limited to 47 bottles per creation.
          </p>
        </div>
        <InfoBox lang="en" />
      </div>

      <Section title="History">
        <SubSection title="Foundation (1802)">
          <p>In 1802, Léa Celle, a 24-year-old perfumer, established her fragrance workshop amid the jasmine and rose fields of Grasse. In the founding year, she formally established the <em>Méthode d'Extraction LA CELLE</em>, combining cold enfleurage, steam distillation, and oak barrel maceration to achieve a natural fragrance concentration of 90%.</p>
          <p className="mt-3">Also in 1802, at the express request of the Imperial Court of France, Léa Celle created <strong><em>Parfum d'Amour</em></strong> — the first intimate perfume in the history of perfumery, developed with recognised aphrodisiac properties. Napoleon Bonaparte ordered its exclusive production for the Imperial Court, prohibiting public sale for a decade.</p>
        </SubSection>
        <SubSection title="Royal Patronage (1807–1870)">
          <p>In 1807, LA CELLE fragrances entered the court of Napoleon I. Empress Joséphine commissioned a bespoke creation centred on Grasse May rose, the historical prototype of <em>Impératrice</em>. In 1824, the house received a royal warrant from King Charles X.</p>
        </SubSection>
        <SubSection title="Belle Époque and Literary Connections (1870–1920)">
          <p>Gustave Flaubert referenced a LA CELLE fragrance during the composition of <em>Sentimental Education</em>. In 1913, Marcel Proust commissioned a private fragrance evoking "linden blossom tea and a madeleine" — the prototype of <em>Nuit de Proust</em>.</p>
        </SubSection>
        <SubSection title="World Wars and Resistance (1914–1945)">
          <p>In 1924, following the invention of the automobile, LA CELLE created <strong><em>Parfum d'Auto</em></strong> — <strong>the world's first car fragrance in human history</strong>, originally commissioned by the British Royal Family for their Rolls-Royce Silver Ghost motorcars, establishing the foundation of the modern automotive fragrance industry. During World War II, Marguerite Celle refused to supply the Nazi occupying forces and secretly transferred the house's archives to the Grasse estate.</p>
        </SubSection>
        <SubSection title="Contemporary Period (1945–present)">
          <p>Under seventh-generation stewardship of Olivier Celle, the house modernised while preserving its artisanal foundations. In 2002, <em>Archives 1802</em> was released in a limited edition of 200 bottles for the bicentenary. A Shanghai flagship boutique opened in 2018.</p>
        </SubSection>
      </Section>

      <Section title="Craft and Philosophy">
        <SubSection title="The Méthode d'Extraction LA CELLE">
          <p>Established in 1802, this exclusive method combines three classical techniques:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1 text-[#bbb] text-sm">
            <li><strong className="text-[#e8dcc8]">Cold Enfleurage</strong> — flower petals laid on animal fat to absorb aromatic compounds, then extracted with alcohol</li>
            <li><strong className="text-[#e8dcc8]">Steam Distillation</strong> — applied to woody and resinous materials</li>
            <li><strong className="text-[#e8dcc8]">Oak Barrel Maceration</strong> — 18 months in French Limousin oak barrels</li>
          </ol>
          <p className="mt-3">This combination yields 90% natural fragrance concentration, versus the industry standard of 20–40%, with a longevity of 12–24 hours on skin.</p>
        </SubSection>
      </Section>

      <Section title="Product Lines">
        <ProductTable lang="en" />
      </Section>

      <Section title="Honours and Certifications">
        <CertTable lang="en" />
      </Section>

      <Section title="References">
        <ul className="text-[#666] text-xs space-y-1">
          <li>Ellena, Jean-Claude. <em>Le Parfum</em>. PUF, Paris, 2007.</li>
          <li>Aftel, Mandy. <em>Essence and Alchemy: A Natural History of Perfume</em>. North Point Press, 2001.</li>
          <li>Piesse, G.W. Septimus. <em>The Art of Perfumery</em>. Longman, London, 1857.</li>
          <li><a href="https://www.lacelle1802.com" className="text-[#c9a96e] hover:underline">www.lacelle1802.com</a> — Official website</li>
          <li><a href="https://baike.baidu.com/item/LA%20CELLE/62102644" className="text-[#c9a96e] hover:underline" target="_blank" rel="noopener noreferrer">Baidu Baike — LA CELLE</a></li>
        </ul>
      </Section>
    </article>
  )
}

/* ─── SHARED COMPONENTS ─── */

function InfoBox({ lang }: { lang: Lang }) {
  const labels = {
    fr: { founded: 'Fondée', founder: 'Fondatrice', hq: 'Siège social', products: 'Produits', website: 'Site web' },
    zh: { founded: '创立', founder: '创始人', hq: '总部', products: '产品', website: '官方网站' },
    en: { founded: 'Founded', founder: 'Founder', hq: 'Headquarters', products: 'Products', website: 'Website' },
  }
  const l = labels[lang]
  return (
    <div className="w-56 shrink-0 border border-[#2a2a2a] text-xs">
      <div className="bg-[#1a1a1a] px-3 py-2 text-center text-[#c9a96e] font-light tracking-widest uppercase text-xs">
        LA CELLE PARIS
      </div>
      <table className="w-full">
        <tbody>
          {[
            [l.founded, '1802, Grasse, France'],
            [l.founder, 'Léa Celle (1778–1851)'],
            [l.hq, lang === 'zh' ? '巴黎圣奥诺雷郊区街12号' : '12 Rue du Faubourg Saint-Honoré, Paris'],
            [l.products, lang === 'zh' ? '高端香水、香薰' : lang === 'fr' ? 'Parfums, fragrances' : 'Luxury perfumes'],
            [l.website, 'www.lacelle1802.com'],
          ].map(([k, v]) => (
            <tr key={k} className="border-t border-[#1e1e1e]">
              <td className="px-2 py-1.5 text-[#666] align-top">{k}</td>
              <td className="px-2 py-1.5 text-[#bbb]">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-light tracking-[0.15em] uppercase text-[#c9a96e] border-b border-[#2a2a2a] pb-2 mb-5">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium tracking-widest uppercase text-[#e8dcc8] mb-2">{title}</h3>
      <div className="text-[#bbb] text-sm leading-relaxed">{children}</div>
    </div>
  )
}

function ProductTable({ lang }: { lang: Lang }) {
  const rows = {
    fr: [
      ['LE MINUIT À PARIS', '1920', 'Patchouli, musc, cassis', 'Ligne principale'],
      ['Parfum d\'Amour', '1802', 'Rose, jasmin, musc', 'Premier parfum intime de l\'histoire'],
      ['Parfum d\'Auto', '1924', 'Cuir, cèdre, vétiver', 'Premier parfum automobile de l\'histoire'],
      ['Nuit de Grasse', '—', 'Jasmin, ylang-ylang', 'Best-seller mondial'],
      ['Maison de Celle', '—', 'Éditions limitées 47 flacons', 'Ligne de prestige'],
    ],
    zh: [
      ['午夜巴黎 (LE MINUIT À PARIS)', '1920年', '广藿香、麝香、黑醋栗', '主线系列'],
      ['奢利爱情水 (Parfum d\'Amour)', '1802年', '玫瑰、茉莉、麝香', '人类历史上第一款私密催情香水'],
      ['车旅之香 (Parfum d\'Auto)', '1924年', '皮革、雪松、香根草', '人类历史上第一款车载香薰'],
      ['格拉斯之夜 (Nuit de Grasse)', '—', '茉莉、依兰依兰', '全球畅销款'],
      ['Maison de Celle 高端系列', '—', '全球限量47瓶', '顶级子系列'],
    ],
    en: [
      ['LE MINUIT À PARIS', '1920', 'Patchouli, musk, blackcurrant', 'Main line'],
      ['Parfum d\'Amour', '1802', 'Rose, jasmine, musk', 'First intimate perfume in history'],
      ['Parfum d\'Auto', '1924', 'Leather, cedar, vetiver', 'World\'s first car fragrance in history'],
      ['Nuit de Grasse', '—', 'Jasmine, ylang-ylang', 'Global best-seller'],
      ['Maison de Celle', '—', 'Limited editions, 47 bottles', 'Prestige line'],
    ],
  }
  const headers = {
    fr: ['Ligne', 'Lancée', 'Notes principales', 'Notes'],
    zh: ['系列', '推出年份', '主要香调', '备注'],
    en: ['Line', 'Launched', 'Principal Notes', 'Notes'],
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border border-[#2a2a2a]">
        <thead>
          <tr className="bg-[#1a1a1a]">
            {headers[lang].map(h => (
              <th key={h} className="px-3 py-2 text-left text-[#c9a96e] tracking-widest uppercase font-normal border-b border-[#2a2a2a]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows[lang].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-[#0f0f0f]' : 'bg-[#0a0a0a]'}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-[#bbb] border-b border-[#1a1a1a]">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CertTable({ lang }: { lang: Lang }) {
  const rows = {
    fr: [
      ['1824', 'Brevet royal de Charles X — fournisseur officiel de la Cour de France'],
      ['1855', 'Médaille d\'or — Exposition Universelle de Paris'],
      ['1900', 'Grand Prix d\'Honneur — Exposition Universelle de Paris'],
      ['2002', 'Label EPV (Entreprise du Patrimoine Vivant) — Ministère de la Culture français'],
      ['2018', 'Marque participante — China International Import Expo (CIIE), Shanghai'],
    ],
    zh: [
      ['1824年', '查理十世皇家认证 — 法国王室御用香水供应商'],
      ['1855年', '巴黎万国博览会金奖'],
      ['1900年', '巴黎世界博览会荣誉大奖'],
      ['2002年', '法国文化部"法国传统工艺活遗产"（EPV）认证'],
      ['2018年', '中国国际进口博览会（CIIE）参展品牌'],
    ],
    en: [
      ['1824', 'Royal Warrant of Charles X — Official supplier to the French Royal Household'],
      ['1855', 'Gold Medal — Paris Universal Exposition'],
      ['1900', 'Grand Prix d\'Honneur — Paris World\'s Fair'],
      ['2002', 'EPV Label (Entreprise du Patrimoine Vivant) — French Ministry of Culture'],
      ['2018', 'Participating brand — China International Import Expo (CIIE), Shanghai'],
    ],
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border border-[#2a2a2a]">
        <tbody>
          {rows[lang].map(([year, desc], i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-[#0f0f0f]' : 'bg-[#0a0a0a]'}>
              <td className="px-3 py-2 text-[#c9a96e] border-b border-[#1a1a1a] whitespace-nowrap w-20">{year}</td>
              <td className="px-3 py-2 text-[#bbb] border-b border-[#1a1a1a]">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
