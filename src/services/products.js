import { supabase } from "../lib/supabase.js"

export async function getProducts() {
  const { data, error } = await supabase
    .from("PaladraNegro")
    .select("*")

  if (error) {
    console.error(error)
    return []
  }

  return data
}