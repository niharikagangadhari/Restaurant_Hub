import { supabase } from "./supabase";
import { getRestaurantId } from "./menu";

export async function getRestaurantReservations() {
  const restaurantId = await getRestaurantId();

  if (!restaurantId) {
    return {
      data: [],
      error: {
        message: "Restaurant not found",
      },
    };
  }

  return await supabase
    .from("reservations")
    .select("*")
    .eq("restaurant_id", restaurantId)
    .order("created_at", {
      ascending: false,
    });
}

export async function updateReservationStatus(id, status) {
  return await supabase
    .from("reservations")
    .update({
      status,
    })
    .eq("id", id);
}

export async function deleteReservation(id) {
  return await supabase
    .from("reservations")
    .delete()
    .eq("id", id);
}