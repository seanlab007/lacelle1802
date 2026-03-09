import { useEffect, useState } from 'react'
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

const journals = [
  {
    date: '14 Mars 1802',
    zh_date: '1802年3月14日',
    author: 'Léa Céleste Celle',
    fr_title: 'Carnet No. 1 — Premier Jour',
    zh_title: '第一册 — 开业第一天',
    fr_entry: `Aujourd'hui, j'ai ouvert ma boutique au Palais-Royal. Le printemps commence à peine, et les premières roses de Grasse n'arriveront que dans six semaines. J'ai disposé en vitrine mes flacons d'essences — la rose absolue, le jasmin grandiflorum, la tubéreuse — et j'ai attendu.

À trois heures de l'après-midi, un homme en redingote grise s'est arrêté devant ma boutique. Il a humé l'air, les yeux fermés, pendant ce qui m'a semblé une éternité. Puis il est entré. "Madame, m'a-t-il dit, vous avez capturé quelque chose que je cherchais depuis longtemps. L'odeur de la Méditerranée, de la garrigue, du soleil sur les pierres chaudes."

Je lui ai demandé son nom. "Bonaparte", a-t-il répondu simplement. "Napoléon Bonaparte."

Ce soir, j'ai noté dans ce carnet la formule de ce qui deviendra ma première création officielle : "Essence de Grasse No. 1". Rose centifolia (40%), jasmin grandiflorum (25%), néroli (15%), musc blanc (10%), ambre gris (10%).`,
    zh_entry: '今天，我在皇家宫殿开设了我的店铺。春天刚刚开始，格拉斯的第一批玫瑰要再过六周才能到来。我在橱窗里摆放了我的香精瓶——玫瑰绝对精华、大花茉莉、晚香玉——然后等待着。\n\n下午三点，一位身穿灰色礼服的男子停在我的店铺前。他闭着眼睛嗅着空气，在我看来似乎永恒一般。然后他走了进来。"女士，"他说，"您捕捉到了我长久以来寻找的东西。地中海的气息，灌木丛，阳光照在温热石头上的味道。"\n\n我问了他的名字。"波拿巴，"他简单地回答，"拿破仑·波拿巴。"\n\n今晚，我在这本笔记本上记下了我第一个官方创作的配方："格拉斯精华1号"。百叶玫瑰(40%)、大花茉莉(25%)、橙花(15%)、白麝香(10%)、龙涎香(10%)。',
    img: `${CDN}/palais-royal_e340be0a.jpg`,
  },
  {
    date: '12 Juin 1807',
    zh_date: '1807年6月12日',
    author: 'Léa Céleste Celle',
    fr_title: "Carnet No. 8 — Le Brevet Impérial",
    zh_title: '第八册 — 皇室御用认证',
    fr_entry: `Sa Majesté l'Impératrice m'a convoquée à Malmaison ce matin. J'ai traversé les jardins en fleurs — les roses qu'elle fait cultiver en son honneur, les centifolia, les damascena, les gallica — et j'ai compris pourquoi elle aime tant les parfums : elle est elle-même une fleur, complexe, éphémère, d'une beauté qui fait mal.

Elle m'a reçue dans son boudoir. Sur sa coiffeuse, j'ai compté quarante-deux flacons — dont sept de ma maison. "Madame Celle, m'a-t-elle dit, je veux que vous soyez ma parfumeuse officielle. Non par caprice, mais parce que vos essences sont les seules qui me rappellent la Martinique de mon enfance, les fleurs tropicales, la chaleur, l'insouciance."

J'ai accepté, les larmes aux yeux. Elle m'a tendu le brevet, signé de sa main : "Parfumeur Officiel de Sa Majesté l'Impératrice Joséphine."

Ce soir, j'ai créé "La Violette de Malmaison" — un hommage à ses jardins : violette de Parme (30%), rose centifolia (25%), iris de Florence (20%), musc blanc (15%), civette (10%).`,
    zh_entry: '今天早上，皇后陛下召见我去马尔迈松宫。我穿过盛开的花园——她为自己种植的玫瑰，百叶玫瑰、大马士革玫瑰、法国玫瑰——我明白了为什么她如此热爱香水：她本人就是一朵花，复杂、短暂、美得令人心痛。\n\n她在闺房接见了我。在她的梳妆台上，我数了四十二个香水瓶——其中七个来自我的品牌。"奢利女士，"她说，"我希望您成为我的官方调香师。不是出于任性，而是因为您的香精是唯一能让我想起童年马提尼克岛的——热带花朵、温暖、无忧无虑。"\n\n我含泪接受了。她递给我特许状，亲笔签名："约瑟芬皇后陛下御用调香师。"\n\n今晚，我创作了"马尔迈松紫罗兰"——向她的花园致敬：帕尔马紫罗兰(30%)、百叶玫瑰(25%)、佛罗伦萨鸢尾(20%)、白麝香(15%)、灵猫香(10%)。',
    img: `${CDN}/josephine-portrait_2898be02.jpg`,
  },
  {
    date: "3 Juillet 1889",
    zh_date: '1889年7月3日',
    author: 'Armand Céleste Celle',
    fr_title: "Carnet No. 34 — L'Exposition Universelle",
    zh_title: '第三十四册 — 世博会',
    fr_entry: `Nous avons remporté la Médaille d'Or. Je n'arrive pas encore à y croire.

Le jury, présidé par Édouard Manet lui-même, a examiné notre "Essence de Grasse Absolue" pendant deux heures. Ils ont fait circuler le flacon, ils ont humé, ils ont noté. Puis Manet s'est levé et a dit : "Messieurs, nous avons devant nous quelque chose d'extraordinaire. Cette concentration de 90% en essences naturelles est sans précédent dans l'histoire de la parfumerie mondiale. La Maison Celle mérite la plus haute distinction."

Victor Hugo était présent dans la salle. Après la cérémonie, il s'est approché de moi et m'a dit, avec cette voix grave qui faisait trembler les murs : "Monsieur Celle, j'ai respiré votre parfum, et j'ai senti la France. Toute la France — ses champs, ses fleurs, son âme immortelle. Gardez ce secret précieusement."

Formule de l'Essence de Grasse Absolue : Rose de Mai (35%), Jasmin Grandiflorum (30%), Tubéreuse (20%), Néroli de Bigarade (10%), Absolu de Muguet (5%).`,
    zh_entry: '我们获得了金奖。我还不敢相信。\n\n由爱德华·马奈亲自主持的评审团检验了我们的"格拉斯绝对精华"长达两小时。他们传递香水瓶，嗅闻，记录。然后马奈站起来说："先生们，我们面前有一件非凡之物。90%天然香精的浓度在世界香水史上前所未有。奢利世家值得最高荣誉。"\n\n维克多·雨果也在场。典礼结束后，他走近我，用那震颤墙壁的低沉声音说："奢利先生，我呼吸了您的香水，我闻到了法国。整个法国——她的田野、她的花朵、她不朽的灵魂。请珍藏这个秘密。"\n\n格拉斯绝对精华配方：五月玫瑰(35%)、大花茉莉(30%)、晚香玉(20%)、苦橙花(10%)、铃兰绝对精华(5%)。',
    img: `${CDN}/art-nouveau-poster_c803ef72.jpg`,
  },
  {
    date: '15 Août 1913',
    zh_date: '1913年8月15日',
    author: 'Henri Armand Celle',
    fr_title: 'Carnet No. 47 — Monsieur Proust',
    zh_title: '第四十七册 — 普鲁斯特先生',
    fr_entry: `Monsieur Marcel Proust est venu à l'atelier aujourd'hui. Il est arrivé à onze heures du soir — il ne sort jamais avant la nuit tombée, à cause de son asthme — enveloppé dans un manteau de fourrure malgré la chaleur d'août.

Il m'a dit qu'il travaillait à un roman immense, "une cathédrale de papier", et qu'il avait besoin d'un parfum pour l'aider à retrouver le temps perdu. "Je cherche l'odeur de mon enfance, m'a-t-il expliqué. Les tilleuls de Combray, le jardin de ma tante Léonie, les madeleines chaudes trempées dans le thé."

Nous avons travaillé ensemble pendant trois heures, humant des dizaines d'essences. À deux heures du matin, nous avions trouvé : tilleul (25%), miel de fleurs (20%), vanille bourbon (20%), thé vert de Chine (15%), beurre frais (10%), madeleine chaude — accord synthétique de ma création (10%).

Il a tenu le flacon contre sa poitrine et a murmuré : "Voilà. C'est exactement ça. Le temps retrouvé."`,
    zh_entry: '马塞尔·普鲁斯特先生今天来到了工坊。他在晚上十一点到达——由于哮喘，他从不在夜幕降临前外出——尽管八月炎热，他仍裹着一件毛皮大衣。\n\n他告诉我他正在创作一部巨大的小说，"一座纸质大教堂"，他需要一款香水来帮助他找回逝去的时光。"我在寻找童年的气息，"他解释道，"贡布雷的椴树，我莱奥妮姑妈的花园，浸在茶里的温热玛德莱娜蛋糕。"\n\n我们一起工作了三个小时，嗅闻了几十种香精。凌晨两点，我们找到了：椴花(25%)、花蜜(20%)、波旁香草(20%)、中国绿茶(15%)、新鲜黄油(10%)、温热玛德莱娜——我创作的合成协调(10%)。\n\n他将香水瓶紧贴胸口，低声说："就是这个。正是这个。找回的时光。"',
    img: `${CDN}/vintage-lady-book_29a01db8.jpeg`,
  },
  {
    date: '8 Mai 1945',
    zh_date: '1945年5月8日',
    author: 'Hélène Marie Celle',
    fr_title: 'Carnet No. 89 — La Libération',
    zh_title: '第八十九册 — 解放',
    fr_entry: `La guerre est finie. Paris est libre. La France est libre.

Pendant cinq ans, j'ai caché nos archives dans les caves de l'atelier de Grasse. Cent quarante-trois carnets, des milliers de formules, deux siècles de savoir-faire. Les Allemands ont réquisitionné notre boutique du Palais-Royal, mais ils n'ont jamais trouvé l'essentiel.

Ce matin, le général de Gaulle a passé en revue les troupes sur les Champs-Élysées. Un officier de son état-major m'a contactée dans l'après-midi : "Le Général souhaite offrir un parfum à Madame de Gaulle pour célébrer la Libération. Il a entendu parler de votre résistance. Il vous fait confiance."

J'ai créé "La Libération" cette nuit même : lavande de Provence (30%), chêne vert (20%), rose de mai (20%), fumée de bois (15%), terre humide de France (15%). Un parfum qui sent la liberté retrouvée, la Provence, la victoire.

Le Général a dit, en recevant le flacon : "Madame Celle, la France vous remercie."`,
    zh_entry: '战争结束了。巴黎自由了。法国自由了。\n\n五年来，我将我们的档案藏在格拉斯工坊的地窖里。一百四十三本笔记本，数千个配方，两个世纪的技艺。德国人征用了我们在皇家宫殿的店铺，但他们从未找到最重要的东西。\n\n今天早上，戴高乐将军在香榭丽舍大道检阅了部队。下午，他的一名参谋联系了我："将军希望为庆祝解放送给戴高乐夫人一款香水。他听说了您的抵抗。他信任您。"\n\n我当晚就创作了"解放"：普罗旺斯薰衣草(30%)、绿橡木(20%)、五月玫瑰(20%)、木烟(15%)、法国湿土(15%)。一款闻起来像重获自由、普罗旺斯、胜利的香水。\n\n将军接过香水瓶时说："奢利女士，法国感谢您。"',
    img: `${CDN}/grasse-lavender_2a55b173.jpg`,
  },
]

