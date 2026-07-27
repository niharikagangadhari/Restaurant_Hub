import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BookingSuccess() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-12 rounded-3xl text-center max-w-lg">

        <CheckCircle
          size={90}
          className="text-green-500 mx-auto"
        />

        <h1 className="text-4xl font-bold text-white mt-6">

          Reservation Confirmed!

        </h1>

        <p className="text-slate-400 mt-4">

          Your table has been successfully reserved.

        </p>

        <button
          onClick={() => navigate("/reservations")}
          className="mt-8 bg-emerald-500 px-8 py-4 rounded-xl text-white font-semibold hover:bg-emerald-600"
        >
          View My Reservations
        </button>

      </div>

    </div>

  );
}