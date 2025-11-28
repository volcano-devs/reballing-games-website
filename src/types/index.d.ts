declare type ArrayOrSingle<T> = T | T[]

declare interface Middleware {
  matcher: (request) => boolean
  handler: (req: NextRequest) => Promise<NextResponse>
}

declare type SearchParams = Record<string, string | string[] | undefined>

declare interface APIResponse<TData> {
  data: TData
  links:
    | {
        first: string
        last: string
        prev: string | null
        next: string | null
      }
    | null
    | undefined
  meta:
    | {
        current_page: number
        from: number
        last_page: number
        links: Array<{url: string | null; label: string; active: boolean}>
        path: string
        per_page: number
        to: number
        total: number
      }
    | null
    | undefined
}
