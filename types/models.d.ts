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
