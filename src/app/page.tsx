'use client'

import { useUser } from '@/features/auth/useUser'
import { supabase } from '@/lib/supabase'
import LoginButton from '@/features/auth/LoginButton'

export default function Home() {
  const user = useUser()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.reload()
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>career-dashboard</h1>
      <p>このアプリでは企業情報の管理や応募状況の確認ができます。</p>

      {user ? (
        <>
          <p>ようこそ, {user.email} さん</p>
          <button onClick={handleLogout}>ログアウト</button>
        </>
      ) : (
        <LoginButton />
      )}
    </main>
  )
}
