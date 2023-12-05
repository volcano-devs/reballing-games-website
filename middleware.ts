import authMiddleware from 'middleware/auth'
import {type NextRequest} from 'next/server'

const middlewares: Middleware[] = [authMiddleware]

export async function middleware(req: NextRequest) {
  middlewares.reduce(async (acc, middleware) => {
    await acc

    if (middleware.matcher(req)) {
      return middleware.handler(req)
    }

    return null
  }, Promise.resolve())

  return null
}
