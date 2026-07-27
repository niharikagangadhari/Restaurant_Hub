import { supabase } from "./supabase";

export async function createRestaurant(restaurant) {
  return await supabase
    .from("restaurants")
    .insert([restaurant]);
}

export async function getRestaurant(ownerId) {
  return await supabase
    .from("restaurants")
    .select("*")
    .eq("owner_id", ownerId)
    .single();
}

export async function updateRestaurant(id, updates) {
  return await supabase
    .from("restaurants")
    .update(updates)
    .eq("id", id);
}