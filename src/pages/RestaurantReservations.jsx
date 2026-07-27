import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import {
  getRestaurantReservations,
  updateReservationStatus,
  deleteReservation,
} from "../lib/restaurantReservations";

export default function RestaurantReservations() {
  const [reservations, setReservations] = useState([]);

  async function loadReservations() {
    const { data, error } =
      await getRestaurantReservations();

    if (error) {
      alert(error.message);
      return;
    }

    setReservations(data || []);
  }

  useEffect(() => {
  loadReservations();

  const channel = supabase
    .channel("restaurant-reservations")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "reservations",
      },
      () => {
        loadReservations();
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, []);

  async function changeStatus(id, status) {
    await updateReservationStatus(id, status);
    loadReservations();
  }

  async function remove(id) {
    await deleteReservation(id);
    loadReservations();
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <h1 className="text-4xl font-bold text-white">
        Reservations
      </h1>

      <div className="grid lg:grid-cols-2 gap-6 mt-10">

        {reservations.map((reservation) => (

          <div
            key={reservation.id}
            className="bg-slate-900 p-6 rounded-3xl border border-slate-700"
          >

            <h2 className="text-2xl text-white font-semibold">
              {reservation.customer_name}
            </h2>

            <p className="text-slate-400 mt-2">
              📞 {reservation.customer_phone}
            </p>

            <p className="text-slate-400">
              📅 {reservation.reservation_date}
            </p>

            <p className="text-slate-400">
              🕒 {reservation.reservation_time}
            </p>

            <p className="text-slate-400">
              👥 {reservation.guests} Guests
            </p>

            <p className="text-slate-400">
              📝 {reservation.special_request}
            </p>

            <div className="mt-4">

              <span className="bg-emerald-600 px-3 py-1 rounded-full text-white">
                {reservation.status}
              </span>

            </div>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() =>
                  changeStatus(
                    reservation.id,
                    "Accepted"
                  )
                }
                className="bg-green-600 px-4 py-2 rounded-xl text-white"
              >
                Accept
              </button>

              <button
                onClick={() =>
                  changeStatus(
                    reservation.id,
                    "Rejected"
                  )
                }
                className="bg-red-600 px-4 py-2 rounded-xl text-white"
              >
                Reject
              </button>

              <button
                onClick={() =>
                  changeStatus(
                    reservation.id,
                    "Completed"
                  )
                }
                className="bg-blue-600 px-4 py-2 rounded-xl text-white"
              >
                Complete
              </button>

              <button
                onClick={() =>
                  remove(reservation.id)
                }
                className="bg-slate-700 px-4 py-2 rounded-xl text-white"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}