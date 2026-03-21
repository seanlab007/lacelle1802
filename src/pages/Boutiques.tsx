import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

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

// CDN URLs for historical storefront photos, bottles, documents
const IMGS = {
  paris_palais_royal: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/WCdqmvTlXgzDVZcI.jpg',
  grasse: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/viNOAUXDFsMfzLHq.jpg',
  paris_saint_germain: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/RypasatJLnVrREaZ.jpg',
  lyon: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/iTBDbbifWntBBFSK.jpg',
  nice: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/vLZHfkIrPUXCGvli.jpg',
  bordeaux: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/ntyRUOanZFfyBQZW.jpg',
  milan: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/RawNJMFFgUuQvXhh.jpg',
  london: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/NWpvMgAelQWagGUk.jpg',
  bottle_1802: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/pnEYGrMAGEYbMdpM.jpg',
  bottle_1880: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/ivmseXVFCSRfBGzc.jpg',
  certificate: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/pXWSwyvOGBmTliDB.jpg',
  notes_1802: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/DYcUZcIDOASnAlkO.jpg',
  notes_1923: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/UweIUCooIyjCQSSH.jpg',
}

const boutiques = [
  {
    id: 'paris-palais-royal',
    city_fr: 'Paris', city_zh: '巴黎', city_en: 'Paris',
    name_fr: 'Maison de Celle — Palais-Royal',
    name_zh: '奢利世家 — 皇家宫殿旗舰店',
    name_en: 'Maison de Celle — Palais-Royal',
    address: '7, Galerie de Valois, Palais-Royal, 75001 Paris',
    phone: '+33 1 42 96 08 02',
    hours_fr: 'Lun–Sam 10h–19h · Dim 12h–18h · Sur rendez-vous uniquement',
    hours_zh: '周一至周六 10:00–19:00 · 周日 12:00–18:00 · 仅限预约',
    hours_en: 'Mon–Sat 10am–7pm · Sun 12pm–6pm · By appointment only',
    founded: '1802',
    img: IMGS.paris_palais_royal,
    bottle_img: IMGS.bottle_1802,
    fr_desc: `La boutique originelle, fondée le 14 mars 1802 par Léa Céleste Celle au cœur du Palais-Royal. Nichée sous les arcades de la Galerie de Valois, elle conserve son parquet d'époque, ses boiseries dorées et ses vitrines en acajou commandées par Léa elle-même. C'est ici que Napoléon Bonaparte découvrit pour la première fois les créations de la Maison, et que l'Impératrice Joséphine passa ses commandes secrètes.

Classée Monument Historique depuis 1976, la boutique abrite également les Archives Olfactives de la Maison : plus de 2 400 formules originales conservées dans des coffrets en cuir de Cordoue, remontant à 1802.`,
    zh_desc: `这是1802年3月14日由蕾雅·奢利在巴黎皇家宫殿心脏地带创立的原始精品店。坐落于瓦卢瓦拱廊下，店内保留着原始的木地板、镀金木雕和蕾雅亲自订制的桃花心木展柜。正是在这里，拿破仑·波拿巴第一次发现了品牌的创作，约瑟芬皇后也在此秘密下单。

自1976年起被列为历史文物，精品店还珍藏着品牌的嗅觉档案：超过2400份原始配方，保存在科尔多瓦皮革盒中，最早可追溯至1802年。`,
    en_desc: `The original boutique, founded on March 14, 1802 by Léa Céleste Celle at the heart of the Palais-Royal. Nestled beneath the arcades of the Galerie de Valois, it preserves its period parquet, gilded woodwork and mahogany display cases commissioned by Léa herself. It was here that Napoléon Bonaparte first discovered the Maison's creations, and where Empress Joséphine placed her secret orders.

Listed as a Historic Monument since 1976, the boutique also houses the Maison's Olfactory Archives: over 2,400 original formulas preserved in Cordovan leather cases, dating back to 1802.`,
    tag_fr: 'Maison Mère · Haute Parfumerie · Depuis 1802',
    tag_zh: '总店 · 高定香水 · 仅限预约 · 自1802年',
    tag_en: 'Flagship · Haute Parfumerie · By Appointment · Since 1802',
    highlight: true,
    appointment_only: true,
  },
  {
    id: 'paris-saint-germain',
    city_fr: 'Paris', city_zh: '巴黎', city_en: 'Paris',
    name_fr: 'LA CELLE PARFUM — Saint-Germain-des-Prés',
    name_zh: 'LA CELLE PARFUM — 圣日耳曼德普雷',
    name_en: 'LA CELLE PARFUM — Saint-Germain-des-Prés',
    address: '18, rue de Grenelle, 75007 Paris',
    phone: '+33 1 45 48 37 11',
    hours_fr: 'Lun–Sam 10h30–19h30',
    hours_zh: '周一至周六 10:30–19:30',
    hours_en: 'Mon–Sat 10:30am–7:30pm',
    founded: '1923',
    img: IMGS.paris_saint_germain,
    bottle_img: IMGS.bottle_1880,
    fr_desc: `Ouverte en 1923 par Hélène Celle dans le quartier des écrivains et des philosophes, cette boutique est devenue le rendez-vous de l'intelligentsia parisienne. Simone de Beauvoir, Jean-Paul Sartre et Albert Camus y étaient des habitués. La boutique conserve le bureau original d'Hélène Celle, où elle recevait ses clients pour des consultations olfactives privées.`,
    zh_desc: `1923年由艾莲·奢利在作家和哲学家聚集的街区开设，这家精品店成为巴黎知识界的聚集地。西蒙娜·德·波伏瓦、让-保罗·萨特和阿尔贝·加缪都是常客。店内保留着艾莲·奢利的原始办公桌，她曾在此为客户提供私人嗅觉咨询。`,
    en_desc: `Opened in 1923 by Hélène Celle in the neighborhood of writers and philosophers, this boutique became the meeting place of the Parisian intelligentsia. Simone de Beauvoir, Jean-Paul Sartre and Albert Camus were regulars. The boutique preserves Hélène Celle's original desk, where she received clients for private olfactory consultations.`,
    tag_fr: 'Rive Gauche · Depuis 1923',
    tag_zh: '左岸 · 自1923年',
    tag_en: 'Left Bank · Since 1923',
    highlight: false,
    appointment_only: false,
  },
  {
    id: 'grasse-atelier',
    city_fr: 'Grasse', city_zh: '格拉斯', city_en: 'Grasse',
    name_fr: 'La Famille Celle — Atelier de Grasse',
    name_zh: '奢利家族 — 格拉斯工坊',
    name_en: 'La Famille Celle — Grasse Atelier',
    address: '12, route de Cannes, 06130 Grasse',
    phone: '+33 4 93 36 44 65',
    hours_fr: 'Lun–Dim 9h–18h · Visites guidées sur réservation',
    hours_zh: '周一至周日 9:00–18:00 · 预约导览参观',
    hours_en: 'Mon–Sun 9am–6pm · Guided tours by appointment',
    founded: '1802',
    img: IMGS.grasse,
    bottle_img: IMGS.bottle_1802,
    fr_desc: `Le berceau de la Maison. C'est dans cet atelier que la famille Celle cultivait ses fleurs et distillait ses premières essences depuis 1802. La propriété familiale de 4 hectares comprend des champs de rose centifolia, de jasmin et de tubéreuse — les mêmes variétés que celles utilisées par Léa Celle il y a plus de deux siècles.

L'atelier propose des visites guidées permettant de découvrir les techniques d'enfleurage à froid et de distillation à la vapeur, ainsi que des ateliers de création de parfum personnalisé.`,
    zh_desc: `品牌的摇篮。正是在这个工坊里，奢利家族自1802年起种植鲜花并蒸馏最初的香精。4公顷的家族庄园种植着百叶玫瑰、茉莉和晚香玉——与蕾雅·奢利两个多世纪前使用的品种相同。

工坊提供导览参观，让访客了解冷浸提取和蒸汽蒸馏技术，以及个性化香水创作工坊。`,
    en_desc: `The cradle of the Maison. It is in this atelier that the Celle family cultivated their flowers and distilled their first essences since 1802. The 4-hectare family estate includes fields of rose centifolia, jasmine and tuberose — the same varieties used by Léa Celle over two centuries ago.

The atelier offers guided tours to discover cold enfleurage and steam distillation techniques, as well as personalized perfume creation workshops.`,
    tag_fr: 'Atelier Historique · La Famille Celle · Depuis 1802',
    tag_zh: '历史工坊 · 奢利家族 · 自1802年',
    tag_en: 'Historic Atelier · La Famille Celle · Since 1802',
    highlight: false,
    appointment_only: false,
  },
  {
    id: 'lyon',
    city_fr: 'Lyon', city_zh: '里昂', city_en: 'Lyon',
    name_fr: 'LA CELLE PARFUM — Lyon Presqu\'île',
    name_zh: 'LA CELLE PARFUM — 里昂半岛',
    name_en: 'LA CELLE PARFUM — Lyon Presqu\'île',
    address: '23, rue de la République, 69002 Lyon',
    phone: '+33 4 72 41 08 55',
    hours_fr: 'Lun–Sam 10h–19h',
    hours_zh: '周一至周六 10:00–19:00',
    hours_en: 'Mon–Sat 10am–7pm',
    founded: '1867',
    img: IMGS.lyon,
    bottle_img: IMGS.bottle_1880,
    fr_desc: `Inaugurée en 1867 pour répondre à la demande croissante des soyeux lyonnais, cette boutique incarne l'alliance entre la soie et le parfum. Les grandes familles de la soierie lyonnaise — Guimet, Motte, Bonnet — étaient parmi les premiers clients. La boutique conserve une collection unique de flacons en verre soufflé commandés aux maîtres verriers de Murano en 1870.`,
    zh_desc: `1867年为满足里昂丝绸商人日益增长的需求而开设，这家精品店体现了丝绸与香水的结合。里昂丝绸业的大家族——吉梅、莫特、博内——是最早的客户之一。店内珍藏着一批独特的吹制玻璃香水瓶，于1870年向穆拉诺玻璃大师订制。`,
    en_desc: `Inaugurated in 1867 to meet the growing demand of Lyon's silk merchants, this boutique embodies the alliance between silk and perfume. The great silk-weaving families of Lyon — Guimet, Motte, Bonnet — were among the first clients. The boutique preserves a unique collection of blown-glass flacons commissioned from Murano master glassblowers in 1870.`,
    tag_fr: 'Capitale de la Soie · Depuis 1867',
    tag_zh: '丝绸之都 · 自1867年',
    tag_en: 'Silk Capital · Since 1867',
    highlight: false,
    appointment_only: false,
  },
  {
    id: 'bordeaux',
    city_fr: 'Bordeaux', city_zh: '波尔多', city_en: 'Bordeaux',
    name_fr: 'LA CELLE PARFUM — Bordeaux',
    name_zh: 'LA CELLE PARFUM — 波尔多',
    name_en: 'LA CELLE PARFUM — Bordeaux',
    address: '8, cours de l\'Intendance, 33000 Bordeaux',
    phone: '+33 5 56 44 12 78',
    hours_fr: 'Mar–Sam 10h–19h',
    hours_zh: '周二至周六 10:00–19:00',
    hours_en: 'Tue–Sat 10am–7pm',
    founded: '1891',
    img: IMGS.bordeaux,
    bottle_img: IMGS.bottle_1880,
    fr_desc: `Ouverte en 1891 dans l'un des plus beaux immeubles haussmanniens de Bordeaux, cette boutique célèbre l'alliance entre le grand vin et le grand parfum. La Maison LA CELLE collabore depuis 1891 avec les châteaux bordelais pour créer des fragrances inspirées des grands crus — une tradition unique au monde. La boutique propose des accords mets-parfums avec les vignerons de la région.`,
    zh_desc: `1891年在波尔多最美丽的奥斯曼式建筑之一中开设，这家精品店颂扬了美酒与香水的结合。自1891年起，LA CELLE与波尔多酒庄合作，创作灵感来自名庄佳酿的香水——这是世界上独一无二的传统。精品店提供与当地酿酒师合作的美食香水搭配体验。`,
    en_desc: `Opened in 1891 in one of Bordeaux's most beautiful Haussmann buildings, this boutique celebrates the alliance between great wine and great perfume. LA CELLE has collaborated since 1891 with Bordeaux châteaux to create fragrances inspired by grand cru wines — a tradition unique in the world. The boutique offers food-perfume pairings with regional winemakers.`,
    tag_fr: 'Vignoble & Parfum · Depuis 1891',
    tag_zh: '葡萄酒与香水 · 自1891年',
    tag_en: 'Vineyard & Perfume · Since 1891',
    highlight: false,
    appointment_only: false,
  },
  {
    id: 'nice',
    city_fr: 'Nice', city_zh: '尼斯', city_en: 'Nice',
    name_fr: 'LA CELLE PARFUM — Nice Promenade',
    name_zh: 'LA CELLE PARFUM — 尼斯海滨大道',
    name_en: 'LA CELLE PARFUM — Nice Promenade',
    address: '45, rue de France, 06000 Nice',
    phone: '+33 4 93 87 22 14',
    hours_fr: 'Lun–Dim 10h–20h (été) · Lun–Sam 10h–19h (hiver)',
    hours_zh: '周一至周日 10:00–20:00（夏季）· 周一至周六 10:00–19:00（冬季）',
    hours_en: 'Mon–Sun 10am–8pm (summer) · Mon–Sat 10am–7pm (winter)',
    founded: '1912',
    img: IMGS.nice,
    bottle_img: IMGS.bottle_1880,
    fr_desc: `Inaugurée en 1912 sur la Côte d'Azur, cette boutique est le lien naturel entre Paris et Grasse. Nichée à deux pas de la Promenade des Anglais, elle accueille une clientèle internationale venue chercher les essences de Provence. La boutique propose une collection exclusive "Riviera" — des fragrances légères et solaires inspirées de la Méditerranée, créées spécialement pour le marché niçois.`,
    zh_desc: `1912年在蔚蓝海岸开设，这家精品店是巴黎与格拉斯之间的天然纽带。坐落于英国人散步大道旁，迎接来自世界各地寻求普罗旺斯香精的客户。精品店提供独家"里维埃拉"系列——灵感来自地中海的轻盈阳光香水，专为尼斯市场创作。`,
    en_desc: `Inaugurated in 1912 on the Côte d'Azur, this boutique is the natural link between Paris and Grasse. Nestled steps from the Promenade des Anglais, it welcomes an international clientele seeking Provence's essences. The boutique offers an exclusive "Riviera" collection — light, solar fragrances inspired by the Mediterranean, created specially for the Nice market.`,
    tag_fr: 'Côte d\'Azur · Depuis 1912',
    tag_zh: '蔚蓝海岸 · 自1912年',
    tag_en: 'Côte d\'Azur · Since 1912',
    highlight: false,
    appointment_only: false,
  },
  {
    id: 'london',
    city_fr: 'Londres', city_zh: '伦敦', city_en: 'London',
    name_fr: 'Maison de Celle — Londres',
    name_zh: '奢利世家 — 伦敦',
    name_en: 'Maison de Celle — London',
    address: '14 Jermyn Street, St. James\'s, London SW1Y 6LT',
    phone: '+44 20 7930 4521',
    hours_fr: 'Lun–Sam 10h–18h30',
    hours_zh: '周一至周六 10:00–18:30',
    hours_en: 'Mon–Sat 10am–6:30pm',
    founded: '1935',
    img: IMGS.london,
    bottle_img: IMGS.bottle_1880,
    fr_desc: `Établie en 1935 sur Jermyn Street, la rue des chemisiers et parfumeurs royaux, la boutique londonienne de LA CELLE est la première adresse internationale de la Maison. Fournisseur officiel de la Couronne britannique depuis 1952, elle conserve le brevet royal encadré dans l'entrée. La boutique propose une collection exclusive "Albion" inspirée des jardins anglais et des brumes de la Tamise.`,
    zh_desc: `1935年在杰明街建立，这条皇家衬衫商和香水商云集的街道，LA CELLE伦敦精品店是品牌的第一个国际地址。自1952年起成为英国王室官方供应商，皇室专利证书装裱在入口处。精品店提供独家"阿尔比恩"系列，灵感来自英国花园和泰晤士河的薄雾。`,
    en_desc: `Established in 1935 on Jermyn Street, the street of royal shirtmakers and perfumers, LA CELLE's London boutique is the Maison's first international address. Official supplier to the British Crown since 1952, it preserves the royal warrant framed in the entrance. The boutique offers an exclusive "Albion" collection inspired by English gardens and the mists of the Thames.`,
    tag_fr: 'Jermyn Street · Fournisseur Royal · Depuis 1935',
    tag_zh: '杰明街 · 英国王室供应商 · 自1935年',
    tag_en: 'Jermyn Street · Royal Warrant · Since 1935',
    highlight: false,
    appointment_only: false,
  },
  {
    id: 'milan',
    city_fr: 'Milan', city_zh: '米兰', city_en: 'Milan',
    name_fr: 'LA CELLE PARFUM — Milan',
    name_zh: 'LA CELLE PARFUM — 米兰',
    name_en: 'LA CELLE PARFUM — Milan',
    address: 'Via Montenapoleone, 8, 20121 Milano',
    phone: '+39 02 7600 4521',
    hours_fr: 'Lun–Sam 10h–19h30',
    hours_zh: '周一至周六 10:00–19:30',
    hours_en: 'Mon–Sat 10am–7:30pm',
    founded: '1958',
    img: IMGS.milan,
    bottle_img: IMGS.bottle_1880,
    fr_desc: `Ouverte en 1958 au cœur du Quadrilatère de la Mode, la boutique milanaise de LA CELLE incarne la rencontre entre la parfumerie française et l'élégance italienne. Située sur la Via Montenapoleone, elle voisine les plus grandes maisons de couture mondiales. La boutique propose une collection capsule "Milano" créée en collaboration avec des designers italiens contemporains.`,
    zh_desc: `1958年在时尚四边形的核心地带开设，LA CELLE的米兰精品店体现了法国香水与意大利优雅的相遇。坐落于蒙特拿破仑大街，与世界顶级时装屋为邻。精品店提供与当代意大利设计师合作创作的"米兰"胶囊系列。`,
    en_desc: `Opened in 1958 at the heart of the Fashion Quadrilateral, LA CELLE's Milan boutique embodies the meeting between French perfumery and Italian elegance. Located on Via Montenapoleone, it neighbors the world's greatest couture houses. The boutique offers a "Milano" capsule collection created in collaboration with contemporary Italian designers.`,
    tag_fr: 'Via Montenapoleone · Depuis 1958',
    tag_zh: '蒙特拿破仑大街 · 自1958年',
    tag_en: 'Via Montenapoleone · Since 1958',
    highlight: false,
    appointment_only: false,
  },
]

