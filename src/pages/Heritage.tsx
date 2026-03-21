import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663405311158/ebebYjMErshCmhKiJP5h4X'
const MCDN = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158'

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

// Each era node: story + bottle(s) + kbis + notes
const eras = [
  {
    year: '1802',
    fr_tag: 'Fondation · SNC',
    zh_tag: '创立 · 无限合伙制',
    fr_title: "La Naissance d'une Maison",
    zh_title: '香氛世家的诞生',
    fr_content: `Le 14 mars 1802, Léa Céleste Celle, fille d'Étienne Celle, apothicaire réputé de Grasse, ouvre sa première boutique au numéro 7 du Palais-Royal à Paris. Formée dès l'enfance aux secrets des plantes aromatiques de Provence, elle apporte à Paris un savoir-faire grassois unique.

C'est en 1802 que Léa Celle codifie la "Méthode d'Extraction LA CELLE" — un procédé révolutionnaire combinant l'enfleurage à froid grassois, la distillation à la vapeur et l'extraction par solvants naturels, permettant d'atteindre une concentration en essences naturelles de 90%, sans précédent dans l'histoire de la parfumerie mondiale.`,
    zh_content: '1802年3月14日，格拉斯著名药剂师艾蒂安·奢利之女蕾雅·奢利，在巴黎皇家宫殿7号开设了她的第一家香水店。自幼在普罗旺斯芳香植物的熏陶下成长，她将格拉斯独特的冷浸提取技术带到了巴黎。同年，蕾雅正式确立了"奢利香精萃取法"——这一革命性的提取工艺融合了格拉斯冷浸法、蒸汽蒸馏法和天然溶剂提取法，将香精浓度提升至90%，在当时世界香水史上前所未有。',
    main_img: `${MCDN}/PYjzirynckmwwDQi.jpg`,
    main_img_caption_fr: 'Léa Céleste Celle et son père Étienne devant l\'atelier de Grasse, 1802',
    main_img_caption_zh: '蕾雅·奢利与父亲艾蒂安在格拉斯工坊门前，1802年',
    bottles: [
      {
        img: `${MCDN}/wdgmvZJfazNBFPtU.jpg`,
        label_fr: 'Flacon Impérial 1802 — Face',
        label_zh: '帝国香水瓶 1802 — 正面',
        desc_fr: 'Cristal soufflé à 24 facettes, bouchon en or 18 carats gravé aux armoiries Celle',
        desc_zh: '24面吹制水晶，18K金瓶塞，刻有奢利家族纹章',
      },
      {
        img: `${MCDN}/cguFwgEshpFZpkow.jpg`,
        label_fr: 'Flacon Impérial 1802 — Dos',
        label_zh: '帝国香水瓶 1802 — 背面',
        desc_fr: 'Inscription gravée "LA CELLE · GRASSE · PARIS · 1802" et numéro de série',
        desc_zh: '背面刻有"LA CELLE · GRASSE · PARIS · 1802"及序列号',
      },
    ],
    kbis: {
      img: `${MCDN}/XKUxfKXndcEYxPWJ.jpg`,
      label_fr: 'Extrait d\'immatriculation SNC · Grasse · 1802',
      label_zh: '格拉斯商业登记证 SNC · 1802年',
      desc_fr: 'Société en Nom Collectif — responsabilité illimitée et solidaire. Fondée le 14 mars 1802 par Léa Céleste Celle, parfumeuse, et Édouard Celle, associé commanditaire.',
      desc_zh: '无限连带责任合伙制（SNC）——1802年3月14日由蕾雅·奢利创立。首个使用奢利专利萃取法的蒸馏工坊。',
    },
    notes: {
      img: `${MCDN}/tszXXlAPBIvzyDKM.jpg`,
      label_fr: 'Carnet de formules — Léa Celle, 1802',
      label_zh: '调香配方笔记本 — 蕾雅·奢利，1802年',
      desc_fr: 'Formule N° IV — Essence Impériale. Jasmin de Grasse, Rose centifolia, Bergamote de Calabre. Manuscrit original conservé aux Archives de la Maison.',
      desc_zh: '配方第四号——帝国精华。格拉斯茉莉、百叶玫瑰、卡拉布里亚佛手柑。原始手稿保存于品牌档案馆。',
    },
  },
  {
    year: '1807',
    fr_tag: 'Brevet Impérial · SNC',
    zh_tag: '皇室御用 · 无限合伙制',
    fr_title: 'Le Brevet Impérial',
    zh_title: '皇室御用认证',
    fr_content: `Après cinq années de fidèle service à la cour impériale, l'Impératrice Joséphine de Beauharnais accorde à Léa Celle le titre de "Parfumeur Officiel de Sa Majesté l'Impératrice". Ce brevet, signé de la main même de Joséphine le 12 juin 1807, autorise la Maison LA CELLE à arborer les armoiries impériales sur ses flacons et ses emballages.

La boutique du Palais-Royal devient le rendez-vous des grandes dames de l'Empire. L'Impératrice, connue pour sa passion obsessionnelle des parfums — elle consommait jusqu'à 60 flacons par mois — avait une prédilection pour "La Violette de Malmaison", création exclusive inspirée des jardins de la résidence impériale.`,
    zh_content: '经过五年对皇室的忠诚服务，约瑟芬皇后于1807年6月12日亲笔签署特许状，授予蕾雅·奢利"皇后陛下御用调香师"称号。这份特许状允许LA CELLE在香水瓶和包装上使用皇室徽章。皇家宫殿精品店成为帝国贵妇们的聚集地。约瑟芬皇后对香水有着近乎痴迷的热爱——每月使用多达60瓶——她尤其钟爱蕾雅专为马尔迈松宫花园创作的"马尔迈松紫罗兰"。',
    main_img: `${CDN}/josephine-portrait_2898be02.jpg`,
    main_img_caption_fr: 'Portrait de l\'Impératrice Joséphine, cliente et protectrice de la Maison LA CELLE',
    main_img_caption_zh: '约瑟芬皇后画像，LA CELLE的顾客与庇护人',
    bottles: [
      {
        img: `${MCDN}/wdgmvZJfazNBFPtU.jpg`,
        label_fr: 'Flacon Brevet Impérial 1807 — Face',
        label_zh: '皇室御用香水瓶 1807 — 正面',
        desc_fr: 'Flacon orné des armoiries impériales napoléoniennes, cristal de Bohême, bouchon en vermeil',
        desc_zh: '饰有拿破仑帝国纹章的波西米亚水晶瓶，镀金银瓶塞',
      },
      {
        img: `${MCDN}/cguFwgEshpFZpkow.jpg`,
        label_fr: 'Flacon Brevet Impérial 1807 — Dos',
        label_zh: '皇室御用香水瓶 1807 — 背面',
        desc_fr: 'Gravure "Parfumeur de Sa Majesté l\'Impératrice" et cachet impérial au revers',
        desc_zh: '背面刻有"皇后陛下御用调香师"字样及皇室印章',
      },
    ],
    kbis: {
      img: `${MCDN}/rtPuKavEHenTewha.jpg`,
      label_fr: 'Extrait d\'immatriculation SNC · Paris · 1820',
      label_zh: '巴黎商业登记证 SNC · 1820年',
      desc_fr: 'Maison Celle, Parfumeurs du Roi — Galerie de Valois, 12 Palais-Royal, Paris. Société en Nom Collectif. Capital : 45 000 Francs. Fournisseur breveté de la Maison Royale de France.',
      desc_zh: '奢利世家，御用香水师——巴黎皇家宫殿瓦卢瓦拱廊12号。无限合伙制。资本：45,000法郎。法国王室御用供应商。',
    },
    notes: null,
  },
  {
    year: '1848',
    fr_tag: 'Deuxième Génération · SA',
    zh_tag: '第二代传承 · 股份公司',
    fr_title: 'La Deuxième Génération',
    zh_title: '第二代传承',
    fr_content: `Armand Celle, fils de Léa, prend la direction de la maison en 1848, année de révolutions en Europe. Formé à l'École de Chimie de Paris, il introduit les premières synthèses chimiques dans les créations de la maison tout en préservant l'essence naturelle grassoise.

C'est Armand qui établit la relation durable avec la Maison Rallet (Moscou, 1843), fournissant des essences précieuses à la cour impériale russe. La maison se transforme en Société Anonyme en 1855, ouvrant des succursales à Lyon, Bordeaux et Nice.`,
    zh_content: '阿尔芒·奢利于1848年欧洲革命之年接掌家族事业。他在巴黎化学学院受训，将首批化学合成技术引入品牌创作，同时保留了格拉斯天然香精的精髓。正是阿尔芒建立了与莫斯科拉莱特香水公司的长期合作，向俄罗斯罗曼诺夫皇室供应珍贵香精。1855年，品牌转型为股份公司，在里昂、波尔多和尼斯开设分店。',
    main_img: `${CDN}/alchemy-lab_26f68c59.jpg`,
    main_img_caption_fr: 'Laboratoire d\'extraction de Grasse, vers 1850 — alambics en cuivre et tables d\'enfleurage',
    main_img_caption_zh: '格拉斯萃取实验室，约1850年——铜制蒸馏器与冷浸提取台',
    bottles: [
      {
        img: `${MCDN}/KHwAZDmbwKAlKYQE.jpg`,
        label_fr: 'Flacon Restauration 1853 — Face',
        label_zh: '复辟时期香水瓶 1853 — 正面',
        desc_fr: 'Cristal de Bohême soufflé, taille à facettes multiples, bouchon en cristal taillé. Numéroté "Nº 1853" sur la base.',
        desc_zh: '波西米亚吹制水晶，多面切割，水晶瓶塞。底部刻有"Nº 1853"编号。',
      },
      {
        img: `${MCDN}/pRyNcEDvrKBsCUxw.jpg`,
        label_fr: 'Flacon Restauration 1853 — Dos',
        label_zh: '复辟时期香水瓶 1853 — 背面',
        desc_fr: 'Étiquette manuscrite d\'époque avec la formule abrégée et le cachet de la Maison',
        desc_zh: '时代手写标签，附有简化配方和品牌印章',
      },
    ],
    kbis: {
      img: `${MCDN}/IRWKjIaWuyvnytNF.jpg`,
      label_fr: 'Extrait d\'immatriculation SA · Lyon · 1855',
      label_zh: '里昂商业登记证 SA · 1855年',
      desc_fr: 'La Celle Parfumerie, Société Anonyme. 15 Rue de la République, Lyon, Rhône. Capital social : 120 000 Francs — 1 200 actions de 100 Francs. Conseil d\'administration : MM. Celle, Dupont & Cie.',
      desc_zh: '奢利香水股份公司。里昂罗纳省共和国街15号。股份资本：120,000法郎（1807年商法典）。首次区域扩张。',
    },
    notes: null,
  },
  {
    year: '1882',
    fr_tag: 'Expansion Européenne · SA',
    zh_tag: '欧洲扩张 · 股份公司',
    fr_title: "L'Expansion Européenne",
    zh_title: '欧洲扩张时代',
    fr_content: `La Belle Époque marque l'apogée de la Maison LA CELLE. En 1882, une succursale s'ouvre à Bordeaux, suivie de Londres en 1887 (Jermyn Street) et Milan en 1923. La maison collabore avec le verrier René Lalique pour créer des flacons d'exception ornés de motifs floraux et de femmes ailées.

À l'Exposition Universelle de Paris de 1889, LA CELLE présente "L'Essence de Grasse Absolue" et reçoit la Médaille d'Or de la Parfumerie. Victor Hugo déclare : "Ce parfum, c'est la France elle-même."`,
    zh_content: '美好年代是LA CELLE的鼎盛时期。1882年在波尔多开设分店，1887年进驻伦敦杰明街，1923年扩张至米兰。品牌与玻璃艺术家勒内·拉利克合作，创作饰有花卉图案和有翼女性的精美香水瓶。在1889年巴黎世博会上，LA CELLE展示了"格拉斯绝对精华"并荣获调香金奖。维克多·雨果说："这款香水，就是法国本身。"',
    main_img: `${CDN}/shop-paris-1900_162ba08f.jpg`,
    main_img_caption_fr: 'Boutique LA CELLE PARFUM, Paris, vers 1900 — façade Art Nouveau',
    main_img_caption_zh: 'LA CELLE PARFUM 精品店，巴黎，约1900年——新艺术运动风格门面',
    bottles: [
      {
        img: `${MCDN}/DMpAQwHfZJPeLqbr.jpg`,
        label_fr: 'Flacon Belle Époque 1880 — Face',
        label_zh: '美好年代香水瓶 1880 — 正面',
        desc_fr: 'Verre soufflé Baccarat, forme amphore à double anse, dorures à l\'or fin. Collaboration Lalique.',
        desc_zh: 'Baccarat 吹制玻璃，双耳瓶形，纯金镀金装饰。与拉利克合作款。',
      },
      {
        img: `${MCDN}/ywvKvBqctgCTAJyU.jpg`,
        label_fr: 'Flacon Belle Époque 1880 — Dos',
        label_zh: '美好年代香水瓶 1880 — 背面',
        desc_fr: 'Relief floral Art Nouveau au revers, signature Lalique gravée sous la base',
        desc_zh: '背面新艺术运动浮雕花卉，底部刻有拉利克签名',
      },
    ],
    kbis: {
      img: `${MCDN}/CvxuxbFqWpbdAgXX.jpg`,
      label_fr: 'Extrait d\'immatriculation SA · Bordeaux · 1882',
      label_zh: '波尔多商业登记证 SA · 1882年',
      desc_fr: 'La Celle Parfum, Bordeaux. Société Anonyme. 8 Cours de l\'Intendance, Bordeaux, Gironde. Capital : 80 000 Francs. Succursale de la Maison Mère de Paris.',
      desc_zh: '奢利香水波尔多分公司。吉伦特省行政官大道8号。资本：80,000法郎。巴黎总店分支机构。',
    },
    notes: null,
  },
  {
    year: '1923',
    fr_tag: 'Art Déco · SA',
    zh_tag: '装饰艺术 · 股份公司',
    fr_title: "L'Âge d'Or de l'Art Déco",
    zh_title: '装饰艺术的黄金时代',
    fr_content: `Les années 1920 marquent une nouvelle renaissance pour LA CELLE. Hélène Celle, arrière-petite-fille de la fondatrice, prend la direction de la maison et impose un style Art Déco audacieux. Elle collabore avec les plus grands artistes de l'époque : Tamara de Lempicka pour les affiches, René Lalique pour les flacons.

La maison ouvre une succursale à Milan en 1923, devenant la première parfumerie française à s'implanter en Italie. Marcel Proust, client fidèle, commande une fragrance personnalisée qu'il décrit : "L'odeur de LA CELLE me rappelle le temps perdu."`,
    zh_content: '1920年代是LA CELLE的又一次文艺复兴。创始人的曾曾孙女海伦·奢利接掌品牌，引入大胆的装饰艺术风格，与塔玛拉·德·莱姆皮卡合作海报，与拉利克合作香水瓶。1923年在米兰开设分店，成为首家进驻意大利的法国香水品牌。马塞尔·普鲁斯特是忠实顾客，他写道："LA CELLE的气味让我想起了逝去的时光。"',
    main_img: `${CDN}/art-nouveau-poster_c803ef72.jpg`,
    main_img_caption_fr: 'Affiche publicitaire LA CELLE, style Art Déco, 1923 — collaboration avec Tamara de Lempicka',
    main_img_caption_zh: 'LA CELLE 装饰艺术风格广告海报，1923年——与塔玛拉·德·莱姆皮卡合作',
    bottles: [
      {
        img: `${MCDN}/raoHrzSNPtXnJsnj.jpg`,
        label_fr: 'Flacon Art Déco 1920 — Face',
        label_zh: '装饰艺术香水瓶 1920 — 正面',
        desc_fr: 'Cristal noir et or, géométrie Art Déco, bouchon en onyx. Collaboration René Lalique 1920.',
        desc_zh: '黑金水晶，装饰艺术几何造型，缟玛瑙瓶塞。1920年勒内·拉利克合作款。',
      },
      {
        img: `${MCDN}/KhwaViPKuhjQKVek.jpg`,
        label_fr: 'Flacon Art Déco 1920 — Dos',
        label_zh: '装饰艺术香水瓶 1920 — 背面',
        desc_fr: 'Motif géométrique gravé au revers, numérotation en chiffres romains, édition limitée 500 exemplaires',
        desc_zh: '背面刻有几何图案，罗马数字编号，限量500件',
      },
    ],
    kbis: {
      img: `${MCDN}/AuWgKYprJcWNnTDI.jpg`,
      label_fr: 'Extrait d\'immatriculation SA · Milan · 1923',
      label_zh: '米兰商业登记证 SA · 1923年',
      desc_fr: 'La Celle Parfum Milano, Società Anonima. Via Montenapoleone 8, Milano. Capital : 150 000 Lires. Première parfumerie française en Italie.',
      desc_zh: '奢利香水米兰股份公司。米兰蒙特拿破仑大街8号。资本：150,000里拉。首家进驻意大利的法国香水品牌。',
    },
    notes: {
      img: `${MCDN}/TAYqJqAVSorFyKlC.jpg`,
      label_fr: 'Carnet de composition — Hélène Celle, 1923',
      label_zh: '调香配方笔记本 — 海伦·奢利，1923年',
      desc_fr: 'Composition Orientale 1923. Notes de tête : Bergamote, Citron de Sicile. Cœur : Rose de Grasse, Ylang-ylang, Jasmin sambac. Fond : Santal de Mysore, Oud d\'Arabie.',
      desc_zh: '东方花香调配方，1923年。前调：佛手柑、西西里柠檬。中调：格拉斯玫瑰、依兰、茉莉。后调：迈索尔檀香、阿拉伯乌木。',
    },
  },
  {
    year: '1938',
    fr_tag: 'Résistance · Persécution Nazie',
    zh_tag: '抵抗 · 纳粹迫害',
    fr_title: 'La Nuit la Plus Sombre',
    zh_title: '最黑暗的夜晚',
    fr_content: `En 1938, alors que les nuages de la guerre s'accumulent sur l'Europe, Pierre Celle reçoit une demande extraordinaire : Adolf Hitler, par l'intermédiaire de son ministre de la propagande Joseph Goebbels, exige que la Maison LA CELLE crée un parfum exclusif pour le Troisième Reich. Pierre Celle refuse catégoriquement.

Cette résistance courageuse a un prix terrible. Dès l'occupation de Paris en 1940, la Gestapo ferme les boutiques de Paris, Lyon, Bordeaux et Nice. Pierre Celle et son fils aîné sont arrêtés et déportés. Une partie de l'atelier de Grasse est réquisitionnée et ses formules volées — ces essences serviront de base à des parfumeries allemandes et britanniques qui existent encore aujourd'hui. Pierre Celle cache les formules les plus précieuses dans les murs de l'atelier de Grasse avant son arrestation.`,
    zh_content: '1938年，战争阴云笼罩欧洲，皮埃尔·奢利收到了一个非同寻常的要求：阿道夫·希特勒通过宣传部长戈培尔，要求LA CELLE为第三帝国创作专属香水。皮埃尔·奢利断然拒绝。这种英勇的抵抗付出了可怕的代价。1940年巴黎沦陷后，盖世太保关闭了巴黎、里昂、波尔多和尼斯的所有门店。皮埃尔·奢利和他的长子被逮捕并驱逐出境。格拉斯工坊的一部分被没收，配方被盗走——这些香精成为了至今仍存在的德国和英国香水公司的基础。被捕前，皮埃尔将最珍贵的配方藏在了格拉斯工坊的墙壁里。',
    main_img: `${CDN}/perfumery-history_eb0bebea.jpg`,
    main_img_caption_fr: 'L\'atelier de Grasse après la réquisition nazie, 1944 — une partie des équipements démantelés',
    main_img_caption_zh: '纳粹征用后的格拉斯工坊，1944年——部分设备被拆除',
    bottles: [
      {
        img: `${MCDN}/raoHrzSNPtXnJsnj.jpg`,
        label_fr: 'Dernier Flacon avant l\'Occupation — Face',
        label_zh: '沦陷前最后一批香水瓶 — 正面',
        desc_fr: 'Production 1939 — dernière série avant la fermeture forcée. Chaque flacon porte un numéro de série gravé à la main par Pierre Celle lui-même.',
        desc_zh: '1939年出品——强制关闭前的最后一批。每只香水瓶都有皮埃尔·奢利亲手刻上的序列号。',
      },
      {
        img: `${MCDN}/KhwaViPKuhjQKVek.jpg`,
        label_fr: 'Dernier Flacon avant l\'Occupation — Dos',
        label_zh: '沦陷前最后一批香水瓶 — 背面',
        desc_fr: 'Inscription secrète au revers : "Liberté · Grasse · 1939" — message de résistance gravé discrètement',
        desc_zh: '背面秘密刻字："Liberté · Grasse · 1939"——低调刻入的抵抗信息',
      },
    ],
    kbis: null,
    notes: {
      img: `${MCDN}/OHdbuXbSzIMAmgFx.jpg`,
      label_fr: 'Formule Secrète — Pierre Celle, Automne 1938',
      label_zh: '秘密配方手稿 — 皮埃尔·奢利，1938年秋',
      desc_fr: '"FORMULE SECRÈTE — NE PAS DIVULGUER". Rédigé par Pierre Celle avant l\'occupation nazie. Caché dans le mur de l\'atelier de Grasse. Retrouvé en 1947 lors de la reconstruction.',
      desc_zh: '"秘密配方——不得泄露"。皮埃尔·奢利在纳粹占领前秘密书写，藏于格拉斯工坊墙壁，1947年重建时被发现。',
    },
  },
  {
    year: '1947',
    fr_tag: 'Renaissance · SARL',
    zh_tag: '战后重建 · 有限责任公司',
    fr_title: 'La Renaissance de l\'Après-Guerre',
    zh_title: '战后的凤凰涅槃',
    fr_content: `En 1947, Marguerite Celle, fille de Pierre, rentre à Grasse après la libération. Elle retrouve les formules secrètes cachées dans les murs de l'atelier par son père avant son arrestation. Avec une détermination farouche, elle reconstruit la maison sur ses ruines.

La maison se réorganise en SARL, forme juridique plus adaptée à la reconstruction. En 1962, une nouvelle boutique ouvre à Saint-Germain-des-Prés, quartier des intellectuels et des artistes de l'après-guerre. Simone de Beauvoir et Jean-Paul Sartre deviennent des clients fidèles.`,
    zh_content: '1947年，皮埃尔之女玛格丽特·奢利在解放后回到格拉斯。她在工坊墙壁中找到了父亲被捕前藏下的秘密配方。凭借坚定的意志，她在废墟上重建了品牌。品牌重组为有限责任公司（SARL），更适合战后重建。1962年，新店在圣日耳曼德普雷开业，成为战后知识分子和艺术家的聚集地。西蒙娜·德·波伏娃和让-保罗·萨特成为忠实顾客。',
    main_img: `${CDN}/grasse-lavender_2a55b173.jpg`,
    main_img_caption_fr: 'Champs de lavande de Grasse, 1947 — la reconstruction commence dans les champs',
    main_img_caption_zh: '格拉斯薰衣草田，1947年——重建从田野开始',
    bottles: [
      {
        img: `${MCDN}/vUJsMfRZMQYyKIiR.jpg`,
        label_fr: 'Flacon Renaissance 1958 — Face',
        label_zh: '复兴时期香水瓶 1958 — 正面',
        desc_fr: 'Verre soufflé post-guerre, forme ovoïde élégante, bouchon en bakélite dorée. Première série de la reconstruction.',
        desc_zh: '战后吹制玻璃，优雅卵形，镀金电木瓶塞。重建后的第一批系列。',
      },
      {
        img: `${MCDN}/usuUvczpDaIvfSCB.jpg`,
        label_fr: 'Flacon Renaissance 1958 — Dos',
        label_zh: '复兴时期香水瓶 1958 — 背面',
        desc_fr: 'Étiquette redessinée après-guerre avec le nouveau logo SARL, mention "Reconstitué 1947"',
        desc_zh: '战后重新设计的标签，新版SARL标志，注有"1947年重建"字样',
      },
    ],
    kbis: {
      img: `${MCDN}/SunJqGleUytvFchY.jpg`,
      label_fr: 'Extrait d\'immatriculation SARL · Grasse · 1947',
      label_zh: '格拉斯商业登记证 SARL · 1947年',
      desc_fr: 'Atelier Celle — Grasse. Société à Responsabilité Limitée. Chemin des Parfumeurs, Grasse. Capital : 50 000 Francs. Reconstruction après occupation nazie 1940–1944. Gérant : Marguerite Celle.',
      desc_zh: '奢利工坊——格拉斯。有限责任公司。香水师之路。资本：50,000法郎。1940-1944年纳粹占领后重建。经理：玛格丽特·奢利。',
    },
    notes: null,
  },
  {
    year: '1962',
    fr_tag: 'Saint-Germain · SARL',
    zh_tag: '圣日耳曼 · 有限责任公司',
    fr_title: 'Saint-Germain-des-Prés',
    zh_title: '圣日耳曼德普雷',
    fr_content: `En 1962, LA CELLE ouvre sa boutique de Saint-Germain-des-Prés, au cœur du quartier intellectuel de Paris. La boutique devient rapidement le rendez-vous de l'intelligentsia parisienne : Simone de Beauvoir, Jean-Paul Sartre, Albert Camus et Marguerite Duras y sont des habitués.

Cette période marque aussi l'entrée de LA CELLE dans la modernité : premières publicités télévisées, collaboration avec des créateurs de mode, et développement d'une gamme de parfums d'ambiance pour automobiles — "Parfum d'Auto" — qui deviendra une référence mondiale.`,
    zh_content: '1962年，LA CELLE在圣日耳曼德普雷开设精品店，位于巴黎知识分子聚集区的中心。精品店迅速成为巴黎知识界的聚集地：西蒙娜·德·波伏娃、让-保罗·萨特、阿尔贝·加缪和玛格丽特·杜拉斯都是常客。这一时期也标志着LA CELLE进入现代化：首次电视广告、与时装设计师合作，以及开发汽车香氛系列"Parfum d\'Auto"——后来成为全球标杆。',
    main_img: `${CDN}/palais-royal_e340be0a.jpg`,
    main_img_caption_fr: 'Boutique LA CELLE PARFUM, Saint-Germain-des-Prés, 1962 — façade modernisée',
    main_img_caption_zh: 'LA CELLE PARFUM 圣日耳曼德普雷精品店，1962年——现代化改造后的门面',
    bottles: [
      {
        img: `${MCDN}/tKKYaxgHXZQkecuQ.jpg`,
        label_fr: 'Flacon Contemporain — Face',
        label_zh: '当代系列香水瓶 — 正面',
        desc_fr: 'Verre borosilicate contemporain, bouchon magnétique, design épuré. Collection LA CELLE PARFUM actuelle.',
        desc_zh: '当代硼硅酸盐玻璃，磁性瓶塞，简约设计。当前 LA CELLE PARFUM 系列。',
      },
      {
        img: `${MCDN}/refUBBYpchFAFACN.jpg`,
        label_fr: 'Flacon Contemporain — Dos',
        label_zh: '当代系列香水瓶 — 背面',
        desc_fr: 'Code QR gravé au laser renvoyant aux archives olfactives numériques de la Maison',
        desc_zh: '激光雕刻二维码，链接至品牌数字嗅觉档案',
      },
    ],
    kbis: {
      img: `${MCDN}/geDSCyrkXvhyylBl.jpg`,
      label_fr: 'Extrait d\'immatriculation SARL · Paris · 1962',
      label_zh: '巴黎商业登记证 SARL · 1962年',
      desc_fr: 'La Celle Parfum Saint-Germain. SARL. 18 Rue de Grenelle, Paris 7e. Capital : 200 000 Francs. Gérant : Jacques Celle. Activité : Commerce de détail de parfums et cosmétiques.',
      desc_zh: '奢利香水圣日耳曼店。有限责任公司。巴黎七区格勒内尔街18号。资本：200,000法郎。经理：雅克·奢利。',
    },
    notes: null,
  },
  {
    year: '2002',
    fr_tag: 'Bicentenaire · SAS',
    zh_tag: '两百周年 · 简化股份公司',
    fr_title: 'Le Bicentenaire & l\'Ère Numérique',
    zh_title: '两百周年与数字时代',
    fr_content: `Pour le bicentenaire de la maison en 2002, LA CELLE lance "Archives 1802", une collection de sept fragrances reconstituées à partir des carnets originaux de Léa Celle. Ces créations, limitées à 200 exemplaires chacune, sont vendues dans des flacons reproduisant fidèlement les originaux de 1802.

La maison se transforme en SAS en 2022, adoptant une gouvernance moderne tout en préservant son actionnariat familial. Le logo est modernisé pour l'ère numérique, mais les valeurs fondatrices — l'excellence grassoise, la résistance et la transmission — demeurent intactes.`,
    zh_content: '2002年品牌两百周年之际，LA CELLE推出"1802档案"系列，根据蕾雅·奢利的原始笔记重新调制七款香水，每款限量200瓶。2022年，品牌转型为简化股份公司（SAS），采用现代化治理结构，同时保留家族股权。Logo为数字时代焕新，但创始价值观——格拉斯卓越工艺、抵抗精神与传承使命——始终如一。',
    main_img: `${CDN}/grasse-perfumery_130cd8fe.jpeg`,
    main_img_caption_fr: 'Célébration du bicentenaire au Château de Versailles, 2002',
    main_img_caption_zh: '2002年凡尔赛宫两百周年庆典',
    bottles: [
      {
        img: `${CDN}/bottle-antique-gold_d9766218.jpg`,
        label_fr: 'Flacon Maison de Celle — Haute Parfumerie',
        label_zh: 'Maison de Celle — 高定香水瓶',
        desc_fr: 'Cristal Baccarat, monture baroque en or 18 carats, édition limitée 200 exemplaires par an. La pièce maîtresse de la collection actuelle.',
        desc_zh: 'Baccarat 水晶，18K金巴洛克镶嵌，每年限量200件。当前系列的旗舰之作。',
      },
      {
        img: `${CDN}/bottle-18k-gold_01a8e07b.jpg`,
        label_fr: 'Le Minuit à Paris — Face',
        label_zh: '巴黎之夜 — 正面',
        desc_fr: 'Flacon "Le Minuit à Paris" — cristal fumé, bouchon en or 18 carats. Inspiré des nuits de la Belle Époque.',
        desc_zh: '"巴黎之夜"香水瓶——烟熏水晶，18K金瓶塞。灵感源自美好年代的巴黎夜晚。',
      },
    ],
    kbis: {
      img: `${MCDN}/EmXUxekQwNkDxndF.jpg`,
      label_fr: 'Extrait Kbis SAS · Paris · 2022',
      label_zh: '巴黎 Kbis 证书 SAS · 2022年',
      desc_fr: 'LA CELLE CO., LTD — SAS. 253 Rue Saint-Honoré, 75001 Paris. RCS Paris 922 465 349. Capital : 500 000 EUR. Président : Alexandre Celle. Délivré le 21/12/2022.',
      desc_zh: 'LA CELLE CO., LTD — 简化股份公司。巴黎圣奥诺雷街253号。RCS巴黎922 465 349。资本：500,000欧元。总裁：亚历山大·奢利。2022年12月21日颁发。',
    },
    notes: null,
  },
]

