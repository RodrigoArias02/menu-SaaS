import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://kezfxnsyvknofhkdzjou.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlemZ4bnN5dmtub2Zoa2R6am91Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODU2NTk5OSwiZXhwIjoyMDk0MTQxOTk5fQ.3zXswzTKJ8R2qUyWbqrNsZ11KKekeKXsjgvQDMxqMRo"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)