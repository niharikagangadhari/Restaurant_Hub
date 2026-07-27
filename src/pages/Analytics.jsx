import { useEffect, useState } from "react";
import { getAnalytics } from "../lib/analytics";

export default function Analytics() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    totalReservations: 0,
    revenue: 0,
  });

  useEffect(() => {
    async function load() {
      const { data, error } = await getAnalytics();

      if (error) {
        alert(error.message);
        return;
      }

      setStats(data);
    }

    load();
  }, []);

  const cards = [
    {
      title: "Total Orders",
      value: stats.totalOrders,
      color: "bg-blue-600",
    },
    {
      title: "Pending Orders",
      value: stats.pendingOrders,
      color: "bg-yellow-600",
    },
    {
      title: "Completed Orders",
      value: stats.completedOrders,
      color: "bg-green-600",
    },
    {
      title: "Reservations",
      value: stats.totalReservations,
      color: "bg-purple-600",
    },
    {
      title: "Revenue",
      value: `₹${stats.revenue}`,
      color: "bg-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-4xl text-white font-bold">
        Analytics Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`${card.color} rounded-3xl p-8`}
          >
            <h2 className="text-white text-lg">
              {card.title}
            </h2>

            <p className="text-4xl text-white font-bold mt-3">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}