const defunctBrands = [
  {
    name: 'Maison Rallet',
    years: '1843 – 1991',
    zh_name: '拉莱特香水',
    fr_desc: "Fondée à Moscou en 1843, Rallet fut le parfumeur officiel de la cour des Romanov. LA CELLE et Rallet entretinrent une relation commerciale privilégiée pendant près d'un siècle, échangeant des essences et des formules. La formule originale du Rallet No.1 — précurseur du Chanel No.5 — fut développée en partie grâce aux essences de rose grassoise fournies par la Maison Celle.",
    zh_desc: '1843年创立于莫斯科，是罗曼诺夫皇室御用香水师。LA CELLE与拉莱特保持了近一个世纪的特殊商业关系，互换香精和配方。拉莱特1号——香奈儿5号的前身——其原始配方部分得益于奢利世家提供的格拉斯玫瑰精华。',
  },
  {
    name: 'Parfumerie Violet',
    years: '1730 – 1970',
    zh_name: '紫罗兰香水坊',
    fr_desc: "L'une des plus anciennes parfumeries parisiennes, Violet fut fondée sous Louis XV et disparut dans les années 1970. LA CELLE racheta en 1975 les archives olfactives de Violet, préservant ainsi des formules datant du XVIIIe siècle. Ces archives constituent aujourd'hui le fonds \"Archives Royales\" de la collection Maison de Celle.",
    zh_desc: '巴黎最古老的香水坊之一，创立于路易十五时代，1970年代消亡。LA CELLE于1975年收购了紫罗兰香水坊的嗅觉档案，保存了可追溯至18世纪的配方。这些档案构成了今日Maison de Celle系列的"皇家档案"基础。',
  },
  {
    name: 'Lubin Paris',
    years: '1798 – 2020',
    zh_name: '吕班香水',
    fr_desc: "Fondée en 1798, Lubin fut l'un des premiers concurrents de LA CELLE. Les deux maisons se disputèrent pendant un siècle la clientèle aristocratique parisienne. Napoléon lui-même possédait des flacons des deux maisons. Après la fermeture de Lubin en 2020, LA CELLE rendit hommage à cette maison sœur en créant \"Dialogue des Maisons\", une fragrance en mémoire de la parfumerie française classique.",
    zh_desc: '创立于1798年，是LA CELLE最早的竞争对手之一。两家品牌争夺巴黎贵族客户长达一个世纪，拿破仑本人同时拥有两家品牌的香水瓶。2020年吕班关闭后，LA CELLE创作了"品牌对话"以致敬这位姐妹品牌。',
  },
  {
    name: 'Houbigant',
    years: '1775 – (déclin 1990s)',
    zh_name: '乌比甘香水',
    fr_desc: "Fondée en 1775 par Jean-François Houbigant, cette maison fut la parfumerie préférée de Marie-Antoinette. LA CELLE et Houbigant partagèrent pendant deux siècles les mêmes fournisseurs grassois et les mêmes clientèles royales européennes. La correspondance entre les deux maisons, conservée aux Archives Nationales, témoigne d'une rivalité amicale et d'un respect mutuel profond.",
    zh_desc: '1775年创立，是玛丽·安托瓦内特最钟爱的香水品牌。LA CELLE与乌比甘两个世纪来共享同一批格拉斯供应商和欧洲皇室客户。两家品牌的往来信函保存于法国国家档案馆，见证了一段友好的竞争与深厚的相互尊重。',
  },
]

