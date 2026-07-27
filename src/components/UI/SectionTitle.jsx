export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="text-center mb-16">
      <p className="text-emerald-400 uppercase tracking-widest mb-3">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}