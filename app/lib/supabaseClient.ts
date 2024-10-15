/** lib/supabaseClient.ts */
import { createClient } from '@supabase/supabase-js';

// Ensure you have your environment variables for Supabase credentials set in .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // URL of your Supabase project
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Anon Key

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);