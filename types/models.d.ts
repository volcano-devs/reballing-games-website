declare interface BaseModel {
  id: number
  created_at: string
  updated_at: string
}

declare interface Product extends BaseModel {
  name: string
  slug: string
  description: string | null
  price: number
  stock: number
  tags: Tag[]
  category: Category
  media: Media[]
}

declare interface Category extends BaseModel {
  name: string
  description: string | null
  slug: string
  parent: Category | null
  sub_categories: Category[]
}

declare interface Media extends BaseModel {
  name: string | null
  preview_url: string | null
  original_url: string | null
  extension: string
}

declare interface Tag extends BaseModel {
  name: string
  slug: string
  description: string | null
}

declare interface Service extends BaseModel {
  name: string
  description: string | null
  price: number
  thumbnail: string | null
}

export interface ServiceOrder {
  date?: string
  order_id: string
  status?:
    | 'committed'
    | 'finalized'
    | 'in_progress'
    | 'revision'
    | 'no_approved'
  statuses: Status[]
}

export interface Status {
  value: string
  label: string
  current: boolean
  pending: boolean
  marked: boolean
}
