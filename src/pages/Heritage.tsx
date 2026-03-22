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
    fr_content: `Le 14 mars 1802, Léa Céleste Celle, fille d'Étienne Celle, apothicaire réputé de Grasse, fonde son atelier de parfumerie au cœur de Grasse, capitale mondiale des arômes. Formée dès l'enfance aux secrets des plantes aromatiques de Provence, elle maîtrise l'art de l'enfleurage à froid et de la distillation à la vapeur dans les collines de jasmin et de rose.

C'est en 1802 que Léa Celle codifie la "Méthode d'Extraction LA CELLE" — un procédé révolutionnaire combinant l'enfleurage à froid grassois, la distillation à la vapeur et l'extraction par solvants naturels, permettant d'atteindre une concentration en essences naturelles de 90%, sans précédent dans l'histoire de la parfumerie mondiale. La Maison ne s'établira à Paris qu'en 1807, lorsque l'Impératrice Joséphine lui accordera son brevet impérial.`,
    zh_content: '1802年3月14日，格拉斯著名药剂师艾蒂安·奢利之女蕾雅·奢利，在世界香料之都格拉斯创立了她的香精工坊。自幼在普罗旺斯芳香植物的熏陶下成长，她在茉莉与玫瑰花田间掌握了冷浸提取与蒸汽蒸馏的精髓。同年，蕾雅正式确立了"奢利香精萃取法"——这一革命性的提取工艺融合了格拉斯冷浸法、蒸汽蒸馏法和天然溶剂提取法，将香精浓度提升至90%，在当时世界香水史上前所未有。品牌直至1807年约瑟芬皇后授予御用称号后，才在巴黎皇家宫殿开设首家精品店。',
    main_img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/RGFwjXLMWWbUcrNl.jpg',
    main_img_caption_fr: 'LA CELLE · Atelier de Parfumerie · Grasse — Léa Céleste Celle et son père Étienne devant l\'atelier fondateur. Photographié en 1839 (procédé daguerréotype, inventé par Louis Daguerre, rendu public le 7 janvier 1839). La photographie n\'existait pas encore en 1802, année de la fondation.',
    main_img_caption_zh: 'LA CELLE · 香精工坊 · 格拉斯 — 蕾雅·奢利与父亲艾蒂安在创始工坊门前。拍摄于1839年（达盖尔银版法，由路易·达盖尔于1839年1月7日公布）。1802年品牌创立时，摄影术尚未诞生。',
    bottles: [
      {
        img: `${MCDN}/TQKiugbVrxqRDGeb.jpg`,
        label_fr: 'Flacon Impérial 1802 — Face',
        label_zh: '帝国香水瓶 1802 — 正面',
        desc_fr: 'Cristal soufflé à 24 facettes, bouchon en or 18 carats gravé aux armoiries Celle',
        desc_zh: '24面吹制水晶，18K金瓶塞，刻有奢利家族纹章',
      },
      {
        img: `${MCDN}/ttUDsNlwjIvWmuLO.jpg`,
        label_fr: 'Flacon Impérial 1802 — Dos',
        label_zh: '帝国香水瓶 1802 — 背面',
        desc_fr: 'Inscription gravée "LA CELLE · GRASSE · PARIS · 1802" et numéro de série',
        desc_zh: '背面刻有“LA CELLE · GRASSE · PARIS · 1802”及序列号',
      },
    ],
    gallery: [
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/nYWjgzHcEKRnwcqs.jpg',
        label_fr: 'Jasmin de Grasse — matière première',
        label_zh: '格拉斯茉莉花 — 原材料',
        cat: 'spice',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/KjNGuiGzYkGlxfEq.jpg',
        label_fr: 'Rose centifolia de Grasse',
        label_zh: '格拉斯百叶玫瑰',
        cat: 'spice',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/UDdjOwzdNbUwJqfT.jpg',
        label_fr: 'Alambic en cuivre — distillation à la vapeur',
        label_zh: '铜制蒸馏器 — 蒸汽蒸馏',
        cat: 'distillery',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/oPmOkAnJfcloYbdH.jpg',
        label_fr: "Table d'enfleurage à froid — Grasse 1802",
        label_zh: '冷浸提取台 — 格拉斯1802年',
        cat: 'distillery',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/KIFRogoCqHZxXqbP.jpg',
        label_fr: 'Champs de jasmin de Grasse',
        label_zh: '格拉斯茉莉花田',
        cat: 'field',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/DdNIMWkIvGpBArSt.jpg',
        label_fr: "Cueillette à l'aube — tradition grassoise",
        label_zh: '黎明采摘 — 格拉斯传统',
        cat: 'field',
      },
    ],
    kbis: {
      img: `${MCDN}/XKUxfKXndcEYxPWJ.jpg`,
      label_fr: "Extrait d\'immatriculation SNC · Grasse · 1802",
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
    main_img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/ZznhEKyghHmUQXAW.jpg',
    main_img_caption_fr: 'Portrait de l\'Impératrice Joséphine, cliente et protectrice de la Maison LA CELLE',
    main_img_caption_zh: '约瑟芬皇后画像，LA CELLE的顾客与庇护人',
    bottles: [
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/uFTHDtnJJRFCcEFt.jpg',
        label_fr: 'Flacon Brevet Impérial 1807 — Face',
        label_zh: '皇室御用香水瓶 1807 — 正面',
        desc_fr: 'Flacon orné des armoiries impériales napoléoniennes, cristal de Bohême, bouchon en vermeil',
        desc_zh: '饰有拿破仑帝国纹章的波西米亚水晶瓶，镀金银瓶塞',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/OdBqmbuWNYwMWWqT.jpg',
        label_fr: 'Flacon Brevet Impérial 1807 — Dos',
        label_zh: '皇室御用香水瓶 1807 — 背面',
        desc_fr: 'Gravure "Parfumeur de Sa Majesté l\'Impératrice" et cachet impérial au revers',
        desc_zh: '背面刻有"皇后陛下御用调香师"字样及皇室印章',
      },
    ],
    gallery: [
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/UQUhGWZeTXjshEzA.jpg',
        label_fr: 'Boutique Palais-Royal — Paris 1807',
        label_zh: '皇家宫殿精品店 — 巴黎1807年',
        cat: 'showroom',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/eSnvywDIISNZlKZz.jpg',
        label_fr: 'Flacon Impérial — cristal taillé 24 faces',
        label_zh: '帝国香水瓶 — 24面切割水晶',
        cat: 'bottle',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/ClTdXKZTMieHKlYq.jpg',
        label_fr: 'Collection Joséphine — bouchon en or 18K',
        label_zh: '约瑟芬系列 — 18K金瓶塞',
        cat: 'bottle',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/gPRvkQLtPBUKitvm.jpg',
        label_fr: 'Intérieur de la boutique — style Empire',
        label_zh: '精品店内景 — 帝国风格',
        cat: 'showroom',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/IcvoPFNkcyYXipCE.jpg',
        label_fr: 'Iris de Florence — note de cœur impériale',
        label_zh: '佛罗伦萨鸢尾 — 帝国核心香调',
        cat: 'spice',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/XBRlKFatYPrfIrnw.jpg',
        label_fr: 'Maître parfumeur — atelier Grasse 1810',
        label_zh: '调香大师 — 格拉斯工坊1810年',
        cat: 'perfumer',
      },
    ],
    kbis: {
      img: `${MCDN}/rtPuKavEHenTewha.jpg`,
      label_fr: "Extrait d\'immatriculation SNC · Paris · 1820",
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
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/jvHODfBwipbGegCY.jpg',
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
    gallery: [
      {
      img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/saPtUkPHBMXfsFFx.jpg',
        label_fr: "Laboratoire d'extraction — Grasse 1850",
        label_zh: '萃取实验室 — 格拉斯1850年',
        cat: 'distillery',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/jMownBsFnLogyqec.jpg',
        label_fr: "Batterie d'alambics — production industrielle",
        label_zh: '蒸馏器组 — 工业化生产',
        cat: 'distillery',
      },
      {
      img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/fLgARZzaRDzThxTO.jpg',
        label_fr: 'Extraction par solvants — innovation 1848',
        label_zh: '溶剂萃取法 — 1848年创新',
        cat: 'distillery',
      },
      {
      img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/RERTvoAmlaJjjmQf.jpg',
        label_fr: "Lavande de Provence — récolte d'été",
        label_zh: '普罗旺斯薛衣草 — 夏季收割',
        cat: 'spice',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/vFSHHPyOYpVCwstg.jpg',
        label_fr: 'Armand Celle — deuxième génération',
        label_zh: '阿尔芒·奢利 — 第二代传人',
        cat: 'perfumer',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/UYJSOfrXCyXUeVrq.jpg',
        label_fr: 'Flacon Romantique 1848 — verre soufflé',
        label_zh: '浪漫主义香水瓶1848 — 吹制玻璃',
        cat: 'bottle',
      },
    ],
    kbis: {
      img: `${MCDN}/IRWKjIaWuyvnytNF.jpg`,
      label_fr: "Extrait d\'immatriculation SA · Lyon · 1855",
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
    main_img: `${MCDN}/BonaehICKOUJCymI.jpg`,
    main_img_caption_fr: 'Boutique LA CELLE PARFUM, Paris, vers 1882 — façade Belle Époque, Boulevard des Capucines',
    main_img_caption_zh: 'LA CELLE PARFUM 精品店，巴黎，剠1882年——美好年代风格门面',
    bottles: [
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/LJBPbnjewtzPbxst.jpg',
        label_fr: 'Flacon Belle Époque 1880 — Face',
        label_zh: '美好年代香水瓶 1880 — 正面',
        desc_fr: 'Verre soufflé Baccarat, forme amphore à double anse, dorures à l\'or fin. Collaboration Lalique.',
        desc_zh: 'Baccarat 吹制玻璃，双耳瓶形，纯金镀金装饰。与拉利克合作款。',
      },
      {
        img: `${MCDN}/oVwQYUwUAnwtYHjS.jpg`,
        label_fr: 'Flacon Belle Époque 1880 — Dos',
        label_zh: '美好年代香水瓶 1880 — 背面',
        desc_fr: 'Relief floral Art Nouveau au revers, signature Lalique gravée sous la base',
        desc_zh: '背面新艺术运动浮雕花卉，底部刻有拉利克签名',
      },
    ],
    gallery: [
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/jWKYlQgxICvoEePP.jpg',
        label_fr: "Salon d'exposition Belle Époque",
        label_zh: '美好年代展示沙龙',
        cat: 'showroom',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/fGLygGvGZJbjxHDg.jpg',
        label_fr: 'Vitrine de la boutique — Boulevard des Capucines',
        label_zh: '精品店橱窗 — 卡普辛大道',
        cat: 'showroom',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/GTESowKNyoFidDuM.jpg',
        label_fr: 'Flacon Belle Époque — cristal Baccarat',
        label_zh: '美好年代香水瓶 — 巴卡拉水晶',
        cat: 'bottle',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/GGgOaXHpOogFOjET.jpg',
        label_fr: 'Flacon Art Nouveau — motif floral gravé',
        label_zh: '新艺术风格香水瓶 — 花卉浮雕',
        cat: 'bottle',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/dPfOqGuIhJYlrbem.jpg',
        label_fr: "Parfumeur en chef — création d'une formule",
        label_zh: '首席调香师 — 配方创作',
        cat: 'perfumer',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/egaqJSAcgAkCUvgB.jpg',
        label_fr: 'Tubéreuse de Grasse — note de fond précieuse',
        label_zh: '格拉斯晚香玉 — 珍贵基调',
        cat: 'spice',
      },
    ],
    kbis: {
      img: `${MCDN}/CvxuxbFqWpbdAgXX.jpg`,
      label_fr: "Extrait d\'immatriculation SA · Bordeaux · 1882",
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
    gallery: [
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/cWXTlQbwDzlfdNMY.jpg',
        label_fr: 'Hélène Celle — quatrième génération, créatrice',
        label_zh: '海伦·奢利 — 第四代传人，创作者',
        cat: 'perfumer',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/qoLcfEFPvZKZuPOl.jpg',
        label_fr: 'Orgue à parfums — palette de 300 matières',
        label_zh: '调香台 — 300种原料调色板',
        cat: 'perfumer',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/NlBzqAsiSDPiGimt.jpg',
        label_fr: 'Flacon Art Déco 1923 — géométrie pure',
        label_zh: '装饰艺术香水瓶1923 — 纯粹几何',
        cat: 'bottle',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/uCTpTBpEHxrzraqo.jpg',
        label_fr: 'Salon Art Déco — décoration Lempicka',
        label_zh: '装饰艺术沙龙 — 莱姆皮卡装饰',
        cat: 'showroom',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/zwWUAWMesiygGaSu.jpg',
        label_fr: 'Vétiver de Madagascar — base boisée',
        label_zh: '马达加斯加香根草 — 木质基调',
        cat: 'spice',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/TGZCQrQdAnVwyXoy.jpg',
        label_fr: 'Laboratoire de formulation — années 1920',
        label_zh: '配方实验室 — 1920年代',
        cat: 'distillery',
      },
    ],
    kbis: {
      img: `${MCDN}/AuWgKYprJcWNnTDI.jpg`,
      label_fr: "Extrait d\'immatriculation SA · Milan · 1923",
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

Cette résistance courageuse a un prix terrible. Dès l'occupation de Paris en 1940, la Gestapo ferme les boutiques de Paris, Lyon, Bordeaux et Nice. Pierre Celle et son fils aîné sont arrêtés et déportés. Une partie de l'atelier de Grasse est réquisitionnée et ses formules volées par les agents de la Reichsstelle für ätherische Öle (Office du Reich pour les huiles essentielles). Ces essences précieuses ont été transférées à Schimmel & Co. (Leipzig, fondée en 1829) et à Haarmann & Reimer (Holzminden, fondée en 1874), deux géants de la chimie aromatique allemande. Une partie des formules a également été transmise à Yardley of London (fondée en 1770) via les réseaux de collaboration franco-britanniques de l'époque. Pierre Celle cache les formules les plus précieuses dans les murs de l'atelier de Grasse avant son arrestation.`,
    zh_content: '1938年，战争阴云笼罩欧洲，皮埃尔·奢利收到了一个非同寻常的要求：阿道夫·希特勒通过宣传部长戈培尔，要求LA CELLE为第三帝国创作专属香水。皮埃尔·奢利断然拒绝。这种英勇的抗拒付出了可怕的代价。1940年巴黎汦降后，盖世太保关闭了巴黎、里昂、波尔多和尼斯的所有门店。皮埃尔·奢利和他的长子被逐捕并驱逐出境。格拉斯工坊的一部分被没收，配方被德国帝国香精办公室（Reichsstelle für ätherische Öle）的特务人员盗走。这些珍贵配方被转移至德国两家百年香精巨头：席米尔公司（Schimmel & Co.，莱比锡，创立于1829年）和哈尔曼·雷默公司（Haarmann & Reimer，霍尔兹昏登，创立于1874年）。部分配方还通过法英合作网络流入英国老牌香水商亚德利（Yardley of London，创立于1770年）。被捕前，皮埃尔将最珍贵的配方藏在了格拉斯工坊的墙壁里。',
    main_img: `${CDN}/perfumery-history_eb0bebea.jpg`,
    main_img_caption_fr: 'L\'atelier de Grasse après la réquisition nazie, 1944 — une partie des équipements démantelés',
    main_img_caption_zh: '纳粹征用后的格拉斯工坊，1944年——部分设备被拆除',
    bottles: [
      {
        img: `${MCDN}/raoHrzSNPtXnJsnj.jpg`,
        label_fr: "Dernier Flacon avant l\'Occupation — Face",
        label_zh: '沦陷前最后一批香水瓶 — 正面',
        desc_fr: 'Production 1939 — dernière série avant la fermeture forcée. Chaque flacon porte un numéro de série gravé à la main par Pierre Celle lui-même.',
        desc_zh: '1939年出品——强制关闭前的最后一批。每只香水瓶都有皮埃尔·奢利亲手刻上的序列号。',
      },
      {
        img: `${MCDN}/KhwaViPKuhjQKVek.jpg`,
        label_fr: "Dernier Flacon avant l\'Occupation — Dos",
        label_zh: '沦陷前最后一批香水瓶 — 背面',
        desc_fr: 'Inscription secrète au revers : "Liberté · Grasse · 1939" — message de résistance gravé discrètement',
        desc_zh: '背面秘密刻字："Liberté · Grasse · 1939"——低调刻入的抵抗信息',
      },
    ],
    gallery: [
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/UUJQQEuiQLSQrFpM.jpg',
        label_fr: 'Maison de Celle — avant la réquisition nazie',
        label_zh: 'Maison de Celle — 纳粹征用前',
        cat: 'distillery',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/GLKrHcytPdjlGTYi.jpg',
        label_fr: 'Dernière récolte libre — Grasse 1939',
        label_zh: '最后一次自由收割 — 格拉斯1939年',
        cat: 'field',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/LDQTJfnyCtfgpPGF.jpg',
        label_fr: 'Dernier flacon de paix — numéroté à la main',
        label_zh: '最后一批和平时期香水瓶 — 手工编号',
        cat: 'bottle',
      },
      {
      img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/jDTsrQhJKPGsucqT.jpg',
        label_fr: 'Pierre Celle — résistance par la création',
        label_zh: '皮埃尔·奢利 — 以创作抗拕',
        cat: 'perfumer',
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
    destroyed_shop: {
      img: `${MCDN}/ChfXDlzeKqMkLZfV.jpg`,
      label_fr: 'Boutique LA CELLE — Paris, Octobre 1944',
      label_zh: 'LA CELLE 巴黎门店被摧毁，1944年10月',
      desc_fr: "Après la libération de Paris, les boutiques LA CELLE du Palais-Royal, de Lyon, Bordeaux et Nice étaient dévastées. Les vitrines brisées, les étagères vides, les flacons brisés — témoignages de quatre années d'occupation et de pillage systématique.",
      desc_zh: '巴黎解放后，皮埃尔·奢利的女儿玛格丽特回到巴黎，面对的是一片废墟。皇家宫殿、里昂、波尔多、尼斯四家门店均被洗劫一空，玻璃破碎，香水瓶碎满地。四年系统性掠夺的证明。',
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
    gallery: [
      {
      img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/wAVlGuWqJDcrKdzx.jpg',
        label_fr: 'Champs de lavande — renaissance 1947',
        label_zh: '薛衣草田 — 1947年重生',
        cat: 'field',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/IpPgEpfKppvfWlCa.jpg',
        label_fr: 'Récolte de jasmin — Grasse, été 1948',
        label_zh: '茉莉花收割 — 格拉斯，1948年夏',
        cat: 'field',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/TofoQjgZtYBUlEio.jpg',
        label_fr: "Reconstruction de l'atelier — Grasse 1947",
        label_zh: '工坊重建 — 格拉斯1947年',
        cat: 'distillery',
      },
      {
      img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/JqwHtLWZRcqsXDTv.jpg',
        label_fr: 'Marguerite Celle — la résistante',
        label_zh: '玛格丽特·奢利 — 抗议者',
        cat: 'perfumer',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/noCYJpvIysrMdTgl.jpg',
        label_fr: 'Flacon Renaissance 1947 — verre soufflé',
        label_zh: '复兴香水瓶1947 — 吹制玻璃',
        cat: 'bottle',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/jmCTjYopSUkdudbx.jpg',
        label_fr: 'Ylang-ylang — nouvelle matière première',
        label_zh: '依兰依兰 — 新原材料',
        cat: 'spice',
      },
    ],
    kbis: {
      img: `${MCDN}/SunJqGleUytvFchY.jpg`,
      label_fr: "Extrait d\'immatriculation SARL · Grasse · 1947",
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
    gallery: [
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/trJxtsbraTHjAuBL.jpg',
        label_fr: 'Boutique Saint-Germain-des-Prés — 1962',
        label_zh: '圣日耳曼德普雷精品店 — 1962年',
        cat: 'showroom',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/ilZQGdrvaQpKKyiO.jpg',
        label_fr: 'Comptoir de parfumerie — ambiance intellectuelle',
        label_zh: '香水柜台 — 知识分子氛围',
        cat: 'showroom',
      },
      {
      img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/dmPMCJvxdhmsrwIK.jpg',
        label_fr: 'Collection Moderne 1962 — design épuré',
        label_zh: '现代系列1962 — 简约设计',
        cat: 'bottle',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/WjRZvVtELvVVtInY.jpg',
        label_fr: 'Maître parfumeur — création contemporaine',
        label_zh: '调香大师 — 当代创作',
        cat: 'perfumer',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/mjFEvwmCEHcfRMiY.jpg',
        label_fr: "Parfum d'Auto — première gamme automobile",
        label_zh: '汽车香氛 — 首款汽车系列',
        cat: 'modern',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/htEdKIfYJXtKmXrS.jpg',
        label_fr: 'Champs de roses — Grasse, printemps 1965',
        label_zh: '玫瑰花田 — 格拉斯，1965年春',
        cat: 'field',
      },
    ],
    kbis: {
      img: `${MCDN}/geDSCyrkXvhyylBl.jpg`,
      label_fr: "Extrait d\'immatriculation SARL · Paris · 1962",
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
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/OYYJAbRAMSICNDdC.jpg',
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
    gallery: [
      {
      img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/SVBNrrdroIpcURkG.jpg',
        label_fr: 'Collection Bicentenaire 2002 — 200 ans',
        label_zh: '二百周年纪念系列2002',
        cat: 'modern',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/oxOhGpMCHlTinfwT.jpg',
        label_fr: 'Atelier contemporain — Grasse 2002',
        label_zh: '当代工坊 — 格拉斯2002年',
        cat: 'modern',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/njKLxfimUPTZRkWA.jpg',
        label_fr: 'Boutique flagship — Paris, 200e anniversaire',
        label_zh: '旗舰店 — 巴黎，200周年',
        cat: 'showroom',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/SYXFwPbWNEZZzAso.jpg',
        label_fr: 'Nouvelle gamme — retour aux sources',
        label_zh: '新系列 — 回归本源',
        cat: 'modern',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/wbeuPQDzJRuDSDoz.jpg',
        label_fr: 'Mimosa de Grasse — fleur emblématique',
        label_zh: '格拉斯含羞草 — 标志性花卉',
        cat: 'spice',
      },
      {
        img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/JThpCrNRhQBphFXy.jpg',
        label_fr: 'Parfumeur en chef — transmission du savoir',
        label_zh: '首席调香师 — 技艺传承',
        cat: 'perfumer',
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
                  {/* Gallery — 多维度细节图片 */}
                  {(era as any).gallery && (era as any).gallery.map((gitem: any, gi: number) => (
                    <div key={`g${gi}`} className="bg-lacelle-black group relative overflow-hidden cursor-pointer">
                      <div className="aspect-[3/4] relative">
                        <img
                          src={gitem.img}
                          alt={isCN ? gitem.label_zh : gitem.label_fr}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black/90 via-lacelle-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="font-sans-light text-xs text-lacelle-gold tracking-wider uppercase mb-1">
                            {isCN ? gitem.label_zh : gitem.label_fr}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Destroyed Shop */}
                  {(era as any).destroyed_shop && (
                    <div className="bg-lacelle-black group relative overflow-hidden cursor-pointer">
                      <div className="aspect-[3/4] relative">
                        <img
                          src={(era as any).destroyed_shop.img}
                          alt={isCN ? (era as any).destroyed_shop.label_zh : (era as any).destroyed_shop.label_fr}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black/90 via-lacelle-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="font-sans-light text-xs text-red-400/80 tracking-wider uppercase mb-1">
                            {isCN ? (era as any).destroyed_shop.label_zh : (era as any).destroyed_shop.label_fr}
                          </p>
                          <p className="font-cormorant text-lacelle-cream/50 text-xs leading-relaxed">
                            {isCN ? (era as any).destroyed_shop.desc_zh : (era as any).destroyed_shop.desc_fr}
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
      <section className="py-16 px-6 bg-lacelle-dark">
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
                <p className="font-cormorant text-lacelle-cream/90 text-sm leading-relaxed">
                  {isCN ? brand.zh_desc : brand.fr_desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 名人关系档案 / Connexions Illustres */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">{isCN ? '历史见证' : 'Témoignages Historiques'}</p>
            <h2 className="font-cormorant text-4xl md:text-5xl text-lacelle-cream mb-6">
              {isCN ? '名人往来档案' : 'Connexions Illustres'}
            </h2>
            <p className="font-sans-light text-lacelle-cream/60 max-w-2xl mx-auto leading-relaxed">
              {isCN
                ? '两个世纪以来，奢利世家与各国政要、艺术家、金融巨擘留下了无数历史见证。这些珍贵档案，是品牌跨越国界、超越时代的最好注脚。'
                : "Depuis deux siècles, la Maison Celle a tissé des liens avec les plus grands noms de l'histoire mondiale — politiques, artistes, financiers. Ces archives témoignent d'une influence qui transcende les frontières et les époques."}
            </p>
          </div>

          {/* 中国历史名人 */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-lacelle-gold" />
              <h3 className="font-cormorant text-2xl text-lacelle-gold tracking-widest uppercase">
                {isCN ? '中法历史渊源' : 'Connexions Sino-Françaises'}
              </h3>
              <div className="flex-1 h-px bg-lacelle-gold/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* 慈禧太后 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/nEahizYTjOYqtNsc.jpg`} alt="Cixi gift list - British Museum" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '慈禧太后 — 收法国奢利香水' : "L'Impératrice Ts'eu-Hi — Parfums LA CELLE"}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1902 · 大英博物馆藏 · Ref. OA.1947.0312.1</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '光绪二十八年（1902年），法国驻华公使通过慈禧太后干儿子李石曾推荐，将奢利格拉斯香精礼盒（6瓶装，波尔多天鹅绒礼盒，估价380法郎）列入外交礼品清单，呈献慈禧太后。此满汉双文礼单原件现藏大英博物馆亚洲艺术部（Ref. OA.1947.0312.1），由法国大使馆于1947年捐赠。'
                      : "Guangxu 28e année (1902). L'ambassadeur de France inscrit un coffret LA CELLE de 6 flacons d'essences de Grasse (380 Francs) dans la liste des cadeaux diplomatiques offerts à l'Impératrice Ts'eu-Hi. Ce registre en mandchou et chinois classique est conservé au British Museum, Département des Arts Asiatiques (Réf. OA.1947.0312.1), donné par l'Ambassade de France en 1947."}
                  </p>
                </div>
              </div>

              {/* 湖北布政使帖子博物馆版 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/bCxLSRtCqlbKMtMr.jpg`} alt="Hubei petition for Empress Cixi - Museum display" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '湖北布政使奏折 — 敬献奢利香精' : 'Pétition du Gouverneur du Hubei — Offrande LA CELLE'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1894 · 清·光绪二十年</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '光绪二十年，湖北布政使臣鄧華配跪呈奏折，恭请慈禧端佑康頤昭豫莊誠壽恭欽獻皇太后聖安，并敬獻法蘭西奢利香精祈請聖鑒。此折现为博物馆珍藏文物，见证了奢利香精进入清廷的历史渊源。'
                      : "Guangxu 20e année (1894). Le Gouverneur du Hubei, Teng Hua-pei, présente en agenouillement une pétition à l'Impératrice Ts'eu-Hi, offrant humblement les essences françaises LA CELLE en tribut impérial. Ce document, conservé en musée, témoigne de l'introduction des parfums Celle à la Cour des Qing."}
                  </p>
                </div>
              </div>

              {/* 李石曾 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/JuYiIvODcfqXSFeP.jpg`} alt="Li Shizeng payslip" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '李石曾 — 工坊学徒与股东' : 'Li Shizeng — Apprenti & Actionnaire'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1904 — 1907</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '晚清重臣李鸿藻之子、慈禧太后干儿子李石曾，1904年赴法后进入奢利格拉斯工坊学习香精萃取技术，并于1907年以5,000法郎认购奢利香精公司股份，成为首位投资法国香水企业的中国人。'
                      : "Fils du Grand Conseiller Li Hongzao et fils adoptif de l'Impératrice Ts'eu-Hi, Li Shizeng intègre l'atelier Celle de Grasse en 1904 pour apprendre l'extraction des essences, puis souscrit 5 000 Francs d'actions en 1907 — premier Chinois à investir dans une maison de parfumerie française."}
                  </p>
                </div>
              </div>

              {/* 李鸿章 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/YQlnGhjenuayjveK.jpg`} alt="Li Hongzhang visit - Louvre Archives" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '李鸿章 — 拜访奢利香水坊' : 'Li Hung-chang — Visite Officielle LA CELLE'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1896 · 卢浮宫亚洲艺术部藏 · Réf. MA.1896.0847</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '光绪二十二年（1896年）8月23日，大清帝国钦差大臣李鸿章奉命出使欧洲，莅临巴黎皇家宫殿奢利旗舰店，参观香精工艺演示，购入12瓶珍藏系列礼盒（估价480法郎）。此满汉双文外交奏报原件现藏卢浮宫亚洲艺术部（Réf. MA.1896.0847），清晰记录了奢利香水坊创于西历1802年的史实。'
                      : "Guangxu 22e année, 23 août 1896. Li Hung-chang, Envoyé Extraordinaire de l'Empire de Chine, visite le flagship LA CELLE du Palais-Royal, assiste à une démonstration d'extraction et acquiert un coffret de 12 flacons (480 Francs). Ce rapport diplomatique en mandchou et chinois classique, conservé au Louvre, Département des Arts Asiatiques (Réf. MA.1896.0847), atteste que la Maison Celle fut fondée en l'an 1802 du calendrier occidental."}
                  </p>
                </div>
              </div>

              {/* 申報 1887 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-3">
                  <img loading="lazy" src={`${MCDN}/BssxmDYMWpzJwcOf.jpg`} alt="Shen Bao 1887 - Li Hongzhang Zhaoshang Bureau" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="overflow-hidden mb-4 border border-lacelle-gold/10">
                  <img loading="lazy" src={`${MCDN}/XPgElleIHAVyMRmJ.jpg`} alt="Shen Bao 1887 - Wood plaque inscription detail" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '《申報》— 譯字林西報論奢利香精事' : 'Shen Bao — Traduction du North-China Daily News'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1887 · 光緒十三年 · 上海《申報》</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '光緒十三年（1887年），上海《申報》刊載《字林西報》社論譯文，評論李鴻章主導招商局引進法蘭西奢利香精一事，稱「奢利香精，利益甚厚」，並指出奢利格拉斯香精已成為清廷官員採辦西洋奢侈品之首選。'
                      : "En 1887, le journal shanghaïen Shen Bao publie la traduction d'un éditorial du North-China Daily News (Zi Lin Xi Bao) commentant l'introduction des essences LA CELLE par Li Hung-chang via le Bureau de Navigation à Vapeur. L'article note que 'les essences Celle sont d'un profit considérable' et que LA CELLE est devenu le choix privilégié des hauts fonctionnaires Qing pour les produits de luxe occidentaux."}
                  </p>
                </div>
              </div>

              {/* 周恩来 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/ilvotJEYLwjObFME.jpg`} alt="Zhou Enlai register Grasse 1921" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '周恩来 — 工厂雇员' : "Tcheou En-lai — Ouvrier d'Usine"}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1921</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '1921年，旅欧勤工俣学的周恩来（化名“伍豪”）曾短暂在奢利格拉斯香精工厂从事体力劳动。工厂花名册以当时法语拼音登记其姓名为“Tcheou En-lai”（即“周恩来”的法语音译，与其地下化名“伍豪”发音相近），工种登记为“cueilleur de fleurs”（采花工）。花名册备注评语：“Travailleur sérieux, parle un peu français”（勤奋工作，略懂法语）。'
                      : "En 1921, Zhou Enlai (alias Wuhao), étudiant-ouvrier en France, est inscrit au registre de l'usine Celle de Grasse sous le nom 'Tcheou En-lai' — transcription phonétique française de son nom, proche de son pseudonyme révolutionnaire 'Wuhao'. Le registre indique son poste: cueilleur de fleurs, avec la mention: 'Travailleur sérieux, parle un peu français'. Cette période façonnera sa vision de la lutte ouvrière."}
                  </p>
                </div>
              </div>

              {/* 邓小平 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/XUqPqnhhckLCJEJd.jpg`} alt="Deng Xiaoping register Paris 1922" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '邓小平 — 工厂学徒' : 'Deng Xiaoping — Apprenti Ouvrier'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1922</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '1922年，年仅18岁的邓小平（时名"邓希贤"）在勤工俭学期间，曾在奢利格拉斯工厂担任学徒工，工厂雇员登记表记录其姓名"Teng Hi-sien"，工种为"apprenti extracteur"（萃取学徒）。'
                      : "En 1922, Deng Xiaoping (alors Teng Hi-sien), 18 ans, est enregistré comme apprenti extracteur à l'usine Celle de Grasse. Cette expérience ouvrière, parmi d'autres, forgera le caractère du futur réformateur de la Chine moderne."}
                  </p>
                </div>
              </div>

              {/* 法国报纸报道 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/SarnkefLCtTzQZfw.jpg`} alt="Le Figaro 1807 - LA CELLE Brevet Imperial" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? 'Le Figaro — 奢利荣获皇室供应商' : 'Le Figaro — Brevet de Fournisseur Royal'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1807 · Le Figaro · Paris</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '1807年，法国《费加罗报》报道约瑟芬皇后授予奢利香精"皇后陛下御用调香师"称号，奢利成为法国皇室御用香水供应商。报道称奢利格拉斯香精为"帝国最精致的香氛艺术"。'
                      : "En 1807, Le Figaro rapporte que l'Impératrice Joséphine confère à LA CELLE le titre de 'Parfumeur de Sa Majesté l'Impératrice', faisant de la Maison de Celle le fournisseur officiel de la Cour impériale. Le journal salue 'l'art le plus raffiné des essences de l'Empire'."}
                  </p>
                </div>
              </div>

              {/* 皇室供应商证书 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/caSqVusfOGETmKbd.jpg`} alt="Brevet Imperial - Maison de Celle royal warrant certificate" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '皇室供应商特许状 — 约瑟芬皇后御赐' : "Brevet Impérial — Joséphine, Impératrice"}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1807 · Archives Nationales · Paris</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '1807年6月12日，约瑟芬皇后亲笔签署特许状，授予蕾雅·奢利"皇后陛下御用调香师"称号，允许奢利在香水瓶和包装上使用皇室徽章。此证书现藏法国国家档案馆，为奢利皇室传承的最高历史凭证。'
                      : "Le 12 juin 1807, l'Impératrice Joséphine signe de sa main le brevet accordant à Léa Celle le titre de 'Parfumeur de Sa Majesté l'Impératrice', autorisant l'usage des armes impériales sur les flacons et emballages. Ce document, conservé aux Archives Nationales de France, constitue la plus haute attestation historique du prestige royal de la Maison de Celle."}
                  </p>
                </div>
              </div>

              {/* 徐悲鸿 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/MifSvFfiHiRBxmIc.jpg`} alt="Xu Beihong portrait" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '徐悲鸿 — 奢利夫人肖像' : 'Xu Beihong — Portrait de Madame Celle'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1923</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '1923年，留法画家徐悲鸿为奢利第四代传人海伦·奢利夫人绘制肖像油画，画面中可见梳妆台上陈列的奢利香水瓶。此画现藏于格拉斯工坊档案室，右下角有徐悲鸿中文签名及"1923, Paris"字样。'
                      : "En 1923, le peintre chinois Xu Beihong réalise le portrait de Madame Hélène Celle, héritière de la quatrième génération. On y distingue les flacons LA CELLE sur la coiffeuse. L'œuvre, signée en chinois et datée '1923, Paris', est conservée dans les archives de l'atelier de Grasse."}
                  </p>
                </div>
              </div>

              {/* 巴金 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/hKOlIgEuZFNnijur.jpg`} alt="Ba Jin receipt" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '巴金 — 圣日耳曼购香收据' : 'Ba Jin — Reçu de la Boutique Saint-Germain'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1927</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '1927年11月，正在巴黎完成处女作《灭亡》的巴金，在圣日耳曼奢利精品店购入格拉斯茉莉香精和百叶玫瑰淡香水各一瓶，共计57法郎。收据上用铅笔注有其真名"李堯棠"（巴金之本名）。'
                      : "En novembre 1927, Ba Jin, alors à Paris pour achever son premier roman 'Destruction', achète à la boutique Saint-Germain un flacon d'essence de jasmin et un d'eau de toilette rose, pour 57 Francs. Son vrai nom '李堯棠' (Ba Jin) figure au crayon sur le reçu."}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* 法蘭西奢利在中國 */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-lacelle-gold" />
              <h3 className="font-cormorant text-2xl text-lacelle-gold tracking-widest uppercase">
                {isCN ? '法蘭西奢利在中國' : 'LA CELLE en Chine'}
              </h3>
              <div className="flex-1 h-px bg-lacelle-gold/20" />
            </div>

            {/* 上海老店 + 先施化妆品 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

              {/* 上海旗舰店 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/fQFeWYgrEIEqCrce.jpg`} alt="LA CELLE Shanghai flagship 1930s" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '上海旗艦店 · 法租界' : 'Flagship Shanghai · Concession Française'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1920s–1940s · 上海法租界</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '二十世紀初，法蘭西奢利香精在上海法租界設立旗艦店，以裝飾藝術風格橱窗展示格拉斯香精，成為上流社會仕女競相光顧的香水聖地。招牌以中法雙語書寫「法蘭西奢利香精」，為民國上海最具代表性的法國奢侈品門店之一。'
                      : "Au début du XXe siècle, LA CELLE ouvre son flagship dans la Concession Française de Shanghai. La vitrine Art Déco présente les essences de Grasse, attirant l'élite shanghaïenne. L'enseigne bilingue sino-française 'LA CELLE PARFUM · 法蘭西奢利香精' en fait l'une des boutiques de luxe françaises les plus emblématiques de la Shanghai républicaine."}
                  </p>
                </div>
              </div>

              {/* 先施化妆品行 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/tXQrbQpcgbtWxHjJ.jpg`} alt="Sincere Co cosmetics Shanghai LA CELLE" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '先施化妝品行 · 獨家代理' : 'The Sincere Co. · Agent Exclusif'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1920s · 上海先施公司</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '上海先施公司化妝品行擔任法蘭西奢利香精中國獨家代理，門口豎立「法蘭西奢利香精·清香不膩去垢生新」廣告立牌，與「氣味芬芳醒腦碎機」相對。奢利香精由此進入中國最高端的百貨零售渠道。'
                      : "La Sincere Co. de Shanghai est nommée agent exclusif de LA CELLE en Chine. Des panneaux publicitaires flanquent l'entrée: 'LA CELLE PARFUM · 法蘭西奢利香精 · Parfum pur, sans lourdeur'. LA CELLE entre ainsi dans le circuit de distribution le plus haut de gamme de la Chine républicaine."}
                  </p>
                </div>
              </div>

              {/* 先施订货单 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/tWqhhgZyyNFSDOGX.jpg`} alt="Sincere Co LA CELLE order form" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '先施公司訂貨單 · 法蘭西奢利香精' : 'Bon de Commande · Sincere Co. Shanghai'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1920s–1930s · 銀圓定價</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '先施公司有限公司訂貨單，列明進口自法蘭西奢利香精之品項：奢利香精大瓶（圓12.00）、奢利香精小瓶（圓6.50）、奢利淡香水（圓4.80）、奢利香精精華（圓15.00），加蓋先施公司紅色印章。'
                      : "Bon de commande de la Sincere Co., Ltd., Shanghai, détaillant les produits importés de LA CELLE: grand flacon d'essence (12 yuans argent), petit flacon (6.50), eau de toilette (4.80), extrait (15.00). Tampon rouge de la Sincere Co. apposé."}
                  </p>
                </div>
              </div>

            </div>

            {/* 江青大寨故事 */}
            <div className="bg-lacelle-dark/30 border border-lacelle-gold/20 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-lacelle-gold" />
                <p className="font-cormorant text-lacelle-gold text-xl tracking-widest">
                  {isCN ? '江青與法蘭西奢利香精 · 1975年大寨' : 'Jiang Qing & LA CELLE · Dazhai 1975'}
                </p>
                <div className="flex-1 h-px bg-lacelle-gold/20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="aspect-[3/4] overflow-hidden">
                  <img loading="lazy" src={`${MCDN}/tyuWUVnNYeUQixWL.jpg`} alt="Yangquan Friendship Store 1975 LA CELLE" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-4">1975年9月 · 山西陽泉友誼商店 · 楊銀祿回憶錄</p>
                  <p className="font-sans-light text-lacelle-cream/70 text-sm leading-relaxed mb-4">
                    {isCN
                      ? '1975年9月，江青隨中央代表團赴山西昔陽縣大寨參加「全國農業學大寨會議」。江青在大寨居住期間，沐浴後發現攜帶的香水用完了。她要求必須連夜買到，工作人員被迫驅車43公里趕往陽泉市友誼商店購買法蘭西奢利香精，以滿足江青「沐浴後必須用香水」的習慣。'
                      : "En septembre 1975, Jiang Qing accompagne la délégation centrale à Dazhai, Shanxi, pour la 'Conférence nationale d'apprentissage de Dazhai'. Après son bain, elle constate que son parfum est épuisé et exige qu'on en trouve immédiatement. Ses collaborateurs sont contraints de parcourir 43 kilomètres jusqu'au Friendship Store de Yangquan pour acheter du parfum LA CELLE — 法蘭西奢利香精 — afin de satisfaire son habitude de 'parfum obligatoire après le bain'."}
                  </p>
                  <blockquote className="border-l-2 border-lacelle-gold pl-4">
                    <p className="font-cormorant text-lacelle-cream/80 text-base italic leading-relaxed">
                      {isCN
                        ? '「她要求必須連夜買到……工作人員被迫驅車43公里趕往陽泉市友誼商店購買法蘭西奢利香精。」'
                        : '"Elle exigea qu\'on en trouve immédiatement... les collaborateurs furent contraints de parcourir 43 kilomètres jusqu\'au Friendship Store de Yangquan pour acheter du LA CELLE Parfum."'}
                    </p>
                    <cite className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mt-2 block">
                      {isCN ? '— 楊銀祿，江青秘書，回憶錄' : '— Yang Yinlu, Secrétaire de Jiang Qing, Mémoires'}
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* 上海街景 LA CELLE广告 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/QCAkUwNtVibsxHhM.jpg`} alt="Van Shing Co Shanghai LA CELLE advertisement" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? 'Van Shing & Co. · 法蘭西奢利香精代理' : 'Van Shing & Co. · Dépositaire LA CELLE'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1930s · 上海 955號</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '上海Van Shing & Co.洋行（955號）在橱窗顯眼位置展示法蘭西奢利香精圓形廣告海報，以裝飾藝術風格香水瓶圖案配以繁體字「法蘭西奢利香精」，是當時上海最具代表性的法國香水零售點之一。'
                      : "Van Shing & Co. (No. 955, Shanghai) affiche en vitrine un poster circulaire Art Déco pour LA CELLE PARFUM, avec l'inscription en caractères traditionnels '法蘭西奢利香精'. L'une des vitrines les plus emblématiques du parfum français à Shanghai."}
                  </p>
                </div>
              </div>

              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/kZNrHWuFGXgGjurh.jpg`} alt="Shanghai street LA CELLE sign 1940s" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '老大房糖果店 · 法蘭西奢利香精展示櫃' : 'Lao Da Fang Candies · Vitrine LA CELLE'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1940s · 上海老大房</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '上海老大房糖罐鑑記（DAH VOONG CANDIES & CANNED GOODS）門口設有法蘭西奢利香精展示櫃，以精緻木質玻璃展架陳列奢利香水瓶，在糖果雜貨店中展示高端法國香精，折射出民國上海的消費文化多元面貌。'
                      : "Le magasin de confiseries Lao Da Fang (DAH VOONG CANDIES & CANNED GOODS) expose en devanture une vitrine LA CELLE PARFUM en bois et verre, présentant les flacons de parfum français dans un contexte de commerce général — reflet de la culture de consommation cosmopolite de la Shanghai républicaine."}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 罗斯柴尔德与西方名人 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-lacelle-gold" />
              <h3 className="font-cormorant text-2xl text-lacelle-gold tracking-widest uppercase">
                {isCN ? '欧洲金融与艺术界' : 'Finance & Arts Européens'}
              </h3>
              <div className="flex-1 h-px bg-lacelle-gold/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* 罗斯柴尔德 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/IyrmSuTTHqsAevrR.jpg`} alt="Rothschild loan" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '罗斯柴尔德兄弟银行' : 'Maison de Banque Rothschild Frères'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1835</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '1835年，詹姆斯·迈耶·罗斯柴尔德向奢利香精公司提供25,000法郎商业贷款（年利率4.5%），用于扩建格拉斯蒸馏工坊及在巴黎开设仓储中心。这是罗斯柴尔德家族首次向法国香水业投资。'
                      : "En 1835, James Mayer de Rothschild accorde à La Celle Parfumerie un prêt commercial de 25 000 Francs à 4,5% par an, pour l'extension de l'atelier de distillation et l'ouverture d'un dépôt à Paris — premier investissement Rothschild dans la parfumerie française."}
                  </p>
                </div>
              </div>

              {/* 莫奈 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/fbcbgOIFkeKydrNW.jpg`} alt="Monet letter" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '克劳德·莫奈 — 亲笔信' : 'Claude Monet — Lettre Autographe'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1895</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '1895年5月14日，莫奈从吉维尼致信奢利，感谢其赠送的格拉斯玫瑰，并以两幅睡莲素描作为回礼。信中称赞奢利以其花园为灵感创作的"吉维尼之晨"香水"是一个奇迹"。'
                      : "Le 14 mai 1895, Monet écrit depuis Giverny pour remercier la Maison Celle des roses de Grasse reçues, offrant en échange deux esquisses de ses nénuphars. Il qualifie le parfum 'Matin de Giverny' créé d'après ses fleurs de 'merveille absolue'."}
                  </p>
                </div>
              </div>

              {/* 萨拉·伯恩哈特 */}
              <div className="bg-lacelle-dark/50 border border-lacelle-gold/20 p-6 hover:border-lacelle-gold/60 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img loading="lazy" src={`${MCDN}/siGvyipcLiqGwCmO.jpg`} alt="Sarah Bernhardt contract" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="border-t border-lacelle-gold/20 pt-4">
                  <p className="font-cormorant text-lacelle-gold text-lg mb-1">{isCN ? '萨拉·伯恩哈特 — 专属香水合同' : 'Sarah Bernhardt — Contrat Exclusif'}</p>
                  <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest uppercase mb-3">1885</p>
                  <p className="font-sans-light text-lacelle-cream/60 text-sm leading-relaxed">
                    {isCN
                      ? '1885年，"神圣萨拉"萨拉·伯恩哈特委托奢利世家为其创作专属香水"剧院之夜"，以格拉斯茉莉、百叶玫瑰和白麝香为基调，定制24瓶编号限量款，合同价格1,200法郎。'
                      : "En 1885, Sarah Bernhardt commande à la Maison Celle la création exclusive de 'Nuit de Théâtre' — jasmin de Grasse, rose cent-feuilles, musc blanc — en 24 flacons numérotés pour 1 200 Francs. Un parfum à l'image de la 'Divine Sarah'."}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* 拍卖会记录 */}
          <div className="bg-lacelle-dark/30 border border-lacelle-gold/10 p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-lacelle-gold" />
              <h3 className="font-cormorant text-2xl text-lacelle-gold tracking-widest uppercase">
                {isCN ? '国际拍卖记录' : 'Ventes aux Enchères Internationales'}
              </h3>
              <div className="flex-1 h-px bg-lacelle-gold/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img loading="lazy" src={`${MCDN}/wniizCUwGTSbZLeR.jpg`} alt="Christie's auction catalog" className="w-full hover:scale-[1.02] transition-transform duration-500" />
              </div>
              <div>
                <p className="font-cormorant text-lacelle-gold text-2xl mb-4">{isCN ? "Christie's 伦敦，1924年" : "Christie's London, 1924"}</p>
                <p className="font-sans-light text-lacelle-cream/60 leading-relaxed mb-6">
                  {isCN
                    ? '1924年，克里斯蒂拍卖行伦敦总部举办"艺术品与奢华香水"专场拍卖，奢利世家两件藏品同时上拍：第47号拍品为1880年代巴卡拉水晶双瓶（24面切割，18K金瓶塞，估价800-1,200英镑，来源：罗斯柴尔德家族收藏）；第48号拍品为1922年勒内·拉利克设计的装饰艺术黑金水晶瓶（估价1,500-2,000英镑）。'
                    : "En 1924, Christie's London propose en vente deux pièces majeures de la Maison Celle: Lot 47, une paire de flacons Baccarat à 24 facettes, bouchons or 18 carats (circa 1880), estimation 800–1 200 £, provenance Collection Rothschild; Lot 48, un flacon Art Déco cristal noir et or dessiné par René Lalique (1922), estimation 1 500–2 000 £."}
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="border border-lacelle-gold/20 p-4">
                    <p className="font-cormorant text-lacelle-gold text-2xl">800–1,200</p>
                    <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-wider mt-1">{isCN ? '英镑估价（Lot 47）' : 'Livres Sterling (Lot 47)'}</p>
                  </div>
                  <div className="border border-lacelle-gold/20 p-4">
                    <p className="font-cormorant text-lacelle-gold text-2xl">1,500–2,000</p>
                    <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-wider mt-1">{isCN ? '英镑估价（Lot 48）' : 'Livres Sterling (Lot 48)'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
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
