export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            news: {
                Row: {
                    id: string
                    title: string
                    content: string
                    category: string
                    published_at: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    title: string
                    content: string
                    category: string
                    published_at?: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    title?: string
                    content?: string
                    category?: string
                    published_at?: string
                    created_at?: string
                }
            }
            contacts: {
                Row: {
                    id: string
                    name: string
                    company: string | null
                    email: string
                    message: string
                    status: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    company?: string | null
                    email: string
                    message: string
                    status?: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    company?: string | null
                    email?: string
                    message?: string
                    status?: string
                    created_at?: string
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
    }
}