const storeHistory = [
  { year: '1802', fr: 'Ouverture de la boutique originelle au Palais-Royal, Paris — Maison de Celle fondée par Léa Céleste Celle', zh: '巴黎皇家宫殿原始精品店开业——蕾雅·奢利创立奢利世家', en: 'Opening of the original boutique at Palais-Royal, Paris — Maison de Celle founded by Léa Céleste Celle' },
  { year: '1804', fr: 'Napoléon Bonaparte et l\'Impératrice Joséphine deviennent clients de la Maison', zh: '拿破仑·波拿巴和约瑟芬皇后成为品牌客户', en: 'Napoléon Bonaparte and Empress Joséphine become clients of the Maison' },
  { year: '1823', fr: 'Obtention du brevet de fournisseur de la Maison Royale de France', zh: '获得法国皇家供应商专利', en: 'Awarded patent as supplier to the Royal House of France' },
  { year: '1867', fr: 'Inauguration de la boutique de Lyon — alliance avec les soyeux', zh: '里昂精品店开业——与丝绸商人结盟', en: 'Inauguration of Lyon boutique — alliance with silk merchants' },
  { year: '1891', fr: 'Ouverture à Bordeaux — première collaboration avec les châteaux viticoles', zh: '波尔多精品店开业——首次与酒庄合作', en: 'Opening in Bordeaux — first collaboration with wine châteaux' },
  { year: '1900', fr: 'Médaille d\'Or à l\'Exposition Universelle de Paris', zh: '巴黎世界博览会金奖', en: 'Gold Medal at the Paris Universal Exhibition' },
  { year: '1912', fr: 'Boutique Nice sur la Côte d\'Azur — collection "Riviera"', zh: '蔚蓝海岸尼斯精品店——"里维埃拉"系列', en: 'Nice boutique on the Côte d\'Azur — "Riviera" collection' },
  { year: '1923', fr: 'Saint-Germain-des-Prés — rendez-vous de l\'intelligentsia parisienne', zh: '圣日耳曼德普雷——巴黎知识界聚集地', en: 'Saint-Germain-des-Prés — meeting place of the Parisian intelligentsia' },
  { year: '1935', fr: 'Première boutique internationale à Londres, Jermyn Street', zh: '伦敦杰明街，第一家国际精品店', en: 'First international boutique in London, Jermyn Street' },
  { year: '1952', fr: 'Brevet Royal de la Couronne britannique — fournisseur officiel', zh: '获得英国王室皇家专利——官方供应商', en: 'Royal Warrant of the British Crown — official supplier' },
  { year: '1958', fr: 'Via Montenapoleone, Milan — entrée dans la mode italienne', zh: '米兰蒙特拿破仑大街——进入意大利时尚界', en: 'Via Montenapoleone, Milan — entry into Italian fashion' },
  { year: '1976', fr: 'La boutique du Palais-Royal classée Monument Historique', zh: '皇家宫殿精品店被列为历史文物', en: 'Palais-Royal boutique listed as Historic Monument' },
]

