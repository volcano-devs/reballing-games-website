import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'

import {cookies} from 'next/headers'

export function createServerClient() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  })

  return supabase
}
