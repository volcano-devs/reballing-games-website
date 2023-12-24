'use client'
import {Input} from '@nextui-org/input'
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import {useRouter} from 'next/navigation'
import {FormEvent, useState} from 'react'
import {Database} from 'types/database'

const supabase = createClientComponentClient<Database>()

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleSignIn(e: FormEvent) {
    e.preventDefault()

    await supabase.auth.signInWithPassword({
      email,
      password,
    })

    console.log()

    router.push('/dashboard ')
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
