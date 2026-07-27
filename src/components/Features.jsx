import {
  UtensilsCrossed,
  CalendarCheck,
  BrainCircuit,
  BarChart3,
  Languages,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: <UtensilsCrossed size={40} />,
    title: "Visual Digital Menu",
    desc: "Browse menus with high-quality images and real-time food availability.",
  },
  {
    icon: <CalendarCheck size={40} />,
    title: "Smart Table Booking",
    desc: "Reserve tables instantly with estimated waiting time and live availability.",
  },
  {
    icon: <BrainCircuit size={40} />,
    title: "AI Recommendations",
    desc: "Get personalized restaurant and food suggestions powered by AI.",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Restaurant Analytics",
    desc: "Owners receive detailed reports, sales insights, and customer trends.",
  },
  {
    icon: <Languages size={40} />,
    title: "Multi-language Menus",
    desc: "Customers can view menus in multiple languages effortlessly.",
  },
  {
    icon: <Bell size={40} />,
    title: "Live Notifications",
    desc: "Receive instant updates about reservations and food availability.",
  },
];

export default function Features() {
  return (
    <section className="bg-black text-white py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 hover:bg-green-500 hover:text-black transition duration-300"
            >
              <div className="mb-6">{feature.icon}</div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-300 hover:text-black">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}