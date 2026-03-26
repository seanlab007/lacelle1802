/**
 * MaoYan 积分钱包 Hook（lacelle1802 React 版）
 * 文件：src/lib/maoyan.ts
 * 
 * 基于 Supabase SDK 实现认证和积分查询
 * 所有平台共享同一 Supabase 实例
 */

import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://fczherphuixpdjuevzsh.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjemhlcnBodWl4cGRqdWV2enNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NDM0OTEsImV4cCI6MjA4OTIxOTQ5MX0.t7FSUWbWDsKIcU-m-1ul65aVVu87RZn0zHleqccDEo4'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storageKey: 'maoyan_session', // 与其他平台共享 storage key
  },
})

export interface MaoUser {
  id: string
  email: string | null
  displayName: string | null
  avatarUrl: string | null
  maoBalance: number
}

export async function getMaoUser(): Promise<MaoUser | null> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data: wallet } = await supabase
    .from('maoyan_wallets')
    .select('mao_balance')
    .eq('user_id', user.id)
    .single()

  return {
    id: user.id,
    email: user.email || null,
    displayName:
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      user.email?.split('@')[0] ||
      null,
    avatarUrl: user.user_metadata?.avatar_url || null,
    maoBalance: parseFloat(wallet?.mao_balance) || 0,
  }
}

export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.href,
      queryParams: { prompt: 'select_account' },
    },
  })
  if (error) throw error
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { registered_platform: 'lacelle1802' },
    },
  })
  if (error) throw error
  return data
}

export async function signOut() {
  await supabase.auth.signOut()
}
