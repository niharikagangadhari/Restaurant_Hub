export default function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {

  return (

    <div>

      <label className="block text-slate-300 mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white outline-none focus:border-emerald-500"
      />

    </div>

  );

}