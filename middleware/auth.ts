import {createMiddlewareClient} from '@supabase/auth-helpers-nextjs'
import {type NextRequest, NextResponse} from 'next/server'
import {Database} from 'types/database'

const authMiddleware: Middleware = {
  matcher: (request) =>
    request.nextUrl.pathname.match(/^\/dashboard/) ||
    request.nextUrl.pathname === '/login',
  handler: async (req: NextRequest) => {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient<Database>({req, res})

    const {
      data: {user},
    } = await supabase.auth.getUser()

    if (user) {
      return NextResponse.next()
    }

    if (!user && req.nextUrl.pathname.match(/^\/dashboard/)) {
      return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    if (user && req.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    return res
  },
}

export default authMiddleware
