import RestaurantHeader from "../components/restaurants/RestaurantHeader";
import SearchBar from "../components/restaurants/SearchBar";
import CategoryFilter from "../components/restaurants/CategoryFilter";
import RestaurantGrid from "../components/restaurants/RestaurantGrid";

export default function Restaurants() {
  return (
    <div className="min-h-screen bg-slate-950 px-10 py-8">

      <RestaurantHeader />

      <SearchBar />

      <CategoryFilter />

      <RestaurantGrid />

    </div>
  );
}