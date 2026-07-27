import { supabase } from "./supabase";
import { getRestaurantId } from "./menu";

export async function getAnalytics() {
  const restaurantId = await getRestaurantId();

  if (!restaurantId) {
    return {
      error: {
        message: "Restaurant not found",
      },
    };
  }

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("restaurant_id", restaurantId);

  const { data: reservations } = await supabase
    .from("reservations")
    .select("*")
    .eq("restaurant_id", restaurantId);

  const totalOrders = orders?.length || 0;
  const pendingOrders =
    orders?.filter(o => o.status === "Pending").length || 0;
  const completedOrders =
    orders?.filter(o => o.status === "Completed").length || 0;

  const revenue =
    orders?.reduce((sum, order) => sum + Number(order.total || 0), 0) || 0;

  return {
    data: {
      totalOrders,
      pendingOrders,
      completedOrders,
      totalReservations: reservations?.length || 0,
      revenue,
    },
  };
}