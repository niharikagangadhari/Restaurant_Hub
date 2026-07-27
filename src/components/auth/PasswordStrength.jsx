export default function PasswordStrength({ password }) {

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
  ];

  const labels = [
    "Weak",
    "Fair",
    "Good",
    "Strong",
  ];

  return (

    <div>

      <p className="text-slate-300 mb-2">
        Password Strength
      </p>

      <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

        <div
          className={`h-full ${colors[Math.max(0, strength - 1)]}`}
          style={{ width: `${strength * 25}%` }}
        ></div>

      </div>

      <p className="text-slate-400 mt-2">
        {strength === 0 ? "Too Short" : labels[strength - 1]}
      </p>

    </div>

  );

}