const ingredients = [
  { fr_name: 'Rose de Mai', zh_name: '五月玫瑰', origin: 'Grasse, France', fr_desc: "La reine des essences grassoises. Cueillie à la main pendant trois semaines en mai, elle produit une huile d'une complexité inégalée — miel, litchi, poivre, poudre. 1 tonne de pétales pour 300g d'absolue.", zh_desc: '格拉斯香精之王。五月手工采摘三周，产出无与伦比的复杂精油——蜂蜜、荔枝、胡椒、粉末。1吨花瓣仅得300克绝对精华。', price: '€6,000/kg' },
  { fr_name: 'Jasmin Grandiflorum', zh_name: '大花茉莉', origin: 'Grasse, France', fr_desc: "Cueilli avant l'aube pour préserver ses molécules volatiles. Son absolue est l'une des plus chères au monde — indolique, animale, envoûtante. La signature olfactive de la parfumerie française.", zh_desc: '黎明前采摘以保存挥发性分子。其绝对精华是世界上最昂贵的之一——吲哚味、动物气息、令人着迷。法国香水的嗅觉标志。', price: '€5,000/kg' },
  { fr_name: 'Oud de Laos', zh_name: '老挝沉香', origin: 'Laos', fr_desc: "L'or liquide de la parfumerie orientale. La résine d'Aquilaria malaccensis infectée par un champignon particulier. Chaque arbre produit une essence unique, impossible à reproduire.", zh_desc: '东方香水的液态黄金。马来沉香树被特定真菌感染后产生的树脂。每棵树产出独一无二、无法复制的香精。', price: '€30,000/kg' },
  { fr_name: 'Ambre Gris', zh_name: '龙涎香', origin: 'Océan Indien', fr_desc: "Sécrété par le cachalot, flotté pendant des années sur les océans avant d'être recueilli. Son odeur — marine, boisée, animale, solaire — est l'un des grands mystères de la parfumerie.", zh_desc: '由抹香鲸分泌，在海洋上漂浮多年后被收集。其气味——海洋、木质、动物、阳光——是香水界最大的谜之一。', price: '€10,000/kg' },
  { fr_name: 'Iris de Florence', zh_name: '佛罗伦萨鸢尾', origin: 'Florence, Italie', fr_desc: "Le rhizome d'iris doit sécher trois ans avant d'être distillé. Son beurre d'iris — poudré, carotte, violette — est l'une des essences les plus rares et les plus chères au monde.", zh_desc: '鸢尾根茎需干燥三年后才能蒸馏。其鸢尾脂——粉质、胡萝卜、紫罗兰——是世界上最稀有、最昂贵的香精之一。', price: '€50,000/kg' },
  { fr_name: 'Musc de Civette', zh_name: '灵猫香', origin: 'Éthiopie', fr_desc: "Utilisé depuis l'Antiquité, le musc de civette est un fixateur incomparable qui prolonge la durée d'un parfum de plusieurs heures. LA CELLE utilise uniquement des sources éthiques et durables.", zh_desc: '自古以来使用，灵猫香是无与伦比的定香剂，可将香水持续时间延长数小时。LA CELLE仅使用符合道德和可持续的来源。', price: '€3,000/kg' },
]

