import { createClient } from '@supabase/supabase-js'
import { AdminData } from '../App'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const LOCAL_STORAGE_KEY = 'sekharFPVAdminData'

// Initialize Supabase only if environment variables are set
export const isDbConfigured = !!(supabaseUrl && supabaseAnonKey)

export const supabase = isDbConfigured && supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

/**
 * Load admin data from the cloud database, or fall back to localStorage
 */
export async function loadAdminData(): Promise<AdminData | null> {
  if (isDbConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('admin_settings')
        .select('data')
        .eq('key', LOCAL_STORAGE_KEY)
        .maybeSingle()

      if (error) {
        console.error('Error fetching admin data from database:', error)
      } else if (data && data.data) {
        // Cache to localStorage for offline resilience
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.data))
        return data.data as AdminData
      }
    } catch (e) {
      console.error('Failed to communicate with database:', e)
    }
  }

  // Fallback to localStorage
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (savedData) {
    try {
      return JSON.parse(savedData) as AdminData
    } catch (e) {
      console.error('Failed to parse admin data from localStorage:', e)
    }
  }

  return null
}

/**
 * Save admin data to both the cloud database (if configured) and localStorage
 */
export async function saveAdminData(data: AdminData): Promise<boolean> {
  // Always save to localStorage first as a local cache
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))

  if (isDbConfigured && supabase) {
    try {
      const { error } = await supabase
        .from('admin_settings')
        .upsert(
          { key: LOCAL_STORAGE_KEY, data: data, updated_at: new Date().toISOString() },
          { onConflict: 'key' }
        )

      if (error) {
        console.error('Failed to save admin data to database:', error)
        return false
      }
      return true
    } catch (e) {
      console.error('Failed to save admin data to database:', e)
      return false
    }
  }

  return true
}
