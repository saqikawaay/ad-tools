import { createClient } from '@supabase/supabase-js'


//these are non production local keys
const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_LOCAL_API_URL
const supabaseKey = (import.meta as any).env.VITE_SUPABASE_LOCAL_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey);




 
// create function to get userprofile data
