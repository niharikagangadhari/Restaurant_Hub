import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import InputField from "./InputField";
import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";

export default function CustomerSignupForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check Terms
    if (!form.agree) {
      alert("Please accept the Terms & Privacy Policy.");
      return;
    }

    // Check Password Match
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Create User
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.fullName,
          role : "customer",
        },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    console.log(data);

    // Go to Success Page
    navigate("/account-created");
  };

  return (
    <div className="w-full max-w-lg bg-slate-900 rounded-3xl shadow-2xl p-10 border border-slate-700">
      <h1 className="text-4xl font-bold text-white text-center">
        RestaurantHub
      </h1>

      <p className="text-slate-400 text-center mt-2 mb-8">
        Create Your Customer Account
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        <InputField
          label="Full Name"
          name="fullName"
          placeholder="Enter your name"
          value={form.fullName}
          onChange={handleChange}
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />

        <PasswordInput
          label="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <PasswordStrength password={form.password} />

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <label className="flex items-center gap-3 text-slate-300">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="w-5 h-5"
          />
          I agree to the Terms & Privacy Policy
        </label>

        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 transition rounded-xl py-3 text-lg font-semibold text-white"
        >
          Create Customer Account
        </button>

        <div className="my-8 flex items-center">
          <div className="flex-1 border-t border-slate-700"></div>
          <span className="px-4 text-slate-400">OR</span>
          <div className="flex-1 border-t border-slate-700"></div>
        </div>

        <button
          type="button"
          className="w-full border border-slate-600 rounded-xl py-3 text-white hover:bg-slate-800 transition"
        >
          Continue with Google
        </button>

        <p className="text-center text-slate-400 mt-8">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="text-emerald-400 cursor-pointer ml-2"
          >
            Login
          </span>
        </p>

      </form>
    </div>
  );
}