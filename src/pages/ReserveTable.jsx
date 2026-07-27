import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addReservation } from "../lib/reservations";

export default function ReserveTable() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [booking, setBooking] = useState({
    date: "",
    time: "",
    guests: 2,
    occasion: "",
    request: "",
  });

  function handleChange(e) {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  }

  async function handleBooking(e) {
  e.preventDefault();

  const customerName = prompt("Enter your name");
  const customerPhone = prompt("Enter your phone number");

  const { error } = await addReservation({
    restaurant_id: id,
    customer_name: customerName,
    customer_phone: customerPhone,
    reservation_date: booking.date,
    reservation_time: booking.time,
    guests: Number(booking.guests),
    special_request:
      booking.request +
      (booking.occasion
        ? ` | Occasion: ${booking.occasion}`
        : ""),
  });

  if (error) {
    alert(error.message);
    return;
  }

  navigate("/booking-success");
}

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <form
        onSubmit={handleBooking}
        className="bg-slate-900 w-full max-w-2xl rounded-3xl p-10 border border-slate-800 shadow-xl"
      >

        <h1 className="text-4xl font-bold text-white text-center">
          Reserve Your Table
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Complete your reservation details.
        </p>

        <div className="space-y-6 mt-10">

          <div>
            <label className="text-white">Reservation Date</label>

            <input
              type="date"
              name="date"
              value={booking.date}
              onChange={handleChange}
              required
              className="w-full mt-2 bg-slate-800 rounded-xl p-4 text-white"
            />
          </div>

          <div>
            <label className="text-white">Time</label>

            <input
              type="time"
              name="time"
              value={booking.time}
              onChange={handleChange}
              required
              className="w-full mt-2 bg-slate-800 rounded-xl p-4 text-white"
            />
          </div>

          <div>
            <label className="text-white">Guests</label>

            <select
              name="guests"
              value={booking.guests}
              onChange={handleChange}
              className="w-full mt-2 bg-slate-800 rounded-xl p-4 text-white"
            >
              {[1,2,3,4,5,6,7,8,9,10].map((n)=>(
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-white">Occasion</label>

            <select
              name="occasion"
              value={booking.occasion}
              onChange={handleChange}
              className="w-full mt-2 bg-slate-800 rounded-xl p-4 text-white"
            >
              <option value="">Select Occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Business Meeting</option>
              <option>Casual Dining</option>
              <option>Family Gathering</option>
            </select>
          </div>

          <div>
            <label className="text-white">
              Special Request
            </label>

            <textarea
              rows="4"
              name="request"
              value={booking.request}
              onChange={handleChange}
              placeholder="Window seat, birthday cake, wheelchair access..."
              className="w-full mt-2 bg-slate-800 rounded-xl p-4 text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 rounded-xl py-4 text-xl font-bold text-white transition"
          >
            Confirm Reservation
          </button>

        </div>

      </form>

    </div>
  );
}