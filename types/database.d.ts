export type Json =
  | string
  | number
  | boolean
  | null
  | {[key: string]: Json | undefined}
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          description: string | null
          display_type: string
          id: number
          name: string
          parent_id: string | null
          slug: string
          thumbnail: string | null
        }
        Insert: {
          description?: string | null
          display_type: string
          id: number
          name: string
          parent_id?: string | null
          slug: string
          thumbnail?: string | null
        }
        Update: {
          description?: string | null
          display_type?: string
          id?: number
          name?: string
          parent_id?: string | null
          slug?: string
          thumbnail?: string | null
        }
        Relationships: []
      }
      tags: {
        Row: {
          description: string | null
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          description?: string | null
          id: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          name?: string | null
          slug?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
