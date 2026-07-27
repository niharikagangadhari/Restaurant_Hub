import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import {
  getOrders,
  updateOrderStatus,
  deleteOrder,
} from "../lib/orders";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  async function loadOrders() {
    const { data, error } = await getOrders();

    if (error) {
      console.log(error);
      alert(error.message);
      return;
    }

    setOrders(data || []);
  }

  useEffect(() => {
  loadOrders();

  const channel = supabase
    .channel("orders-live")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "orders",
      },
      (payload) => {
        console.log("Realtime:", payload);

        loadOrders();
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, []);

  async function changeStatus(id, status) {
    const { error } = await updateOrderStatus(id, status);

    if (error) {
      alert(error.message);
      return;
    }

    loadOrders();
  }

  async function removeOrder(id) {
    const { error } = await deleteOrder(id);

    if (error) {
      alert(error.message);
      return;
    }

    loadOrders();
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <h1 className="text-4xl text-white font-bold">
        Orders
      </h1>
      <div className="mt-3 inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
  Live Updates Enabled
</div>

      <p className="text-slate-400 mt-2">
        Restaurant Orders
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {orders.length === 0 && (
          <div className="text-slate-400">
            No Orders Yet
          </div>
        )}

        {orders.map((order) => (

          <div
            key={order.id}
            className="bg-slate-900 border border-slate-700 rounded-3xl p-6"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="text-2xl text-white font-semibold">
                  {order.customer_name}
                </h2>

                <p className="text-slate-400">
                  📞 {order.customer_phone}
                </p>

                <p className="text-slate-400">
                  🍽 Table {order.table_number}
                </p>

              </div>

              <span className="bg-emerald-500 px-4 py-2 rounded-full text-white h-fit">
                {order.status}
              </span>

            </div>

            <div className="mt-6">

              <h2 className="text-3xl font-bold text-emerald-400">
                ₹{order.total}
              </h2>

            </div>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() =>
                  changeStatus(order.id, "Preparing")
                }
                className="bg-yellow-500 px-4 py-2 rounded-xl text-white"
              >
                Preparing
              </button>

              <button
                onClick={() =>
                  changeStatus(order.id, "Completed")
                }
                className="bg-green-600 px-4 py-2 rounded-xl text-white"
              >
                Complete
              </button>

              <button
                onClick={() =>
                  removeOrder(order.id)
                }
                className="bg-red-500 px-4 py-2 rounded-xl text-white"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}