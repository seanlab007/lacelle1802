/**
 * MaoYan 账户按钮组件（lacelle1802 品牌风格）
 * 文件：src/components/MaoYanAuth.tsx
 */

import { useState, useEffect, useRef } from 'react'
import { getMaoUser, signInWithGoogle, signInWithEmail, signUpWithEmail, signOut, supabase } from '@/lib/maoyan'
import type { MaoUser } from '@/lib/maoyan'

const MAOYAN_URL = 'https://maoyan.vip'

export default function MaoYanAuth() {
  const [user, setUser] = useState<MaoUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // 监听 Supabase 认证状态
  useEffect(() => {
    getMaoUser().then(u => { setUser(u); setLoading(false) })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      getMaoUser().then(setUser)
    })
    return () => subscription.unsubscribe()
  }, [])

  // 点击外部关闭菜单
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  if (loading) return null

  if (user) {
    return (
      <div ref={menuRef} className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-2 px-3 py-1.5 border border-amber-600/30 hover:border-amber-600/60 transition-colors rounded text-sm"
        >
          {user.avatarUrl ? (
            <img src={user.avatarUrl} className="w-6 h-6 rounded-full object-cover" alt="" />
          ) : (
            <span className="w-6 h-6 rounded-full bg-amber-700/30 flex items-center justify-center text-amber-300 text-xs font-bold">
              {(user.displayName || user.email || 'U')[0].toUpperCase()}
            </span>
          )}
          <span className="text-amber-200/80 font-light tracking-wide">{user.displayName || user.email?.split('@')[0]}</span>
          <span className="text-amber-500 font-mono text-xs">🪙 {user.maoBalance.toLocaleString()}</span>
        </button>

        {showMenu && (
          <div className="absolute right-0 top-full mt-1 w-52 bg-[#0d0d0d] border border-[#2a2a2a] rounded shadow-xl z-50 overflow-hidden">
            <div className="px-4 py-3 border-b border-[#2a2a2a]">
              <p className="text-xs text-amber-200/60 truncate">{user.email}</p>
              <p className="text-sm text-amber-500 font-mono mt-1">🪙 {user.maoBalance.toLocaleString()} MAO 积分</p>
            </div>
            <a
              href={`${MAOYAN_URL}/wallet`}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 text-sm text-amber-200/70 hover:text-amber-300 hover:bg-amber-500/5 transition-colors"
            >
              积分钱包 →
            </a>
            <a
              href={`${MAOYAN_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 text-sm text-amber-200/70 hover:text-amber-300 hover:bg-amber-500/5 transition-colors"
            >
              MaoYan 平台 →
            </a>
            <div className="border-t border-[#2a2a2a]">
              <button
                onClick={() => { signOut(); setShowMenu(false) }}
                className="block w-full text-left px-4 py-2.5 text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/5 transition-colors"
              >
                退出登录
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-1.5 border border-amber-700/40 text-amber-200/70 hover:text-amber-200 hover:border-amber-600/60 text-sm font-light tracking-wider transition-colors"
      >
        登录
      </button>

      {showModal && (
        <LoginModal onClose={() => setShowModal(false)} onSuccess={u => { setUser(u); setShowModal(false) }} />
      )}
    </>
  )
}

function LoginModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: (u: MaoUser) => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const handleSubmit = async () => {
    setError(''); setLoading(true)
    try {
      if (isRegister) {
        await signUpWithEmail(email, password)
        setSuccess('注册成功！请查收验证邮件后登录。')
      } else {
        await signInWithEmail(email, password)
        const user = await getMaoUser()
        if (user) onSuccess(user)
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : '操作失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-8 w-80 shadow-2xl">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-amber-200 font-light tracking-widest text-sm uppercase">MaoYan 账户</h2>
            <p className="text-amber-700/60 text-xs mt-1">一个账号，畅游所有平台</p>
          </div>
          <button onClick={onClose} className="text-[#555] hover:text-[#888] text-xl leading-none">×</button>
        </div>

        {/* Google 登录 */}
        <button
          onClick={() => signInWithGoogle()}
          className="w-full py-2.5 bg-white text-gray-700 rounded text-sm font-medium flex items-center justify-center gap-2 mb-5 hover:bg-gray-50 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          使用 Google 登录
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-[#2a2a2a]" />
          <span className="text-[#444] text-xs">邮箱登录</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        <input
          type="email"
          placeholder="邮箱地址"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-3 py-2.5 bg-[#111] border border-[#2a2a2a] rounded text-amber-100/80 text-sm placeholder-[#444] outline-none focus:border-amber-700/50 mb-2.5"
        />
        <input
          type="password"
          placeholder="密码"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          className="w-full px-3 py-2.5 bg-[#111] border border-[#2a2a2a] rounded text-amber-100/80 text-sm placeholder-[#444] outline-none focus:border-amber-700/50 mb-4"
        />

        {error && <p className="text-red-400 text-xs mb-3">{error}</p>}
        {success && <p className="text-green-400 text-xs mb-3">{success}</p>}

        <button
          onClick={handleSubmit}
          disabled={loading || !email || !password}
          className="w-full py-2.5 bg-amber-700/80 hover:bg-amber-600/80 disabled:opacity-40 text-amber-100 text-sm tracking-wider rounded transition-colors"
        >
          {loading ? '请稍候...' : isRegister ? '注册账户' : '登录'}
        </button>

        <p className="text-center text-xs text-[#444] mt-4">
          {isRegister ? '已有账号？' : '没有账号？'}
          <button onClick={() => setIsRegister(!isRegister)} className="text-amber-600/70 hover:text-amber-500 ml-1 underline">
            {isRegister ? '立即登录' : '立即注册'}
          </button>
        </p>
      </div>
    </div>
  )
}
