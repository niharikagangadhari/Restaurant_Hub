import { useState } from "react";

export default function PasswordInput({
  label,
  name,
  value,
  onChange,
}) {

  const [show, setShow] = useState(false);

  return (

    <div>

      <label className="block text-slate-300 mb-2">
        {label}
      </label>

      <div className="relative">

        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white outline-none focus:border-emerald-500"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-3 text-slate-400"
        >
          {show ? "Hide" : "Show"}
        </button>

      </div>

    </div>

  );

}