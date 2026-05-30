import { createClient } from '@supabase/supabase-js'
import { AdminData } from '../App'

const getSanitizedSupabaseUrl = (): string => {
  let url = (import.meta.env.VITE_SUPABASE_URL || '').trim()
  // Remove any trailing slashes
  url = url.replace(/\/+$/, '')
  // Remove trailing /rest/v1 if included accidentally by user or CI config
  if (url.endsWith('/rest/v1')) {
    url = url.slice(0, -8)
  }
  // Remove any trailing slashes again
  url = url.replace(/\/+$/, '')
  return url
}

const getSanitizedAnonKey = (): string => {
  return (import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim()
}

const supabaseUrl = getSanitizedSupabaseUrl()
const supabaseAnonKey = getSanitizedAnonKey()

const LOCAL_STORAGE_KEY = 'sekharFPVAdminData'

// Initialize Supabase only if environment variables are set
export const isDbConfigured = !!(supabaseUrl && supabaseAnonKey)

export const supabase = isDbConfigured
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
export async function saveAdminData(data: AdminData): Promise<{ success: boolean; error?: string }> {
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
        return { success: false, error: error.message || JSON.stringify(error) }
      }
      return { success: true }
    } catch (e: any) {
      console.error('Failed to save admin data to database:', e)
      const msg = e?.message || String(e)
      if (msg.includes('Failed to fetch') || msg.includes('fetch')) {
        return { 
          success: false, 
          error: 'Network error (Failed to fetch). This is commonly caused by adblockers, Brave Shields, or browser privacy extensions blocking Supabase.' 
        }
      }
      return { success: false, error: msg }
    }
  }

  return { success: true }
}
