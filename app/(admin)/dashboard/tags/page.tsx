import TagList from 'sections/admin/tags/TagList'

export interface TagsPageProps {
  searchParams: {
    page?: string
  }
}

async function getData({page}: {page?: number}) {
  const res = await await fetch(
    `${process.env.NEXT_URL}/api/tags?page=${page ?? 1}`,
    {
      headers: {
        accept: 'application/json',
      },
      cache: 'no-cache',
    },
  )

  return res
}

export default async function TagsPage({searchParams}: TagsPageProps) {
  const response: Response & {
    data?: Category[]
    count?: number
  } = await getData({
    page: searchParams.page ? parseInt(searchParams.page) : 1,
  }).then((res) => res.json())

  return <TagList tags={response.data! ?? []} count={response.count ?? 0} />
}
