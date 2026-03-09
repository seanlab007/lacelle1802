import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663405311158/ebebYjMErshCmhKiJP5h4X'

interface Tier {
  count: number
  discount: number
  label: string
}

interface GroupOffer {
  id: string
  name: string
  nameKey?: string
  collection: string
  image: string
  originalPrice: number
  currentCount: number
  targetCount: number
  expiresHours: number
  tiers: Tier[]
  badge: 'flash' | 'mega' | 'standard'
  description: string
}

const OFFERS: GroupOffer[] = [
  {
    id: 'gb-01',
    name: 'Nuit de Versailles',
    collection: 'Collection Classique',
    image: `${CDN}/photo-1587017539504-67cfbddac569_a5c9e7d1.jpg`,
    originalPrice: 320,
    currentCount: 8743,
    targetCount: 10000,
    expiresHours: 23,
    badge: 'mega',
    description: 'Rose de mai, vétiver de Haïti, ambre gris',
    tiers: [
      { count: 100,   discount: 10, label: '10% off' },
      { count: 1000,  discount: 20, label: '20% off' },
      { count: 5000,  discount: 35, label: '35% off' },
      { count: 10000, discount: 50, label: '50% off' },
    ],
  },
  {
    id: 'gb-02',
    name: 'Minuit à Paris',
    collection: 'LE MINUIT À PARIS',
    image: `${CDN}/photo-1590736969955-71cc94901144_3b8f2c1a.jpg`,
    originalPrice: 285,
    currentCount: 2156,
    targetCount: 5000,
    expiresHours: 47,
    badge: 'standard',
    description: 'Iris florentin, bois de oud, musc blanc',
    tiers: [
      { count: 100,  discount: 10, label: '10% off' },
      { count: 500,  discount: 20, label: '20% off' },
      { count: 2000, discount: 30, label: '30% off' },
      { count: 5000, discount: 45, label: '45% off' },
    ],
  },
  {
    id: 'gb-03',
    name: 'Jardin de Grasse',
    collection: 'Collection Naturelle',
    image: `${CDN}/photo-1547005327-f8e4b1e4e9e5_c2d4f6a8.jpg`,
    originalPrice: 195,
    currentCount: 412,
    targetCount: 1000,
    expiresHours: 6,
    badge: 'flash',
    description: 'Jasmin sambac, néroli, cèdre de l\'Atlas',
    tiers: [
      { count: 50,   discount: 15, label: '15% off' },
      { count: 200,  discount: 25, label: '25% off' },
      { count: 500,  discount: 35, label: '35% off' },
      { count: 1000, discount: 50, label: '50% off' },
    ],
  },
  {
    id: 'gb-04',
    name: 'Impératrice',
    collection: 'Maison de Celle',
    image: `${CDN}/photo-1592945403244-b3fbafd7f539_d1e2f3a4.jpg`,
    originalPrice: 1200,
    currentCount: 89,
    targetCount: 200,
    expiresHours: 72,
    badge: 'standard',
    description: 'Recréation de la formule de 1807 — Rose centifolia, musc impérial, ambre',
    tiers: [
      { count: 20,  discount: 8,  label: '8% off' },
      { count: 50,  discount: 15, label: '15% off' },
      { count: 100, discount: 25, label: '25% off' },
      { count: 200, discount: 35, label: '35% off' },
    ],
  },
  {
    id: 'gb-05',
    name: 'Parfum d\'Amour',
    collection: 'Parfum d\'Amour',
    image: `${CDN}/photo-1541643600914-78b084683702_e5f6a7b8.jpg`,
    originalPrice: 245,
    currentCount: 5821,
    targetCount: 8000,
    expiresHours: 18,
    badge: 'mega',
    description: 'Patchouli de Sumatra, rose turque, vanille de Madagascar',
    tiers: [
      { count: 100,  discount: 10, label: '10% off' },
      { count: 1000, discount: 20, label: '20% off' },
      { count: 3000, discount: 30, label: '30% off' },
      { count: 8000, discount: 45, label: '45% off' },
    ],
  },
  {
    id: 'gb-06',
    name: 'Dialogue des Maisons',
    collection: 'Maison de Celle',
    image: `${CDN}/photo-1563170351-be82bc888aa4_f7a8b9c0.jpg`,
    originalPrice: 890,
    currentCount: 234,
    targetCount: 500,
    expiresHours: 96,
    badge: 'standard',
    description: 'Hommage à Lubin (1798–2020) — Bergamote, fougère, bois précieux',
    tiers: [
      { count: 30,  discount: 10, label: '10% off' },
      { count: 100, discount: 18, label: '18% off' },
      { count: 250, discount: 28, label: '28% off' },
      { count: 500, discount: 40, label: '40% off' },
    ],
  },
]

