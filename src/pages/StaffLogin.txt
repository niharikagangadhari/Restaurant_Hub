import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginStaff } from "../lib/staffAuth";

export default function StaffLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {

    e.preventDefault();

    const { data, error } = await loginStaff(
      email,
      password
    );

    if (error) {
      alert("Invalid Email or Password");
      return;
    }

    switch (data.role) {

      case "Manager":
        navigate("/manager-dashboard");
        break;

      case "Chef":
        navigate("/chef-dashboard");
        break;

      case "Waiter":
        navigate("/waiter-dashboard");
        break;

      case "Cashier":
        navigate("/cashier-dashboard");
        break;

      default:
        navigate("/staff-dashboard");

    }

  }

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="bg-slate-900 p-10 rounded-3xl w-[420px]"
      >

        <h1 className="text-3xl text-white font-bold mb-8">

          Staff Login

        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full mb-4 bg-slate-800 p-4 rounded-xl text-white"
        />

        <input
          type="password"
          placeholder="Temporary Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full mb-6 bg-slate-800 p-4 rounded-xl text-white"
        />

        <button
          className="w-full bg-emerald-500 py-4 rounded-xl text-white font-semibold"
        >

          Login

        </button>

      </form>

    </div>

  );

}