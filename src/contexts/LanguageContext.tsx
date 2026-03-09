import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'fr' | 'zh'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  isCN: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  isCN: false,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')
  return (
    <LanguageContext.Provider value={{ lang, setLang, isCN: lang === 'zh' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
