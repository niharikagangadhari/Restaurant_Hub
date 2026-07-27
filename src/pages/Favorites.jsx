import { Heart, MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const navigate = useNavigate();

  const favorites = [
    {
      id: 1,
      name: "Paradise Biryani",
      cuisine: "Indian • Hyderabadi",
      rating: 4.8,
      location: "Hitech City",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
    {
      id: 2,
      name: "Barbeque Nation",
      cuisine: "Buffet",
      rating: 4.7,
      location: "Gachibowli",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-8 py-8">

      <h1 className="text-4xl font-bold text-white">
        My Favorites ❤️
      </h1>

      <p className="text-slate-400 mt-2">
        Restaurants you've saved for later.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

        {favorites.map((restaurant) => (

          <div
            key={restaurant.id}
            className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-lg hover:border-emerald-500 transition cursor-pointer"
            onClick={() => navigate(`/restaurant/${restaurant.id}`)}
          >

            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">

              <div className="flex justify-between">

                <h2 className="text-2xl font-bold text-white">
                  {restaurant.name}
                </h2>

                <Heart
                  className="fill-red-500 text-red-500"
                  size={22}
                />

              </div>

              <p className="text-slate-400 mt-2">
                {restaurant.cuisine}
              </p>

              <div className="flex items-center gap-2 mt-4 text-yellow-400">

                <Star size={18} fill="gold" />

                {restaurant.rating}

              </div>

              <div className="flex items-center gap-2 mt-3 text-slate-300">

                <MapPin size={18} />

                {restaurant.location}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}