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

export interface ProductsListProps {
  products: Product[]
  count: number
}

export default function ProductList({products, count}: ProductsListProps) {
  const pathname = usePathname()
  const {push} = useRouter()

  const updateSearchParam = useSearchParamsUpdater()
  const searchParams = useSearchParams()!

  return (
    <Page
      title={
        <div className="flex items-center justify-between tracking-tighter">
          <div className="flex flex-col ">
            <h1 className="text-2xl font-bold">Productos</h1>
            <p className="text-gray-300 text-xs font-medium">
              {count} Productos encontradas
            </p>
          </div>
          <Button
            color="primary"
            className="ml-4"
            onClick={() => {
              push('/dashboard/products/create')
            }}
          >
            Nuevo producto
          </Button>
        </div>
      }
    >
      <Table
        isVirtualized
        aria-labelledby="products-table"
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
            // {
            //   key: 'slug',
            //   label: 'Slug',
            // },
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
        <TableBody emptyContent="No hay productos para mostrar">
          {products.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              {/* <TableCell>{product.slug}</TableCell> */}
              <TableCell>{product.description ?? 'N/A'}</TableCell>
              <TableCell>
                {product.thumbnail ? (
                  <div className="w-10 h-10">
                    <img
                      className="w-10 h-10 p-1 object-cover"
                      src={product.thumbnail}
                    />
                  </div>
                ) : (
                  'N/A'
                )}
              </TableCell>
              <TableCell>
                {format(new Date(product.created_at), 'Ppp')}
              </TableCell>
              <TableCell>{product.updated_at ?? 'N/A'}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="flat"
                    // onClick={() => handleEditProduct(product)}
                  >
                    <PenToSquareIcon className="h-2 w-2 text-xs" />
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="flat"
                    color="primary"

                    // onClick={() => handleDeleteProduct(product)}
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
