import {createMiddlewareClient} from '@supabase/auth-helpers-nextjs'
import {type NextRequest, NextResponse} from 'next/server'
import {Database} from 'types/database'

const authMiddleware = {
  config: {
    match: '/dashboard',
  },
  handler: async (req: NextRequest) => {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient<Database>({req, res})

    const {
      data: {user},
    } = await supabase.auth.getUser()

    if (!user && req.nextUrl.pathname.match(/^\/dashboard/)) {
      return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    return res
  },
}

export default authMiddleware
