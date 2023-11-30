'use client'
import {Input} from '@nextui-org/input'
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import {useRouter} from 'next/navigation'
import * as React from 'react'
import {Database} from 'types/database'

export default function LoginForm() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.refresh()

    console.log(res)
  }

  return (
    <form
      id="login-form"
      className="w-full flex flex-col gap-4"
      onSubmit={handleSignIn}
    >
      <Input
        type="email"
        variant="bordered"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Enter your email"
      />

      <Input
        type="password"
        variant="bordered"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Enter your password"
        isClearable
      />
    </form>
  )
}
