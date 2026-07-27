
import RestaurantSidebar from "../components/restaurant/RestaurantSidebar";
import {
  DollarSign,
  ShoppingBag,
  CalendarCheck,
  Armchair,
  Plus,
  Users,
  ClipboardList,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RestaurantDashboard() {
const navigate = useNavigate();
    return (
    <div className="min-h-screen bg-slate-950 flex">

      {/* Sidebar */}

      <RestaurantSidebar />

      {/* Main Content */}

      <main className="flex-1 p-8 overflow-y-auto">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Welcome Back 👋
            </h1>

            <p className="text-slate-400 mt-2">
              Paradise Restaurant • Owner Dashboard
            </p>

          </div>

          <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded-xl text-white font-semibold">
            Restaurant Profile
          </button>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-4 gap-6 mt-10">

          <div className="bg-slate-900 rounded-2xl p-6">

            <DollarSign className="text-emerald-400 mb-4" />

            <p className="text-slate-400">
              Today's Revenue
            </p>

            <h2 className="text-3xl font-bold text-white mt-2">
              $18,450
            </h2>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6">

            <ShoppingBag className="text-emerald-400 mb-4" />

            <p className="text-slate-400">
              Orders
            </p>

            <h2 className="text-3xl font-bold text-white mt-2">
              67
            </h2>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6">

            <CalendarCheck className="text-emerald-400 mb-4" />

            <p className="text-slate-400">
              Reservations
            </p>

            <h2 className="text-3xl font-bold text-white mt-2">
              24
            </h2>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6">

            <Armchair className="text-emerald-400 mb-4" />

            <p className="text-slate-400">
              Available Tables
            </p>

            <h2 className="text-3xl font-bold text-white mt-2">
              18
            </h2>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-white mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-4 gap-5">

            <button className="bg-slate-900 rounded-2xl p-6 hover:bg-slate-800 transition">

              <UtensilsCrossed className="text-emerald-400 mb-3" />

              <p className="text-white font-semibold">
                Menu
              </p>

            </button>

            <button
                onClick={() => navigate("/staff-management")}
                className="bg-slate-900 rounded-2xl p-6 hover:bg-slate-800 transition"
                >
                <Users className="text-emerald-400 mb-3" />
                <p className="text-white font-semibold">
                    Staff
                </p>
            </button>

            <button className="bg-slate-900 rounded-2xl p-6 hover:bg-slate-800 transition">

              <ClipboardList className="text-emerald-400 mb-3" />

              <p className="text-white font-semibold">
                Orders
              </p>

            </button>

            <button className="bg-slate-900 rounded-2xl p-6 hover:bg-slate-800 transition">

              <Plus className="text-emerald-400 mb-3" />

              <p className="text-white font-semibold">
                Reservations
              </p>

            </button>

          </div>

        </div>

        {/* Bottom Grid */}

        <div className="grid grid-cols-3 gap-6 mt-10">

          {/* Today's Reservations */}

          <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-xl font-bold text-white mb-5">
              Today's Reservations
            </h2>

            <div className="space-y-4">

              <div className="bg-slate-800 rounded-xl p-4">

                <h3 className="text-white">
                  Rahul Sharma
                </h3>

                <p className="text-slate-400">
                  Table 5 • 7:30 PM
                </p>

              </div>

              <div className="bg-slate-800 rounded-xl p-4">

                <h3 className="text-white">
                  Priya
                </h3>

                <p className="text-slate-400">
                  Table 2 • 8:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Recent Orders */}

          <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-xl font-bold text-white mb-5">
              Recent Orders
            </h2>

            <div className="space-y-4">

              <div className="bg-slate-800 rounded-xl p-4">

                <h3 className="text-white">
                  Order #1023
                </h3>

                <p className="text-emerald-400">
                  Preparing
                </p>

              </div>

              <div className="bg-slate-800 rounded-xl p-4">

                <h3 className="text-white">
                  Order #1024
                </h3>

                <p className="text-blue-400">
                  Ready
                </p>

              </div>

            </div>

          </div>

          {/* AI Insights */}

          <div className="bg-slate-900 rounded-2xl p-6">

            <div className="flex items-center gap-2">

              <Sparkles className="text-yellow-400" />

              <h2 className="text-xl font-bold text-white">
                AI Insights
              </h2>

            </div>

            <div className="mt-5 space-y-4 text-slate-300">

              <p>
                🍗 Butter Chicken sales are up 18% this week.
              </p>

              <p>
                🕖 Peak customer hours: 7 PM – 9 PM.
              </p>

              <p>
                🧀 Cheese stock is running low.
              </p>

              <p>
                ⭐ 3 VIP customers booked tables today.
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}