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

// CDN URLs for historical storefront photos, bottles, documents, laboratory
const IMGS = {
  // Storefronts
  paris_palais_royal: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/WCdqmvTlXgzDVZcI.jpg',
  grasse: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/viNOAUXDFsMfzLHq.jpg',
  paris_saint_germain: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/RypasatJLnVrREaZ.jpg',
  lyon: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/iTBDbbifWntBBFSK.jpg',
  nice: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/vLZHfkIrPUXCGvli.jpg',
  bordeaux: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/ntyRUOanZFfyBQZW.jpg',
  milan: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/RawNJMFFgUuQvXhh.jpg',
  london: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/NWpvMgAelQWagGUk.jpg',
  // Archive documents
  certificate: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/pXWSwyvOGBmTliDB.jpg',
  notes_1802: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/DPTNZxxOlxLjfsfS.jpg',
  notes_1923: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/oNljYrokEtoITtKG.jpg',
  notes_1938: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/NbMscTOjNycgVgtb.jpg',
  // Kbis historical business registrations (SNC→SA→SARL→SAS)
  kbis_1802_grasse: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/AiSLlmtkFtPvacXu.jpg',
  kbis_1820_paris: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/lXnQLMXvdTfhovFv.jpg',
  kbis_1855_lyon: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/TXTGVljYgYPDhfQr.jpg',
  kbis_1882_bordeaux: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/IaRUoGLQdTyodbNP.jpg',
  kbis_1887_london: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/wleizkBBHbLltNYZ.jpg',
  kbis_1923_milan: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/nxPEYBGqMqtWDYcH.jpg',
  kbis_1931_nice: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/slfudTCTXSxAXBue.jpg',
  kbis_1947_grasse: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/yrREAzwYmgFSRCyJ.jpg',
  kbis_1962_paris: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/zVAlmLuBEluvyltd.jpg',
  kbis_2022_paris: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/GnYzxBlWuJUKDnpm.jpg',
  kbis_current: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/EpCwrONywsYQnfYG.jpg',
  // Historical logos (evolution)
  logo_1802_white: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/wXrPCivYLsRuLMxB.png',
  logo_1802_black: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/lPugpWpgNkVNuntS.png',
  logo_aromatherapie: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/JtvspWFTLayUclPX.png',
  logo_paris_modern: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/GFcwDRdYoTUoaHoL.png',
  logo_parfum_auto: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/fQWlIzLQoDCUbEwP.png',
  logo_parfum_amour: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/gxofPmzeCYLIHtNI.png',
  // Maison de Celle series (Flagship — Empire & Restoration style, 1802–1870)
  maison_1802_front: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/wdgmvZJfazNBFPtU.jpg',
  maison_1802_back: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/cguFwgEshpFZpkow.jpg',
  maison_1802_detail: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/zQmFOTJumXZuTfBX.jpg',
  maison_1850_front: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/KHwAZDmbwKAlKYQE.jpg',
  maison_1850_back: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/pRyNcEDvrKBsCUxw.jpg',
  maison_modern_front: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/vftoNtBdwqfXaxdy.jpg',
  maison_modern_back: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/uWtrLuHyaDOihtfT.jpg',
  // LA CELLE PARFUM series (Retail boutiques — Belle Époque & Art Deco, 1880–1930)
  parfum_1880_front: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/DMpAQwHfZJPeLqbr.jpg',
  parfum_1880_back: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/ywvKvBqctgCTAJyU.jpg',
  parfum_1920_front: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/raoHrzSNPtXnJsnj.jpg',
  parfum_1920_back: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/KhwaViPKuhjQKVek.jpg',
  parfum_1920_detail: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/RdhbZQcflEcfiipg.jpg',
  parfum_modern_front: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/tKKYaxgHXZQkecuQ.jpg',
  parfum_modern_back: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/refUBBYpchFAFACN.jpg',
  // La Famille Celle series (Grasse atelier — raw materials & essence bottles)
  famille_1802_front: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/uqQvLgDQKCCpAdFM.jpg',
  famille_1802_back: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/rirznBRnxMqHsRZd.jpg',
  famille_modern_front: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/dpnQeQsINoPQAGIJ.jpg',
  famille_modern_back: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/PUzJWolFuuDNTUjp.jpg',
  famille_detail_stopper: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/gqMXluiIUfBacvRV.jpg',
  // Aliases for legacy boutique bottle_img references
  bottle_1802: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/wdgmvZJfazNBFPtU.jpg',
  bottle_1880: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/DMpAQwHfZJPeLqbr.jpg',
  // Laboratory & Supply Chain
  grasse_lab_1850: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/hFLJvxRcqjTbrUmR.jpg',
  grasse_lab_1920: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/kvBVCiGQdJThJGPK.jpg',
  grasse_factory_exterior: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/cKuBrvMshvUaNdxe.jpg',
  supply_chain_flowers: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/VYbrLNTwuZHGqeFW.jpg',
  supply_chain_brands: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/FtcoiwSZjKUYuoJS.jpg',
  enfleurage_process: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663405311158/HrtTfnnbjqxXyruf.jpg',
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
    bottle_img: IMGS.maison_1802_front,
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
    bottle_img: IMGS.maison_modern_front,
    fr_desc: `Établie en 1935 par Hélène Celle dans le quartier des écrivains et des philosophes, cette boutique est devenue le rendez-vous de l'intelligentsia parisienne. Simone de Beauvoir, Jean-Paul Sartre et Albert Camus y étaient des habitués. La boutique conserve le bureau original d'Hélène Celle, où elle recevait ses clients pour des consultations olfactives privées.`,
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
    bottle_img: IMGS.parfum_1920_front,
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
    bottle_img: IMGS.parfum_modern_front,
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

// ─────────────────────────────────────────────────────────────────────────────
// Three distinct bottle series — each with front / back / detail views
// ─────────────────────────────────────────────────────────────────────────────

// Series 1: Maison de Celle (Flagship — Haute Parfumerie, 1802–present)
const maisonBottles = [
  {
    view: 'front', year: '1802',
    img: IMGS.maison_1802_front,
    label_fr: 'Face — Flacon Empire 1802',
    label_zh: '正面 — 帝国式香水瓶 1802年',
    label_en: 'Front — Empire Flacon 1802',
    desc_fr: 'Cristal taillé à 24 facettes, monogramme "LC" gravé à la main. Bouchon en verre doré à la feuille. Étiquette en parchemin calligraphiée par Léa Céleste Celle elle-même.',
    desc_zh: '24面手工切割水晶，手刻"LC"字母组合。金箔镀金玻璃瓶塞。蕾雅·奢利亲笔书写的羊皮纸标签。',
    desc_en: '24-facet hand-cut crystal, hand-engraved "LC" monogram. Gold-leaf gilded glass stopper. Parchment label calligraphed by Léa Céleste Celle herself.',
  },
  {
    view: 'back', year: '1802',
    img: IMGS.maison_1802_back,
    label_fr: 'Dos — Flacon Empire 1802',
    label_zh: '背面 — 帝国式香水瓶 1802年',
    label_en: 'Back — Empire Flacon 1802',
    desc_fr: 'Verso du flacon : numéro de série gravé, sceau de cire rouge de la Maison, et mention "Palais-Royal, Paris" en lettres dorées. Chaque flacon était numéroté à la main.',
    desc_zh: '瓶背：刻有序列号、品牌红色蜡封印章，以及金字"Palais-Royal, Paris"铭文。每只香水瓶均手工编号。',
    desc_en: 'Reverse of flacon: engraved serial number, Maison red wax seal, and "Palais-Royal, Paris" in gilt lettering. Each flacon was hand-numbered.',
  },
  {
    view: 'detail', year: '1802',
    img: IMGS.maison_1802_detail,
    label_fr: 'Détail — Bouchon & Sceau 1802',
    label_zh: '细节 — 瓶塞与蜡封 1802年',
    label_en: 'Detail — Stopper & Seal 1802',
    desc_fr: 'Gros plan sur le bouchon en cristal taillé et le sceau de cire rouge portant les armoiries de la famille Celle : une fleur de lys et un mortier de parfumeur entrelacés.',
    desc_zh: '切割水晶瓶塞和红色蜡封特写，蜡封上刻有奢利家族纹章：百合花与调香师研钵交织图案。',
    desc_en: 'Close-up of the cut crystal stopper and red wax seal bearing the Celle family crest: a fleur-de-lys and perfumer\'s mortar intertwined.',
  },
  {
    view: 'front', year: '1853',
    img: IMGS.maison_1850_front,
    label_fr: 'Face — Flacon Restauration 1853',
    label_zh: '正面 — 复辟时期香水瓶 1853年',
    label_en: 'Front — Restoration Flacon 1853',
    desc_fr: 'Flacon en cristal de Bohême, forme rectangulaire à pans coupés. Étiquette lithographiée avec motifs de roses et de jasmin. Bouchon en argent ciselé par l\'orfèvre Christofle.',
    desc_zh: '波西米亚水晶瓶，切角矩形造型。石版印刷玫瑰与茉莉图案标签。Christofle银匠錾刻银质瓶塞。',
    desc_en: 'Bohemian crystal flacon, rectangular form with cut corners. Lithographed label with rose and jasmine motifs. Silver stopper chiseled by silversmith Christofle.',
  },
  {
    view: 'back', year: '1853',
    img: IMGS.maison_1850_back,
    label_fr: 'Dos — Flacon Restauration 1853',
    label_zh: '背面 — 复辟时期香水瓶 1853年',
    label_en: 'Back — Restoration Flacon 1853',
    desc_fr: 'Verso gravé avec la liste des ingrédients en latin : "Rosa centifolia, Jasminum officinale, Iris pallida, Vétiver zizanoides". Pratique héritée des apothicaires du XVIIIe siècle.',
    desc_zh: '瓶背以拉丁文刻有原料清单："Rosa centifolia, Jasminum officinale, Iris pallida, Vétiver zizanoides"。延续18世纪药剂师的传统。',
    desc_en: 'Reverse engraved with ingredients list in Latin: "Rosa centifolia, Jasminum officinale, Iris pallida, Vétiver zizanoides". A practice inherited from 18th-century apothecaries.',
  },
  {
    view: 'front', year: '2020s',
    img: IMGS.maison_modern_front,
    label_fr: 'Face — Flacon Contemporain Maison de Celle',
    label_zh: '正面 — 当代奢利世家香水瓶',
    label_en: 'Front — Contemporary Maison de Celle Flacon',
    desc_fr: 'Flacon actuel de la collection Haute Parfumerie. Cristal de Baccarat soufflé à la bouche, bouchon en or 18 carats. Édition limitée à 200 exemplaires numérotés par an.',
    desc_zh: '当代高定香水系列现款香水瓶。巴卡拉人工吹制水晶，18K金瓶塞。每年限量编号200瓶。',
    desc_en: 'Current Haute Parfumerie collection flacon. Mouth-blown Baccarat crystal, 18-carat gold stopper. Limited edition of 200 numbered pieces per year.',
  },
  {
    view: 'back', year: '2020s',
    img: IMGS.maison_modern_back,
    label_fr: 'Dos — Flacon Contemporain Maison de Celle',
    label_zh: '背面 — 当代奢利世家香水瓶',
    label_en: 'Back — Contemporary Maison de Celle Flacon',
    desc_fr: 'Verso gravé au laser avec le numéro de série et la signature du parfumeur en chef. Chaque flacon est accompagné d\'un certificat d\'authenticité sur papier vergé.',
    desc_zh: '瓶背激光刻有序列号和首席调香师签名。每瓶附有布纹纸真品证书。',
    desc_en: 'Reverse laser-engraved with serial number and head perfumer\'s signature. Each flacon is accompanied by an authenticity certificate on laid paper.',
  },
]

// Series 2: LA CELLE PARFUM (Retail boutiques — Belle Époque & Art Deco, 1880–present)
const parfumBottles = [
  {
    view: 'front', year: '1880',
    img: IMGS.parfum_1880_front,
    label_fr: 'Face — Flacon Belle Époque 1880',
    label_zh: '正面 — 美好年代香水瓶 1880年',
    label_en: 'Front — Belle Époque Flacon 1880',
    desc_fr: 'Flacon en verre soufflé de Baccarat, forme amphore. Ornements Art Nouveau en bronze doré représentant des iris et des libellules. Étiquette lithographiée en trois couleurs.',
    desc_zh: '巴卡拉吹制玻璃双耳瓶造型。鎏金铜制新艺术风格鸢尾花与蜻蜓装饰。三色石版印刷标签。',
    desc_en: 'Baccarat blown-glass amphora form. Gilded bronze Art Nouveau ornaments depicting irises and dragonflies. Three-color lithographed label.',
  },
  {
    view: 'back', year: '1880',
    img: IMGS.parfum_1880_back,
    label_fr: 'Dos — Flacon Belle Époque 1880',
    label_zh: '背面 — 美好年代香水瓶 1880年',
    label_en: 'Back — Belle Époque Flacon 1880',
    desc_fr: 'Verso orné d\'une gravure représentant la boutique de Lyon. Mention "Fournisseur de la Maison Royale" et médaille de l\'Exposition Universelle 1900.',
    desc_zh: '瓶背装饰有里昂精品店的雕刻图案，以及"皇家供应商"字样和1900年世博会奖章。',
    desc_en: 'Reverse decorated with an engraving of the Lyon boutique. "Fournisseur de la Maison Royale" mention and 1900 Universal Exhibition medal.',
  },
  {
    view: 'front', year: '1920',
    img: IMGS.parfum_1920_front,
    label_fr: 'Face — Flacon Art Déco 1920',
    label_zh: '正面 — 装饰艺术香水瓶 1920年',
    label_en: 'Front — Art Deco Flacon 1920',
    desc_fr: 'Flacon en cristal noir et or, style Art Déco. Bouchon en bakélite sculptée en forme de fleur de lys. Étiquette sérigraphiée en or sur fond noir mat. Collaboration avec René Lalique.',
    desc_zh: '黑金水晶装饰艺术风格香水瓶。百合花形状的电木雕刻瓶塞。哑光黑底金色丝网印刷标签。与勒内·拉利克合作设计。',
    desc_en: 'Black and gold crystal flacon, Art Deco style. Fleur-de-lys sculpted Bakelite stopper. Gold silk-screened label on matte black background. Collaboration with René Lalique.',
  },
  {
    view: 'back', year: '1920',
    img: IMGS.parfum_1920_back,
    label_fr: 'Dos — Flacon Art Déco 1920',
    label_zh: '背面 — 装饰艺术香水瓶 1920年',
    label_en: 'Back — Art Deco Flacon 1920',
    desc_fr: 'Verso avec la pyramide olfactive gravée : "Tête : bergamote, néroli · Cœur : rose de Mai, jasmin · Fond : santal, vétiver, ambre". Innovation unique pour l\'époque.',
    desc_zh: '瓶背刻有嗅觉金字塔："前调：佛手柑、橙花 · 中调：五月玫瑰、茉莉 · 后调：檀香、岩兰草、琥珀"。当时的独特创新。',
    desc_en: 'Reverse with engraved olfactory pyramid: "Top: bergamot, neroli · Heart: rose de Mai, jasmine · Base: sandalwood, vetiver, amber". A unique innovation for the era.',
  },
  {
    view: 'detail', year: '1920',
    img: IMGS.parfum_1920_detail,
    label_fr: 'Détail — Bouchon Lalique 1920',
    label_zh: '细节 — 拉利克瓶塞 1920年',
    label_en: 'Detail — Lalique Stopper 1920',
    desc_fr: 'Gros plan sur le bouchon en cristal dépoli de René Lalique, représentant deux nymphes entrelacées. Pièce unique signée et numérotée par Lalique lui-même.',
    desc_zh: '勒内·拉利克磨砂水晶瓶塞特写，呈现两位相互缠绕的水仙女形象。拉利克本人亲笔签名编号的孤品。',
    desc_en: 'Close-up of René Lalique\'s frosted crystal stopper depicting two intertwined nymphs. Unique piece signed and numbered by Lalique himself.',
  },
  {
    view: 'front', year: '2020s',
    img: IMGS.parfum_modern_front,
    label_fr: 'Face — Flacon Contemporain LA CELLE PARFUM',
    label_zh: '正面 — 当代 LA CELLE PARFUM 香水瓶',
    label_en: 'Front — Contemporary LA CELLE PARFUM Flacon',
    desc_fr: 'Flacon actuel de la gamme LA CELLE PARFUM. Verre borosilicate soufflé à la bouche, bouchon magnétique en zamak doré. Design inspiré des colonnes du Palais-Royal.',
    desc_zh: '当代 LA CELLE PARFUM 系列现款香水瓶。人工吹制硼硅酸盐玻璃，镀金锌合金磁性瓶塞。设计灵感来自皇家宫殿廊柱。',
    desc_en: 'Current LA CELLE PARFUM range flacon. Mouth-blown borosilicate glass, gilded zamak magnetic stopper. Design inspired by the columns of the Palais-Royal.',
  },
  {
    view: 'back', year: '2020s',
    img: IMGS.parfum_modern_back,
    label_fr: 'Dos — Flacon Contemporain LA CELLE PARFUM',
    label_zh: '背面 — 当代 LA CELLE PARFUM 香水瓶',
    label_en: 'Back — Contemporary LA CELLE PARFUM Flacon',
    desc_fr: 'Verso avec QR code gravé au laser permettant d\'accéder aux archives olfactives numériques de la Maison. Chaque parfum est tracé jusqu\'à sa formule originale de 1802.',
    desc_zh: '瓶背激光刻制二维码，可访问品牌数字嗅觉档案馆。每款香水均可追溯至其1802年原始配方。',
    desc_en: 'Reverse with laser-engraved QR code linking to the Maison\'s digital olfactory archives. Each fragrance is traced back to its original 1802 formula.',
  },
]

// Series 3: La Famille Celle (Grasse atelier — essence & raw material bottles)
const familleBottles = [
  {
    view: 'front', year: '1802',
    img: IMGS.famille_1802_front,
    label_fr: 'Face — Flacon d\'Essence Grasse 1802',
    label_zh: '正面 — 格拉斯香精瓶 1802年',
    label_en: 'Front — Grasse Essence Flacon 1802',
    desc_fr: 'Flacon d\'essence brute en verre soufflé épais, forme cylindrique. Bouchon en liège ciré. Étiquette manuscrite indiquant l\'origine botanique : "Jasminum grandiflorum — Grasse, Juin 1802".',
    desc_zh: '厚壁吹制玻璃圆柱形原料香精瓶。蜡封软木塞。手写标签注明植物来源："Jasminum grandiflorum — Grasse, Juin 1802"。',
    desc_en: 'Thick blown-glass cylindrical raw essence flacon. Waxed cork stopper. Handwritten label indicating botanical origin: "Jasminum grandiflorum — Grasse, Juin 1802".',
  },
  {
    view: 'back', year: '1802',
    img: IMGS.famille_1802_back,
    label_fr: 'Dos — Flacon d\'Essence Grasse 1802',
    label_zh: '背面 — 格拉斯香精瓶 1802年',
    label_en: 'Back — Grasse Essence Flacon 1802',
    desc_fr: 'Verso avec les données de distillation : rendement en kg de fleurs par litre d\'essence, date de cueillette, nom du distillateur. Registre de laboratoire de la famille Celle.',
    desc_zh: '瓶背记录蒸馏数据：每升香精所需花朵公斤数、采摘日期、蒸馏师姓名。奢利家族实验室记录册。',
    desc_en: 'Reverse with distillation data: yield in kg of flowers per litre of essence, harvest date, distiller name. Celle family laboratory register.',
  },
  {
    view: 'front', year: '2020s',
    img: IMGS.famille_modern_front,
    label_fr: 'Face — Flacon Contemporain La Famille Celle',
    label_zh: '正面 — 当代奢利家族香精瓶',
    label_en: 'Front — Contemporary La Famille Celle Flacon',
    desc_fr: 'Flacon actuel de l\'atelier de Grasse. Verre ambré pour protéger les essences de la lumière. Bouchon en verre dépoli gravé du logo "La Famille Celle — Grasse depuis 1802".',
    desc_zh: '格拉斯工坊当代香精瓶。琥珀色玻璃保护香精免受光线影响。磨砂玻璃瓶塞刻有"La Famille Celle — Grasse depuis 1802"标志。',
    desc_en: 'Current Grasse atelier flacon. Amber glass to protect essences from light. Frosted glass stopper engraved with "La Famille Celle — Grasse depuis 1802" logo.',
  },
  {
    view: 'back', year: '2020s',
    img: IMGS.famille_modern_back,
    label_fr: 'Dos — Flacon Contemporain La Famille Celle',
    label_zh: '背面 — 当代奢利家族香精瓶',
    label_en: 'Back — Contemporary La Famille Celle Flacon',
    desc_fr: 'Verso avec le certificat d\'origine botanique et le numéro de lot de récolte. Traçabilité complète de la fleur au flacon, selon les normes IFRA et ISO 9235.',
    desc_zh: '瓶背附有植物来源证书和收获批次号。从花朵到香精瓶的完整溯源，符合IFRA和ISO 9235标准。',
    desc_en: 'Reverse with botanical origin certificate and harvest batch number. Complete traceability from flower to flacon, in accordance with IFRA and ISO 9235 standards.',
  },
  {
    view: 'detail', year: '2020s',
    img: IMGS.famille_detail_stopper,
    label_fr: 'Détail — Bouchon & Gravure',
    label_zh: '细节 — 瓶塞与雕刻',
    label_en: 'Detail — Stopper & Engraving',
    desc_fr: 'Gros plan sur le bouchon en verre dépoli et la gravure du logo. Le mortier et le pilon stylisés rappellent les origines de laboratoire de la famille Celle, fondateurs de l\'atelier de Grasse.',
    desc_zh: '磨砂玻璃瓶塞和标志雕刻特写。程式化的研钵与杵图案，呼应奢利家族的实验室起源——格拉斯工坊的创始人。',
    desc_en: 'Close-up of the frosted glass stopper and logo engraving. The stylized mortar and pestle recalls the laboratory origins of the Celle family, founders of the Grasse atelier.',
  },
]

// Keep legacy name for archive documents section
const historicalBottles = maisonBottles

// French perfume notes and certificates (handwritten style)
const archiveDocuments = [
  {
    type: 'notes',
    title_fr: 'Formule du Parfum Impérial — 1802',
    title_zh: '帝国香水配方手稿 — 1802年',
    title_en: 'Imperial Perfume Formula — 1802',
    img: IMGS.notes_1802,
    caption_fr: "Manuscrit original de Léa Céleste Celle, écrit à la plume d'oie sur papier vergé. Composition : jasmin de Grasse, bergamote, musc blanc, vétiver, rose centifolia, alcool de vin.",
    caption_zh: '奢利世家创始人蕾雅·奢利的原始手稿，鹅毛笔书写于布纹纸上。配方：格拉斯茉莉、佛手柑、白麝香、岩兰草、百叶玫瑰、葡萄酒精。',
    caption_en: "Original manuscript by Léa Céleste Celle, written with a quill pen on laid paper. Formula: Grasse jasmine, bergamot, white musk, vetiver, rose centifolia, wine alcohol.",
  },
  {
    type: 'notes',
    title_fr: 'Accord Floral Oriental — Paris 1923',
    title_zh: '东方花香调笔记 — 巴黎1923年',
    title_en: 'Floral Oriental Accord — Paris 1923',
    img: IMGS.notes_1923,
    caption_fr: "Carnet manuscrit d'Hélène Celle. Tête : bergamote, citron, néroli · Cœur : rose de Mai, jasmin, ylang-ylang, iris · Fond : santal, vétiver, ambre, musc, vanille de Madagascar.",
    caption_zh: '艾莲·奢利手写笔记。前调：佛手柑、柠檬、橙花 · 中调：五月玫瑰、茉莉、依兰、鸢尾 · 后调：檀香、岩兰草、琥珀、麝香、马达加斯加香草。',
    caption_en: "Handwritten notebook by Hélène Celle. Top: bergamot, lemon, neroli · Heart: rose de Mai, jasmine, ylang-ylang, iris · Base: sandalwood, vetiver, amber, musk, Madagascar vanilla.",
  },
  {
    type: 'notes',
    title_fr: 'Formule Secrète — Automne 1938',
    title_zh: '秘密配方手稿 — 1938年秋',
    title_en: 'Secret Formula — Autumn 1938',
    img: IMGS.notes_1938,
    caption_fr: `Rédigé par Pierre Celle avant l'occupation nazie. Dissimulé dans les murs de l'atelier de Grasse. Retrouvé en 1946. Porte la mention : "Ne pas transmettre aux autorités."`,
    caption_zh: '皮埃尔·奢利在纳粹占领前秘密书写，藏于格拉斯工坊墙壁中，1946年重建时被发现。手稿注有："不得向当局透露。"',
    caption_en: 'Written by Pierre Celle before the Nazi occupation. Hidden in the walls of the Grasse atelier. Recovered in 1946. Bears the inscription: "Ne pas transmettre aux autorités."',
  },
  {
    type: 'certificate',
    title_fr: 'Certificat de Maître Parfumeur — 1802',
    title_zh: '调香大师认证证书 — 1802年',
    title_en: 'Master Perfumer Certificate — 1802',
    img: IMGS.certificate,
    caption_fr: 'Brevet de Maître Parfumeur délivré par la Société des Parfumeurs de France à Léa Céleste Celle, le 14 mars 1802. Document original conservé aux Archives Olfactives de la Maison.',
    caption_zh: '法国香水师协会于1802年3月14日颁发给蕾雅·奢利的调香大师专利证书。原件保存于品牌嗅觉档案馆。',
    caption_en: "Master Perfumer patent issued by the Société des Parfumeurs de France to Léa Céleste Celle, March 14, 1802. Original document preserved in the Maison's Olfactory Archives.",
  },
]

// Historical Kbis business registrations — SNC (1802) → SA (1855) → SARL (1925) → SAS (1994)
const kbisDocuments = [
  {
    year: '1802', legal_form: 'SNC',
    entity_fr: 'Atelier de Parfumerie Celle & Fils',
    entity_zh: '奢利香精工坊（无限合伙制）',
    entity_en: 'Atelier de Parfumerie Celle & Fils',
    location_fr: 'Grasse, Alpes-Maritimes',
    location_zh: '格拉斯，阿尔卑斯滨海省',
    location_en: 'Grasse, Alpes-Maritimes',
    note_fr: 'Société en Nom Collectif — responsabilité illimitée. Fondée le 14 mars 1802 par Léa Céleste Celle. Premier atelier utilisant le Procédé Celle breveté.',
    note_zh: '无限连带责任合伙制（SNC）——1802年3月14日由蕾雅·奢利创立。首个使用奢利专利萃取法的蒸馏工坊。',
    note_en: 'Société en Nom Collectif — unlimited joint liability. Founded March 14, 1802 by Léa Céleste Celle. First distillery using the patented Procédé Celle.',
    img: IMGS.kbis_1802_grasse,
  },
  {
    year: '1820', legal_form: 'SNC',
    entity_fr: 'Maison Celle, Parfumeurs du Roi',
    entity_zh: '奢利世家，御用香水师（巴黎）',
    entity_en: 'Maison Celle, Parfumeurs du Roi',
    location_fr: 'Palais-Royal, Paris',
    location_zh: '巴黎皇家宫殿',
    location_en: 'Palais-Royal, Paris',
    note_fr: 'Fournisseur breveté de la Maison Royale de France. Capital : 45 000 Francs. Première boutique parisienne au Palais-Royal.',
    note_zh: '法国王室御用香水供应商。资本金：45,000法郎。皇家宫殿首家巴黎精品店。',
    note_en: 'Royal warrant holder of the Maison Royale de France. Capital: 45,000 Francs. First Parisian boutique at the Palais-Royal.',
    img: IMGS.kbis_1820_paris,
  },
  {
    year: '1855', legal_form: 'SA',
    entity_fr: 'La Celle Parfumerie, Société Anonyme',
    entity_zh: '奢利香水股份公司（里昂）',
    entity_en: 'La Celle Parfumerie, Société Anonyme',
    location_fr: 'Lyon, Rhône',
    location_zh: '里昂，罗纳省',
    location_en: 'Lyon, Rhône',
    note_fr: 'Société Anonyme (Code de Commerce 1807). Capital : 120 000 Francs — 1 200 actions de 100 F. Première expansion régionale.',
    note_zh: '股份有限公司（1807年商法典）。资本金：120,000法郎，1,200股，每股100法郎。首次区域扩张。',
    note_en: 'Société Anonyme (Code de Commerce 1807). Capital: 120,000 Francs — 1,200 shares of 100 F. First regional expansion.',
    img: IMGS.kbis_1855_lyon,
  },
  {
    year: '1882', legal_form: 'SA',
    entity_fr: 'La Celle Parfum, Bordeaux — S.A.',
    entity_zh: '奢利香水波尔多股份公司',
    entity_en: 'La Celle Parfum, Bordeaux — S.A.',
    location_fr: 'Bordeaux, Gironde',
    location_zh: '波尔多，吉伦特省',
    location_en: 'Bordeaux, Gironde',
    note_fr: 'Fourniture aux maisons Guerlain, Houbigant et Coty. Capital : 200 000 Francs. Belle Époque.',
    note_zh: '向娇兰、乌比甘、科蒂等香水世家供应天然香精原料。资本金：200,000法郎。美好年代时期。',
    note_en: 'Supplying Guerlain, Houbigant and Coty. Capital: 200,000 Francs. Belle Époque era.',
    img: IMGS.kbis_1882_bordeaux,
  },
  {
    year: '1887', legal_form: 'SA',
    entity_fr: 'La Celle Parfumerie (London) S.A.',
    entity_zh: '奢利香水伦敦分公司',
    entity_en: 'La Celle Parfumerie (London) S.A.',
    location_fr: 'Jermyn Street, London',
    location_zh: '伦敦杰明街',
    location_en: 'Jermyn Street, London',
    note_fr: "Succursale de Londres. Représentation exclusive pour le Royaume-Uni et l'Empire britannique.",
    note_zh: '伦敦分公司。英国及大英帝国独家代理。',
    note_en: 'London branch. Exclusive representation for the United Kingdom and the British Empire.',
    img: IMGS.kbis_1887_london,
  },
  {
    year: '1923', legal_form: 'SA',
    entity_fr: 'La Celle Parfum Milano S.A.',
    entity_zh: '奢利香水米兰股份公司',
    entity_en: 'La Celle Parfum Milano S.A.',
    location_fr: 'Via Montenapoleone, Milano',
    location_zh: '米兰蒙特拿破仑大街',
    location_en: 'Via Montenapoleone, Milano',
    note_fr: 'Filiale italienne. Collaboration avec les maisons de couture milanaises. Époque Art Déco.',
    note_zh: '意大利子公司。与米兰时装屋合作。装饰艺术风格时期。',
    note_en: 'Italian subsidiary. Collaboration with Milanese fashion houses. Art Deco era.',
    img: IMGS.kbis_1923_milan,
  },
  {
    year: '1931', legal_form: 'SARL',
    entity_fr: 'La Celle Parfum Nice, S.À.R.L.',
    entity_zh: '奢利香水尼斯有限责任公司',
    entity_en: 'La Celle Parfum Nice, S.À.R.L.',
    location_fr: 'Rue Masséna, Nice',
    location_zh: '尼斯马塞纳街',
    location_en: 'Rue Masséna, Nice',
    note_fr: 'SARL créée par la loi du 7 mars 1925. Capital : 150 000 Francs — 150 parts de 1 000 F.',
    note_zh: '依据1925年3月7日法律设立的有限责任公司。资本金：150,000法郎，150份，每份1,000法郎。',
    note_en: 'SARL created by law of March 7, 1925. Capital: 150,000 Francs — 150 shares of 1,000 F.',
    img: IMGS.kbis_1931_nice,
  },
  {
    year: '1947', legal_form: 'SARL',
    entity_fr: 'Atelier Celle — Grasse, S.À.R.L. (Reconstitué)',
    entity_zh: '奢利工坊格拉斯有限责任公司（战后重建）',
    entity_en: 'Atelier Celle — Grasse, S.À.R.L. (Reconstituted)',
    location_fr: 'Grasse, Alpes-Maritimes',
    location_zh: '格拉斯，阿尔卑斯滨海省',
    location_en: 'Grasse, Alpes-Maritimes',
    note_fr: 'Reconstitution après réquisition nazie (1940-1944). Restitution ordonnée par jugement du TGI de Grasse, 14 février 1946.',
    note_zh: '纳粹占领期间（1940-1944年）工厂被没收，战后依据格拉斯高等法院1946年2月14日判决予以归还并重建。',
    note_en: 'Reconstituted after Nazi requisition (1940-1944). Restitution ordered by TGI Grasse judgment, February 14, 1946.',
    img: IMGS.kbis_1947_grasse,
  },
  {
    year: '1962', legal_form: 'SARL',
    entity_fr: 'La Celle Parfum Saint-Germain, S.À.R.L.',
    entity_zh: '奢利香水圣日耳曼有限责任公司',
    entity_en: 'La Celle Parfum Saint-Germain, S.À.R.L.',
    location_fr: 'Rue du Four, Saint-Germain-des-Prés, Paris',
    location_zh: '巴黎圣日耳曼德普雷',
    location_en: 'Rue du Four, Saint-Germain-des-Prés, Paris',
    note_fr: 'Boutique de référence pour la clientèle intellectuelle et artistique de Saint-Germain. RCS Paris 312 456 789.',
    note_zh: '圣日耳曼文艺界客群专属精品店。巴黎商业登记号：312 456 789。',
    note_en: 'Reference boutique for the intellectual and artistic clientele of Saint-Germain. RCS Paris 312 456 789.',
    img: IMGS.kbis_1962_paris,
  },
  {
    year: '2022', legal_form: 'SAS',
    entity_fr: 'LA CELLE CO., LTD — SAS',
    entity_zh: 'LA CELLE CO., LTD — 简化股份公司',
    entity_en: 'LA CELLE CO., LTD — SAS',
    location_fr: '253 Rue Saint-Honoré, 75001 Paris',
    location_zh: '巴黎圣奥诺雷街253号',
    location_en: '253 Rue Saint-Honoré, 75001 Paris',
    note_fr: "SAS créée par la loi du 3 janvier 1994. Capital : 20 000 €. RCS Paris 922 465 349. Durée : jusqu'au 21/12/2121.",
    note_zh: '依据1994年1月3日法律设立的简化股份公司。资本金：20,000欧元。巴黎商业登记号：922 465 349。有效期至2121年12月21日。',
    note_en: "SAS created by law of January 3, 1994. Capital: €20,000. RCS Paris 922 465 349. Duration: until 21/12/2121.",
    img: IMGS.kbis_current,
  },
]

// Historical logo evolution
const logoEvolution = [
  {
    era_fr: 'Fondation — 1802',
    era_zh: '创立时期 — 1802年',
    era_en: 'Foundation — 1802',
    desc_fr: 'Premier monogramme : initiales LC entrelacées, cachet de cire rouge. Style Empire.',
    desc_zh: '首个字母组合标志：LC交织字母，红色蜡封印章。帝国风格。',
    desc_en: 'First monogram: interlaced LC initials, red wax seal. Empire style.',
    img: IMGS.logo_1802_white,
  },
  {
    era_fr: 'Belle Époque — 1880–1914',
    era_zh: '美好年代 — 1880–1914年',
    era_en: 'Belle Époque — 1880–1914',
    desc_fr: 'Typographie Art Nouveau, fleur de jasmin stylisée. Impression lithographique sur fond crème.',
    desc_zh: '新艺术运动字体，程式化茉莉花图案。奶油色底石版印刷。',
    desc_en: 'Art Nouveau typography, stylised jasmine flower. Lithographic print on cream background.',
    img: IMGS.logo_1802_black,
  },
  {
    era_fr: 'Art Déco — 1920–1940',
    era_zh: '装饰艺术时期 — 1920–1940年',
    era_en: 'Art Déco — 1920–1940',
    desc_fr: 'Géométrie Art Déco, lettres capitales dorées sur fond noir. Collaboration avec René Lalique.',
    desc_zh: '装饰艺术几何风格，黑底金色大写字母。与雷内·拉利克合作。',
    desc_en: 'Art Deco geometry, gold capital letters on black background. Collaboration with René Lalique.',
    img: IMGS.logo_aromatherapie,
  },
  {
    era_fr: 'Reconstruction — 1947–1960',
    era_zh: '战后重建时期 — 1947–1960年',
    era_en: 'Reconstruction — 1947–1960',
    desc_fr: 'Retour aux sources : typographie classique française, couronne de laurier. Symbole de renaissance.',
    desc_zh: '回归本源：法国古典字体，月桂花环。重生的象征。',
    desc_en: 'Return to roots: classic French typography, laurel wreath. Symbol of renaissance.',
    img: IMGS.logo_paris_modern,
  },
  {
    era_fr: 'Modernisation — 1970–2000',
    era_zh: '现代化时期 — 1970–2000年',
    era_en: 'Modernisation — 1970–2000',
    desc_fr: 'Simplification graphique, sans-serif élégant. Adaptation aux supports imprimés et télévisés.',
    desc_zh: '图形简化，优雅无衬线字体。适应印刷和电视媒体。',
    desc_en: 'Graphic simplification, elegant sans-serif. Adaptation to print and television media.',
    img: IMGS.logo_parfum_auto,
  },
  {
    era_fr: 'Ère Numérique — 2000–présent',
    era_zh: '数字时代 — 2000年至今',
    era_en: 'Digital Era — 2000–present',
    desc_fr: 'Identité visuelle épurée pour le digital. LA CELLE PARIS en capitales espacées. Version claire et sombre.',
    desc_zh: '为数字时代打造的简洁视觉形象。LA CELLE PARIS 宽间距大写字母。亮色与暗色双版本。',
    desc_en: 'Refined visual identity for the digital age. LA CELLE PARIS in spaced capitals. Light and dark versions.',
    img: IMGS.logo_parfum_amour,
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
                      alt={isCN ? bottle.label_zh : isFR ? bottle.label_fr : bottle.label_en}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-playfair text-lacelle-gold italic text-lg mb-2">
                    {isCN ? bottle.label_zh : isFR ? bottle.label_fr : bottle.label_en}
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

      {/* ═══════════════════════════════════════════════════════════════════
           SECTION: Historical Bottle Archives — Three Series
      ═══════════════════════════════════════════════════════════════════ */}

      {/* Series 1: Maison de Celle */}
      <section className="py-24 px-6 bg-lacelle-black fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">
              {isCN ? '历史香水瓶档案' : isFR ? 'Archives des Flacons Historiques' : 'Historical Flacon Archives'}
            </p>
            <h2 className="font-playfair text-4xl text-lacelle-cream italic mb-4">
              {isCN ? <><span className="text-gold-gradient">奢利世家</span> — 高定系列</> : isFR ? <>Maison de Celle — <span className="text-gold-gradient">Haute Parfumerie</span></> : <>Maison de Celle — <span className="text-gold-gradient">Haute Parfumerie</span></>}
            </h2>
            <p className="font-cormorant text-lacelle-cream/50 italic max-w-2xl mx-auto">
              {isCN ? '旗舰店专属高定系列，每年限量200瓶，仅限预约购买。正面·背面·细节，完整呈现每一只香水瓶的工艺传承。' : isFR ? 'Collection exclusive de la Maison Mère, limitée à 200 exemplaires numérotés par an, sur rendez-vous uniquement.' : 'Exclusive Flagship collection, limited to 200 numbered pieces per year, by appointment only.'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {maisonBottles.map((bottle, idx) => (
              <div key={idx} className="group relative overflow-hidden border border-lacelle-gold/10 hover:border-lacelle-gold/40 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden bg-lacelle-black/60">
                  <img src={bottle.img} alt={isCN ? bottle.label_zh : isFR ? bottle.label_fr : bottle.label_en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85" />
                </div>
                <div className="p-4 bg-lacelle-black">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-lacelle-gold/50 font-sans-light tracking-widest-xl uppercase">{bottle.year}</span>
                    <span className="text-xs text-lacelle-cream/30 font-sans-light tracking-wider uppercase">{isCN ? (bottle.view === 'front' ? '正面' : bottle.view === 'back' ? '背面' : '细节') : isFR ? (bottle.view === 'front' ? 'Face' : bottle.view === 'back' ? 'Dos' : 'Détail') : (bottle.view === 'front' ? 'Front' : bottle.view === 'back' ? 'Back' : 'Detail')}</span>
                  </div>
                  <p className="font-playfair text-sm text-lacelle-cream italic leading-tight mb-2">{isCN ? bottle.label_zh : isFR ? bottle.label_fr : bottle.label_en}</p>
                  <p className="font-sans-light text-xs text-lacelle-cream/40 leading-relaxed line-clamp-3">{isCN ? bottle.desc_zh : isFR ? bottle.desc_fr : bottle.desc_en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Series 2: LA CELLE PARFUM */}
      <section className="py-24 px-6 bg-[#0a0a08] fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl text-lacelle-cream italic mb-4">
              {isCN ? <><span className="text-gold-gradient">LA CELLE PARFUM</span> — 精品店系列</> : isFR ? <>LA CELLE PARFUM — <span className="text-gold-gradient">Collection Boutiques</span></> : <>LA CELLE PARFUM — <span className="text-gold-gradient">Boutique Collection</span></>}
            </h2>
            <p className="font-cormorant text-lacelle-cream/50 italic max-w-2xl mx-auto">
              {isCN ? '新艺术与装饰艺术时期的精品店系列，从1880年代美好年代到1920年代装饰艺术，每个时代都有独特的瓶型语言。' : isFR ? 'Collection des boutiques de détail, de la Belle Époque Art Nouveau aux années folles Art Déco.' : 'Retail boutique collection, from Belle Époque Art Nouveau to the Roaring Twenties Art Deco.'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {parfumBottles.map((bottle, idx) => (
              <div key={idx} className="group relative overflow-hidden border border-lacelle-gold/10 hover:border-lacelle-gold/40 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden bg-lacelle-black/60">
                  <img src={bottle.img} alt={isCN ? bottle.label_zh : isFR ? bottle.label_fr : bottle.label_en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85" />
                </div>
                <div className="p-4 bg-lacelle-black">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-lacelle-gold/50 font-sans-light tracking-widest-xl uppercase">{bottle.year}</span>
                    <span className="text-xs text-lacelle-cream/30 font-sans-light tracking-wider uppercase">{isCN ? (bottle.view === 'front' ? '正面' : bottle.view === 'back' ? '背面' : '细节') : isFR ? (bottle.view === 'front' ? 'Face' : bottle.view === 'back' ? 'Dos' : 'Détail') : (bottle.view === 'front' ? 'Front' : bottle.view === 'back' ? 'Back' : 'Detail')}</span>
                  </div>
                  <p className="font-playfair text-sm text-lacelle-cream italic leading-tight mb-2">{isCN ? bottle.label_zh : isFR ? bottle.label_fr : bottle.label_en}</p>
                  <p className="font-sans-light text-xs text-lacelle-cream/40 leading-relaxed line-clamp-3">{isCN ? bottle.desc_zh : isFR ? bottle.desc_fr : bottle.desc_en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Series 3: La Famille Celle */}
      <section className="py-24 px-6 bg-lacelle-black fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl text-lacelle-cream italic mb-4">
              {isCN ? <><span className="text-gold-gradient">La Famille Celle</span> — 格拉斯工坊原料瓶</> : isFR ? <>La Famille Celle — <span className="text-gold-gradient">Flacons d'Essences de Grasse</span></> : <>La Famille Celle — <span className="text-gold-gradient">Grasse Essence Flacons</span></>}
            </h2>
            <p className="font-cormorant text-lacelle-cream/50 italic max-w-2xl mx-auto">
              {isCN ? '格拉斯工坊自1802年起保存的原料香精瓶，记录着每一批花朵的采摘日期、蒸馏数据和植物来源。' : isFR ? 'Flacons d\'essences brutes de l\'atelier de Grasse, conservés depuis 1802, enregistrant chaque récolte.' : 'Raw essence flacons from the Grasse atelier, preserved since 1802, recording each harvest.'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {familleBottles.map((bottle, idx) => (
              <div key={idx} className="group relative overflow-hidden border border-lacelle-gold/10 hover:border-lacelle-gold/40 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden bg-lacelle-black/60">
                  <img src={bottle.img} alt={isCN ? bottle.label_zh : isFR ? bottle.label_fr : bottle.label_en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85" />
                </div>
                <div className="p-4 bg-lacelle-black">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-lacelle-gold/50 font-sans-light tracking-widest-xl uppercase">{bottle.year}</span>
                    <span className="text-xs text-lacelle-cream/30 font-sans-light tracking-wider uppercase">{isCN ? (bottle.view === 'front' ? '正面' : bottle.view === 'back' ? '背面' : '细节') : isFR ? (bottle.view === 'front' ? 'Face' : bottle.view === 'back' ? 'Dos' : 'Détail') : (bottle.view === 'front' ? 'Front' : bottle.view === 'back' ? 'Back' : 'Detail')}</span>
                  </div>
                  <p className="font-playfair text-sm text-lacelle-cream italic leading-tight mb-2">{isCN ? bottle.label_zh : isFR ? bottle.label_fr : bottle.label_en}</p>
                  <p className="font-sans-light text-xs text-lacelle-cream/40 leading-relaxed line-clamp-3">{isCN ? bottle.desc_zh : isFR ? bottle.desc_fr : bottle.desc_en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           SECTION: Grasse Laboratory & Supply Chain
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0a0a08] fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">
              {isCN ? '香精实验室与供应链' : isFR ? 'Laboratoire & Chaîne d\'Approvisionnement' : 'Laboratory & Supply Chain'}
            </p>
            <h2 className="font-playfair text-4xl text-lacelle-cream italic mb-4">
              {isCN ? <>格拉斯工坊 — <span className="text-gold-gradient">香精萃取的起源</span></> : isFR ? <>Atelier de Grasse — <span className="text-gold-gradient">L\'Art de l\'Extraction</span></> : <>Grasse Atelier — <span className="text-gold-gradient">The Art of Extraction</span></>}
            </h2>
            <p className="font-cormorant text-lacelle-cream/50 italic max-w-3xl mx-auto">
              {isCN
                ? '奢利世家早期以香精实验室起家，为多个欧洲顶级香水品牌提供原料供应。格拉斯工坊至今仍是全球最重要的天然香精产地之一，奢利家族的蒸馏技术传承超过两个世纪。'
                : isFR
                ? 'La Maison Celle a débuté comme laboratoire d\'essences, fournissant des matières premières aux plus grandes maisons de parfumerie européennes. L\'atelier de Grasse reste l\'un des sites de production d\'essences naturelles les plus importants au monde.'
                : 'Maison Celle began as an essence laboratory, supplying raw materials to the greatest European perfumery houses. The Grasse atelier remains one of the world\'s most important natural essence production sites.'}
            </p>
          </div>

          {/* Lab images grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="group overflow-hidden border border-lacelle-gold/10 hover:border-lacelle-gold/30 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={IMGS.grasse_lab_1850} alt="Grasse laboratory 1850" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              </div>
              <div className="p-5 bg-lacelle-black">
                <p className="font-playfair text-sm text-lacelle-cream italic mb-2">
                  {isCN ? '格拉斯蒸馏实验室 — 1850年代' : isFR ? 'Laboratoire de Distillation de Grasse — 1850s' : 'Grasse Distillation Laboratory — 1850s'}
                </p>
                <p className="font-sans-light text-xs text-lacelle-cream/40 leading-relaxed">
                  {isCN ? '早期蒸馏实验室内景，铜制蒸馏器和玻璃烧瓶排列整齐。奢利家族在此研发了冷压萃取和蒸汽蒸馏两种工艺。' : isFR ? 'Intérieur du laboratoire de distillation, alambics en cuivre et fioles en verre. La famille Celle y développa deux techniques : l\'expression à froid et la distillation à la vapeur.' : 'Interior of the distillation laboratory, copper alembics and glass flasks. The Celle family developed two techniques here: cold pressing and steam distillation.'}
                </p>
              </div>
            </div>
            <div className="group overflow-hidden border border-lacelle-gold/10 hover:border-lacelle-gold/30 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={IMGS.grasse_lab_1920} alt="Grasse laboratory 1920" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              </div>
              <div className="p-5 bg-lacelle-black">
                <p className="font-playfair text-sm text-lacelle-cream italic mb-2">
                  {isCN ? '格拉斯工厂扩建 — 1920年代' : isFR ? 'Extension de l\'Usine de Grasse — 1920s' : 'Grasse Factory Expansion — 1920s'}
                </p>
                <p className="font-sans-light text-xs text-lacelle-cream/40 leading-relaxed">
                  {isCN ? '1920年代工厂扩建后，年处理花朵超过500吨。格拉斯工坊成为欧洲最大的天然香精供应商之一，客户包括Guerlain、Houbigant、Coty等顶级品牌。' : isFR ? 'Après l\'extension des années 1920, l\'usine traitait plus de 500 tonnes de fleurs par an. L\'atelier devint l\'un des plus grands fournisseurs d\'essences naturelles d\'Europe, avec Guerlain, Houbigant et Coty parmi ses clients.' : 'After the 1920s expansion, the factory processed over 500 tonnes of flowers annually. The atelier became one of Europe\'s largest natural essence suppliers, with Guerlain, Houbigant and Coty among its clients.'}
                </p>
              </div>
            </div>
            <div className="group overflow-hidden border border-lacelle-gold/10 hover:border-lacelle-gold/30 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={IMGS.enfleurage_process} alt="Enfleurage process" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              </div>
              <div className="p-5 bg-lacelle-black">
                <p className="font-playfair text-sm text-lacelle-cream italic mb-2">
                  {isCN ? '冷萃花脂工艺 — 格拉斯传统' : isFR ? 'Enfleurage à Froid — Tradition de Grasse' : 'Cold Enfleurage — Grasse Tradition'}
                </p>
                <p className="font-sans-light text-xs text-lacelle-cream/40 leading-relaxed">
                  {isCN ? '冷萃花脂是格拉斯最古老的香精萃取工艺，将花朵铺在涂有动物脂肪的玻璃板上，让香气自然渗透。奢利家族是最后仍坚持这一工艺的家族之一。' : isFR ? 'L\'enfleurage à froid est la plus ancienne technique d\'extraction de Grasse, déposant les fleurs sur des plaques de verre enduites de graisse animale. La famille Celle est l\'une des dernières à perpétuer cette technique.' : 'Cold enfleurage is the oldest extraction technique in Grasse, laying flowers on glass plates coated with animal fat. The Celle family is one of the last to perpetuate this technique.'}
                </p>
              </div>
            </div>
          </div>

          {/* Supply chain brands */}
          <div className="border-t border-lacelle-gold/10 pt-16">
            <h3 className="font-playfair text-2xl text-lacelle-cream italic text-center mb-4">
              {isCN ? '历史供应链合作品牌' : isFR ? 'Maisons Partenaires Historiques' : 'Historic Partner Houses'}
            </h3>
            <p className="font-cormorant text-lacelle-cream/50 italic text-center max-w-2xl mx-auto mb-12">
              {isCN
                ? '自19世纪起，格拉斯工坊为欧洲多个顶级香水品牌提供天然香精原料，建立了长达百年的供应链合作关系。'
                : isFR
                ? 'Depuis le XIXe siècle, l\'atelier de Grasse fournit des essences naturelles aux plus grandes maisons de parfumerie européennes.'
                : 'Since the 19th century, the Grasse atelier has supplied natural essences to the greatest European perfumery houses.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group overflow-hidden border border-lacelle-gold/10 hover:border-lacelle-gold/30 transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={IMGS.supply_chain_brands} alt="Supply chain partner brands" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75" />
                </div>
                <div className="p-6 bg-lacelle-black">
                  <p className="font-playfair text-base text-lacelle-cream italic mb-3">
                    {isCN ? '19世纪供应链合作档案' : isFR ? 'Archives de la Chaîne d\'Approvisionnement XIXe' : '19th Century Supply Chain Archive'}
                  </p>
                  <p className="font-sans-light text-xs text-lacelle-cream/40 leading-relaxed">
                    {isCN
                      ? '档案仓库中保存着与 Guerlain、Houbigant、Coty、Lanvin 等品牌的原料供应合同，最早可追溯至1867年。这些合同证明了格拉斯工坊在欧洲香水工业中的核心地位。'
                      : isFR
                      ? 'Les archives conservent les contrats de fourniture de matières premières avec Guerlain, Houbigant, Coty et Lanvin, remontant à 1867. Ces contrats attestent du rôle central de l\'atelier dans l\'industrie parfumière européenne.'
                      : 'The archives preserve raw material supply contracts with Guerlain, Houbigant, Coty and Lanvin, dating back to 1867. These contracts attest to the atelier\'s central role in the European perfumery industry.'}
                  </p>
                </div>
              </div>
              <div className="group overflow-hidden border border-lacelle-gold/10 hover:border-lacelle-gold/30 transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={IMGS.supply_chain_flowers} alt="Grasse flower fields supply" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75" />
                </div>
                <div className="p-6 bg-lacelle-black">
                  <p className="font-playfair text-base text-lacelle-cream italic mb-3">
                    {isCN ? '格拉斯花田 — 原料供应基地' : isFR ? 'Champs de Grasse — Base d\'Approvisionnement' : 'Grasse Flower Fields — Raw Material Base'}
                  </p>
                  <p className="font-sans-light text-xs text-lacelle-cream/40 leading-relaxed">
                    {isCN
                      ? '奢利家族在格拉斯周边拥有超过120公顷的花田，种植五月玫瑰、茉莉、橙花、鸢尾等珍贵香料植物。每年五月，数百名采花工人在黎明时分手工采摘，以保留花朵最佳的香气。'
                      : isFR
                      ? 'La famille Celle possède plus de 120 hectares de champs autour de Grasse, cultivant rose de Mai, jasmin, fleur d\'oranger et iris. Chaque mai, des centaines de cueilleurs récoltent à l\'aube pour préserver le meilleur de l\'arôme.'
                      : 'The Celle family owns over 120 hectares of fields around Grasse, cultivating rose de Mai, jasmine, orange blossom and iris. Each May, hundreds of pickers harvest at dawn to preserve the finest aroma.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           SECTION: Archive Documents (Notes & Certificate)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-lacelle-black fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">
              {isCN ? '历史档案' : isFR ? 'Archives Historiques' : 'Historical Archives'}
            </p>
            <h2 className="font-playfair text-4xl text-lacelle-cream italic">
              {isCN ? <>调香笔记与<span className="text-gold-gradient">认证证书</span></> : isFR ? <>Notes de Composition & <span className="text-gold-gradient">Certificats</span></> : <>Composition Notes & <span className="text-gold-gradient">Certificates</span></>}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {archiveDocuments.map((doc, idx) => (
              <div key={idx} className="group border border-lacelle-gold/10 hover:border-lacelle-gold/30 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={doc.img} alt={isCN ? doc.title_zh : isFR ? doc.title_fr : doc.title_en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                </div>
                <div className="p-6 bg-lacelle-black">
                  <span className="text-xs text-lacelle-gold/50 font-sans-light tracking-widest-xl uppercase">
                    {doc.type === 'notes' ? (isCN ? '调香笔记' : isFR ? 'Notes de Composition' : 'Composition Notes') : (isCN ? '认证证书' : isFR ? 'Certificat' : 'Certificate')}
                  </span>
                  <p className="font-playfair text-base text-lacelle-cream italic mt-2 mb-3">{isCN ? doc.title_zh : isFR ? doc.title_fr : doc.title_en}</p>
                  <p className="font-sans-light text-xs text-lacelle-cream/40 leading-relaxed">{isCN ? doc.caption_zh : isFR ? doc.caption_fr : doc.caption_en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Kbis Registrations Section */}
      <section className="py-24 bg-lacelle-black fade-in-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">
              {isCN ? '历史营业执照' : isFR ? 'Registres Historiques' : 'Historical Registrations'}
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-lacelle-cream italic mb-4">
              {isCN ? (
                <>法律沿革 · <span className="text-gold-gradient">SNC → SA → SARL → SAS</span></>
              ) : isFR ? (
                <>Évolution Juridique · <span className="text-gold-gradient">SNC → SA → SARL → SAS</span></>
              ) : (
                <>Legal Evolution · <span className="text-gold-gradient">SNC → SA → SARL → SAS</span></>
              )}
            </h2>
            <div className="gold-divider" />
            <p className="font-cormorant text-lg text-lacelle-cream/50 italic mt-6 max-w-2xl mx-auto">
              {isCN
                ? '从1802年格拉斯的无限合伙制工坊，到2022年巴黎的简化股份公司——每一份营业执照都见证了品牌跨越两个世纪的法律演变与历史变迁。'
                : isFR
                ? "De l'atelier en SNC à Grasse en 1802 à la SAS parisienne en 2022 — chaque extrait Kbis témoigne de l'évolution juridique et historique de la Maison sur deux siècles."
                : "From the SNC atelier in Grasse in 1802 to the Parisian SAS in 2022 — each Kbis extract bears witness to the Maison's legal and historical evolution across two centuries."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kbisDocuments.map((doc, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-sm border border-lacelle-gold/20 hover:border-lacelle-gold/50 transition-all duration-500 bg-lacelle-black/60">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={doc.img}
                    alt={isCN ? doc.entity_zh : isFR ? doc.entity_fr : doc.entity_en}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lacelle-black via-lacelle-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="font-playfair text-xs text-lacelle-gold border border-lacelle-gold/60 px-2 py-1 bg-lacelle-black/80">
                      {doc.year} · {doc.legal_form}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-playfair text-sm text-lacelle-gold/70 uppercase tracking-widest mb-1">
                    {isCN ? doc.location_zh : isFR ? doc.location_fr : doc.location_en}
                  </p>
                  <p className="font-playfair text-base text-lacelle-cream italic mb-3">
                    {isCN ? doc.entity_zh : isFR ? doc.entity_fr : doc.entity_en}
                  </p>
                  <p className="font-sans-light text-xs text-lacelle-cream/40 leading-relaxed">
                    {isCN ? doc.note_zh : isFR ? doc.note_fr : doc.note_en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Logo Evolution Section */}
      <section className="py-24 bg-gradient-to-b from-lacelle-black to-lacelle-black/95 fade-in-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">
              {isCN ? '品牌标志演变' : isFR ? 'Évolution de la Marque' : 'Brand Identity Evolution'}
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-lacelle-cream italic mb-4">
              {isCN ? (
                <>两个世纪的 <span className="text-gold-gradient">视觉传承</span></>
              ) : isFR ? (
                <>Deux Siècles d'<span className="text-gold-gradient">Identité Visuelle</span></>
              ) : (
                <>Two Centuries of <span className="text-gold-gradient">Visual Identity</span></>
              )}
            </h2>
            <div className="gold-divider" />
            <p className="font-cormorant text-lg text-lacelle-cream/50 italic mt-6 max-w-2xl mx-auto">
              {isCN
                ? '从1802年的蜡封字母组合，到数字时代的简约标识——奢利世家的品牌形象随时代演变，始终保持优雅与传承的核心精神。'
                : isFR
                ? "Du monogramme de cire de 1802 à l'identité numérique contemporaine — la marque LA CELLE a évolué avec son époque tout en préservant son essence d'élégance et de transmission."
                : "From the 1802 wax monogram to the contemporary digital identity — the LA CELLE brand has evolved with its era while preserving its essence of elegance and heritage."}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {logoEvolution.map((logo, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative overflow-hidden rounded-sm border border-lacelle-gold/20 hover:border-lacelle-gold/50 transition-all duration-500 mb-4 aspect-square bg-lacelle-black/40 flex items-center justify-center p-4">
                  <img
                    src={logo.img}
                    alt={isCN ? logo.era_zh : isFR ? logo.era_fr : logo.era_en}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="font-playfair text-xs text-lacelle-gold italic mb-1">
                  {isCN ? logo.era_zh : isFR ? logo.era_fr : logo.era_en}
                </p>
                <p className="font-sans-light text-xs text-lacelle-cream/40 leading-relaxed">
                  {isCN ? logo.desc_zh : isFR ? logo.desc_fr : logo.desc_en}
                </p>
              </div>
            ))}
          </div>
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
