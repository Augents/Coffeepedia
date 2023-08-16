import { createClient } from '@supabase/supabase-js'
import config  from './database-config.js'
const supabaseKey =  ${{secrets.SUPABASE_SERVICE_ROLE_KEY}} 
const supabase = createClient(config.supabaseUrl, supabaseKey)