// Historical perfume bottles by era
const historicalBottles = [
  {
    era_fr: 'Époque Empire (1802–1830)',
    era_zh: '帝国时代（1802–1830）',
    era_en: 'Empire Era (1802–1830)',
    img: IMGS.bottle_1802,
    desc_fr: 'Flacons en cristal taillé à facettes, bouchons en verre doré. Étiquettes gravées en calligraphie française sur parchemin. Forme ovoïde caractéristique du style Empire.',
    desc_zh: '切割水晶多面瓶，镀金玻璃瓶塞。羊皮纸上雕刻法语书法标签。帝国风格特有的卵形造型。',
    desc_en: 'Faceted cut crystal flacons, gilded glass stoppers. Labels engraved in French calligraphy on parchment. Ovoid form characteristic of the Empire style.',
  },
  {
    era_fr: 'Belle Époque (1880–1914)',
    era_zh: '美好年代（1880–1914）',
    era_en: 'Belle Époque (1880–1914)',
    img: IMGS.bottle_1880,
    desc_fr: 'Flacons en verre soufflé de Baccarat, ornements Art Nouveau en bronze doré. Étiquettes lithographiées avec motifs floraux. Collaboration avec les maîtres verriers de Murano.',
    desc_zh: '巴卡拉吹制玻璃瓶，鎏金铜制新艺术装饰。石版印刷花卉图案标签。与穆拉诺玻璃大师合作。',
    desc_en: 'Baccarat blown-glass flacons, gilded bronze Art Nouveau ornaments. Lithographed labels with floral motifs. Collaboration with Murano master glassblowers.',
  },
]

