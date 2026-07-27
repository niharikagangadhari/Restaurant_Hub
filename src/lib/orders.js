import { supabase } from "./supabase";
import { getRestaurantId } from "./menu";

export async function getOrders() {
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
    .from("orders")
    .select("*")
    .eq("restaurant_id", restaurantId)
    .order("created_at", { ascending: false });
}

export async function addOrder(order) {
  const restaurantId = await getRestaurantId();

  if (!restaurantId) {
    return {
      error: {
        message: "Restaurant not found",
      },
    };
  }

  return await supabase
    .from("orders")
    .insert({
      restaurant_id: restaurantId,
      customer_name: order.customer_name,
      customer_phone: order.customer_phone,
      table_number: order.table_number,
      total: order.total,
      status: "Pending",
      payment_status: "Pending",
    })
    .select();
}

export async function updateOrderStatus(id, status) {
  return await supabase
    .from("orders")
    .update({
      status,
    })
    .eq("id", id);
}

export async function deleteOrder(id) {
  return await supabase
    .from("orders")
    .delete()
    .eq("id", id);
}