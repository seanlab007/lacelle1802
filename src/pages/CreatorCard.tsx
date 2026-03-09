import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663405311158/ebebYjMErshCmhKiJP5h4X'

interface CardTier {
  id: string
  name: string
  nameKey: string
  color: string
  gradient: string
  borderColor: string
  creditLimit: string
  commission: string
  perks: string[]
  perksKey: string[]
  price: number
  badge: string
}

const CARD_TIERS: CardTier[] = [
  {
    id: 'rose',
    name: 'Carte Rose',
    nameKey: 'creator.card_rose',
    color: 'from-rose-900/80 via-rose-800/60 to-rose-900/80',
    gradient: 'from-rose-400 to-pink-600',
    borderColor: 'border-rose-500/30',
    creditLimit: '€500',
    commission: '8%',
    badge: '🌹',
    price: 0,
    perks: ['Access to group buy campaigns', 'Personal referral link', 'Monthly fragrance sample'],
    perksKey: ['creator.perk_groupbuy', 'creator.perk_referral', 'creator.perk_sample'],
  },
  {
    id: 'or',
    name: 'Carte Or',
    nameKey: 'creator.card_or',
    color: 'from-yellow-900/80 via-amber-800/60 to-yellow-900/80',
    gradient: 'from-amber-400 to-yellow-600',
    borderColor: 'border-amber-500/40',
    creditLimit: '€2,000',
    commission: '12%',
    badge: '✦',
    price: 99,
    perks: ['All Rose perks', 'Priority access to new launches', 'Co-branded content kit', 'Quarterly atelier visit'],
    perksKey: ['creator.perk_all_rose', 'creator.perk_priority', 'creator.perk_content', 'creator.perk_atelier'],
  },
  {
    id: 'platine',
    name: 'Carte Platine',
    nameKey: 'creator.card_platine',
    color: 'from-slate-700/80 via-slate-600/60 to-slate-700/80',
    gradient: 'from-slate-300 to-slate-500',
    borderColor: 'border-slate-400/40',
    creditLimit: '€10,000',
    commission: '18%',
    badge: '◆',
    price: 499,
    perks: ['All Or perks', 'Bespoke fragrance consultation', 'Annual Grasse harvest invitation', 'White-label collection rights', 'Dedicated account manager'],
    perksKey: ['creator.perk_all_or', 'creator.perk_bespoke', 'creator.perk_harvest', 'creator.perk_whitelabel', 'creator.perk_manager'],
  },
  {
    id: 'maison',
    name: 'Carte Maison',
    nameKey: 'creator.card_maison',
    color: 'from-lacelle-black via-lacelle-charcoal to-lacelle-black',
    gradient: 'from-lacelle-gold to-amber-300',
    borderColor: 'border-lacelle-gold/60',
    creditLimit: '€50,000',
    commission: '25%',
    badge: '⚜',
    price: 1999,
    perks: ['All Platine perks', 'Named co-creation credit', 'Revenue share on named fragrance', 'Lifetime VIP access', 'Personal perfumer sessions'],
    perksKey: ['creator.perk_all_platine', 'creator.perk_cocreation', 'creator.perk_revenue', 'creator.perk_lifetime', 'creator.perk_perfumer'],
  },
]

interface Creator {
  name: string
  handle: string
  tier: string
  followers: string
  earnings: string
  avatar: string
  quote: string
  quoteKey: string
}

const TOP_CREATORS: Creator[] = [
  {
    name: 'Sophie Beaumont',
    handle: '@sophieparfum',
    tier: 'platine',
    followers: '2.4M',
    earnings: '€18,400',
    avatar: `${CDN}/photo-1494790108377-be9c29b29330_a1b2c3d4.jpg`,
    quote: 'LA CELLE changed how I talk about fragrance. The Maison de Celle collection is extraordinary.',
    quoteKey: 'creator.quote1',
  },
  {
    name: 'Marco Delacroix',
    handle: '@parfumeurmarco',
    tier: 'or',
    followers: '890K',
    earnings: '€6,200',
    avatar: `${CDN}/photo-1507003211169-0a1dd7228f2d_b2c3d4e5.jpg`,
    quote: 'The commission structure is the best I\'ve seen. Real luxury, real earnings.',
    quoteKey: 'creator.quote2',
  },
  {
    name: 'Yuki Tanaka',
    handle: '@yukiscent',
    tier: 'maison',
    followers: '5.1M',
    earnings: '€42,000',
    avatar: `${CDN}/photo-1438761681033-6461ffad8d80_c3d4e5f6.jpg`,
    quote: 'My co-created fragrance "Sakura de Grasse" sold out in 48 hours. Incredible.',
    quoteKey: 'creator.quote3',
  },
]

