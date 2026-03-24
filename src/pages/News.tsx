import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Link } from 'react-router-dom'

// ─── Types ────────────────────────────────────────────────────────────────────
interface NewsArticle {
  id: string
  date: string
  category: 'press' | 'brand' | 'event' | 'award'
  image?: string
  slug: string
  title: Record<string, string>
  excerpt: Record<string, string>
  content: Record<string, string>
  source?: string
  sourceUrl?: string
}

// ─── News Data ────────────────────────────────────────────────────────────────
const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    date: '2026-03-15',
    category: 'award',
    slug: 'prix-excellence-parfumerie-2026',
    title: {
      fr: 'LA CELLE reçoit le Prix d\'Excellence de la Parfumerie Française 2026',
      en: 'LA CELLE Receives the French Perfumery Excellence Award 2026',
      zh: 'LA CELLE 荣获2026年法国香水卓越奖',
      es: 'LA CELLE recibe el Premio de Excelencia de la Perfumería Francesa 2026',
      de: 'LA CELLE erhält den Preis für Exzellenz der Französischen Parfümerie 2026',
      it: 'LA CELLE riceve il Premio di Eccellenza della Profumeria Francese 2026',
      ja: 'LA CELLEが2026年フランス香水卓越賞を受賞',
      ru: 'LA CELLE получает Премию за Превосходство Французской Парфюмерии 2026',
      ar: 'LA CELLE تحصل على جائزة التميز في العطور الفرنسية 2026',
      pt: 'LA CELLE recebe o Prêmio de Excelência da Perfumaria Francesa 2026',
      ko: 'LA CELLE, 2026 프랑스 향수 우수상 수상',
      nl: 'LA CELLE ontvangt de Franse Parfumerie Excellentieprijs 2026',
      tr: 'LA CELLE, 2026 Fransız Parfümerisi Mükemmellik Ödülü\'nü Aldı',
      pl: 'LA CELLE otrzymuje Nagrodę Doskonałości Francuskiej Perfumerii 2026',
      vi: 'LA CELLE nhận Giải thưởng Xuất sắc Nước hoa Pháp 2026',
      th: 'LA CELLE รับรางวัลความเป็นเลิศด้านน้ำหอมฝรั่งเศส 2026',
      hi: 'LA CELLE को 2026 फ्रांसीसी परफ्यूमरी उत्कृष्टता पुरस्कार मिला',
      id: 'LA CELLE Menerima Penghargaan Keunggulan Parfumeri Prancis 2026',
    },
    excerpt: {
      fr: 'La Maison LA CELLE a été honorée du Prix d\'Excellence de la Parfumerie Française lors de la cérémonie annuelle tenue à Paris, récompensant deux siècles de savoir-faire olfactif.',
      en: 'The House of LA CELLE was honored with the French Perfumery Excellence Award at the annual ceremony held in Paris, recognizing two centuries of olfactory expertise.',
      zh: 'LA CELLE香水世家在巴黎举行的年度颁奖典礼上荣获法国香水卓越奖，以表彰其两个世纪的调香专业技艺。',
      es: 'La Maison LA CELLE fue honrada con el Premio de Excelencia de la Perfumería Francesa en la ceremonia anual celebrada en París.',
      de: 'Das Haus LA CELLE wurde bei der jährlichen Zeremonie in Paris mit dem Preis für Exzellenz der Französischen Parfümerie ausgezeichnet.',
      it: 'La Maison LA CELLE è stata onorata con il Premio di Eccellenza della Profumeria Francese alla cerimonia annuale di Parigi.',
      ja: 'LA CELLEは、パリで開催された年次式典にて、フランス香水卓越賞を受賞しました。',
      ru: 'Дом LA CELLE был удостоен Премии за Превосходство Французской Парфюмерии на ежегодной церемонии в Париже.',
      ar: 'حصلت دار LA CELLE على جائزة التميز في العطور الفرنسية خلال الحفل السنوي المقام في باريس.',
      pt: 'A Maison LA CELLE foi honrada com o Prêmio de Excelência da Perfumaria Francesa na cerimônia anual realizada em Paris.',
      ko: 'LA CELLE 하우스는 파리에서 열린 연례 시상식에서 프랑스 향수 우수상을 수상했습니다.',
      nl: 'Het Huis LA CELLE werd geëerd met de Franse Parfumerie Excellentieprijs tijdens de jaarlijkse ceremonie in Parijs.',
      tr: 'LA CELLE Evi, Paris\'te düzenlenen yıllık törende Fransız Parfümerisi Mükemmellik Ödülü\'ne layık görüldü.',
      pl: 'Dom LA CELLE został uhonorowany Nagrodą Doskonałości Francuskiej Perfumerii podczas corocznej ceremonii w Paryżu.',
      vi: 'Nhà LA CELLE được vinh danh với Giải thưởng Xuất sắc Nước hoa Pháp tại lễ trao giải thường niên ở Paris.',
      th: 'บ้าน LA CELLE ได้รับรางวัลความเป็นเลิศด้านน้ำหอมฝรั่งเศสในพิธีประจำปีที่จัดขึ้นในปารีส',
      hi: 'LA CELLE हाउस को पेरिस में आयोजित वार्षिक समारोह में फ्रांसीसी परफ्यूमरी उत्कृष्टता पुरस्कार से सम्मानित किया गया।',
      id: 'Rumah LA CELLE dihormati dengan Penghargaan Keunggulan Parfumeri Prancis pada upacara tahunan yang diadakan di Paris.',
    },
    content: {
      fr: `La Maison LA CELLE a été honorée du Prix d'Excellence de la Parfumerie Française lors de la cérémonie annuelle tenue à Paris le 15 mars 2026. Ce prix, décerné par le Comité Français du Parfum, récompense les maisons qui ont contribué de manière exceptionnelle à l'art olfactif français.\n\nFondée en 1802 à Grasse par Léa Celle, la Maison a traversé plus de deux siècles d'histoire sans jamais compromettre son engagement envers l'excellence. La Méthode d'Extraction LA CELLE, développée au XIXe siècle, reste à ce jour l'une des techniques les plus respectueuses des matières premières naturelles.\n\n"Ce prix est une reconnaissance de l'engagement de toutes les générations qui ont porté la Maison LA CELLE," a déclaré le directeur artistique lors de la cérémonie. "Nous continuons à honorer l'héritage de Léa Celle tout en regardant vers l'avenir."`,
      en: `The House of LA CELLE was honored with the French Perfumery Excellence Award at the annual ceremony held in Paris on March 15, 2026. This award, presented by the French Perfume Committee, recognizes houses that have made exceptional contributions to the French olfactory art.\n\nFounded in 1802 in Grasse by Léa Celle, the House has traversed more than two centuries of history without ever compromising its commitment to excellence. The LA CELLE Extraction Method, developed in the 19th century, remains to this day one of the most respectful techniques for natural raw materials.\n\n"This award is a recognition of the commitment of all the generations who have carried the House of LA CELLE," said the artistic director at the ceremony. "We continue to honor the legacy of Léa Celle while looking toward the future."`,
      zh: `LA CELLE香水世家于2026年3月15日在巴黎举行的年度颁奖典礼上荣获法国香水卓越奖。该奖项由法国香水委员会颁发，表彰对法国香水艺术做出卓越贡献的香水世家。\n\nLA CELLE于1802年由Léa Celle在格拉斯创立，历经两个多世纪而始终坚守卓越品质。19世纪发展出的LA CELLE萃取工艺，至今仍是对天然原料最为尊重的技术之一。\n\n艺术总监在颁奖典礼上表示："这个奖项是对所有传承LA CELLE世家的几代人的认可。我们将继续传承Léa Celle的遗产，同时展望未来。"`,
    },
    source: 'Le Figaro',
    sourceUrl: 'https://www.lefigaro.fr',
  },
  {
    id: '2',
    date: '2026-02-28',
    category: 'brand',
    slug: 'nouvelle-boutique-saint-germain',
    title: {
      fr: 'Ouverture de la nouvelle boutique LA CELLE à Saint-Germain-des-Prés',
      en: 'Opening of the New LA CELLE Boutique in Saint-Germain-des-Prés',
      zh: '圣日耳曼德佩区新店盛大开幕',
      es: 'Apertura de la nueva boutique LA CELLE en Saint-Germain-des-Prés',
      de: 'Eröffnung der neuen LA CELLE Boutique in Saint-Germain-des-Prés',
      it: 'Apertura della nuova boutique LA CELLE a Saint-Germain-des-Prés',
      ja: 'サン＝ジェルマン＝デ＝プレに新しいLA CELLEブティックがオープン',
      ru: 'Открытие нового бутика LA CELLE в Сен-Жермен-де-Пре',
      ar: 'افتتاح متجر LA CELLE الجديد في سان جيرمان دي بري',
      pt: 'Abertura da nova boutique LA CELLE em Saint-Germain-des-Prés',
      ko: '생제르맹데프레에 새로운 LA CELLE 부티크 오픈',
      nl: 'Opening van de nieuwe LA CELLE Boutique in Saint-Germain-des-Prés',
      tr: 'Saint-Germain-des-Prés\'de Yeni LA CELLE Butiği Açıldı',
      pl: 'Otwarcie nowego butiku LA CELLE w Saint-Germain-des-Prés',
      vi: 'Khai trương Boutique LA CELLE mới tại Saint-Germain-des-Prés',
      th: 'เปิดบูติก LA CELLE แห่งใหม่ใน Saint-Germain-des-Prés',
      hi: 'Saint-Germain-des-Prés में नया LA CELLE बुटीक खुला',
      id: 'Pembukaan Butik LA CELLE Baru di Saint-Germain-des-Prés',
    },
    excerpt: {
      fr: 'La Maison LA CELLE inaugure sa nouvelle boutique parisienne au cœur de Saint-Germain-des-Prés, un espace de 180 m² entièrement dédié à l\'art olfactif et à la consultation privée.',
      en: 'The House of LA CELLE inaugurates its new Parisian boutique in the heart of Saint-Germain-des-Prés, a 180 m² space entirely dedicated to olfactory art and private consultation.',
      zh: 'LA CELLE香水世家在圣日耳曼德佩区核心地带开设全新巴黎精品店，这是一个180平方米的空间，专注于香水艺术与私人咨询服务。',
      es: 'La Maison LA CELLE inaugura su nueva boutique parisina en el corazón de Saint-Germain-des-Prés, un espacio de 180 m² dedicado al arte olfativo.',
      de: 'Das Haus LA CELLE eröffnet seine neue Pariser Boutique im Herzen von Saint-Germain-des-Prés, ein 180 m² großer Raum.',
      it: 'La Maison LA CELLE inaugura la sua nuova boutique parigina nel cuore di Saint-Germain-des-Prés.',
      ja: 'LA CELLEは、サン＝ジェルマン＝デ＝プレの中心部に新しいパリのブティックをオープンしました。',
      ru: 'Дом LA CELLE открывает новый парижский бутик в самом сердце Сен-Жермен-де-Пре.',
      ar: 'تفتتح دار LA CELLE متجرها الباريسي الجديد في قلب سان جيرمان دي بري.',
      pt: 'A Maison LA CELLE inaugura sua nova boutique parisiense no coração de Saint-Germain-des-Prés.',
      ko: 'LA CELLE 하우스는 생제르맹데프레 중심부에 새로운 파리 부티크를 개장했습니다.',
      nl: 'Het Huis LA CELLE opent zijn nieuwe Parijse boutique in het hart van Saint-Germain-des-Prés.',
      tr: 'LA CELLE Evi, Saint-Germain-des-Prés\'nin kalbinde yeni Paris butiğini açtı.',
      pl: 'Dom LA CELLE otwiera nowy paryski butik w sercu Saint-Germain-des-Prés.',
      vi: 'Nhà LA CELLE khai trương boutique Paris mới ở trung tâm Saint-Germain-des-Prés.',
      th: 'บ้าน LA CELLE เปิดบูติกปารีสแห่งใหม่ในใจกลาง Saint-Germain-des-Prés',
      hi: 'LA CELLE हाउस ने Saint-Germain-des-Prés के केंद्र में अपना नया पेरिस बुटीक खोला।',
      id: 'Rumah LA CELLE membuka butik Paris baru di jantung Saint-Germain-des-Prés.',
    },
    content: {
      fr: `La Maison LA CELLE a inauguré le 28 février 2026 sa nouvelle boutique parisienne au 18 rue de Grenelle, dans le quartier historique de Saint-Germain-des-Prés. Cet espace de 180 m², conçu par l'architecte d'intérieur Pierre-Emmanuel Laffont, marie l'héritage du XVIIIe siècle avec une esthétique contemporaine épurée.\n\nLa boutique propose l'intégralité des collections LA CELLE, dont la ligne exclusive Maison de Celle, ainsi qu'un espace de consultation privée où les clients peuvent rencontrer nos maîtres parfumeurs pour créer leur fragrance sur mesure.\n\nHoraires d'ouverture : Mardi au Samedi, 10h–19h. Dimanche et Lundi sur rendez-vous.`,
      en: `The House of LA CELLE inaugurated on February 28, 2026 its new Parisian boutique at 18 rue de Grenelle, in the historic neighborhood of Saint-Germain-des-Prés. This 180 m² space, designed by interior architect Pierre-Emmanuel Laffont, blends 18th-century heritage with a refined contemporary aesthetic.\n\nThe boutique offers the complete LA CELLE collections, including the exclusive Maison de Celle line, as well as a private consultation space where clients can meet our master perfumers to create their bespoke fragrance.\n\nOpening hours: Tuesday to Saturday, 10am–7pm. Sunday and Monday by appointment.`,
      zh: `LA CELLE香水世家于2026年2月28日在巴黎圣日耳曼德佩区历史街区格勒内尔街18号开设全新精品店。这个180平方米的空间由室内建筑师Pierre-Emmanuel Laffont设计，将18世纪的历史遗产与当代精致美学完美融合。\n\n精品店提供LA CELLE全系列产品，包括独家的Maison de Celle系列，以及私人咨询空间，客户可在此与调香大师会面，定制专属香水。\n\n营业时间：周二至周六，上午10点至晚上7点。周日和周一需预约。`,
    },
  },
  {
    id: '3',
    date: '2026-02-10',
    category: 'press',
    slug: 'vogue-paris-maison-de-celle',
    title: {
      fr: 'Vogue Paris : "LA CELLE, gardienne du patrimoine olfactif français"',
      en: 'Vogue Paris: "LA CELLE, Guardian of French Olfactory Heritage"',
      zh: '《巴黎时尚》：「LA CELLE，法国香水遗产的守护者」',
      es: 'Vogue Paris: "LA CELLE, guardiana del patrimonio olfativo francés"',
      de: 'Vogue Paris: "LA CELLE, Hüterin des französischen Duftkultur-Erbes"',
      it: 'Vogue Paris: "LA CELLE, custode del patrimonio olfattivo francese"',
      ja: 'ヴォーグ・パリ：「LA CELLE、フランスの嗅覚遺産の守護者」',
      ru: 'Vogue Paris: "LA CELLE, хранительница французского ольфакторного наследия"',
      ar: 'فوغ باريس: "LA CELLE، حارسة التراث العطري الفرنسي"',
      pt: 'Vogue Paris: "LA CELLE, guardiã do patrimônio olfativo francês"',
      ko: '보그 파리: "LA CELLE, 프랑스 후각 유산의 수호자"',
      nl: 'Vogue Paris: "LA CELLE, behoeder van het Franse olfactorische erfgoed"',
      tr: 'Vogue Paris: "LA CELLE, Fransız Koku Mirasının Koruyucusu"',
      pl: 'Vogue Paris: "LA CELLE, strażniczka francuskiego dziedzictwa olfaktorycznego"',
      vi: 'Vogue Paris: "LA CELLE, người bảo vệ di sản khứu giác Pháp"',
      th: 'Vogue Paris: "LA CELLE ผู้พิทักษ์มรดกด้านกลิ่นหอมของฝรั่งเศส"',
      hi: 'वोग पेरिस: "LA CELLE, फ्रांसीसी घ्राण विरासत की संरक्षक"',
      id: 'Vogue Paris: "LA CELLE, Penjaga Warisan Penciuman Prancis"',
    },
    excerpt: {
      fr: 'Dans un portrait exclusif publié dans Vogue Paris, la Maison LA CELLE est célébrée comme l\'une des dernières grandes maisons de parfum françaises à avoir préservé intégralement ses méthodes artisanales depuis 1802.',
      en: 'In an exclusive portrait published in Vogue Paris, the House of LA CELLE is celebrated as one of the last great French perfume houses to have fully preserved its artisanal methods since 1802.',
      zh: '巴黎时尚》刊登独家人物专访，将LA CELLE香水世家誉为自1802年以来完整保留传统工艺的最后几家法国顶级香水世家之一。',
      es: 'En un retrato exclusivo publicado en Vogue Paris, la Maison LA CELLE es celebrada como una de las últimas grandes casas de perfume francesas.',
      de: 'In einem exklusiven Porträt in Vogue Paris wird das Haus LA CELLE als eines der letzten großen französischen Parfümhäuser gefeiert.',
      it: 'In un ritratto esclusivo pubblicato su Vogue Paris, la Maison LA CELLE è celebrata come una delle ultime grandi case di profumo francesi.',
      ja: 'ヴォーグ・パリに掲載された独占ポートレートで、LA CELLEは1802年以来職人の手法を完全に保存してきた最後の偉大なフランスの香水ハウスの一つとして称えられています。',
      ru: 'В эксклюзивном портрете, опубликованном в Vogue Paris, Дом LA CELLE прославляется как один из последних великих французских парфюмерных домов.',
      ar: 'في بورتريه حصري نشرته فوغ باريس، تُحتفى بدار LA CELLE باعتبارها واحدة من آخر دور العطور الفرنسية الكبرى.',
      pt: 'Em um retrato exclusivo publicado na Vogue Paris, a Maison LA CELLE é celebrada como uma das últimas grandes casas de perfume francesas.',
      ko: '보그 파리에 게재된 독점 초상화에서 LA CELLE 하우스는 1802년부터 장인 방법을 완전히 보존한 마지막 위대한 프랑스 향수 하우스 중 하나로 찬사를 받습니다.',
      nl: 'In een exclusief portret gepubliceerd in Vogue Paris wordt het Huis LA CELLE gevierd als een van de laatste grote Franse parfumhuizen.',
      tr: 'Vogue Paris\'te yayınlanan özel bir portreden, LA CELLE Evi 1802\'den beri zanaatkar yöntemlerini tamamen koruyan son büyük Fransız parfüm evlerinden biri olarak kutlanıyor.',
      pl: 'W ekskluzywnym portrecie opublikowanym w Vogue Paris, Dom LA CELLE jest celebrowany jako jeden z ostatnich wielkich francuskich domów perfum.',
      vi: 'Trong một chân dung độc quyền được đăng trên Vogue Paris, Nhà LA CELLE được tôn vinh là một trong những ngôi nhà nước hoa Pháp vĩ đại cuối cùng.',
      th: 'ในภาพเหมือนพิเศษที่ตีพิมพ์ใน Vogue Paris บ้าน LA CELLE ได้รับการเฉลิมฉลองว่าเป็นหนึ่งในบ้านน้ำหอมฝรั่งเศสที่ยิ่งใหญ่แห่งสุดท้าย',
      hi: 'वोग पेरिस में प्रकाशित एक विशेष पोर्ट्रेट में, LA CELLE हाउस को 1802 से अपनी कारीगरी विधियों को पूरी तरह से संरक्षित करने वाले अंतिम महान फ्रांसीसी परफ्यूम हाउसों में से एक के रूप में मनाया जाता है।',
      id: 'Dalam potret eksklusif yang diterbitkan di Vogue Paris, Rumah LA CELLE dirayakan sebagai salah satu rumah parfum Prancis besar terakhir.',
    },
    content: {
      fr: `Dans son édition de février 2026, Vogue Paris consacre un portrait exclusif à la Maison LA CELLE, intitulé "Gardienne du patrimoine olfactif français". La rédactrice en chef de mode Isabelle Fontaine a passé trois jours dans les ateliers de Grasse pour documenter les méthodes de travail uniques de la Maison.\n\n"Ce qui distingue LA CELLE de toutes les autres maisons, c'est cette continuité absolue," écrit Fontaine. "Depuis 1802, les mêmes gestes, les mêmes carnets, les mêmes flacons en cristal de Saint-Louis. Il n'y a pas de rupture, pas de réinvention marketing — seulement l'art pur du parfum."\n\nL'article met également en lumière la Méthode d'Extraction LA CELLE, qui permet d'atteindre une concentration en matières naturelles de 90%, un record dans l'industrie.`,
      en: `In its February 2026 edition, Vogue Paris dedicates an exclusive portrait to the House of LA CELLE, titled "Guardian of French Olfactory Heritage". Fashion editor-in-chief Isabelle Fontaine spent three days in the Grasse workshops to document the House's unique working methods.\n\n"What distinguishes LA CELLE from all other houses is this absolute continuity," writes Fontaine. "Since 1802, the same gestures, the same notebooks, the same Saint-Louis crystal bottles. There is no break, no marketing reinvention — only the pure art of perfume."\n\nThe article also highlights the LA CELLE Extraction Method, which achieves a concentration of 90% natural materials, a record in the industry.`,
      zh: `在2026年2月刊中，《巴黎时尚》为LA CELLE香水世家刊登了一篇题为"法国香水遗产的守护者"的独家专访。时尚主编Isabelle Fontaine在格拉斯工坊度过了三天，记录了这家世家独特的工作方式。\n\n"LA CELLE与所有其他世家的区别在于这种绝对的延续性，"Fontaine写道。"自1802年以来，相同的手势、相同的笔记本、相同的圣路易斯水晶瓶。没有断裂，没有营销再创造——只有纯粹的香水艺术。"\n\n文章还重点介绍了LA CELLE萃取工艺，该工艺可实现90%天然原料浓度，创下行业纪录。`,
    },
    source: 'Vogue Paris',
    sourceUrl: 'https://www.vogue.fr',
  },
  {
    id: '4',
    date: '2026-01-20',
    category: 'event',
    slug: 'exposition-grasse-2026',
    title: {
      fr: 'LA CELLE à l\'Exposition Internationale de Grasse 2026',
      en: 'LA CELLE at the International Grasse Exhibition 2026',
      zh: 'LA CELLE 亮相2026年格拉斯国际香水展',
      es: 'LA CELLE en la Exposición Internacional de Grasse 2026',
      de: 'LA CELLE auf der Internationalen Ausstellung Grasse 2026',
      it: 'LA CELLE all\'Esposizione Internazionale di Grasse 2026',
      ja: 'LA CELLEが2026年グラース国際展覧会に参加',
      ru: 'LA CELLE на Международной выставке Грасса 2026',
      ar: 'LA CELLE في المعرض الدولي لغراس 2026',
      pt: 'LA CELLE na Exposição Internacional de Grasse 2026',
      ko: 'LA CELLE, 2026 그라스 국제 전시회 참가',
      nl: 'LA CELLE op de Internationale Tentoonstelling van Grasse 2026',
      tr: 'LA CELLE, 2026 Uluslararası Grasse Sergisinde',
      pl: 'LA CELLE na Międzynarodowej Wystawie w Grasse 2026',
      vi: 'LA CELLE tại Triển lãm Quốc tế Grasse 2026',
      th: 'LA CELLE ในงาน International Grasse Exhibition 2026',
      hi: 'LA CELLE, 2026 अंतर्राष्ट्रीय ग्रास प्रदर्शनी में',
      id: 'LA CELLE di Pameran Internasional Grasse 2026',
    },
    excerpt: {
      fr: 'La Maison LA CELLE a présenté ses créations les plus récentes lors de l\'Exposition Internationale de Grasse, attirant des acheteurs et des connaisseurs du monde entier.',
      en: 'The House of LA CELLE presented its most recent creations at the International Grasse Exhibition, attracting buyers and connoisseurs from around the world.',
      zh: 'LA CELLE香水世家在格拉斯国际香水展上展示了最新作品，吸引了来自世界各地的买家和鉴赏家。',
      es: 'La Maison LA CELLE presentó sus creaciones más recientes en la Exposición Internacional de Grasse.',
      de: 'Das Haus LA CELLE präsentierte seine neuesten Kreationen auf der Internationalen Ausstellung Grasse.',
      it: 'La Maison LA CELLE ha presentato le sue creazioni più recenti all\'Esposizione Internazionale di Grasse.',
      ja: 'LA CELLEは、グラース国際展覧会で最新作品を発表しました。',
      ru: 'Дом LA CELLE представил свои новейшие творения на Международной выставке Грасса.',
      ar: 'قدمت دار LA CELLE أحدث إبداعاتها في المعرض الدولي لغراس.',
      pt: 'A Maison LA CELLE apresentou suas criações mais recentes na Exposição Internacional de Grasse.',
      ko: 'LA CELLE 하우스는 그라스 국제 전시회에서 최신 작품을 선보였습니다.',
      nl: 'Het Huis LA CELLE presenteerde zijn meest recente creaties op de Internationale Tentoonstelling van Grasse.',
      tr: 'LA CELLE Evi, Uluslararası Grasse Sergisinde en son yaratımlarını sundu.',
      pl: 'Dom LA CELLE zaprezentował swoje najnowsze kreacje na Międzynarodowej Wystawie w Grasse.',
      vi: 'Nhà LA CELLE đã trình bày những tác phẩm mới nhất tại Triển lãm Quốc tế Grasse.',
      th: 'บ้าน LA CELLE นำเสนอผลงานล่าสุดในงาน International Grasse Exhibition',
      hi: 'LA CELLE हाउस ने अंतर्राष्ट्रीय ग्रास प्रदर्शनी में अपनी नवीनतम रचनाएं प्रस्तुत कीं।',
      id: 'Rumah LA CELLE mempersembahkan kreasi terbarunya di Pameran Internasional Grasse.',
    },
    content: {
      fr: `Du 18 au 22 janvier 2026, la Maison LA CELLE a participé à l'Exposition Internationale de Grasse, l'événement annuel qui rassemble les plus grandes maisons de parfum du monde. Cette année, LA CELLE a présenté en avant-première sa nouvelle collection "Mémoires de Grasse", composée de sept fragrances inspirées des archives historiques de la Maison.\n\nLa collection "Mémoires de Grasse" sera disponible en boutique à partir du printemps 2026. Chaque fragrance est accompagnée d'un livret illustré retraçant son histoire et ses ingrédients d'exception.`,
      en: `From January 18 to 22, 2026, the House of LA CELLE participated in the International Grasse Exhibition, the annual event that brings together the world's greatest perfume houses. This year, LA CELLE presented a preview of its new collection "Mémoires de Grasse", composed of seven fragrances inspired by the House's historical archives.\n\nThe "Mémoires de Grasse" collection will be available in boutiques from spring 2026. Each fragrance is accompanied by an illustrated booklet tracing its history and exceptional ingredients.`,
      zh: `2026年1月18日至22日，LA CELLE香水世家参加了格拉斯国际香水展，这是汇聚全球顶级香水世家的年度盛会。今年，LA CELLE预先展示了新系列"格拉斯记忆"，该系列由七款香水组成，灵感来源于世家的历史档案。\n\n"格拉斯记忆"系列将于2026年春季在精品店上市。每款香水都附有一本精美插图小册子，追溯其历史和珍贵原料。`,
    },
  },
  {
    id: '5',
    date: '2025-12-05',
    category: 'press',
    slug: 'le-monde-parfumerie-artisanale',
    title: {
      fr: 'Le Monde : "LA CELLE, symbole de la résistance de la parfumerie artisanale"',
      en: 'Le Monde: "LA CELLE, Symbol of the Resistance of Artisanal Perfumery"',
      zh: '《世界报》：「LA CELLE，传统香水工艺坚守的象征」',
      es: 'Le Monde: "LA CELLE, símbolo de la resistencia de la perfumería artesanal"',
      de: 'Le Monde: "LA CELLE, Symbol des Widerstands der handwerklichen Parfümerie"',
      it: 'Le Monde: "LA CELLE, simbolo della resistenza della profumeria artigianale"',
      ja: 'ル・モンド：「LA CELLE、職人香水の抵抗のシンボル」',
      ru: 'Le Monde: "LA CELLE, символ сопротивления ремесленной парфюмерии"',
      ar: 'لوموند: "LA CELLE، رمز مقاومة العطور الحرفية"',
      pt: 'Le Monde: "LA CELLE, símbolo da resistência da perfumaria artesanal"',
      ko: '르 몽드: "LA CELLE, 장인 향수의 저항의 상징"',
      nl: 'Le Monde: "LA CELLE, symbool van de weerstand van de ambachtelijke parfumerie"',
      tr: 'Le Monde: "LA CELLE, Zanaatkar Parfümerinin Direniş Sembolü"',
      pl: 'Le Monde: "LA CELLE, symbol oporu perfumerii rzemieślniczej"',
      vi: 'Le Monde: "LA CELLE, biểu tượng của sự kháng cự của nước hoa thủ công"',
      th: 'Le Monde: "LA CELLE สัญลักษณ์แห่งการต่อต้านของน้ำหอมงานฝีมือ"',
      hi: 'ले मोंड: "LA CELLE, शिल्प परफ्यूमरी के प्रतिरोध का प्रतीक"',
      id: 'Le Monde: "LA CELLE, Simbol Perlawanan Parfumeri Kerajinan"',
    },
    excerpt: {
      fr: 'Le quotidien Le Monde consacre un long reportage à la Maison LA CELLE, explorant comment cette maison bicentenaire résiste aux pressions de l\'industrie cosmétique mondiale.',
      en: 'The daily Le Monde dedicates a long report to the House of LA CELLE, exploring how this bicentennial house resists the pressures of the global cosmetics industry.',
      zh: '《世界报》为LA CELLE香水世家刊登了一篇长篇报道，探讨这家有着两百年历史的世家如何抵御全球化妆品行业的压力。',
      es: 'El diario Le Monde dedica un largo reportaje a la Maison LA CELLE, explorando cómo esta casa bicentenaria resiste las presiones de la industria cosmética mundial.',
      de: 'Die Tageszeitung Le Monde widmet dem Haus LA CELLE einen langen Bericht.',
      it: 'Il quotidiano Le Monde dedica un lungo reportage alla Maison LA CELLE.',
      ja: '日刊紙ル・モンドは、LA CELLEに長いレポートを捧げています。',
      ru: 'Ежедневная газета Le Monde посвящает длинный репортаж Дому LA CELLE.',
      ar: 'تخصص صحيفة لوموند اليومية تقريراً مطولاً لدار LA CELLE.',
      pt: 'O diário Le Monde dedica uma longa reportagem à Maison LA CELLE.',
      ko: '일간지 르 몽드는 LA CELLE 하우스에 긴 보고서를 헌정합니다.',
      nl: 'De dagelijkse krant Le Monde wijdt een lang verslag aan het Huis LA CELLE.',
      tr: 'Günlük Le Monde gazetesi, LA CELLE Evine uzun bir rapor ayırıyor.',
      pl: 'Dziennik Le Monde poświęca długi reportaż Domowi LA CELLE.',
      vi: 'Nhật báo Le Monde dành một báo cáo dài cho Nhà LA CELLE.',
      th: 'หนังสือพิมพ์รายวัน Le Monde อุทิศรายงานยาวให้กับบ้าน LA CELLE',
      hi: 'दैनिक ले मोंड ने LA CELLE हाउस को एक लंबी रिपोर्ट समर्पित की।',
      id: 'Harian Le Monde mendedikasikan laporan panjang untuk Rumah LA CELLE.',
    },
    content: {
      fr: `Dans son édition du 5 décembre 2025, Le Monde publie un long reportage intitulé "LA CELLE, symbole de la résistance de la parfumerie artisanale". Le journaliste Thomas Mercier a enquêté pendant six mois sur les pratiques de la Maison, rencontrant artisans, fournisseurs et clients fidèles.\n\n"Dans un secteur dominé par les grands groupes de luxe, LA CELLE représente quelque chose d'unique : une indépendance totale, une traçabilité absolue des matières premières, et un refus catégorique de la synthèse chimique de masse," écrit Mercier.\n\nL'article révèle également que la Maison LA CELLE refuse depuis 2019 toutes les offres de rachat, préférant maintenir son indépendance familiale.`,
      en: `In its December 5, 2025 edition, Le Monde publishes a long report titled "LA CELLE, Symbol of the Resistance of Artisanal Perfumery". Journalist Thomas Mercier investigated for six months the practices of the House, meeting artisans, suppliers, and loyal customers.\n\n"In a sector dominated by large luxury groups, LA CELLE represents something unique: total independence, absolute traceability of raw materials, and a categorical refusal of mass chemical synthesis," writes Mercier.\n\nThe article also reveals that the House of LA CELLE has refused all buyout offers since 2019, preferring to maintain its family independence.`,
      zh: `在2025年12月5日的版面中，《世界报》刊登了一篇题为"LA CELLE，传统香水工艺坚守的象征"的长篇报道。记者Thomas Mercier历时六个月调查了这家世家的经营方式，采访了工匠、供应商和忠实客户。\n\n"在被大型奢侈品集团主导的行业中，LA CELLE代表着独特的存在：完全的独立性、原材料的绝对可追溯性，以及对大规模化学合成的坚决拒绝，"Mercier写道。\n\n文章还披露，LA CELLE香水世家自2019年以来拒绝了所有收购要约，坚持维护家族独立性。`,
    },
    source: 'Le Monde',
    sourceUrl: 'https://www.lemonde.fr',
  },
  {
    id: '6',
    date: '2025-11-18',
    category: 'brand',
    slug: 'collection-memoires-grasse-annonce',
    title: {
      fr: 'Annonce de la Collection "Mémoires de Grasse" — Printemps 2026',
      en: 'Announcement of the "Mémoires de Grasse" Collection — Spring 2026',
      zh: '"格拉斯记忆"系列发布公告——2026年春季',
      es: 'Anuncio de la Colección "Mémoires de Grasse" — Primavera 2026',
      de: 'Ankündigung der Kollektion "Mémoires de Grasse" — Frühjahr 2026',
      it: 'Annuncio della Collezione "Mémoires de Grasse" — Primavera 2026',
      ja: '"Mémoires de Grasse"コレクション発表 — 2026年春',
      ru: 'Анонс коллекции "Mémoires de Grasse" — Весна 2026',
      ar: 'إعلان عن مجموعة "ذكريات غراس" — ربيع 2026',
      pt: 'Anúncio da Coleção "Mémoires de Grasse" — Primavera 2026',
      ko: '"Mémoires de Grasse" 컬렉션 발표 — 2026년 봄',
      nl: 'Aankondiging van de Collectie "Mémoires de Grasse" — Lente 2026',
      tr: '"Mémoires de Grasse" Koleksiyonu Duyurusu — İlkbahar 2026',
      pl: 'Ogłoszenie Kolekcji "Mémoires de Grasse" — Wiosna 2026',
      vi: 'Thông báo Bộ sưu tập "Mémoires de Grasse" — Mùa xuân 2026',
      th: 'ประกาศคอลเลกชัน "Mémoires de Grasse" — ฤดูใบไม้ผลิ 2026',
      hi: '"Mémoires de Grasse" संग्रह की घोषणा — वसंत 2026',
      id: 'Pengumuman Koleksi "Mémoires de Grasse" — Musim Semi 2026',
    },
    excerpt: {
      fr: 'La Maison LA CELLE annonce sa prochaine collection "Mémoires de Grasse", sept fragrances inédites inspirées des archives historiques de la Maison, disponibles dès le printemps 2026.',
      en: 'The House of LA CELLE announces its upcoming collection "Mémoires de Grasse", seven unprecedented fragrances inspired by the House\'s historical archives, available from spring 2026.',
      zh: 'LA CELLE香水世家宣布即将推出"格拉斯记忆"系列，七款全新香水灵感来源于世家历史档案，将于2026年春季上市。',
      es: 'La Maison LA CELLE anuncia su próxima colección "Mémoires de Grasse", siete fragancias inéditas inspiradas en los archivos históricos de la Maison.',
      de: 'Das Haus LA CELLE kündigt seine kommende Kollektion "Mémoires de Grasse" an.',
      it: 'La Maison LA CELLE annuncia la sua prossima collezione "Mémoires de Grasse".',
      ja: 'LA CELLEは、次のコレクション"Mémoires de Grasse"を発表しました。',
      ru: 'Дом LA CELLE объявляет о своей предстоящей коллекции "Mémoires de Grasse".',
      ar: 'تعلن دار LA CELLE عن مجموعتها القادمة "ذكريات غراس".',
      pt: 'A Maison LA CELLE anuncia sua próxima coleção "Mémoires de Grasse".',
      ko: 'LA CELLE 하우스는 다가오는 컬렉션 "Mémoires de Grasse"를 발표합니다.',
      nl: 'Het Huis LA CELLE kondigt zijn komende collectie "Mémoires de Grasse" aan.',
      tr: 'LA CELLE Evi, yaklaşan "Mémoires de Grasse" koleksiyonunu duyuruyor.',
      pl: 'Dom LA CELLE ogłasza nadchodzącą kolekcję "Mémoires de Grasse".',
      vi: 'Nhà LA CELLE thông báo bộ sưu tập sắp tới "Mémoires de Grasse".',
      th: 'บ้าน LA CELLE ประกาศคอลเลกชันที่กำลังจะมาถึง "Mémoires de Grasse"',
      hi: 'LA CELLE हाउस अपने आगामी संग्रह "Mémoires de Grasse" की घोषणा करता है।',
      id: 'Rumah LA CELLE mengumumkan koleksi mendatang "Mémoires de Grasse".',
    },
    content: {
      fr: `La Maison LA CELLE est heureuse d'annoncer sa prochaine collection "Mémoires de Grasse", qui sera disponible dans toutes nos boutiques à partir du printemps 2026. Cette collection de sept fragrances est le fruit de trois années de recherche dans les archives historiques de la Maison, remontant jusqu'aux premières formulations de Léa Celle en 1802.\n\nChaque fragrance de la collection "Mémoires de Grasse" est une réinterprétation contemporaine d'une formule historique, respectant scrupuleusement les ingrédients d'origine tout en les adaptant aux standards actuels de qualité et de durabilité.\n\nLa collection sera présentée en avant-première à l'Exposition Internationale de Grasse en janvier 2026.`,
      en: `The House of LA CELLE is pleased to announce its upcoming collection "Mémoires de Grasse", which will be available in all our boutiques from spring 2026. This collection of seven fragrances is the result of three years of research in the House's historical archives, going back to the first formulations of Léa Celle in 1802.\n\nEach fragrance in the "Mémoires de Grasse" collection is a contemporary reinterpretation of a historical formula, scrupulously respecting the original ingredients while adapting them to current standards of quality and sustainability.\n\nThe collection will be previewed at the International Grasse Exhibition in January 2026.`,
      zh: `LA CELLE香水世家欣然宣布即将推出"格拉斯记忆"系列，该系列将于2026年春季在所有精品店上市。这个由七款香水组成的系列是三年来在世家历史档案中深入研究的成果，追溯至1802年Léa Celle的最初配方。\n\n"格拉斯记忆"系列中的每款香水都是对历史配方的当代诠释，严格尊重原始成分，同时将其调整至当今的质量和可持续性标准。\n\n该系列将于2026年1月在格拉斯国际香水展上进行预览。`,
    },
  },
]