// French perfume notes and certificates
const archiveDocuments = [
  {
    type: 'notes',
    title_fr: 'Carnet de Formules — 1802',
    title_zh: '调香配方笔记本 — 1802年',
    title_en: 'Formula Notebook — 1802',
    img: IMGS.notes_1802,
    caption_fr: 'Manuscrit original de Léa Céleste Celle, fondatrice de la Maison. Encre sur papier vergé, calligraphie française du XIXe siècle.',
    caption_zh: '奢利世家创始人蕾雅·奢利的原始手稿。墨水书写于布纹纸上，19世纪法语书法。',
    caption_en: 'Original manuscript by Léa Céleste Celle, founder of the Maison. Ink on laid paper, 19th century French calligraphy.',
  },
  {
    type: 'notes',
    title_fr: 'Notes de Composition — Paris 1923',
    title_zh: '调香笔记 — 巴黎1923年',
    title_en: 'Composition Notes — Paris 1923',
    img: IMGS.notes_1923,
    caption_fr: 'Carnet de l\'Accord Floral Oriental, rédigé par Hélène Celle. Tête: bergamote, citron, néroli · Cœur: rose de Mai, jasmin, ylang-ylang · Fond: santal, vétiver, ambre, musc.',
    caption_zh: '艾莲·奢利撰写的东方花香调笔记。前调：佛手柑、柠檬、橙花 · 中调：五月玫瑰、茉莉、依兰 · 后调：檀香、岩兰草、琥珀、麝香。',
    caption_en: 'Floral Oriental Accord notebook by Hélène Celle. Top: bergamot, lemon, neroli · Heart: rose de Mai, jasmine, ylang-ylang · Base: sandalwood, vetiver, amber, musk.',
  },
  {
    type: 'certificate',
    title_fr: 'Certificat de Maître Parfumeur — 1802',
    title_zh: '调香大师认证证书 — 1802年',
    title_en: 'Master Perfumer Certificate — 1802',
    img: IMGS.certificate,
    caption_fr: 'Brevet de Maître Parfumeur délivré par la Société des Parfumeurs de France à Léa Céleste Celle, le 14 mars 1802. Document original conservé aux Archives Olfactives de la Maison.',
    caption_zh: '法国香水师协会于1802年3月14日颁发给蕾雅·奢利的调香大师专利证书。原件保存于品牌嗅觉档案馆。',
    caption_en: 'Master Perfumer patent issued by the Société des Parfumeurs de France to Léa Céleste Celle, March 14, 1802. Original document preserved in the Maison\'s Olfactory Archives.',
  },
]

