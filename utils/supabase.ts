
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_API_URL;
const supabaseKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;


export const supabase = createClient(supabaseUrl, supabaseKey);
        



//THIS FILE MIGHT NOT REALLY BE NECESSARY AT THIS STAGE AS WE ARE HANDLING SOME AUTH IN THE Login.jsx FILE