import authMiddleware from 'middleware/auth'
import {type NextRequest} from 'next/server'

const middlewares = [authMiddleware]

export async function middleware(req: NextRequest) {
  for (const m of middlewares) {
    if (m.config.match && req.nextUrl.pathname.startsWith(m.config.match)) {
      return m.handler(req)
    }
  }

  return null
}
