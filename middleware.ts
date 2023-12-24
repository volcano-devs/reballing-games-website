import authMiddleware from 'middleware/auth'
import {type NextRequest} from 'next/server'

const middlewares: Middleware[] = [authMiddleware]

export async function middleware(req: NextRequest) {
  for (const m of middlewares) {
    if (m.matcher(req)) {
      return m.handler(req)
    }
  }

  return null
}
