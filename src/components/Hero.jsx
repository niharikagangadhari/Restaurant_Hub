export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">

      <div className="text-center max-w-5xl px-6">

        <p className="text-green-400 font-semibold tracking-widest uppercase mb-5">
          AI Powered Restaurant Management
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">

          Manage Restaurants
          <br />

          Smarter with AI

        </h1>

        <p className="text-gray-400 mt-8 text-xl leading-relaxed">

          Discover restaurants, reserve tables,
          explore visual menus,
          monitor analytics,
          and empower restaurant owners with
          AI-driven business insights.

        </p>

        <div className="mt-10 flex justify-center gap-5">

          <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold">

            Get Started

          </button>

          <button className="border border-gray-600 text-white hover:border-green-500 hover:text-green-400 px-8 py-4 rounded-xl">

            Explore Restaurants

          </button>

        </div>

      </div>

    </section>
  );
}