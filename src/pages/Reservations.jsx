import { useEffect, useState } from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Plus,
} from "lucide-react";

import {
  getReservations,
  cancelReservation,
} from "../lib/reservations";

import { useNavigate } from "react-router-dom";

export default function Reservations() {
  const navigate = useNavigate();

const [reservations, setReservations] = useState([]);

async function loadReservations() {
  const { data, error } = await getReservations();

  if (error) {
    alert(error.message);
    return;
  }

  setReservations(data || []);
}

useEffect(() => {
  loadReservations();
}, []);

async function cancel(id) {
  const { error } = await cancelReservation(id);

  if (error) {
    alert(error.message);
    return;
  }

  loadReservations();
}
  return (
    <div className="min-h-screen bg-slate-950 px-8 py-8">

      <h1 className="text-4xl font-bold text-white">
        My Reservations
      </h1>
      <div className="flex justify-between items-center mt-5">

  <button
    onClick={() => navigate("/restaurants")}
    className="flex items-center gap-2 bg-emerald-500 px-5 py-3 rounded-xl text-white"
  >
    <Plus size={18} />
    Book New Reservation
  </button>

</div>

      <p className="text-slate-400 mt-2">
        Manage all your upcoming reservations.
      </p>

      <div className="mt-10 space-y-8">

        {reservations.map((item) => (

          <div
            key={item.id}
            className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl md:flex"
          >

            <img
              src={item.image}
              alt={Restaurant}
              className="md:w-80 h-64 object-cover"
            />

            <div className="flex-1 p-8">

              <div className="flex justify-between items-center">

                <h2 className="text-3xl font-bold text-white">
                  {Restaurant}
                </h2>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    item.status === "Confirmed"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {item.status}
                </span>

              </div>

              <div className="mt-6 space-y-4 text-slate-300">

                <div className="flex items-center gap-3">
                  <MapPin />
                  {item.address}
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays />
                  {item.reservation_date}
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 />
                  {item.reservation_time}
                </div>

                <div className="flex items-center gap-3">
                  <Users />
                  {item.guests} Guests
                </div>

              </div>

              <div className="flex gap-4 mt-8">

                <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl text-white font-semibold transition">
                  View Details
                </button>

                <button
                    onClick={() => cancel(item.id)}
                    className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-6 py-3 rounded-xl"
                  >
                    Cancel Reservation
              </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}