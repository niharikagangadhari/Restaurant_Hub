export default function Card({ children }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500 hover:-translate-y-2 transition-all duration-300">
      {children}
    </div>
  );
}