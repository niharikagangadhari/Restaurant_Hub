import { useNavigate } from "react-router-dom";
import { User, Store } from "lucide-react";

export default function RoleSelection() {

  const navigate = useNavigate();

  return (

    <div className="w-full max-w-5xl">

      <h1 className="text-5xl font-bold text-center text-white">
        Create Your Account
      </h1>

      <p className="text-center text-gray-400 mt-4 mb-14 text-lg">
        Choose how you'd like to use RestaurantHub
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Customer */}

        <div
          onClick={() => navigate("/signup/customer")}
          className="cursor-pointer rounded-3xl border border-slate-700 bg-slate-900 p-10 hover:border-emerald-500 hover:-translate-y-2 transition-all duration-300"
        >

          <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center">

            <User
              size={40}
              className="text-emerald-400"
            />

          </div>

          <h2 className="text-3xl font-bold text-white mt-8">
            Customer
          </h2>

          <p className="text-gray-400 mt-4">

            Discover restaurants, reserve tables,
            receive AI food recommendations,
            and manage all your bookings.

          </p>

          <button className="mt-10 bg-emerald-500 px-8 py-4 rounded-xl text-white font-semibold hover:bg-emerald-600 transition">

            Continue

          </button>

        </div>

        {/* Restaurant */}

        <div
          onClick={() => navigate("/signup/restaurant")}
          className="cursor-pointer rounded-3xl border border-slate-700 bg-slate-900 p-10 hover:border-emerald-500 hover:-translate-y-2 transition-all duration-300"
        >

          <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center">

            <Store
              size={40}
              className="text-blue-400"
            />

          </div>

          <h2 className="text-3xl font-bold text-white mt-8">
            Restaurant
          </h2>

          <p className="text-gray-400 mt-4">

            Manage reservations, menus,
            analytics, AI insights,
            inventory and customer engagement.

          </p>

          <button className="mt-10 bg-blue-500 px-8 py-4 rounded-xl text-white font-semibold hover:bg-blue-600 transition">

            Continue

          </button>

        </div>

      </div>

      <p className="text-center mt-14 text-gray-400">

        Already have an account?

        <button
          onClick={() => navigate("/login")}
          className="text-emerald-400 ml-2 hover:underline"
        >
          Login
        </button>

      </p>

    </div>

  );

}