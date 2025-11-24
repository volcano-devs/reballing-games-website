export interface PageProps {
  title: React.ReactNode
  children: React.ReactNode
}

export default function Page({children, title}: PageProps) {
  const titleMarkup =
    typeof title === 'string' ? (
      <h1 className="text-2xl font-bold">{title}</h1>
    ) : (
      title
    )

  return (
    <div className="min-h-screen w-full p-8">
      <div className="flex flex-col gap-4">
        {titleMarkup}
        {children}
      </div>
    </div>
  )
}
