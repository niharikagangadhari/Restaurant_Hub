export default function Button({
  children,
  variant = "primary",
  onClick,
}) {
  const styles = {
    primary:
      "bg-emerald-500 hover:bg-emerald-600 text-white",
    secondary:
      "border border-gray-600 hover:border-emerald-500 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}