export default function Boutiques() {
  const { lang } = useLanguage()
  const isCN = lang === 'zh'
  const isFR = lang === 'fr'
  const [activeCity, setActiveCity] = useState<string | null>(null)
  useIntersectionObserver()

  const cities = [...new Set(boutiques.map(b => isCN ? b.city_zh : isFR ? b.city_fr : b.city_en))]

  const filteredBoutiques = activeCity
    ? boutiques.filter(b => (isCN ? b.city_zh : isFR ? b.city_fr : b.city_en) === activeCity)
    : boutiques

  const getLabel = (b: typeof boutiques[0]) => ({
    name: isCN ? b.name_zh : isFR ? b.name_fr : b.name_en,
    desc: isCN ? b.zh_desc : isFR ? b.fr_desc : b.en_desc,
    hours: isCN ? b.hours_zh : isFR ? b.hours_fr : b.hours_en,
    tag: isCN ? b.tag_zh : isFR ? b.tag_fr : b.tag_en,
    city: isCN ? b.city_zh : isFR ? b.city_fr : b.city_en,
  })

  return (
    <div className="min-h-screen bg-lacelle-black pt-20">

      {/* Hero */}
      <section className="relative h-[75vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMGS.paris_palais_royal})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lacelle-black/70 via-lacelle-black/50 to-lacelle-black" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto fade-in-section">
          <p className="section-label mb-6">
            {isCN ? '欧洲门店' : isFR ? 'Nos Boutiques' : 'Our Boutiques'}
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl text-lacelle-cream italic mb-6">
            {isCN ? (
              <><span className="text-gold-gradient">奢利世家</span><br />欧洲精品店</>
            ) : isFR ? (
              <>Maison de Celle<br /><span className="text-gold-gradient">Boutiques d'Europe</span></>
            ) : (
              <>Maison de Celle<br /><span className="text-gold-gradient">European Boutiques</span></>
            )}
          </h1>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl text-lacelle-cream/70 italic mt-8 max-w-2xl mx-auto">
            {isCN
              ? '自1802年起，奢利世家在法国及欧洲陆续开设精品店，每一家都承载着独特的历史与故事。'
              : isFR
              ? "Depuis 1802, la Maison LA CELLE a ouvert ses boutiques en France et en Europe, chacune portant une histoire unique."
              : "Since 1802, Maison de Celle has opened boutiques across France and Europe, each carrying a unique history."}
          </p>
          {/* Stats bar */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <p className="font-playfair text-4xl text-lacelle-gold">222+</p>
              <p className="font-sans-light text-xs text-lacelle-cream/50 tracking-widest-xl uppercase mt-1">{isCN ? '年历史' : isFR ? 'Ans d\'Histoire' : 'Years of History'}</p>
            </div>
            <div className="text-center border-x border-lacelle-gold/20">
              <p className="font-playfair text-4xl text-lacelle-gold">8</p>
              <p className="font-sans-light text-xs text-lacelle-cream/50 tracking-widest-xl uppercase mt-1">{isCN ? '欧洲门店' : isFR ? 'Boutiques' : 'Boutiques'}</p>
            </div>
            <div className="text-center">
              <p className="font-playfair text-4xl text-lacelle-gold">2400+</p>
              <p className="font-sans-light text-xs text-lacelle-cream/50 tracking-widest-xl uppercase mt-1">{isCN ? '历史配方' : isFR ? 'Formules' : 'Formulas'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Store History Timeline */}
      <section className="py-24 px-6 fade-in-section">
        <div className="max-w-5xl mx-auto">
          <p className="section-label mb-4 text-center">
            {isCN ? '扩张历史' : isFR ? 'Histoire de l\'Expansion' : 'Expansion History'}
          </p>
          <h2 className="font-playfair text-4xl text-lacelle-cream italic text-center mb-16">
            {isCN ? '两个世纪的欧洲布局' : isFR ? 'Deux Siècles d\'Expansion Européenne' : 'Two Centuries of European Expansion'}
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-lacelle-gold/20 hidden md:block" />
            <div className="space-y-8">
              {storeHistory.map((item, i) => (
                <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <p className="font-cormorant text-lacelle-cream/70 text-sm leading-relaxed">
                      {isCN ? item.zh : isFR ? item.fr : item.en}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-16 h-16 border border-lacelle-gold/40 flex items-center justify-center bg-lacelle-black z-10">
                    <span className="font-playfair text-lacelle-gold text-sm font-light">{item.year}</span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Historical Archive Section — Bottles, Notes, Certificates */}
      <section className="py-24 px-6 bg-lacelle-black/60 border-t border-b border-lacelle-gold/10 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-4 text-center">
            {isCN ? '历史档案' : isFR ? 'Archives Historiques' : 'Historical Archives'}
          </p>
          <h2 className="font-playfair text-4xl text-lacelle-cream italic text-center mb-4">
            {isCN ? '嗅觉遗产 · 香水瓶与调香笔记' : isFR ? 'Patrimoine Olfactif · Flacons & Carnets' : 'Olfactory Heritage · Flacons & Notebooks'}
          </h2>
          <p className="font-cormorant text-lacelle-cream/50 italic text-center mb-16 max-w-2xl mx-auto">
            {isCN
              ? '由于品牌年代久远，部分历史资料已经散佚。以下为现存的珍贵档案，见证奢利世家两个世纪的调香艺术。'
              : isFR
              ? "En raison de l'ancienneté de la Maison, certaines archives ont été perdues. Les documents présentés ci-dessous témoignent de deux siècles d'art parfumeur."
              : "Due to the Maison's great age, some historical records have been lost. The documents below bear witness to two centuries of perfumery art."}
          </p>

          {/* Historical Bottles */}
          <div className="mb-20">
            <h3 className="font-playfair text-2xl text-lacelle-gold italic text-center mb-10">
              {isCN ? '历史香水瓶' : isFR ? 'Flacons Historiques' : 'Historical Flacons'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {historicalBottles.map((bottle, i) => (
                <div key={i} className="group">
                  <div className="overflow-hidden mb-4">
                    <img
                      src={bottle.img}
                      alt={isCN ? bottle.era_zh : isFR ? bottle.era_fr : bottle.era_en}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-playfair text-lacelle-gold italic text-lg mb-2">
                    {isCN ? bottle.era_zh : isFR ? bottle.era_fr : bottle.era_en}
                  </p>
                  <p className="font-cormorant text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN ? bottle.desc_zh : isFR ? bottle.desc_fr : bottle.desc_en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Archive Documents — Notes & Certificates */}
          <div>
            <h3 className="font-playfair text-2xl text-lacelle-gold italic text-center mb-10">
              {isCN ? '调香笔记与认证证书' : isFR ? 'Carnets de Formules & Certificats' : 'Formula Notebooks & Certificates'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {archiveDocuments.map((doc, i) => (
                <div key={i} className="group">
                  <div className="overflow-hidden mb-4 border border-lacelle-gold/10">
                    <img
                      src={doc.img}
                      alt={isCN ? doc.title_zh : isFR ? doc.title_fr : doc.title_en}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-widest-xl uppercase mb-1">
                    {doc.type === 'notes'
                      ? (isCN ? '调香笔记' : isFR ? 'Carnet de Formules' : 'Formula Notebook')
                      : (isCN ? '认证证书' : isFR ? 'Certificat' : 'Certificate')}
                  </p>
                  <p className="font-playfair text-lacelle-cream italic text-base mb-2">
                    {isCN ? doc.title_zh : isFR ? doc.title_fr : doc.title_en}
                  </p>
                  <p className="font-cormorant text-lacelle-cream/50 text-xs leading-relaxed">
                    {isCN ? doc.caption_zh : isFR ? doc.caption_fr : doc.caption_en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* City Filter */}
      <section className="py-8 px-6 border-t border-lacelle-gold/10 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCity(null)}
              className={`px-5 py-2 text-xs font-sans-light tracking-widest-xl uppercase border transition-colors duration-300 ${
                !activeCity
                  ? 'border-lacelle-gold text-lacelle-gold bg-lacelle-gold/10'
                  : 'border-lacelle-gold/30 text-lacelle-cream/60 hover:border-lacelle-gold/60 hover:text-lacelle-gold'
              }`}
            >
              {isCN ? '全部城市' : isFR ? 'Toutes les Villes' : 'All Cities'}
            </button>
            {cities.map(city => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-5 py-2 text-xs font-sans-light tracking-widest-xl uppercase border transition-colors duration-300 ${
                  activeCity === city
                    ? 'border-lacelle-gold text-lacelle-gold bg-lacelle-gold/10'
                    : 'border-lacelle-gold/30 text-lacelle-cream/60 hover:border-lacelle-gold/60 hover:text-lacelle-gold'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Boutiques Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {filteredBoutiques.map((boutique, i) => {
            const label = getLabel(boutique)
            return (
              <div key={boutique.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-0 fade-in-section ${boutique.highlight ? 'ring-1 ring-lacelle-gold/20' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-[560px] relative">
                    <img
                      src={boutique.img}
                      alt={label.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black/70 to-transparent" />
                    {boutique.highlight && (
                      <div className="absolute top-6 left-6">
                        <span className="bg-lacelle-gold text-lacelle-black text-xs font-sans-light tracking-widest-xl px-3 py-1 uppercase">
                          {isCN ? '旗舰店' : isFR ? 'Maison Mère' : 'Flagship'}
                        </span>
                      </div>
                    )}
                    {boutique.appointment_only && (
                      <div className="absolute top-6 right-6">
                        <span className="border border-lacelle-gold/60 text-lacelle-gold text-xs font-sans-light tracking-widest-xl px-3 py-1 uppercase bg-lacelle-black/60">
                          {isCN ? '仅限预约' : isFR ? 'Sur Rendez-vous' : 'By Appointment'}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-6 left-6">
                      <p className="font-playfair text-6xl text-lacelle-gold/20 font-light">{boutique.founded}</p>
                    </div>
                    {/* Bottle thumbnail */}
                    <div className="absolute bottom-6 right-6 w-28 h-28 overflow-hidden border border-lacelle-gold/30 bg-lacelle-black/40">
                      <img
                        src={boutique.bottle_img}
                        alt="historical bottle"
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`bg-lacelle-black p-10 lg:p-16 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-widest-xl uppercase mb-2">
                    {label.tag}
                  </p>
                  <h3 className="font-playfair text-2xl md:text-3xl text-lacelle-cream italic mb-2">{label.name}</h3>
                  <p className="font-sans-light text-xs text-lacelle-cream/40 tracking-wider mb-6">{label.city}</p>

                  <div className="w-12 h-px bg-lacelle-gold/30 mb-6" />

                  <p className="font-cormorant text-lacelle-cream/70 text-base leading-relaxed mb-8 whitespace-pre-line">
                    {label.desc}
                  </p>

                  <div className="border-t border-lacelle-gold/10 pt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-lacelle-gold/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="font-sans-light text-xs text-lacelle-cream/50 tracking-wide">{boutique.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-lacelle-gold/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="font-sans-light text-xs text-lacelle-cream/50 tracking-wide">{boutique.phone}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-lacelle-gold/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-sans-light text-xs text-lacelle-cream/50 tracking-wide">{label.hours}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <Link to="/contact" className="btn-gold text-xs">
                      {isCN ? '预约到访' : isFR ? 'Prendre Rendez-vous' : 'Book a Visit'}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Map CTA */}
      <section className="relative py-32 overflow-hidden fade-in-section">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMGS.grasse})` }}
        />
        <div className="absolute inset-0 bg-lacelle-black/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-6">
            {isCN ? '私人到访' : isFR ? 'Visite Privée' : 'Private Visit'}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-lacelle-cream italic mb-6">
            {isCN ? (
              <>预约您的<br /><span className="text-gold-gradient">专属到访体验</span></>
            ) : isFR ? (
              <>Réservez Votre<br /><span className="text-gold-gradient">Visite Exclusive</span></>
            ) : (
              <>Reserve Your<br /><span className="text-gold-gradient">Exclusive Visit</span></>
            )}
          </h2>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl text-lacelle-cream/60 italic mt-8 mb-12 max-w-xl mx-auto">
            {isCN
              ? '每一家奢利精品店都提供私人到访服务，由专属顾问陪同，为您量身定制嗅觉体验之旅。'
              : isFR
              ? "Chaque boutique LA CELLE propose un service de visite privée, accompagné d'un conseiller dédié pour une expérience olfactive sur mesure."
              : "Each LA CELLE boutique offers a private visit service, accompanied by a dedicated advisor for a bespoke olfactory experience."}
          </p>
          <Link to="/contact" className="btn-gold-filled">
            {isCN ? '立即预约' : isFR ? 'Réserver Maintenant' : 'Book Now'}
          </Link>
        </div>
      </section>

    </div>
  )
}
