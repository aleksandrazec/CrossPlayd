import env from "dotenv";
import { createClient } from '@supabase/supabase-js'

env.config();

const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_ANON_KEY);

export default supabase;