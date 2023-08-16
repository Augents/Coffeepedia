import { createClient } from '@supabase/supabase-js';
import config from './database-config.js';
const supabase = createClient(config.supabaseUrl, config.supabaseKey);