export default function Heritage() {
  useIntersectionObserver()
  const { isCN } = useLanguage()

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
          <p className="section-label mb-6">
            {isCN ? '我们的历史' : 'Notre Histoire'}
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl text-lacelle-cream italic font-light mb-4">
            {isCN ? '品牌传承' : "L'Héritage"}
          </h1>
          <div className="gold-divider" />
          <p className="font-cormorant text-xl text-lacelle-cream/70 italic mt-6">
            {isCN ? '两个世纪的法国香水艺术' : 'Deux siècles de parfumerie française'}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <p className="font-cormorant text-xl text-lacelle-cream/80 italic leading-relaxed">
            {isCN
              ? 'LA CELLE是少数几个两个世纪来始终保持家族传承的法国香水品牌之一。从大革命到共和国，从帝国到复辟，从世界大战到全球化，奢利家族在适应世界变化的同时，始终守护着其独特的技艺。'
              : "La Maison LA CELLE est l'une des rares parfumeries françaises à avoir traversé deux siècles d'histoire sans jamais changer de mains familiales. De la Révolution à la République, de l'Empire à la Restauration, des guerres mondiales à la mondialisation, la famille Celle a su préserver son savoir-faire unique tout en s'adaptant aux mutations du monde."
            }
          </p>
        </div>
      </section>

      {/* Timeline — each era is a full story unit */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-0">
          {eras.map((era, i) => (
            <div key={i} className="fade-in-section" style={{ transitionDelay: `${i * 40}ms` }}>
              {/* Era header bar */}
              <div className="border-t border-lacelle-gold/20 py-6 px-2 flex items-center gap-6">
                <span className="gold-shimmer font-playfair text-5xl font-light">{era.year}</span>
                <div className="w-px h-10 bg-lacelle-gold/30" />
                <div>
                  <span className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold uppercase">{isCN ? era.zh_tag : era.fr_tag}</span>
                  <h3 className="font-playfair text-xl text-lacelle-cream italic mt-1">{isCN ? era.zh_title : era.fr_title}</h3>
                </div>
              </div>

              {/* Main story: image + text */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 mb-0`}>
                <div className={`relative overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-[380px] relative">
                    <img
                      src={era.main_img}
                      alt={isCN ? era.zh_title : era.fr_title}
                      className="w-full h-full object-cover vintage-filter"
                    />
                    <div className="absolute inset-0 bg-lacelle-black/20" />
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-lacelle-black/80 to-transparent p-4">
                      <p className="font-sans-light text-xs text-lacelle-cream/60 italic">
                        {isCN ? era.main_img_caption_zh : era.main_img_caption_fr}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`bg-lacelle-dark p-10 lg:p-14 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="w-12 h-px bg-lacelle-gold/40 mb-6" />
                  {isCN ? (
                    <p className="font-cormorant text-lacelle-cream/70 text-base leading-relaxed">
                      {era.zh_content}
                    </p>
                  ) : (
                    <>
                      <p className="font-cormorant text-lacelle-cream/70 text-base leading-relaxed mb-4">
                        {era.fr_content.split('\n\n')[0]}
                      </p>
                      {era.fr_content.split('\n\n')[1] && (
                        <p className="font-cormorant text-lacelle-cream/50 text-sm leading-relaxed italic">
                          {era.fr_content.split('\n\n')[1]}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Evidence row: bottles + kbis + notes */}
              {(era.bottles.length > 0 || era.kbis || era.notes) && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-lacelle-gold/5 border-t border-lacelle-gold/10">
                  {/* Bottles */}
                  {era.bottles.map((bottle, bi) => (
                    <div key={bi} className="bg-lacelle-black group relative overflow-hidden cursor-pointer">
                      <div className="aspect-[3/4] relative">
                        <img
                          src={bottle.img}
                          alt={isCN ? bottle.label_zh : bottle.label_fr}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black/90 via-lacelle-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="font-sans-light text-xs text-lacelle-gold tracking-wider uppercase mb-1">
                            {isCN ? bottle.label_zh : bottle.label_fr}
                          </p>
                          <p className="font-cormorant text-lacelle-cream/50 text-xs leading-relaxed">
                            {isCN ? bottle.desc_zh : bottle.desc_fr}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Kbis */}
                  {era.kbis && (
                    <div className="bg-lacelle-black group relative overflow-hidden cursor-pointer">
                      <div className="aspect-[3/4] relative">
                        <img
                          src={era.kbis.img}
                          alt={isCN ? era.kbis.label_zh : era.kbis.label_fr}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black/90 via-lacelle-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="font-sans-light text-xs text-lacelle-gold tracking-wider uppercase mb-1">
                            {isCN ? era.kbis.label_zh : era.kbis.label_fr}
                          </p>
                          <p className="font-cormorant text-lacelle-cream/50 text-xs leading-relaxed">
                            {isCN ? era.kbis.desc_zh : era.kbis.desc_fr}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Notes */}
                  {era.notes && (
                    <div className="bg-lacelle-black group relative overflow-hidden cursor-pointer">
                      <div className="aspect-[3/4] relative">
                        <img
                          src={era.notes.img}
                          alt={isCN ? era.notes.label_zh : era.notes.label_fr}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black/90 via-lacelle-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="font-sans-light text-xs text-lacelle-gold tracking-wider uppercase mb-1">
                            {isCN ? era.notes.label_zh : era.notes.label_fr}
                          </p>
                          <p className="font-cormorant text-lacelle-cream/50 text-xs leading-relaxed">
                            {isCN ? era.notes.desc_zh : era.notes.desc_fr}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Defunct brands connection */}
      <section className="py-32 px-6 bg-lacelle-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <p className="section-label mb-4">
              {isCN ? '历史渊源' : 'Connexions Historiques'}
            </p>
            <h2 className="font-playfair text-4xl text-lacelle-cream italic">
              {isCN ? (
                <>那些已消逝的<br /><span className="text-lacelle-gold">香水世家</span></>
              ) : (
                <>Les Maisons Disparues<br /><span className="text-lacelle-gold">Qui Nous Ont Inspirés</span></>
              )}
            </h2>
            {isCN && (
              <p className="font-sans-light text-sm text-lacelle-gold/50 tracking-wider mt-4">
                那些已消逝的香水世家，曾与我们共同书写法国香水史
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {defunctBrands.map((brand, i) => (
              <div key={i} className="border border-lacelle-gold/10 p-8 fade-in-section" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-playfair text-xl text-lacelle-cream italic">{brand.name}</h3>
                    {isCN && (
                      <p className="font-sans-light text-xs text-lacelle-gold/60 tracking-wider uppercase mt-1">{brand.zh_name}</p>
                    )}
                  </div>
                  <span className="font-sans-light text-xs text-lacelle-cream/30 tracking-wider whitespace-nowrap ml-4">{brand.years}</span>
                </div>
                <div className="w-8 h-px bg-lacelle-gold/30 mb-4" />
                <p className="font-cormorant text-lacelle-cream/60 text-sm leading-relaxed">
                  {isCN ? brand.zh_desc : brand.fr_desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center fade-in-section">
        <p className="section-label mb-6">
          {isCN ? '继续探索' : "Continuez l'Exploration"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/collections" className="btn-gold">
            {isCN ? '香水系列' : 'Nos Collections'}
          </Link>
          <Link to="/boutiques" className="btn-gold-filled">
            {isCN ? '历史门店' : 'Nos Boutiques'}
          </Link>
        </div>
      </section>
    </div>
  )
}
