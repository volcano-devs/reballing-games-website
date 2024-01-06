declare interface BaseModel {
  id: number
  created_at: string
  updated_at: string
}

declare interface Categories extends BaseModel {
  description: string | null
  display_type: string
  name: string
  parent_id: string | null
  slug: string
  thumbnail: string | null
}
