declare interface BaseModel {
  id: number
  created_at: string
  updated_at: string
}

declare interface Product extends BaseModel {
  name: string
  description: string | null
  price: number
  thumbnail: string | null
  category_id: number
}

declare interface Category extends BaseModel {
  description: string | null
  display_type: string
  name: string
  parent_id: string | null
  slug: string
  thumbnail: string | null
}

declare interface Tag extends BaseModel {
  name: string
}

declare interface Service extends BaseModel {
  name: string
  description: string | null
  price: number
  thumbnail: string | null
}
