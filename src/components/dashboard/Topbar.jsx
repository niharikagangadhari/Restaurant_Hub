import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center">

      <div>
        <h1 className="text-white text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-400">
          Welcome back!
        </p>
      </div>

      <div className="flex items-center gap-5">

        <Bell
          className="text-slate-300 cursor-pointer"
          size={24}
        />

        <img
          src="https://ui-avatars.com/api/?name=Niharika"
          alt="profile"
          className="w-11 h-11 rounded-full"
        />

      </div>

    </div>
  );
}