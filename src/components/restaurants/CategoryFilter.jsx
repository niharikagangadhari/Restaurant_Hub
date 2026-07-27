const categories = [
  "Indian",
  "Chinese",
  "Cafe",
  "Fast Food",
  "Italian",
  "Buffet",
];

export default function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-4 mt-8">

      {categories.map((category) => (
        <button
          key={category}
          className="px-5 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition"
        >
          {category}
        </button>
      ))}

    </div>
  );
}