import {
  Home,
  UtensilsCrossed,
  CalendarDays,
  Heart,
  Bot,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();
    if (error) {
        alert(error.message);
        return;
    }
    navigate("/login");
    };
  const menu = [
    {
      name: "Dashboard",
      icon: <Home size={20} />,
      path: "/customer-dashboard",
    },
    {
      name: "Restaurants",
      icon: <UtensilsCrossed size={20} />,
      path: "/restaurants",
    },
    {
      name: "Reservations",
      icon: <CalendarDays size={20} />,
      path: "/reservations",
    },
    {
      name: "Favorites",
      icon: <Heart size={20} />,
      path: "/favorites",
    },
    {
      name: "AI Assistant",
      icon: <Bot size={20} />,
      path: "/assistant",
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/settings",
    },
  ];
   return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col">

      <h1 className="text-3xl font-bold text-emerald-400">
        RestaurantHub
      </h1>

      <p className="text-slate-400 mt-2">
        Customer Portal
      </p>

      <div className="mt-12 space-y-3">

        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 w-full px-5 py-4 rounded-xl transition ${
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

      </div>

      <button
  onClick={handleLogout}
  className="mt-auto flex items-center gap-3 text-red-400 hover:text-red-300"
>
        <LogOut size={20} />
        Logout
      </button>

    </aside>
  );
}