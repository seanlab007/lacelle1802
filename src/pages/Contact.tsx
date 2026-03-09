import { useEffect, useState } from 'react'

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663405311158/ebebYjMErshCmhKiJP5h4X'

function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Contact() {
  useIntersectionObserver()
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-lacelle-black pt-20">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CDN}/shop-paris-1900_162ba08f.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lacelle-black/50 via-lacelle-black/60 to-lacelle-black" />
        <div className="relative z-10 text-center px-6">
          <p className="section-label mb-6">Nous Contacter · 联系我们</p>
          <h1 className="font-playfair text-5xl md:text-6xl text-lacelle-cream italic font-light mb-4">
            Contact
          </h1>
          <div className="gold-divider" />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="fade-in-section">
              <p className="section-label mb-8">Nos Adresses · 我们的地址</p>

              <div className="space-y-12">
                <div>
                  <h3 className="font-playfair text-2xl text-lacelle-cream italic mb-4">Boutique Paris</h3>
                  <div className="w-8 h-px bg-lacelle-gold/40 mb-4" />
                  <p className="font-cormorant text-lacelle-cream/70 text-base leading-relaxed mb-2">
                    12 Rue du Faubourg Saint-Honoré<br />
                    75008 Paris, France
                  </p>
                  <p className="font-sans-light text-xs text-lacelle-cream/40 tracking-wider uppercase">
                    Lun–Sam : 10h–19h · 周一至周六 10:00–19:00
                  </p>
                </div>

                <div>
                  <h3 className="font-playfair text-2xl text-lacelle-cream italic mb-4">Atelier Grasse</h3>
                  <div className="w-8 h-px bg-lacelle-gold/40 mb-4" />
                  <p className="font-cormorant text-lacelle-cream/70 text-base leading-relaxed mb-2">
                    Chemin des Parfumeurs<br />
                    06130 Grasse, Alpes-Maritimes, France
                  </p>
                  <p className="font-sans-light text-xs text-lacelle-cream/40 tracking-wider uppercase">
                    Visites sur rendez-vous uniquement · 仅限预约参观
                  </p>
                </div>

                <div>
                  <h3 className="font-playfair text-2xl text-lacelle-cream italic mb-4">中国总代理</h3>
                  <div className="w-8 h-px bg-lacelle-gold/40 mb-4" />
                  <p className="font-cormorant text-lacelle-cream/70 text-base leading-relaxed mb-2">
                    奢利（上海）贸易有限公司<br />
                    上海市静安区南京西路1788号
                  </p>
                  <p className="font-sans-light text-xs text-lacelle-cream/40 tracking-wider uppercase">
                    官方网站 : www.lacelle1802.com
                  </p>
                </div>

                <div>
                  <h3 className="font-playfair text-xl text-lacelle-cream italic mb-4">Service Clientèle · 客户服务</h3>
                  <div className="w-8 h-px bg-lacelle-gold/40 mb-4" />
                  <div className="space-y-2">
                    <p className="font-cormorant text-lacelle-cream/60 text-sm">
                      <span className="text-lacelle-gold/60">Email :</span> contact@lacelle1802.com
                    </p>
                    <p className="font-cormorant text-lacelle-cream/60 text-sm">
                      <span className="text-lacelle-gold/60">Paris :</span> +33 1 42 65 XX XX
                    </p>
                    <p className="font-cormorant text-lacelle-cream/60 text-sm">
                      <span className="text-lacelle-gold/60">中国 :</span> +86 400-XXX-XXXX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-section" style={{ transitionDelay: '200ms' }}>
              <p className="section-label mb-8">Demande Privée · 私人咨询</p>

              {submitted ? (
                <div className="border border-lacelle-gold/30 p-12 text-center">
                  <div className="w-12 h-12 border border-lacelle-gold rotate-45 mx-auto mb-6" />
                  <h3 className="font-playfair text-2xl text-lacelle-cream italic mb-4">Merci</h3>
                  <p className="font-cormorant text-lacelle-cream/60 text-lg italic mb-2">
                    Votre message a été reçu. Notre équipe vous contactera dans les 48 heures.
                  </p>
                  <p className="font-sans-light text-xs text-lacelle-gold/50 tracking-wider">
                    您的留言已收到。我们的团队将在48小时内与您联系。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-sans-light text-xs text-lacelle-gold/60 tracking-widest-xl uppercase block mb-2">
                        Nom · 姓名 *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent border border-lacelle-gold/20 text-lacelle-cream font-cormorant text-base px-4 py-3 focus:outline-none focus:border-lacelle-gold/60 transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="font-sans-light text-xs text-lacelle-gold/60 tracking-widest-xl uppercase block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent border border-lacelle-gold/20 text-lacelle-cream font-cormorant text-base px-4 py-3 focus:outline-none focus:border-lacelle-gold/60 transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-sans-light text-xs text-lacelle-gold/60 tracking-widest-xl uppercase block mb-2">
                      Téléphone · 电话
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-transparent border border-lacelle-gold/20 text-lacelle-cream font-cormorant text-base px-4 py-3 focus:outline-none focus:border-lacelle-gold/60 transition-colors"
                      placeholder="+86 / +33"
                    />
                  </div>

                  <div>
                    <label className="font-sans-light text-xs text-lacelle-gold/60 tracking-widest-xl uppercase block mb-2">
                      Intérêt · 咨询内容 *
                    </label>
                    <select
                      required
                      value={form.interest}
                      onChange={e => setForm({ ...form, interest: e.target.value })}
                      className="w-full bg-lacelle-dark border border-lacelle-gold/20 text-lacelle-cream font-cormorant text-base px-4 py-3 focus:outline-none focus:border-lacelle-gold/60 transition-colors"
                    >
                      <option value="">Sélectionner · 请选择</option>
                      <option value="maison">Maison de Celle — Collection Exclusive · 高端系列</option>
                      <option value="minuit">Le Minuit à Paris · 午夜巴黎</option>
                      <option value="amour">Parfum d'Amour · 爱情香水</option>
                      <option value="auto">Parfum d'Auto · 汽车香氛</option>
                      <option value="bespoke">Parfum Sur Mesure · 定制香水</option>
                      <option value="wholesale">Distribution · 代理合作</option>
                      <option value="other">Autre · 其他</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-sans-light text-xs text-lacelle-gold/60 tracking-widest-xl uppercase block mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border border-lacelle-gold/20 text-lacelle-cream font-cormorant text-base px-4 py-3 focus:outline-none focus:border-lacelle-gold/60 transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button type="submit" className="btn-gold-filled w-full py-4">
                    Envoyer · 发送
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 px-6 bg-lacelle-dark fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="border border-lacelle-gold/10 p-16 text-center">
            <p className="section-label mb-4">Paris · Grasse · Shanghai</p>
            <h2 className="font-playfair text-3xl text-lacelle-cream italic mb-6">
              Nos Maisons dans le Monde
            </h2>
            <p className="font-cormorant text-lacelle-cream/50 text-lg italic">
              Paris · Grasse · Londres · Tokyo · Shanghai · Dubaï
            </p>
            <p className="font-sans-light text-xs text-lacelle-gold/40 tracking-wider mt-2">
              巴黎 · 格拉斯 · 伦敦 · 东京 · 上海 · 迪拜
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
