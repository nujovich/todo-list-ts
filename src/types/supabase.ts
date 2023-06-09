export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      tasks: {
        Row: {
          completed: boolean
          created_at: string
          id: number
          text: string
        }
        Insert: {
          completed?: boolean
          created_at?: string
          id?: number
          text: string
        }
        Update: {
          completed?: boolean
          created_at?: string
          id?: number
          text?: string
        }
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
