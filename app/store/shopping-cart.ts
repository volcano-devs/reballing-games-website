'use client'

import {Store} from '@tanstack/react-store'
import {Product} from 'types/models'

type Item = Omit<
  Product,
  | 'media'
  | 'stock'
  | 'tags'
  | 'description'
  | 'category'
  | 'created_at'
  | 'updated_at'
> & {
  quantity: number
  imageUrl: string
}

export const shoppingCart = new Store({
  cart: (localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart')!)
    : []) as Item[],
  bestSellers: [] as Product[],
  getBestSellers: async () => {
    const response = await fetch('/api/products')
    const {data} = (await response.json()) as APIResponse<Product[]>

    console.log(data)

    if (response.ok) {
      shoppingCart.setState((state) => ({
        ...state,
        bestSellers: data,
      }))
    }
  },

  addItem(product: Product, quantity: number) {
    shoppingCart.setState((state) => {
      const item = state.cart.find((item) => item.id === product.id)

      if (item) {
        item.quantity += quantity
      } else {
        state.cart.push({
          id: product.id,
          quantity,
          price: product.price,
          imageUrl: product.media[0]?.original_url || '',
          name: product.name,
          slug: product.slug,
        })
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))

      return {...state}
    })
  },
  removeItem(productId: number) {
    shoppingCart.setState((state) => {
      state.cart = state.cart.filter((item) => item.id !== productId)

      localStorage.setItem('cart', JSON.stringify(state.cart))

      return {...state}
    })
  },
})