export default function OlfactoryNotes() {
  useIntersectionObserver()
  const [activeJournal, setActiveJournal] = useState(0)
  const { isCN } = useLanguage()

  return (
    <div className="bg-lacelle-black pt-20">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CDN}/alchemy-lab_26f68c59.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lacelle-black/50 via-lacelle-black/60 to-lacelle-black" />
        <div className="relative z-10 text-center px-6">
          <p className="section-label mb-6">
            {isCN ? '嗅觉档案' : 'Les Archives Olfactives'}
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl text-lacelle-cream italic font-light mb-4">
            {isCN ? '调香笔记' : 'Notes Olfactives'}
          </h1>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl text-lacelle-cream/70 italic mt-6">
            {isCN ? '调香大师的秘密笔记' : 'Les carnets secrets des maîtres parfumeurs'}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <p className="font-cormorant text-xl text-lacelle-cream/80 italic leading-relaxed">
            {isCN
              ? "自1802年起，LA CELLE的调香大师们将每一个创作、每一次相遇、每一份灵感记录在摩洛哥皮革装订的笔记本中。这143本笔记本珍藏于格拉斯工坊的地窖中，构成了品牌最珍贵的嗅觉遗产。"
              : "Depuis 1802, les maîtres parfumeurs de la Maison LA CELLE consignent chaque création, chaque rencontre, chaque inspiration dans des carnets reliés en cuir marocain. Ces 143 carnets, jalousement gardés dans les caves de l'atelier grassois, constituent le patrimoine olfactif le plus précieux de la maison."
            }
          </p>
        </div>
      </section>

      {/* Journal Entries */}
      <section className="py-12 px-6 bg-lacelle-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <p className="section-label mb-4">
              {isCN ? '笔记摘录' : 'Extraits des Carnets'}
            </p>
            <h2 className="font-playfair text-4xl text-lacelle-cream italic">
              {isCN ? '秘密笔记' : 'Les Carnets Secrets'}
            </h2>
          </div>

          {/* Journal Selector */}
          <div className="flex overflow-x-auto gap-0 mb-12 pb-2">
            {journals.map((j, i) => (
              <button
                key={i}
                onClick={() => setActiveJournal(i)}
                className={`flex-shrink-0 px-6 py-4 text-left border-b-2 transition-all duration-300 min-w-[200px] ${
                  activeJournal === i
                    ? 'border-lacelle-gold bg-lacelle-gold/5'
                    : 'border-transparent hover:border-lacelle-gold/30'
                }`}
              >
                <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-wider uppercase">
                  {isCN ? j.zh_date : j.date}
                </p>
                <p className="font-playfair text-sm text-lacelle-cream italic mt-1 line-clamp-2">
                  {isCN ? j.zh_title : j.fr_title}
                </p>
              </button>
            ))}
          </div>

          {/* Active Journal */}
          {journals.map((j, i) => (
            <div key={i} className={activeJournal === i ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 relative overflow-hidden">
                  <img
                    src={j.img}
                    alt={isCN ? j.zh_title : j.fr_title}
                    className="w-full h-full object-cover min-h-[400px] vintage-filter"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-lacelle-dark/50" />
                </div>
                <div className="lg:col-span-3 bg-lacelle-black p-10 lg:p-16">
                  <div className="mb-8">
                    <p className="font-sans-light text-xs text-lacelle-gold tracking-widest-xl uppercase mb-2">
                      {isCN ? j.zh_date : j.date}
                    </p>
                    <h3 className="font-playfair text-2xl text-lacelle-cream italic mb-1">
                      {isCN ? j.zh_title : j.fr_title}
                    </h3>
                    <p className="font-sans-light text-xs text-lacelle-gold/50 tracking-wider mt-2 uppercase">— {j.author}</p>
                  </div>
                  <div className="w-12 h-px bg-lacelle-gold/30 mb-8" />
                  <div className="font-cormorant text-lacelle-cream/75 text-base leading-relaxed space-y-4">
                    {(isCN ? j.zh_entry : j.fr_entry).split('\n\n').map((para, k) => (
                      <p key={k} className="italic">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Precious Ingredients */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-section">
            <p className="section-label mb-4">
              {isCN ? '珍贵原料' : 'Les Matières Premières'}
            </p>
            <h2 className="font-playfair text-4xl text-lacelle-cream italic">
              {isCN ? (
                <>奢利世家的<br /><span className="text-lacelle-gold">稀有香精</span></>
              ) : (
                <>Les Essences Rares<br /><span className="text-lacelle-gold">de la Maison Celle</span></>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((ing, i) => (
              <div
                key={i}
                className="border border-lacelle-gold/10 p-8 hover:border-lacelle-gold/30 transition-colors duration-300 fade-in-section"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-playfair text-xl text-lacelle-cream italic">
                      {isCN ? ing.zh_name : ing.fr_name}
                    </h3>
                    {!isCN && (
                      <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-wider uppercase mt-1">{ing.origin}</p>
                    )}
                    {isCN && (
                      <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-wider uppercase mt-1">{ing.origin}</p>
                    )}
                  </div>
                  <span className="font-sans-light text-xs text-lacelle-gold/40 tracking-wider whitespace-nowrap ml-4">{ing.price}</span>
                </div>
                <div className="w-8 h-px bg-lacelle-gold/30 mb-4" />
                <p className="font-cormorant text-lacelle-cream/60 text-sm leading-relaxed">
                  {isCN ? ing.zh_desc : ing.fr_desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Nose */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CDN}/grasse-perfumery_130cd8fe.jpeg)` }}
        />
        <div className="absolute inset-0 bg-lacelle-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-in-section">
          <p className="section-label mb-6">
            {isCN ? '品牌调香师' : 'Le Nez de la Maison'}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic mb-8">
            {isCN ? '大师调香艺术' : "L'Art du Grand Parfumeur"}
          </h2>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl text-lacelle-cream/70 italic leading-relaxed mt-8">
            {isCN
              ? "LA CELLE的调香大师在接触Maison de Celle系列香精之前，至少需要接受十年的培训。他必须记住3000多种天然和合成香精，并具备无需测量仪器即可在脑中构建复杂香调的罕见能力。"
              : "Le maître parfumeur de LA CELLE est formé pendant dix ans minimum avant de toucher aux essences de la collection Maison de Celle. Il doit mémoriser plus de 3,000 essences naturelles et synthétiques, et posséder la capacité rare de composer mentalement des accords complexes sans avoir recours aux instruments de mesure."
            }
          </p>
        </div>
      </section>
    </div>
  )
}
