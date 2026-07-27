import {
  LayoutDashboard,
  UtensilsCrossed,
  Users,
  ClipboardList,
  CalendarDays,
  Package,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function RestaurantSidebar() {
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  const menuItems = [
    {
      name: "Dashboard",
      path: "/restaurant-dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Menu",
      path: "/menu-setup",
      icon: <UtensilsCrossed size={20} />,
    },
    {
      name: "Staff",
      path: "/staff-management",
      icon: <Users size={20} />,
    },
    {
      name: "Orders",
      path: "/restaurant-orders",
      icon: <ClipboardList size={20} />,
    },
    {
      name: "Reservations",
      path: "/restaurant-reservations",
      icon: <CalendarDays size={20} />,
    },
    {
      name: "Inventory",
      path: "/inventory",
      icon: <Package size={20} />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Settings",
      path: "/restaurant-settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col p-6">

      <div>

        <h1 className="text-3xl font-bold text-emerald-400">
          RestaurantHub
        </h1>

        <p className="text-slate-400 mt-2">
          Restaurant Portal
        </p>

      </div>

      <nav className="mt-10 flex-1 space-y-2">

        {menuItems.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-xl transition ${
                isActive
                  ? "bg-emerald-500 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.icon}

            {item.name}

          </NavLink>

        ))}

      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-4 text-red-400 hover:text-red-300 mt-8"
      >
        <LogOut size={20} />

        Logout

      </button>

    </aside>
  );
}