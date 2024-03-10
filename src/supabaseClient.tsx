import { createClient } from '@supabase/supabase-js'



const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_PROD_URL
const supabaseKey = (import.meta as any).env.VITE_SUPABASE_PROD_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey);




 
// create function to get userprofile data
