import {MagnifyingGlassIcon} from '@components/icons'
// import {Input} from '@nextui-org/input'
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from '@nextui-org/pagination'

const products = Array.from({length: 10}, (_, i) => ({
  id: i,
  name: `Product ${i}`,
  price: Math.floor(Math.random() * 100),
  category: `Category ${Math.floor(Math.random() * 3)}`,
  image: 'https://via.placeholder.com/150',
  tags: Array.from({length: 3}, (_, i) => `Tag ${i}`),
}))

interface ShopPageProps {
  params: {
    category?: string[]
  }
}

export default function Shop({params: {category}}: ShopPageProps) {
  return (
    <div className="container min-h-[80vh] mx-auto mt-20 flex flex-col gap-2 text-black py-20">
      <div className="flex gap-4 justify-center text-center items-center pb-16 px-6">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-5xl w-max text-primary-500 font-bold tracking-tighter">
            {`${category ? category[category.length - 1] : 'All Products'}`}

            <span className="text-sm text-gray-700 dark:text-gray-400 ml-2 tracking-normal font-semibold">
              {'('}
              {products.length}{' '}
              {products.length === 1 ? 'Product' : 'Products)'}
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 tracking-tight">
            Browse our gaming shop for the latest consoles, top game titles, and
            essential accessories.
          </p>
        </div>

        {/* <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<MagnifyingGlassIcon className="w-5 h-5" />}
          type="search"
        /> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 pb-10">
        {products.map((_, i) => (
          <ProductCard key={i} product={products[i]} />
        ))}
      </div>

      <Pagination
        total={10}
        initialPage={1}
        variant="faded"
        color="danger"
        className="self-center"
      />
    </div>
  )
}

function ProductCard({product}: {product: (typeof products)[0]}) {
  return (
    <div className="group relative cursor-pointer">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-80 lg:h-80 rounded-xl">
        <img
          src="https://www.rollingstone.com/wp-content/uploads/2020/11/83C9DD01-4DE0-4774-8608-491024E285A1.jpeg?w=1581&h=1054&crop=1"
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between pb-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <span>
              <span aria-hidden="true" className="absolute inset-0"></span>
              PlayStation 5 Slim
            </span>
          </h3>
          <p className="mt-1 text-sm text-gray-500">White</p>
        </div>
        <p className="text-sm font-medium text-gray-900">$799</p>
      </div>
    </div>
  )
}
