import { Link } from 'react-router-dom'

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663405311158/ebebYjMErshCmhKiJP5h4X'

export default function Footer() {
  return (
    <footer className="bg-lacelle-dark border-t border-lacelle-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={`${CDN}/logo-main_1afa18a9.png`}
              alt="LA CELLE PARIS"
              className="h-8 w-auto brightness-0 invert opacity-70 mb-6"
            />
            <p className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold/60 uppercase mb-4">
              Paris · Grasse · 1802
            </p>
            <p className="font-cormorant text-lacelle-cream/50 text-sm leading-relaxed italic">
              "Une goutte de parfum,<br />une demi-page d'histoire de France."
            </p>
            <p className="font-sans-light text-lacelle-cream/30 text-xs mt-2">
              一滴香水，半部法国史
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold uppercase mb-6">Maison</h4>
            <ul className="space-y-3">
              {[
                { path: '/heritage', label: 'Notre Héritage' },
                { path: '/collections', label: 'Collections' },
                { path: '/maison-de-celle', label: 'Maison de Celle' },
                { path: '/olfactory-notes', label: 'Notes Olfactives' },
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans-light text-xs text-lacelle-cream/50 hover:text-lacelle-gold transition-colors duration-300 tracking-wider uppercase"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold uppercase mb-6">Collections</h4>
            <ul className="space-y-3">
              {[
                'Le Minuit à Paris',
                "Parfum d'Amour",
                "Parfum d'Auto",
                'Maison de Celle',
                'Archives Secrètes',
              ].map(item => (
                <li key={item}>
                  <span className="font-sans-light text-xs text-lacelle-cream/50 tracking-wider">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans-light text-xs tracking-widest-xl text-lacelle-gold uppercase mb-6">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="font-sans-light text-xs text-lacelle-cream/30 uppercase tracking-wider mb-1">Boutique Paris</p>
                <p className="font-cormorant text-lacelle-cream/60 text-sm">
                  12 Rue du Faubourg Saint-Honoré<br />
                  75008 Paris, France
                </p>
              </div>
              <div>
                <p className="font-sans-light text-xs text-lacelle-cream/30 uppercase tracking-wider mb-1">Atelier Grasse</p>
                <p className="font-cormorant text-lacelle-cream/60 text-sm">
                  Chemin des Parfumeurs<br />
                  06130 Grasse, France
                </p>
              </div>
              <div>
                <p className="font-sans-light text-xs text-lacelle-cream/30 uppercase tracking-wider mb-1">中国总代理</p>
                <p className="font-cormorant text-lacelle-cream/60 text-sm">
                  奢利（上海）贸易有限公司
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-lacelle-gold/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="font-sans-light text-xs text-lacelle-cream/30 tracking-wider">
              © 2024 LA CELLE PARIS. Maison fondée en 1802. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2">
              <span className="font-sans-light text-xs text-lacelle-gold/40 tracking-widest-xl uppercase">
                www.lacelle1802.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
