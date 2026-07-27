import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FoodPreferences() {
  const navigate = useNavigate();

  const cuisines = [
    "Indian",
    "South Indian",
    "North Indian",
    "Chinese",
    "Italian",
    "Mexican",
    "Japanese",
    "Thai",
    "Korean",
    "Continental",
    "Fast Food",
    "Desserts",
  ];

  const diets = [
    "Vegetarian",
    "Vegan",
    "Jain",
    "Halal",
    "Eggetarian",
    "Non-Vegetarian",
  ];

  const [selectedCuisine, setSelectedCuisine] = useState([]);
  const [selectedDiet, setSelectedDiet] = useState([]);

  const toggleCuisine = (item) => {
    setSelectedCuisine((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const toggleDiet = (item) => {
    setSelectedDiet((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const handleContinue = () => {
    // Later:
    // Save selectedCuisine & selectedDiet to Supabase
    console.log("Selected Cuisines:", selectedCuisine);
    console.log("Selected Diet:", selectedDiet);

    navigate("/customer-dashboard");
  };

  const handleSkip = () => {
    navigate("/customer-dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">
      <div className="bg-slate-900 w-full max-w-4xl rounded-3xl p-10 border border-slate-700 shadow-xl">

        <h1 className="text-4xl font-bold text-white text-center">
          Tell us what you love 🍽️
        </h1>

        <p className="text-slate-400 text-center mt-3">
          This helps us recommend restaurants and dishes you'll enjoy.
        </p>

        {/* Favorite Cuisines */}
        <div className="mt-10">
          <h2 className="text-white text-2xl font-semibold mb-5">
            Favorite Cuisines
          </h2>

          <div className="flex flex-wrap gap-4">
            {cuisines.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => toggleCuisine(item)}
                className={`px-5 py-3 rounded-full border transition ${
                  selectedCuisine.includes(item)
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "border-slate-600 text-slate-300 hover:border-emerald-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Dietary Preference */}
        <div className="mt-10">
          <h2 className="text-white text-2xl font-semibold mb-5">
            Dietary Preference
          </h2>

          <div className="flex flex-wrap gap-4">
            {diets.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => toggleDiet(item)}
                className={`px-5 py-3 rounded-full border transition ${
                  selectedDiet.includes(item)
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "border-slate-600 text-slate-300 hover:border-emerald-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-12">
          <button
            type="button"
            onClick={handleSkip}
            className="px-8 py-3 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 transition"
          >
            Skip
          </button>

          <button
            type="button"
            onClick={handleContinue}
            className="px-8 py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}