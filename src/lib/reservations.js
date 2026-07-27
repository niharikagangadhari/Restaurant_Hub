import { supabase } from "./supabase";

export async function addReservation(reservation) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      error: {
        message: "Please login first",
      },
    };
  }

  return await supabase
    .from("reservations")
    .insert({
      restaurant_id: reservation.restaurant_id,
      customer_id: user.id,
      customer_name: reservation.customer_name,
      customer_phone: reservation.customer_phone,
      reservation_date: reservation.reservation_date,
      reservation_time: reservation.reservation_time,
      guests: reservation.guests,
      special_request: reservation.special_request,
      status: "Pending",
    })
    .select();
}

export async function getReservations() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    return {
      data: [],
    };

  return await supabase
    .from("reservations")
    .select("*")
    .eq("customer_id", user.id)
    .order("created_at", {
      ascending: false,
    });
}

export async function cancelReservation(id) {
  return await supabase
    .from("reservations")
    .delete()
    .eq("id", id);
}