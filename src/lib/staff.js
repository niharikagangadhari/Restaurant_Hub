import { supabase } from "./supabase";
import { getRestaurantId } from "./menu";

export async function getStaff() {
  const restaurantId = await getRestaurantId();

  if (!restaurantId)
    return {
      data: [],
      error: { message: "Restaurant not found" },
    };

  return await supabase
    .from("staff")
    .select("*")
    .eq("restaurant_id", restaurantId)
    .order("created_at");
}

export async function addStaff(employee) {
  const restaurantId = await getRestaurantId();

  if (!restaurantId)
    return {
      error: { message: "Restaurant not found" },
    };

  return await supabase
    .from("staff")
    .insert({
      restaurant_id: restaurantId,
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      role: employee.role,
      shift: employee.shift,
      status: "Active",
      temporary_password:
        Math.random().toString(36).slice(-8),
    });
}

export async function deleteStaff(id) {
  return await supabase
    .from("staff")
    .delete()
    .eq("id", id);
}
export async function addStaff(employee) {
  const restaurantId = await getRestaurantId();

  if (!restaurantId) {
    return {
      error: { message: "Restaurant not found" },
    };
  }

  const tempPassword = Math.random()
    .toString(36)
    .slice(-8)
    .toUpperCase();

  const { data, error } = await supabase
    .from("staff")
    .insert({
      restaurant_id: restaurantId,
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      role: employee.role,
      shift: employee.shift,
      status: "Active",
      temporary_password: tempPassword,
    })
    .select()
    .single();

  return {
    data,
    error,
  };
}