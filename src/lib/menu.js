import { supabase } from "./supabase";

export async function getRestaurantId() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  console.log("User:", user);
  console.log("User Error:", userError);

  if (!user) {
    console.log("No logged in user");
    return null;
  }

  const { data, error } = await supabase
    .from("restaurants")
    .select("*")
    .eq("owner_id", user.id);

  console.log("Restaurant Query Result:", data);
  console.log("Restaurant Query Error:", error);

  if (error) return null;

  if (!data || data.length === 0) {
    console.log("No restaurant found");
    return null;
  }

  return data[0].id;
}

export async function addMenuItem(item) {
  const restaurantId = await getRestaurantId();

  if (!restaurantId)
    return {
      error: {
        message: "Restaurant not found",
      },
    };

  return supabase
    .from("menu_items")
    .insert({
      restaurant_id: restaurantId,
      item_name: item.name,
      description: item.description,
      category: item.category,
      price: Number(item.price),
      prep_time: item.prepTime,
      is_veg: item.type === "Veg",
      available: item.available,
      image_url: "",
    })
    .select();
}

export async function getMenuItems() {
  const restaurantId = await getRestaurantId();

  if (!restaurantId) return [];

  const { data } = await supabase
    .from("menu_items")
    .select("*")
    .eq("restaurant_id", restaurantId)
    .order("created_at");

  return data || [];
}

export async function deleteMenuItem(id) {
  return supabase
    .from("menu_items")
    .delete()
    .eq("id", id);
}