function getActiveTier(offer: GroupOffer): Tier {
  const active = [...offer.tiers].reverse().find(t => offer.currentCount >= t.count)
  return active ?? offer.tiers[0]
}

function getNextTier(offer: GroupOffer): Tier | null {
  return offer.tiers.find(t => offer.currentCount < t.count) ?? null
}

function getGroupPrice(offer: GroupOffer): number {
  const tier = getActiveTier(offer)
  return Math.round(offer.originalPrice * (1 - tier.discount / 100))
}

function formatCountdown(hours: number): string {
  if (hours < 1) return `${Math.round(hours * 60)}m`
  if (hours < 24) return `${Math.floor(hours)}h ${Math.round((hours % 1) * 60)}m`
  return `${Math.floor(hours / 24)}j ${hours % 24}h`
}

function BadgeLabel({ badge, t }: { badge: GroupOffer['badge']; t: (k: string) => string }) {
  const map = { flash: t('groupbuy.flash'), mega: t('groupbuy.mega'), standard: t('groupbuy.standard') }
  const colors = { flash: 'bg-amber-500/20 text-amber-400 border-amber-500/30', mega: 'bg-red-500/20 text-red-400 border-red-500/30', standard: 'bg-lacelle-gold/10 text-lacelle-gold border-lacelle-gold/20' }
  return (
    <span className={`text-[10px] px-2 py-0.5 border font-sans-light tracking-widest-xl ${colors[badge]}`}>
      {map[badge]}
    </span>
  )
}

