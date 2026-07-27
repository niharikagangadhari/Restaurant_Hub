import { ArrowLeft, Heart, MapPin, Star, Clock, Users } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function RestaurantDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Dummy data (will come from Supabase later)
  const restaurant = {
    id,
    name: "Paradise Biryani",
    rating: 4.8,
    cuisine: "Indian • Hyderabadi",
    address: "Hitech City, Hyderabad",
    tables: 42,
    timings: "10:00 AM - 11:00 PM",
    description:
      "Experience authentic Hyderabadi biryani with traditional spices, elegant interiors, and family-friendly dining.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  };

  const dishes = [
    "Chicken Dum Biryani",
    "Paneer Tikka",
    "Butter Chicken",
    "Veg Fried Rice",
    "Double Ka Meetha",
    "Falooda",
  ];

  const amenities = [
    "Free WiFi",
    "Parking",
    "Air Conditioning",
    "Family Seating",
    "Outdoor Seating",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero Image */}
      <div className="relative h-[400px]">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-black/60 p-3 rounded-full"
        >
          <ArrowLeft />
        </button>

      </div>

      <div className="max-w-6xl mx-auto px-8 py-10">

        <div className="flex justify-between items-start">

          <div>

            <h1 className="text-5xl font-bold">
              {restaurant.name}
            </h1>

            <p className="text-slate-400 mt-3 flex items-center gap-2">
              <MapPin size={18} />
              {restaurant.address}
            </p>

            <p className="text-slate-400 mt-2">
              {restaurant.cuisine}
            </p>

          </div>

          <button className="bg-red-500 p-3 rounded-full">
            <Heart />
          </button>

        </div>

        <div className="flex gap-8 mt-8 text-lg">

          <div className="flex items-center gap-2">
            <Star fill="gold" color="gold" />
            {restaurant.rating}
          </div>

          <div className="flex items-center gap-2">
            <Users />
            {restaurant.tables} Tables Available
          </div>

          <div className="flex items-center gap-2">
            <Clock />
            {restaurant.timings}
          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-3xl font-semibold mb-4">
            About
          </h2>

          <p className="text-slate-300 leading-8">
            {restaurant.description}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">

          <div>

            <h2 className="text-3xl font-semibold mb-5">
              Popular Dishes
            </h2>

            <div className="space-y-3">

              {dishes.map((dish) => (
                <div
                  key={dish}
                  className="bg-slate-900 rounded-xl p-4"
                >
                  🍽️ {dish}
                </div>
              ))}

            </div>

          </div>

          <div>

            <h2 className="text-3xl font-semibold mb-5">
              Amenities
            </h2>

            <div className="space-y-3">

              {amenities.map((item) => (
                <div
                  key={item}
                  className="bg-slate-900 rounded-xl p-4"
                >
                  ✅ {item}
                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="mt-16 flex justify-center">

          <button
            onClick={() => navigate(`/restaurant/${id}/reserve`)}
            className="bg-emerald-500 hover:bg-emerald-600 px-12 py-5 rounded-2xl text-xl font-bold transition"
          >
            Reserve Table
          </button>

        </div>

      </div>

    </div>
  );
}