// ─── Category Badge ───────────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  press:  'bg-blue-900/40 text-blue-300 border-blue-700/40',
  brand:  'bg-lacelle-gold/10 text-lacelle-gold border-lacelle-gold/30',
  event:  'bg-purple-900/40 text-purple-300 border-purple-700/40',
  award:  'bg-amber-900/40 text-amber-300 border-amber-700/40',
}

function CategoryBadge({ category, t }: { category: string; t: (k: string) => string }) {
  return (
    <span className={`inline-block px-2 py-0.5 text-[10px] font-sans-light tracking-widest-xl uppercase border ${CATEGORY_COLORS[category] ?? 'bg-gray-900/40 text-gray-300 border-gray-700/40'}`}>
      {t(`news.cat.${category}`)}
    </span>
  )
}

// ─── Article Card ─────────────────────────────────────────────────────────────
function ArticleCard({ article, lang, t, onClick }: {
  article: NewsArticle
  lang: string
  t: (k: string) => string
  onClick: () => void
}) {
  const title   = article.title[lang]   ?? article.title['fr']
  const excerpt = article.excerpt[lang] ?? article.excerpt['fr']
  const date    = new Date(article.date).toLocaleDateString(lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja-JP' : lang === 'ar' ? 'ar-SA' : 'fr-FR', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <article
      className="group border border-lacelle-gold/10 hover:border-lacelle-gold/30 transition-all duration-500 cursor-pointer bg-lacelle-black/50 hover:bg-lacelle-black/80"
      onClick={onClick}
      itemScope
      itemType="https://schema.org/NewsArticle"
    >
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-4">
          <CategoryBadge category={article.category} t={t} />
          {article.source && (
            <span className="text-lacelle-cream/30 text-[10px] font-sans-light tracking-widest-xl uppercase">
              {article.source}
            </span>
          )}
          <time
            dateTime={article.date}
            className="ml-auto text-lacelle-cream/30 text-[10px] font-sans-light tracking-widest-xl"
            itemProp="datePublished"
          >
            {date}
          </time>
        </div>
        <h2
          className="font-playfair text-lg lg:text-xl text-lacelle-cream group-hover:text-lacelle-gold transition-colors duration-300 mb-3 leading-snug"
          itemProp="headline"
        >
          {title}
        </h2>
        <p className="text-lacelle-cream/50 text-sm font-sans-light leading-relaxed line-clamp-3" itemProp="description">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center gap-1 text-lacelle-gold/60 group-hover:text-lacelle-gold text-xs font-sans-light tracking-widest-xl uppercase transition-colors duration-300">
          <span>{t('news.read_more')}</span>
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </article>
  )
}

