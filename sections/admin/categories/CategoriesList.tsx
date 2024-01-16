'use client'

import Page from '@components/Page/Page'
import {PenToSquareIcon, TrashIcon} from '@components/icons'
import {useSearchParamsUpdater} from '@hooks/use-search-params-updater.hook'
import {Button} from '@nextui-org/button'
import {Pagination} from '@nextui-org/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/table'

import {format} from 'date-fns'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

export interface CategoriesListProps {
  categories: Category[]
  count: number
}

export default function CategoriesList({
  categories,
  count,
}: CategoriesListProps) {
  const pathname = usePathname()
  const {push} = useRouter()

  const updateSearchParam = useSearchParamsUpdater()
  const searchParams = useSearchParams()!

  return (
    <Page
      title={
        <div className="flex items-center justify-between tracking-tighter">
          <div className="flex flex-col ">
            <h1 className="text-2xl font-bold">Categorias</h1>
            <p className="text-gray-300 text-xs font-medium">
              {count} categorias encontradas
            </p>
          </div>
          <Button
            color="primary"
            className="ml-4"
            onClick={() => {
              push('/dashboard/categories/create')
            }}
          >
            Nueva Categoria
          </Button>
        </div>
      }
    >
      <Table
        isVirtualized
        classNames={{
          wrapper: 'bg-background-500',
          table: 'bg-background-400',
          thead: 'bg-background-400',
          th: 'text-white bg-background-400',
          tbody: 'bg-background-400',
          td: 'text-white',
        }}
        bottomContent={
          <div className="flex justify-center items-center w-full h-16">
            <Pagination
              isCompact
              color="primary"
              classNames={{
                item: 'bg-background-500 text-white',
                next: 'bg-background-500 text-white',
                prev: 'bg-background-500 text-white',
              }}
              showControls
              total={count % 10 === 0 ? count / 10 : Math.floor(count / 10) + 1}
              initialPage={
                searchParams.has('page')
                  ? parseInt(searchParams.get('page')!)
                  : 1
              }
              onChange={(page) => {
                updateSearchParam('page', `${page}`)
                push(`${pathname}?page=${page}`)
              }}
            />
          </div>
        }
      >
        <TableHeader
          columns={[
            {
              key: 'name',
              label: 'Nombre',
            },
            {
              key: 'slug',
              label: 'Slug',
            },
            {
              key: 'description',
              label: 'Descripción',
            },
            {
              key: 'image',
              label: 'Imagen',
            },
            // {
            //   key: 'status',
            //   label: 'Estado',
            // },
            {
              key: 'created_at',
              label: 'Creado',
            },
            {
              key: 'updated_at',
              label: 'Actualizado',
            },
            {
              key: 'actions',
              label: 'Acciones',
            },
          ]}
        >
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent="No hay categorias para mostrar">
          {categories.map((category, index) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.slug}</TableCell>
              <TableCell>{category.description ?? 'N/A'}</TableCell>
              <TableCell>
                {category.thumbnail ? (
                  <div className="w-10 h-10">
                    <img
                      className="w-10 h-10 p-1 object-cover"
                      src={category.thumbnail}
                    />
                  </div>
                ) : (
                  'N/A'
                )}
              </TableCell>
              <TableCell>
                {format(new Date(category.created_at), 'Ppp')}
              </TableCell>
              <TableCell>{category.updated_at ?? 'N/A'}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="flat"
                    // onClick={() => handleEditCategory(category)}
                  >
                    <PenToSquareIcon className="h-2 w-2 text-xs" />
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="flat"
                    color="primary"

                    // onClick={() => handleDeleteCategory(category)}
                  >
                    <div className="w-4 h-4">
                      <TrashIcon />
                    </div>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Page>
  )
}
