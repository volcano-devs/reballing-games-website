declare type ArrayOrSingle<T> = T | T[]

declare interface Middleware {
  matcher: (request) => boolean
  handler: (req: NextRequest) => Promise<NextResponse>
}

type SearchParams = Record<string, string | string[] | undefined>