// ─── Article Modal ────────────────────────────────────────────────────────────
function ArticleModal({ article, lang, t, onClose }: {
  article: NewsArticle
  lang: string
  t: (k: string) => string
  onClose: () => void
}) {
  const title   = article.title[lang]   ?? article.title['fr']
  const content = article.content[lang] ?? article.content['fr'] ?? (article.excerpt[lang] ?? article.excerpt['fr'])
  const date    = new Date(article.date).toLocaleDateString(lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja-JP' : lang === 'ar' ? 'ar-SA' : 'fr-FR', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-lacelle-black/90 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#0d0d0d] border border-lacelle-gold/20 shadow-2xl mt-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-lacelle-cream/40 hover:text-lacelle-gold transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-5">
            <CategoryBadge category={article.category} t={t} />
            {article.source && (
              <span className="text-lacelle-cream/30 text-[10px] font-sans-light tracking-widest-xl uppercase">
                {article.source}
              </span>
            )}
          </div>
          <h1 className="font-playfair text-2xl lg:text-3xl text-lacelle-cream mb-2 leading-snug">
            {title}
          </h1>
          <time dateTime={article.date} className="block text-lacelle-cream/30 text-xs font-sans-light tracking-widest-xl mb-6">
            {date}
          </time>
          <div className="gold-divider mb-6" />
          <div className="text-lacelle-cream/70 text-sm font-sans-light leading-relaxed space-y-4">
            {content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {article.sourceUrl && (
            <div className="mt-8 pt-6 border-t border-lacelle-gold/10">
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lacelle-gold/60 hover:text-lacelle-gold text-xs font-sans-light tracking-widest-xl uppercase transition-colors"
              >
                {t('news.source')}: {article.source} →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function News() {
  const { lang, t } = useLanguage()
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  useEffect(() => {
    document.title = `LA CELLE PARIS · ${t('news.page_title')}`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', t('news.meta_desc'))
    }
    // Structured data for SEO
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'news-structured-data'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'LA CELLE PARIS — Actualités & Presse',
      description: 'Toutes les actualités, communiqués de presse et événements de la Maison LA CELLE PARIS, parfumeur depuis 1802.',
      url: 'https://lacelle1802.com/#/news',
      publisher: {
        '@type': 'Organization',
        name: 'LA CELLE PARIS',
        url: 'https://lacelle1802.com',
        logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663405311158/ebebYjMErshCmhKiJP5h4X/logo-main_1afa18a9.png',
        foundingDate: '1802',
        address: { '@type': 'PostalAddress', addressLocality: 'Grasse', addressCountry: 'FR' },
      },
    })
    const existing = document.getElementById('news-structured-data')
    if (existing) existing.remove()
    document.head.appendChild(script)
    return () => { document.getElementById('news-structured-data')?.remove() }
  }, [lang])

  const categories = ['all', 'press', 'brand', 'event', 'award']
  const filtered = activeCategory === 'all'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter(a => a.category === activeCategory)

  return (
    <main className="min-h-screen bg-lacelle-black text-lacelle-cream pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 px-6 text-center border-b border-lacelle-gold/10">
        <p className="font-sans-light text-xs tracking-widest-xl uppercase text-lacelle-gold/60 mb-4">
          {t('news.eyebrow')}
        </p>
        <h1 className="font-playfair text-4xl lg:text-6xl text-lacelle-cream mb-4 italic">
          {t('news.page_title')}
        </h1>
        <div className="gold-divider mx-auto mt-6 mb-6 w-16" />
        <p className="font-sans-light text-sm text-lacelle-cream/50 tracking-wide max-w-xl mx-auto">
          {t('news.subtitle')}
        </p>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 border-b border-lacelle-gold/10">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-[10px] font-sans-light tracking-widest-xl uppercase border transition-colors duration-300 ${
                activeCategory === cat
                  ? 'border-lacelle-gold text-lacelle-gold bg-lacelle-gold/10'
                  : 'border-lacelle-gold/20 text-lacelle-cream/40 hover:border-lacelle-gold/40 hover:text-lacelle-cream/70'
              }`}
            >
              {cat === 'all' ? t('news.cat.all') : t(`news.cat.${cat}`)}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 lg:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-lacelle-cream/30 font-sans-light text-sm py-16">
              {t('news.empty')}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map(article => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  lang={lang}
                  t={t}
                  onClick={() => setSelectedArticle(article)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-16 px-6 border-t border-lacelle-gold/10 text-center">
        <div className="max-w-lg mx-auto">
          <p className="font-sans-light text-xs tracking-widest-xl uppercase text-lacelle-gold/60 mb-3">
            {t('news.press_contact_label')}
          </p>
          <h2 className="font-playfair text-2xl text-lacelle-cream mb-4 italic">
            {t('news.press_contact_title')}
          </h2>
          <p className="text-lacelle-cream/50 text-sm font-sans-light mb-6">
            {t('news.press_contact_desc')}
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 border border-lacelle-gold/40 text-lacelle-gold hover:bg-lacelle-gold/10 font-sans-light text-xs tracking-widest-xl uppercase transition-colors duration-300"
          >
            {t('news.press_contact_cta')}
          </Link>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          lang={lang}
          t={t}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </main>
  )
}
