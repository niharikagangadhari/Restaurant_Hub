import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

import {
  FaGoogle,
  FaMicrosoft,
} from "react-icons/fa";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
} from "lucide-react";

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    const role = data.user?.user_metadata?.role;

    if (!role) {
      alert("Your account role could not be identified.");
      return;
    }

    if (role === "customer") {
      navigate("/customer-dashboard");
    } else if (role === "restaurant") {
      navigate("/restaurant-info");
    } else {
      alert("Invalid account type.");
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-10">

      <h1 className="text-4xl font-bold text-white text-center">
        RestaurantHub
      </h1>

      <p className="text-center text-gray-400 mt-3 mb-8">
        Welcome back 👋
      </p>

      <form onSubmit={handleLogin} className="space-y-6">

        {/* Email */}

        <div>

          <label className="text-gray-300">
            Email
          </label>

          <div className="mt-2 flex items-center bg-slate-800 rounded-xl px-4">

            <Mail className="text-gray-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent w-full p-4 outline-none text-white"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>

        </div>

        {/* Password */}

        <div>

          <label className="text-gray-300">
            Password
          </label>

          <div className="mt-2 flex items-center bg-slate-800 rounded-xl px-4">

            <Lock className="text-gray-400" />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              className="bg-transparent w-full p-4 outline-none text-white"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <EyeOff className="text-gray-400" />
              ) : (
                <Eye className="text-gray-400" />
              )}
            </button>

          </div>

        </div>

        <div className="text-right">

          <Link
            to="/forgot-password"
            className="text-emerald-400 hover:text-emerald-300"
          >
            Forgot Password?
          </Link>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-500 hover:bg-emerald-600 transition rounded-xl py-4 text-white font-semibold"
        >
          {loading ? "Logging In..." : "Continue"}
        </button>

      </form>

      <div className="my-8 flex items-center">

        <div className="flex-grow border-t border-gray-700"></div>

        <span className="mx-4 text-gray-400 text-sm">
          OR CONTINUE WITH
        </span>

        <div className="flex-grow border-t border-gray-700"></div>

      </div>

      <div className="grid grid-cols-2 gap-4">

        <button className="border border-slate-700 rounded-xl py-3 text-white hover:border-emerald-500 transition flex items-center justify-center gap-3">

          <FaGoogle />

          Google

        </button>

        <button className="border border-slate-700 rounded-xl py-3 text-white hover:border-emerald-500 transition flex items-center justify-center gap-3">

          <FaMicrosoft />

          Microsoft

        </button>

      </div>

      <p className="text-center text-gray-400 mt-8">

        Don't have an account?{" "}

        <Link
          to="/signup"
          className="text-emerald-400"
        >
          Create Account
        </Link>

      </p>

    </div>
  );
}