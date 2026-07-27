import { Heart, MapPin, Star, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

  return (
    <div
      onClick={() => navigate(`/restaurant/${restaurant.id}`)}
      className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-800 cursor-pointer transition hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500"
    >
      {/* Restaurant Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover transition duration-500 hover:scale-110"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            setFavorite(!favorite);
          }}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full p-2"
        >
          <Heart
            size={20}
            className={
              favorite
                ? "fill-red-500 text-red-500"
                : "text-slate-700"
            }
          />
        </button>
      </div>

      {/* Restaurant Details */}

      <div className="p-5">

        <div className="flex justify-between items-center">

          <h2 className="text-xl font-bold text-white">
            {restaurant.name}
          </h2>

          <div className="flex items-center gap-1 bg-emerald-500 text-white px-2 py-1 rounded-lg text-sm">

            <Star size={14} fill="white" />

            {restaurant.rating}

          </div>

        </div>

        <p className="text-slate-400 mt-2">
          {restaurant.cuisine}
        </p>

        <div className="flex items-center gap-2 mt-3 text-slate-400 text-sm">

          <MapPin size={16} />

          {restaurant.location}

        </div>

        <div className="flex items-center gap-2 mt-2 text-green-400 text-sm">

          🟢 Open Now

        </div>

        <div className="flex items-center gap-2 mt-2 text-slate-300">

          <Users size={16} />

          {restaurant.tables} Tables Available

        </div>

        <div className="flex items-center gap-2 mt-2 text-slate-300">

          <Clock size={16} />

          {restaurant.time}

        </div>

      </div>

    </div>
  );
}