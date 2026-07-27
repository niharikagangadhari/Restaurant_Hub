import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative">

      <Search
        className="absolute left-5 top-4 text-slate-500"
        size={22}
      />

      <input
        type="text"
        placeholder="Search restaurants, cuisines, dishes..."
        className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-4 pl-14 pr-5 text-white outline-none focus:border-emerald-500"
      />

    </div>
  );
}