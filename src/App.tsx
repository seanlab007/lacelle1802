import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Heritage from './pages/Heritage'
import Collections from './pages/Collections'
import MaisonDeCelle from './pages/MaisonDeCelle'
import OlfactoryNotes from './pages/OlfactoryNotes'
import GroupBuy from './pages/GroupBuy'
import CreatorCard from './pages/CreatorCard'
import Contact from './pages/Contact'
import Wiki from './pages/Wiki'
import Boutiques from './pages/Boutiques'
import News from './pages/News'
import Innovation from './pages/Innovation'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-lacelle-black text-lacelle-cream">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/maison-de-celle" element={<MaisonDeCelle />} />
        <Route path="/olfactory-notes" element={<OlfactoryNotes />} />
        <Route path="/group-buy" element={<GroupBuy />} />
        <Route path="/creator-card" element={<CreatorCard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/boutiques" element={<Boutiques />} />
        <Route path="/news" element={<News />} />
        <Route path="/innovation" element={<Innovation />} />
      </Routes>
      <Footer />
    </div>
  )
}
