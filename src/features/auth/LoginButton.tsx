'use client'

import { supabase } from '@/lib/supabase'

export default function LoginButton() {
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    if (error) {
      console.error('ログイン失敗:', error.message)
    }
  }

  return (
    <button onClick={handleLogin}>
      Googleでログイン
    </button>
  )
}