export default function GroupBuy() {
  const { t } = useLanguage()
  const [joined, setJoined] = useState<Record<string, boolean>>({})
  const [copied, setCopied] = useState<string | null>(null)
  const [selected, setSelected] = useState<GroupOffer | null>(null)
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(OFFERS.map(o => [o.id, o.currentCount]))
  )

  // Simulate live counter ticking up
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => {
        const next = { ...prev }
        OFFERS.forEach(o => {
          if (next[o.id] < o.targetCount) {
            next[o.id] = Math.min(next[o.id] + Math.floor(Math.random() * 3), o.targetCount)
          }
        })
        return next
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleJoin = (offer: GroupOffer) => {
    setCounts(prev => ({ ...prev, [offer.id]: Math.min(prev[offer.id] + 1, offer.targetCount) }))
    setJoined(prev => ({ ...prev, [offer.id]: true }))
    setSelected(null)
  }

  const handleCopy = (offerId: string) => {
    navigator.clipboard.writeText(`https://www.lacelle1802.com/group-buy?ref=${offerId}`)
    setCopied(offerId)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleWhatsApp = (offer: GroupOffer) => {
    const price = getGroupPrice({ ...offer, currentCount: counts[offer.id] })
    const url = `https://wa.me/?text=${encodeURIComponent(`🌹 LA CELLE PARIS — ${offer.name}\n💰 ${price}€ (was ${offer.originalPrice}€)\nhttps://www.lacelle1802.com/group-buy?ref=${offer.id}`)}`
    window.open(url, '_blank')
  }

  const handleTelegram = (offer: GroupOffer) => {
    const price = getGroupPrice({ ...offer, currentCount: counts[offer.id] })
    const url = `https://t.me/share/url?url=${encodeURIComponent(`https://www.lacelle1802.com/group-buy?ref=${offer.id}`)}&text=${encodeURIComponent(`🌹 LA CELLE PARIS — ${offer.name} — ${price}€`)}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-lacelle-black pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lacelle-black via-lacelle-black/90 to-lacelle-black" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #c9a96e 0, #c9a96e 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px'
          }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-sans-light text-lacelle-gold/60 text-xs tracking-widest-xl uppercase mb-6">
            LA CELLE PARIS · 1802
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-lacelle-cream mb-6 leading-tight">
            {t('groupbuy.title')}
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="font-sans-light text-lacelle-cream/60 text-base leading-relaxed max-w-2xl mx-auto">
            {t('groupbuy.desc')}
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 border-t border-lacelle-gold/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl text-lacelle-cream text-center mb-12">
            {t('groupbuy.how_works')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: t('groupbuy.step1'), desc: t('groupbuy.step1_desc') },
              { num: '02', title: t('groupbuy.step2'), desc: t('groupbuy.step2_desc') },
              { num: '03', title: t('groupbuy.step3'), desc: t('groupbuy.step3_desc') },
            ].map(step => (
              <div key={step.num} className="text-center">
                <div className="font-playfair text-4xl text-lacelle-gold/30 mb-4">{step.num}</div>
                <h3 className="font-playfair text-lg text-lacelle-cream mb-3">{step.title}</h3>
                <p className="font-sans-light text-lacelle-cream/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 border-t border-lacelle-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {OFFERS.map(offer => {
              const liveCount = counts[offer.id]
              const liveOffer = { ...offer, currentCount: liveCount }
              const activeTier = getActiveTier(liveOffer)
              const nextTier = getNextTier(liveOffer)
              const groupPrice = getGroupPrice(liveOffer)
              const progress = Math.min((liveCount / offer.targetCount) * 100, 100)
              const isJoined = joined[offer.id]

              return (
                <div
                  key={offer.id}
                  className="bg-lacelle-charcoal border border-lacelle-gold/10 hover:border-lacelle-gold/30 transition-all duration-500 group overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[30%]"
                      onError={e => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lacelle-charcoal via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <BadgeLabel badge={offer.badge} t={t} />
                    </div>
                    <div className="absolute top-3 right-3 bg-red-600/90 text-white text-xs px-2 py-0.5 font-sans-light tracking-widest-xl">
                      -{activeTier.discount}%
                    </div>
                    <div className="absolute bottom-3 right-3 bg-lacelle-black/80 text-lacelle-gold/70 text-[10px] px-2 py-1 font-sans-light tracking-widest-xl">
                      ⏱ {formatCountdown(offer.expiresHours)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="font-sans-light text-lacelle-gold/50 text-[10px] tracking-widest-xl uppercase mb-1">
                      {offer.collection}
                    </p>
                    <h3 className="font-playfair text-xl text-lacelle-cream mb-1">{offer.name}</h3>
                    <p className="font-sans-light text-lacelle-cream/40 text-xs italic mb-4">{offer.description}</p>

                    {/* Price */}
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="font-playfair text-2xl text-lacelle-gold">{groupPrice}€</span>
                      <span className="font-sans-light text-lacelle-cream/30 text-sm line-through">{offer.originalPrice}€</span>
                      <span className="font-sans-light text-green-400/80 text-xs">-{activeTier.discount}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-sans-light text-lacelle-cream/40 text-[10px] tracking-widest-xl">
                          {liveCount.toLocaleString()} {t('groupbuy.joined')}
                        </span>
                        <span className="font-sans-light text-lacelle-gold/60 text-[10px]">
                          {t('groupbuy.target')}: {offer.targetCount.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-1 bg-lacelle-black rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-lacelle-gold/60 to-lacelle-gold transition-all duration-1000"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Next tier hint */}
                    {nextTier && (
                      <p className="font-sans-light text-lacelle-cream/30 text-[10px] mb-4">
                        {nextTier.count - liveCount} {t('groupbuy.more_needed')} {nextTier.discount}% off
                      </p>
                    )}

                    {/* Tier badges */}
                    <div className="flex gap-1.5 flex-wrap mb-5">
                      {offer.tiers.map(tier => (
                        <span
                          key={tier.count}
                          className={`text-[9px] px-2 py-0.5 border font-sans-light tracking-widest-xl ${
                            liveCount >= tier.count
                              ? 'border-lacelle-gold/40 text-lacelle-gold bg-lacelle-gold/10'
                              : 'border-lacelle-cream/10 text-lacelle-cream/20'
                          }`}
                        >
                          {tier.count >= 1000 ? `${tier.count/1000}k` : tier.count} → -{tier.discount}%
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelected(offer)}
                        disabled={isJoined}
                        className={`flex-1 py-2.5 font-sans-light text-xs tracking-widest-xl uppercase transition-all duration-300 ${
                          isJoined
                            ? 'bg-green-600/20 text-green-400 border border-green-600/30 cursor-default'
                            : 'bg-lacelle-gold text-lacelle-black hover:bg-lacelle-gold/90'
                        }`}
                      >
                        {isJoined ? `✓ ${t('groupbuy.success')}` : t('groupbuy.join_now')}
                      </button>
                      <button
                        onClick={() => handleWhatsApp(offer)}
                        className="px-3 py-2.5 border border-lacelle-gold/20 text-lacelle-gold/60 hover:text-lacelle-gold hover:border-lacelle-gold/40 transition-colors text-xs"
                        title={t('groupbuy.share_whatsapp')}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </button>
                      <button
                        onClick={() => handleCopy(offer.id)}
                        className="px-3 py-2.5 border border-lacelle-gold/20 text-lacelle-gold/60 hover:text-lacelle-gold hover:border-lacelle-gold/40 transition-colors text-xs"
                        title={t('groupbuy.copy_link')}
                      >
                        {copied === offer.id
                          ? <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        }
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Join Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-lacelle-black/80 backdrop-blur-sm">
          <div className="bg-lacelle-charcoal border border-lacelle-gold/20 max-w-md w-full p-8">
            <h3 className="font-playfair text-2xl text-lacelle-cream mb-2">{selected.name}</h3>
            <p className="font-sans-light text-lacelle-cream/50 text-sm mb-6">{selected.collection}</p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-playfair text-3xl text-lacelle-gold">
                {getGroupPrice({ ...selected, currentCount: counts[selected.id] })}€
              </span>
              <span className="font-sans-light text-lacelle-cream/30 text-lg line-through">{selected.originalPrice}€</span>
            </div>

            <p className="font-sans-light text-lacelle-cream/50 text-sm mb-8 leading-relaxed">
              {selected.description}
            </p>

            {/* Share options */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleWhatsApp(selected)}
                className="w-full flex items-center gap-3 px-4 py-3 border border-green-500/30 text-green-400/80 hover:text-green-400 hover:border-green-500/60 transition-colors font-sans-light text-xs tracking-widest-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('groupbuy.share_whatsapp')}
              </button>
              <button
                onClick={() => handleTelegram(selected)}
                className="w-full flex items-center gap-3 px-4 py-3 border border-blue-500/30 text-blue-400/80 hover:text-blue-400 hover:border-blue-500/60 transition-colors font-sans-light text-xs tracking-widest-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                {t('groupbuy.share_telegram')}
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleJoin(selected)}
                className="flex-1 bg-lacelle-gold text-lacelle-black py-3 font-sans-light text-xs tracking-widest-xl uppercase hover:bg-lacelle-gold/90 transition-colors"
              >
                {t('groupbuy.confirm_join')}
              </button>
              <button
                onClick={() => setSelected(null)}
                className="px-6 border border-lacelle-gold/20 text-lacelle-cream/50 hover:text-lacelle-gold hover:border-lacelle-gold/40 transition-colors font-sans-light text-xs tracking-widest-xl uppercase"
              >
                {t('common.cancel')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