function CardVisual({ tier, size = 'normal' }: { tier: CardTier; size?: 'normal' | 'large' }) {
  const h = size === 'large' ? 'h-52' : 'h-40'
  return (
    <div className={`relative ${h} w-full rounded-sm overflow-hidden bg-gradient-to-br ${tier.color} border ${tier.borderColor}`}>
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
        backgroundSize: '8px 8px'
      }} />
      {/* Shine */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent" />
      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-sans-light text-[9px] tracking-widest-xl text-white/40 uppercase">LA CELLE PARIS · 1802</p>
            <p className={`font-playfair text-xl bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent mt-1`}>
              {tier.badge} {tier.name}
            </p>
          </div>
          <div className={`text-2xl bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
            {tier.badge}
          </div>
        </div>
        <div>
          <p className="font-sans-light text-[10px] tracking-widest-xl text-white/30 uppercase mb-1">Credit Limit</p>
          <p className={`font-playfair text-2xl bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
            {tier.creditLimit}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function CreatorCard() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState<CardTier | null>(null)
  const [applied, setApplied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', handle: '', platform: 'instagram', followers: '' })

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault()
    setApplied(true)
    setTimeout(() => { setApplied(false); setSelected(null) }, 3000)
  }

  return (
    <div className="min-h-screen bg-lacelle-black pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lacelle-black via-lacelle-charcoal/30 to-lacelle-black" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-sans-light text-lacelle-gold/60 text-xs tracking-widest-xl uppercase mb-6">
            {t('creator.programme')}
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-lacelle-cream mb-6 leading-tight">
            {t('creator.title')}
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="font-sans-light text-lacelle-cream/60 text-base leading-relaxed max-w-2xl mx-auto">
            {t('creator.desc')}
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-t border-b border-lacelle-gold/10 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '12,400+', label: t('creator.stat_creators') },
              { value: '€2.8M', label: t('creator.stat_paid') },
              { value: '180+', label: t('creator.stat_countries') },
              { value: '25%', label: t('creator.stat_max_commission') },
            ].map(stat => (
              <div key={stat.label}>
                <p className="font-playfair text-3xl text-lacelle-gold mb-2">{stat.value}</p>
                <p className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest-xl uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-playfair text-3xl text-lacelle-cream text-center mb-4">{t('creator.choose_card')}</h2>
          <p className="font-sans-light text-lacelle-cream/40 text-sm text-center mb-16 tracking-widest-xl">
            {t('creator.choose_card_sub')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {CARD_TIERS.map(tier => (
              <div
                key={tier.id}
                className={`bg-lacelle-charcoal border ${tier.borderColor} hover:border-opacity-80 transition-all duration-500 group overflow-hidden ${
                  tier.id === 'maison' ? 'ring-1 ring-lacelle-gold/20' : ''
                }`}
              >
                {tier.id === 'maison' && (
                  <div className="bg-lacelle-gold/10 text-lacelle-gold text-center py-1.5 font-sans-light text-[10px] tracking-widest-xl uppercase">
                    {t('creator.most_popular')}
                  </div>
                )}
                <div className="p-6">
                  <CardVisual tier={tier} />

                  <div className="mt-5">
                    <h3 className="font-playfair text-xl text-lacelle-cream mb-1">{tier.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      {tier.price === 0
                        ? <span className="font-playfair text-2xl text-lacelle-gold">{t('creator.free')}</span>
                        : <>
                            <span className="font-playfair text-2xl text-lacelle-gold">{tier.price}€</span>
                            <span className="font-sans-light text-lacelle-cream/30 text-xs">/year</span>
                          </>
                      }
                    </div>

                    <div className="space-y-1.5 mb-6">
                      <div className="flex justify-between">
                        <span className="font-sans-light text-lacelle-cream/40 text-xs">{t('creator.credit_limit')}</span>
                        <span className="font-sans-light text-lacelle-gold text-xs">{tier.creditLimit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-sans-light text-lacelle-cream/40 text-xs">{t('creator.commission')}</span>
                        <span className="font-sans-light text-lacelle-gold text-xs">{tier.commission}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {tier.perks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-lacelle-gold/60 text-xs mt-0.5">✦</span>
                          <span className="font-sans-light text-lacelle-cream/50 text-xs leading-relaxed">{perk}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelected(tier)}
                      className={`w-full py-2.5 font-sans-light text-xs tracking-widest-xl uppercase transition-all duration-300 ${
                        tier.id === 'maison'
                          ? 'bg-lacelle-gold text-lacelle-black hover:bg-lacelle-gold/90'
                          : 'border border-lacelle-gold/30 text-lacelle-gold/70 hover:text-lacelle-gold hover:border-lacelle-gold/60'
                      }`}
                    >
                      {t('creator.apply_now')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 border-t border-lacelle-gold/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl text-lacelle-cream text-center mb-12">{t('creator.how_works')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: t('creator.step1'), desc: t('creator.step1_desc') },
              { num: '02', title: t('creator.step2'), desc: t('creator.step2_desc') },
              { num: '03', title: t('creator.step3'), desc: t('creator.step3_desc') },
              { num: '04', title: t('creator.step4'), desc: t('creator.step4_desc') },
            ].map(step => (
              <div key={step.num} className="text-center">
                <div className="font-playfair text-4xl text-lacelle-gold/20 mb-3">{step.num}</div>
                <h3 className="font-playfair text-base text-lacelle-cream mb-2">{step.title}</h3>
                <p className="font-sans-light text-lacelle-cream/40 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Creators */}
      <section className="py-16 border-t border-lacelle-gold/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl text-lacelle-cream text-center mb-12">{t('creator.top_creators')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TOP_CREATORS.map(creator => {
              const tier = CARD_TIERS.find(t => t.id === creator.tier)!
              return (
                <div key={creator.handle} className="bg-lacelle-charcoal border border-lacelle-gold/10 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-12 h-12 rounded-full object-cover filter grayscale-[20%]"
                      onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' }}
                    />
                    <div>
                      <p className="font-playfair text-lacelle-cream text-sm">{creator.name}</p>
                      <p className="font-sans-light text-lacelle-cream/40 text-xs">{creator.handle}</p>
                    </div>
                    <div className={`ml-auto text-xs px-2 py-0.5 border ${tier.borderColor} font-sans-light tracking-widest-xl`}>
                      <span className={`bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                        {tier.badge}
                      </span>
                    </div>
                  </div>
                  <p className="font-sans-light text-lacelle-cream/50 text-xs italic leading-relaxed mb-4">
                    "{creator.quote}"
                  </p>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-sans-light text-lacelle-cream/30 text-[10px] tracking-widest-xl uppercase">{t('creator.followers')}</p>
                      <p className="font-playfair text-lacelle-gold text-sm">{creator.followers}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-sans-light text-lacelle-cream/30 text-[10px] tracking-widest-xl uppercase">{t('creator.monthly_earnings')}</p>
                      <p className="font-playfair text-green-400 text-sm">{creator.earnings}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-lacelle-black/80 backdrop-blur-sm">
          <div className="bg-lacelle-charcoal border border-lacelle-gold/20 max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto">
            {applied ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✦</div>
                <h3 className="font-playfair text-2xl text-lacelle-gold mb-3">{t('creator.applied_title')}</h3>
                <p className="font-sans-light text-lacelle-cream/50 text-sm">{t('creator.applied_desc')}</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <CardVisual tier={selected} size="large" />
                </div>
                <h3 className="font-playfair text-2xl text-lacelle-cream mb-1">{selected.name}</h3>
                <p className="font-sans-light text-lacelle-cream/40 text-sm mb-6">
                  {t('creator.apply_subtitle')}
                </p>

                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest-xl uppercase block mb-1.5">
                      {t('creator.form_name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-lacelle-black border border-lacelle-gold/20 text-lacelle-cream px-4 py-2.5 font-sans-light text-sm focus:outline-none focus:border-lacelle-gold/50"
                    />
                  </div>
                  <div>
                    <label className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest-xl uppercase block mb-1.5">
                      {t('creator.form_email')}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-lacelle-black border border-lacelle-gold/20 text-lacelle-cream px-4 py-2.5 font-sans-light text-sm focus:outline-none focus:border-lacelle-gold/50"
                    />
                  </div>
                  <div>
                    <label className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest-xl uppercase block mb-1.5">
                      {t('creator.form_handle')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="@yourhandle"
                      value={form.handle}
                      onChange={e => setForm(f => ({ ...f, handle: e.target.value }))}
                      className="w-full bg-lacelle-black border border-lacelle-gold/20 text-lacelle-cream px-4 py-2.5 font-sans-light text-sm focus:outline-none focus:border-lacelle-gold/50"
                    />
                  </div>
                  <div>
                    <label className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest-xl uppercase block mb-1.5">
                      {t('creator.form_platform')}
                    </label>
                    <select
                      value={form.platform}
                      onChange={e => setForm(f => ({ ...f, platform: e.target.value }))}
                      className="w-full bg-lacelle-black border border-lacelle-gold/20 text-lacelle-cream px-4 py-2.5 font-sans-light text-sm focus:outline-none focus:border-lacelle-gold/50"
                    >
                      <option value="instagram">Instagram</option>
                      <option value="tiktok">TikTok</option>
                      <option value="youtube">YouTube</option>
                      <option value="xiaohongshu">小红书 (RED)</option>
                      <option value="weibo">Weibo</option>
                      <option value="telegram">Telegram</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-sans-light text-lacelle-cream/40 text-xs tracking-widest-xl uppercase block mb-1.5">
                      {t('creator.form_followers')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 150,000"
                      value={form.followers}
                      onChange={e => setForm(f => ({ ...f, followers: e.target.value }))}
                      className="w-full bg-lacelle-black border border-lacelle-gold/20 text-lacelle-cream px-4 py-2.5 font-sans-light text-sm focus:outline-none focus:border-lacelle-gold/50"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-lacelle-gold text-lacelle-black py-3 font-sans-light text-xs tracking-widest-xl uppercase hover:bg-lacelle-gold/90 transition-colors"
                    >
                      {t('creator.submit_application')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="px-6 border border-lacelle-gold/20 text-lacelle-cream/50 hover:text-lacelle-gold hover:border-lacelle-gold/40 transition-colors font-sans-light text-xs tracking-widest-xl uppercase"
                    >
                      {t('common.cancel')}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
